import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/asian-congregation-worshiping-in-modern-church-wit.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/60 to-blue-500/40" />
      </div>

      <div className="relative z-10 container text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          充满爱的大家庭
          <br />在 DEC 成长！
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-2xl mx-auto">国际动力福音教会欢迎你</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link href="#live">观看直播</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-white/10 border-white text-white hover:bg-white/20">
            <Link href="#about">了解更多</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
