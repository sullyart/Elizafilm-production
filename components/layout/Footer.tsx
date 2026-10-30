import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import { site, nav, services } from "@/lib/data";
import { mapSrc } from "@/lib/map";
const icons = [Instagram, Youtube, Facebook];
export default function Footer() {
  const h = "mb-3 text-[11px] font-semibold uppercase tracking-widest";
  const l = "block py-1 text-xs text-white/60 hover:text-white";
  return (
    <footer className="bg-foot text-white">
      <div className="mx-auto max-w-6xl px-5 pt-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-light tracking-[.3em]">{site.short}</p>
            <p className="mt-3 text-xs text-white/60">
              {site.tagline} Sound stages, a control room and a white cyc wall,
              under one roof.
            </p>
          </div>
          <div>
            <h3 className={h}>Navigate</h3>
            {nav.map(([t, u]) => (
              <a key={u} href={u} className={l}>
                {t}
              </a>
            ))}
          </div>
          <div>
            <h3 className={h}>Services</h3>
            {services.map((s) => (
              <a key={s.title} href="#services" className={l}>
                {s.title}
              </a>
            ))}
            <a href="#studio" className={l}>
              Studio rental
            </a>
          </div>
          <div>
            <h3 className={h}>Contact</h3>
            <p className="flex gap-2 py-1 text-xs text-white/60">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              {site.address}
            </p>
            <a className={`${l} flex gap-2`} href={`mailto:${site.email}`}>
              <Mail size={14} className="mt-1" />
              {site.email}
            </a>
            <iframe
              title="Studio location"
              src={mapSrc(0.04)}
              loading="lazy"
              className="mt-2 h-24 w-full border-0 grayscale"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 py-5 text-[11px] text-white/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
