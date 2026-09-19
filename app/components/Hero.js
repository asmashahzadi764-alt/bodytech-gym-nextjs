import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-lg bg-surface text-xs text-muted uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Open 5:00 AM – 11:30 PM · Closed Sundays
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-text">
            Train with purpose, in Multan&apos;s most disciplined gym
          </h1>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
            BodyTech Gym & Fitness Center, Gulgasht Colony, Multan — certified coaching,
            clean modern equipment, and a training environment built for real progress.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accentDark text-base font-semibold px-6 py-3 transition-colors"
            >
              Book a Free Trial
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-lg border border-border text-text hover:bg-surface px-6 py-3 transition-colors"
            >
              Explore Membership Plans
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-border">
          <Image
            src="/images/hero-main.jpg"
            alt="Members training on the gym floor at BodyTech Gym Multan"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
