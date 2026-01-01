import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Livestream } from "@/components/livestream"
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
        <Ministries />
        <Locations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
