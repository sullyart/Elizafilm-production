import { Button } from "@/components/ui/ui";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-band-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 pb-16">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[.25em] text-white/80">
            Creative Production • Live Performance
          </p>

          <h1 className="mt-4 text-4xl font-light uppercase leading-[1.12] tracking-wide sm:text-5xl md:text-6xl">
            Video production that moves you
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
            Video production, live music recording and creative storytelling,
            shot and finished by one team under one roof.
          </p>

          <Button href="#work" className="mt-8">
            EXPLORE OUR WORK
          </Button>
        </div>
      </div>
    </section>
  );
}
