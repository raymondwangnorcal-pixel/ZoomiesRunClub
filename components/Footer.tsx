import Link from "next/link";
import {
  INSTAGRAM_URL,
  PIE_URL,
  SHOPIFY_URL,
  SUBSTACK_URL,
} from "@/lib/links";
import { PawPrint } from "./Decorative";

const footerLinks = [
  { label: "Pie events", href: PIE_URL },
  { label: "Substack updates", href: SUBSTACK_URL },
  { label: "Shopify merch", href: SHOPIFY_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
];

export function Footer() {
  return (
    <footer className="bg-zoomies-charcoal text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-zoomies-gold text-zoomies-charcoal">
              <PawPrint className="size-7" />
            </span>
            <p className="text-3xl font-black">Get your zoomies on.</p>
          </div>
          <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-white/68">
            Presence &gt; pace. Runs on Pie, updates on Substack, merch on
            Shopify.
          </p>
          <p className="mt-4 text-sm font-bold text-white/58">
            Contact placeholder: hello@zoomiesrunclub.nyc
          </p>
        </div>

        <nav className="grid gap-3 sm:grid-cols-2" aria-label="Footer links">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-extrabold text-white/80 hover:border-zoomies-gold hover:text-zoomies-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
