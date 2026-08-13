"use client";

const EMAIL = "ahmadmustafa.dev@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

export default function EmailCompose({
  className = "",
  align = "right",
  children,
}: {
  className?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}) {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    const currentUrl = window.location.href;
    window.location.href = `mailto:${EMAIL}`;

    window.setTimeout(() => {
      if (window.location.href === currentUrl) {
        window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
      }
    }, 1200);
  };

  const alignClass =
    align === "left" ? "justify-start" : align === "center" ? "justify-center" : "justify-end";

  return (
    <button type="button" onClick={handleClick} className={`${className} ${alignClass}`}>
      {children}
    </button>
  );
}
