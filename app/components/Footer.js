export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
          <span className="font-display text-lg text-text">
            BODY<span className="text-accent">TECH</span>
          </span>
          <p className="text-muted text-xs leading-relaxed mt-1">
            Multan&apos;s disciplined training floor — strength, conditioning,
            and coaching that actually works.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-text font-display uppercase text-xs tracking-widest mb-1">
            Quick Links
          </p>
          <a href="#about" className="text-muted hover:text-accent transition-colors">About</a>
          <a href="#plans" className="text-muted hover:text-accent transition-colors">Plans</a>
          <a href="#contact" className="text-muted hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-text font-display uppercase text-xs tracking-widest mb-1">
            Classes
          </p>
          <a href="#trainers" className="text-muted hover:text-accent transition-colors">Strength Training</a>
          <a href="#trainers" className="text-muted hover:text-accent transition-colors">HIIT & Conditioning</a>
          <a href="#trainers" className="text-muted hover:text-accent transition-colors">Women&apos;s Fitness</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-text font-display uppercase text-xs tracking-widest mb-1">
            Contact Info
          </p>
          <p className="text-muted">Gulgasht Colony, Multan</p>
          <a href="tel:+923000404070" className="text-muted hover:text-accent transition-colors">
            +92 300 0404070
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-border mt-10 pt-6 text-xs text-muted">
        © {new Date().getFullYear()} BodyTech Gym & Fitness Center, Multan. All rights reserved.
      </div>
    </footer>
  );
}
