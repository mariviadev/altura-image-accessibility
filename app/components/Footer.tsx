export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 py-10 bg-black/80">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-lg font-bold font-display text-white tracking-tighter">
            Altura
          </div>
          <p className="text-xs font-display uppercase tracking-widest text-white/40">
            All processing happens in your browser. No data is stored.
          </p>
        </div>
        <div className="flex gap-8 text-white/40 text-xs font-display uppercase tracking-widest">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
