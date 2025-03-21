import './index.css'
import { AboutSection, ContactSection, Header, HeroSection, ProjectSection, SkillSection, Footer } from "./Components"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
