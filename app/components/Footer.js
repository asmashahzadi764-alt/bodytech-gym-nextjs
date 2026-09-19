export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} BodyTech Gym & Fitness Center, Multan.</p>
        <p>Gulgasht Colony, Multan · +92 300 0404070</p>
      </div>
    </footer>
  );
}
