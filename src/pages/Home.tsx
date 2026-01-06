import AboutMe from "../components/sections/About"
import FinalCTA from "../components/sections/FinalCTA"
import Hero from "../components/sections/Hero"
import ProblemSolution from "../components/sections/ProblemSolutions"
import Projects from "../components/sections/Projects"
import Services from "../components/sections/Services"
import TargetAudience from "../components/sections/TargetAudience"
import Testimonials from "../components/sections/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <AboutMe />
      <Services  />
      <TargetAudience />
      <Projects />
      <Testimonials />
      <FinalCTA />
      {/* próximas sections */}
    </>
  )
}
