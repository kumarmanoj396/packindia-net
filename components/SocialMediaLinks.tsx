const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sales.packindia?stkn=MXI4bHZqZTNnMXRuaQ==",
    placement: "instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Ep4w7nhkR/",
    placement: "facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.8l.45-3H14V8.2c0-.88.25-1.48 1.55-1.48H17V4.04c-.35-.05-1.17-.14-2.25-.14-2.23 0-3.75 1.36-3.75 3.87V10H8.5v3H11v8h3Z" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtu.be/fsUTmogXcDI?si=-R_aOk0khMoTaTE1",
    placement: "youtube",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.4 5.85 12 5.85 12 5.85s-5.4 0-7.1.45A2.7 2.7 0 0 0 3 8.2 28 28 0 0 0 2.55 12 28 28 0 0 0 3 15.8a2.7 2.7 0 0 0 1.9 1.9c1.7.45 7.1.45 7.1.45s5.4 0 7.1-.45a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .45-3.8A28 28 0 0 0 21 8.2Z" fill="currentColor" stroke="none" /><path d="m10 15.2 4.6-3.2L10 8.8v6.4Z" fill="#fff" stroke="none" /></svg>
    ),
  },
];

export default function SocialMediaLinks({ placement }: { placement: "footer" | "mobile" }) {
  return (
    <div className="social-media-icons">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          className={`social-icon social-icon-${social.placement}`}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit Pack India on ${social.label}`}
          title={social.label}
          data-analytics-event="social_visit"
          data-placement={`${placement}_${social.placement}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
