import { handleSectionNav } from '../utils/scroll'
import { LandingHeader } from '../components/landing/LandingHeader'
import { Hero } from '../components/landing/Hero'
import { About } from '../components/landing/About'
import { Specialties } from '../components/landing/Specialties'
import { Methodology } from '../components/landing/Methodology'
import { ImcCalculator } from '../components/landing/ImcCalculator'
import { Testimonials } from '../components/landing/Testimonials'
import { FAQ } from '../components/landing/FAQ'
import { Contact } from '../components/landing/Contact'
import { LandingFooter } from '../components/landing/LandingFooter'

export function LandingPage() {
  return (
    <div className="landing">
      <a
        href="#home"
        className="skip-link"
        onClick={(e) => handleSectionNav(e, 'home')}
      >
        Pular para o conteúdo
      </a>
      <LandingHeader />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Methodology />
        <ImcCalculator />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <LandingFooter />
    </div>
  )
}
