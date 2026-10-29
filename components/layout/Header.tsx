"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className="text-lg font-light tracking-[.3em]"
          onClick={() => setOpen(false)}
        >
          {site.short}
          <span className="block text-[8px] tracking-[.5em]">PRODUCTION</span>
        </a>

        <nav aria-label="Main" className="hidden gap-6 text-xs md:flex">
          {nav.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="py-2 opacity-90 transition-opacity hover:opacity-100"
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          className="grid size-11 place-items-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-white/10 bg-black/95 px-5 pb-4 md:hidden"
        >
          {nav.map(([l, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm transition-colors hover:text-white/70"
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
