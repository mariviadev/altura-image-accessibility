"use client";
import { useState } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="glass-card razor-edge rounded-lg overflow-hidden">
      <button
        className="w-full px-8 py-6 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <h4 className="font-h3 text-lg">{title}</h4>
        <span className="material-symbols-outlined text-white/40">
          {open ? "expand_less" : "expand_more"}
        </span>
      </button>
      <div
        className={`${open ? "block" : "hidden"} px-8 pb-6 text-on-surface-variant font-body-md border-t border-white/5 pt-4`}
      >
        {children}
      </div>
    </div>
  );
}
