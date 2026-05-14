import Link from "next/link";
import { PIE_URL } from "@/lib/links";
import { ButtonLink } from "./ButtonLink";
import { PawPrint } from "./Decorative";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Runs", href: "#runs" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Merch", href: "#merch" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link href="#home" className="group flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-zoomies-charcoal text-zoomies-gold shadow-sticker transition-transform duration-200 group-hover:-rotate-6">
            <PawPrint className="size-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black">Zoomies</span>
            <span className="block text-xs font-bold uppercase tracking-normal text-zoomies-gray">
              Run Club NYC
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-zoomies-charcoal/75 hover:text-zoomies-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:block">
          <ButtonLink href={PIE_URL} variant="primary" className="px-5">
            Join next run
          </ButtonLink>
        </div>

        <Link
          href={PIE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-zoomies-gold px-4 text-sm font-extrabold text-zoomies-charcoal shadow-sticker sm:hidden"
        >
          Join
        </Link>
      </nav>
    </header>
  );
}
