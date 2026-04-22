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
      <div className="max-w-[1280px] mx-auto h-20 px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter font-display text-white"
        >
          Altura
        </Link>
        <div className="hidden md:flex items-center gap-8">
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
          href="/studio"
          className="bg-white text-black px-6 py-2 font-display text-sm uppercase tracking-widest pressed-metal hover:opacity-90 active:scale-95 transition-all"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
