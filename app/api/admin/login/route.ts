import { NextResponse } from "next/server";
import {
  adminSessionCookie,
  createSession,
  validCredentials,
} from "../../../../lib/admin";

export async function POST(request: Request) {
  const { email = "", password = "" } = await request.json().catch(() => ({}));
  if (!validCredentials(String(email), String(password))) {
    return NextResponse.json(
      { error: "Incorrect email or password." },
      { status: 401 },
    );
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminSessionCookie, createSession(String(email)), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return response;
}
