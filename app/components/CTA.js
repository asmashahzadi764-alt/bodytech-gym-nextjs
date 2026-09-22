import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <Image
        src="/images/cta-banner.jpg"
        alt="Member training hard at BodyTech Gym Multan"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-base/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="font-display uppercase text-4xl sm:text-5xl leading-tight text-text">
          Ready to join the
          <br />
          <span className="text-accent">BodyTech</span> family?
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accentDark text-white font-display uppercase tracking-wide text-sm px-8 py-4 transition-colors"
        >
          Book a Free Trial
        </a>
      </div>
    </section>
  );
}
