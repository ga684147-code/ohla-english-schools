import { ContactBanner } from "@/components/layout/ContactBanner";
export function BlogCTA({ href }: { href?: string }) {
  return <ContactBanner href={href} titleId="blog-contact-title" />;
}
