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
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7.7 7 4.3-7 4.3V7.7Z" fill="#fff" stroke="none" /></svg>
    ),
  },
];

export default function SocialMediaLinks({ placement }: { placement: "footer" | "mobile" | "home" }) {
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
