import { ChurchHeader } from "@/components/church-header"
import { HeroSection } from "@/components/hero-section"
import { MinistriesSection } from "@/components/ministries-section"
import { LiveSection } from "@/components/live-section"
import { DonationSection } from "@/components/donation-section"
import { ContactSection } from "@/components/contact-section"
import { ChurchFooter } from "@/components/church-footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Livestream } from "@/components/livestream"
import { About } from "@/components/about"
import { Ministries } from "@/components/ministries"
import { Locations } from "@/components/locations"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Livestream />
        <About />
        <Ministries />
        <Locations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
