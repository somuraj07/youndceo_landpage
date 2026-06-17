import Hero from '../components/Hero'
import MarketTicker from '../components/MarketTicker'
import WhyChoose from '../components/WhyChoose'
import AppShowcase from '../components/AppShowcase'
import Features from '../components/Features'
import Courses from '../components/Courses'
import Process from '../components/Process'
import AboutUs from '../components/AboutUs'
import ContactForm from '../components/ContactForm'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <MarketTicker />
      <WhyChoose />
      <AppShowcase />
      <Features />
      <Courses />
      <Process />
      <AboutUs />
      <ContactForm />
      <CTA />
    </main>
  )
}
