import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Plans from "./components/Plans";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import ScheduleContact from "./components/ScheduleContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-base min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Trainers />
      <Gallery />
      <Reviews />
      <ScheduleContact />
      <Footer />
    </main>
  );
}
