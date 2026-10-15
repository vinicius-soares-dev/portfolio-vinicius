import AboutMe from "../components/sections/About";
import EcommerceSection from "../components/sections/EcommerceSection";
import Hero from "../components/sections/Hero";
import RealEstateSection from "../components/sections/Imobi";
import ProblemSolution from "../components/sections/ProblemSolutions";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import TargetAudience from "../components/sections/TargetAudience";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <RealEstateSection />
      <EcommerceSection />
      <ProblemSolution />
      <AboutMe />
      <Services />
      <TargetAudience />
      <Projects />
      <Testimonials />
      {/* próximas sections */}
    </>
  );
}
