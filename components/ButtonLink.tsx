import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline";
  className?: string;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label">;

const variantClassName = {
  primary: "button-primary",
  dark: "button-dark",
  outline: "button-outline",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`${variantClassName[variant]} ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
