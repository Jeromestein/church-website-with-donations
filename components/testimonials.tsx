import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Testimonials() {
  const t = await getTranslations("Testimonials")

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">{t("title")}</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-16">{t("subtitle")}</p>

          <Card className="p-8 md:p-12 bg-card relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8 italic">{t("quote")}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src="/asian-young-man-smiling-portrait-volunteer.jpg"
                    alt={t("portraitAlt")}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t("person")}</p>
                  <p className="text-sm text-muted-foreground">{t("role")}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/*
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <p className="text-sm text-muted-foreground">{t("stats.years")}</p>
            </Card>
            */}
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">{t("stats.families")}</p>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-sm text-muted-foreground">{t("stats.sites")}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
