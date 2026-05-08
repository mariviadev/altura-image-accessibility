"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/how-it-works", label: "How it Works" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-[1200px] mx-auto h-24 px-8 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Altura home"
          className="font-['Space_Grotesk'] text-white uppercase font-bold tracking-tight text-[22px] sm:text-[24px] md:text-[26px] leading-none"
        >
          ALTURA
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-sm uppercase tracking-tight transition-colors ${
                pathname === l.href
                  ? "text-white border-b border-white/60 pb-1"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#tool"
          className="btn-primary"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
