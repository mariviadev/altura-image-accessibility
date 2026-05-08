import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 py-10 bg-black/80">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="font-['Space_Grotesk'] text-white uppercase font-bold tracking-tight text-[16px] leading-none">
            ALTURA
          </div>
          <p className="text-xs font-display uppercase tracking-widest text-white/40">
            Hosted VLM analysis. No uploads are intentionally stored by Altura.
          </p>
        </div>
        <div className="flex gap-8 text-white/40 text-xs font-display uppercase tracking-widest">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
