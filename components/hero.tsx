import { Button } from "@/components/ui/button"
import { MapPin, Heart } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/asian-congregation-worshiping-in-modern-church-wit.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">在他乡，亦有故乡</h1>
          <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed">
            Finding Your Spiritual Home Away From Home
          </p>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
            无论您刚踏上这片土地，还是已在此扎根多年，Dynamic Evangelism Church
            都是您心灵的港湾。我们在纽约皇后区与加州尔湾，与您风雨同路。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base bg-primary hover:bg-primary/90 text-primary-foreground">
              <Heart className="mr-2 h-5 w-5" />
              参加我们的聚会
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-white/95 hover:bg-white border-white text-foreground"
            >
              <MapPin className="mr-2 h-5 w-5" />
              新移民服务中心
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
