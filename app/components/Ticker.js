const WORDS = [
  "STRENGTH", "CARDIO", "HIIT", "DISCIPLINE", "CONDITIONING", "RECOVERY",
];

function Row({ reverse = false }) {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden">
      <div
        className={`ticker-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-display uppercase text-sm sm:text-base px-6 py-3 whitespace-nowrap"
          >
            {word}
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="-rotate-1 -mt-6 relative z-10">
      <div className="bg-accent text-ink font-semibold">
        <Row />
      </div>
      <div className="bg-surfaceHigh text-text border-y border-border">
        <Row reverse />
      </div>
    </div>
  );
}
