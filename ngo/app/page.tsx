import Slider from "./components/home/Slide";
import TopCard from "./components/home/TopCard";
import HomeAboutUs from "./components/home/HomeAboutUs";
import OurImpact from "./components/home/OurImpact";
import OurProject from "./components/home/OurProject";
import OurActivities from "./components/home/OurActivities";
import HomeContactUs from "./components/home/HomeContactUs";
import HomePostSection from "./components/home/HomePostSection";

export default function Home() {
  return (
    <main>
      {/* Slider */}
      <Slider />

      {/* home Top card */}
      <TopCard />

      {/* About us */}
      <HomeAboutUs />

      {/* Our Impact */}
      <OurImpact />

      {/* OurProject */}
      <OurProject />

      {/* OurActivities */}
      <OurActivities />

      {/* Home ContactUs */}
      <HomeContactUs />

      {/* HomePostSection */}
      <HomePostSection />
    </main>
  );
}
