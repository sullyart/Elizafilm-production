import { Button } from "@/components/ui/ui";
export default function Hero() {
  return <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden bg-neutral-900 text-white">
    {/* Supply a licensed video at /public/videos/hero-band.mp4 and a poster at /public/images/hero-band-poster.jpg */}
    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-band-poster.jpg" aria-hidden="true">
      <source src="/videos/hero-band.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
    <div className="relative mx-auto w-full max-w-6xl px-5 pt-16">
      <div className="max-w-xl">
        <p className="text-[11px] font-medium uppercase tracking-[.25em] text-white/80">Creative Production • Live Performance</p>
        <h1 className="mt-3 text-4xl font-light uppercase leading-tight tracking-wide sm:text-5xl">Video production that moves you</h1>
        <p className="mt-4 text-sm text-white/85">Video production, live music recording and creative storytelling, shot and finished by one team under one roof.</p>
        <Button href="#work" className="mt-6">EXPLORE OUR WORK</Button>
      </div>
    </div>
  </section>;
}
