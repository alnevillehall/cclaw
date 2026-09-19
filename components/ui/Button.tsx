import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-[var(--font-inter)] font-semibold tracking-[0.06em] uppercase text-[13px] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3";

  const sizes: Record<string, string> = {
    sm: "px-5 py-2.5",
    md: "px-7 py-3.5",
    lg: "px-9 py-4",
  };

  const variants: Record<string, string> = {
    primary:
      "bg-[#B8996A] text-white hover:bg-[#9A7D52] rounded-[2px]",
    secondary:
      "bg-transparent border border-[#B8996A] text-[#B8996A] hover:bg-[#B8996A] hover:text-white rounded-[2px]",
    ghost:
      "bg-transparent text-[#B8996A] hover:text-[#9A7D52] underline-offset-4 hover:underline px-0 tracking-normal normal-case text-[14px] font-medium",
    "outline-light":
      "bg-transparent border border-white text-white hover:bg-white hover:text-[#0F1F3D] rounded-[2px]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (Tag === "a" || href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
