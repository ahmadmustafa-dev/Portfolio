"use client";

const EMAIL = "ahmadmustafa.dev@gmail.com";

export default function EmailCompose({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
