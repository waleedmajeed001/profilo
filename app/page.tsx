import AboutUs from "@/components/aboutus";
import HeroSection from "@/components/Hero";
import Projects from "@/components/project";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import Contect from "@/components/contect";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Service />
      <Skills />
      <Projects />
      <Contect />
    </div>
  );
};

export default HomePage;
