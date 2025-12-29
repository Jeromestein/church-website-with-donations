import { ChurchHeader } from "@/components/church-header"
import { HeroSection } from "@/components/hero-section"
import { MinistriesSection } from "@/components/ministries-section"
import { LiveSection } from "@/components/live-section"
import { DonationSection } from "@/components/donation-section"
import { ContactSection } from "@/components/contact-section"
import { ChurchFooter } from "@/components/church-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <ChurchHeader />
      <main>
        <HeroSection />
        <MinistriesSection />
        <LiveSection />
        {/* <DonationSection /> */}
        <ContactSection />
      </main>
      <ChurchFooter />
    </div>
  )
}
