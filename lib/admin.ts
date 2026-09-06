import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const sessionCookie = "packindia-admin";

function required(name: string) {
  return process.env[name] || "";
}

function signature(email: string) {
  const secret = required("ADMIN_SESSION_SECRET");
  return secret ? createHmac("sha256", secret).update(`packindia:${email}`).digest("base64url") : "";
}

export function validCredentials(email: string, password: string) {
  const adminEmail = required("ADMIN_EMAIL").toLowerCase();
  const adminPassword = required("ADMIN_PASSWORD");
  if (!adminEmail || !adminPassword) return false;
  const sameEmail = email.trim().toLowerCase() === adminEmail;
  const candidate = Buffer.from(password);
  const expected = Buffer.from(adminPassword);
  return sameEmail && candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

export function createSession(email: string) {
  return signature(email.trim().toLowerCase());
}

export async function isAdmin() {
  const email = required("ADMIN_EMAIL").toLowerCase();
  const token = (await cookies()).get(sessionCookie)?.value;
  const expected = signature(email);
  if (!email || !token || !expected) return false;
  const candidate = Buffer.from(token);
  const valid = Buffer.from(expected);
  return candidate.length === valid.length && timingSafeEqual(candidate, valid);
}

export const adminSessionCookie = sessionCookie;
