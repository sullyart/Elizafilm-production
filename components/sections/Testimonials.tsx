"use client";
import { useState } from "react";
import { testimonials, partners } from "@/lib/data";
import { Section, SectionHeading } from "@/components/ui/ui";
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <Section>
      <SectionHeading
        label="Eliza Film Production"
        title="What our clients say"
      />
      <figure className="mx-auto mt-8 max-w-2xl text-center">
        <blockquote className="text-sm italic text-mute" aria-live="polite">
          “{t.quote}”
        </blockquote>
        <figcaption className="mt-4 text-xs">
          <strong>{t.name}</strong>
          <br />
          <span className="text-mute">{t.role}</span>
        </figcaption>
      </figure>
      <div className="mt-4 flex justify-center">
        {testimonials.map((_, n) => (
          <button
            key={n}
            aria-label={`Show testimonial ${n + 1}`}
            aria-current={n === i}
            onClick={() => setI(n)}
            className="grid size-11 place-items-center"
          >
            <span
              className={`size-2.5 rounded-full ${n === i ? "bg-brand" : "bg-neutral-300"}`}
            />
          </button>
        ))}
      </div>
    </Section>
  );
}
export function Partners() {
  return (
    <Section gray className="!py-10">
      <SectionHeading title="Trusted by creative teams" />
      <ul className="mt-6 grid grid-cols-2 items-center gap-4 text-center sm:grid-cols-4 lg:grid-cols-7">
        {partners.map((p) => (
          <li key={p.name} className="flex items-center justify-center">
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              loading="lazy"
              className="h-10 w-full max-w-36 object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
