import AboutUs from "@/components/aboutus";
import HeroSection from "@/components/Hero";
import Projects from "@/components/project";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Service />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
