import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
export function Button({
  children,
  href,
  variant = "red",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "red" | "blue" | "light" | "outline" | "whatsapp";
  className?: string;
}) {
  return (
    <Link className={`button button--${variant} ${className}`} href={href}>
      {children}
      <ChevronRight size={16} strokeWidth={1.5} aria-hidden="true" />
    </Link>
  );
}
