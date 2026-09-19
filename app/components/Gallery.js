import Image from "next/image";

const PHOTOS = [
  { src: "/images/gallery-1.jpg", alt: "Gym training floor at BodyTech Gym Multan" },
  { src: "/images/gallery-2.jpg", alt: "Free weights and dumbbell rack" },
  { src: "/images/gallery-3.jpg", alt: "Member during a strength training session" },
  { src: "/images/gallery-4.jpg", alt: "Functional fitness and conditioning area" },
  { src: "/images/gallery-5.jpg", alt: "Cardio equipment area" },
  { src: "/images/gallery-6.jpg", alt: "Personal training session with a coach" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Gallery
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text">
            Inside BodyTech Gym
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
