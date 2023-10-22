import Careers from "@/components/careers/Careers";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import Navigation from "@/components/navigation/Navigation";
import OurStory from "@/components/our-story/OurStory";
import Services from "@/components/services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <OurStory />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
