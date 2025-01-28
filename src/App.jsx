import './index.css'
import {AboutSection, ContactSection, Header, HeroSection, ProjectSection, SkillSection, Footer} from "./Components"

function App() {
  return (
    <div>
      <Header />
      <div className='relative top-0'>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
