import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Heart } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Hero() {
  const t = await getTranslations("Hero")

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/asian-congregation-worshiping-in-modern-church-wit.jpg"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">{t("title")}</h1>
          <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed">{t("subtitle")}</p>
          <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">{t("body")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base bg-primary hover:bg-primary/90 text-primary-foreground">
              <Heart className="mr-2 h-5 w-5" />
              {t("ctaPrimary")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-white/95 hover:bg-white border-white text-foreground"
            >
              <MapPin className="mr-2 h-5 w-5" />
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
