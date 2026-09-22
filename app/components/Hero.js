import Image from "next/image";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section id="hero" className="pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-5">
        <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-muted uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Open 5:00 AM – 11:30 PM · Closed Sundays
        </span>

        <h1 className="font-display uppercase text-4xl sm:text-6xl leading-[1.05] text-text">
          Train Hard.
          <br />
          <span className="text-accent">Transform</span> Today.
        </h1>

        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
          BodyTech Gym & Fitness Center, Gulgasht Colony, Multan — certified coaching,
          clean modern equipment, and a training environment built for real progress.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accentDark text-white font-display uppercase tracking-wide text-sm px-7 py-3.5 transition-colors"
          >
            Book a Free Trial
          </a>
          <a
            href="#plans"
            className="inline-flex items-center justify-center rounded-full border border-border text-text hover:bg-surface font-display uppercase tracking-wide text-sm px-7 py-3.5 transition-colors"
          >
            Membership Plans
          </a>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] mt-10 overflow-hidden">
        <Image
          src="/images/hero-main.jpg"
          alt="Members training on the gym floor at BodyTech Gym Multan"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
      </div>

      <Ticker />
    </section>
  );
}
