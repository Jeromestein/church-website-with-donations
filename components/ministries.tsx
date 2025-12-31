import { Card } from "@/components/ui/card"
import { Heart, Users, BookOpen } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Ministries() {
  const t = await getTranslations("Ministries")
  const ministries = [
    {
      id: "outreach",
      icon: Heart,
      services: ["street", "winter"],
    },
    {
      id: "immigrant",
      icon: Users,
      services: ["lifeGuide", "language", "support"],
    },
    {
      id: "growth",
      icon: BookOpen,
      services: ["sunday", "bibleStudy"],
    },
  ]

  return (
    <section id="ministries" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">{t("title")}</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-16">{t("subtitle")}</p>

          <div className="grid md:grid-cols-1 gap-8">
            {ministries.map((ministry) => {
              const Icon = ministry.icon
              return (
                <Card key={ministry.id} className="p-8 md:p-10 hover:shadow-lg transition-shadow bg-card">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                        {t(`items.${ministry.id}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{t(`items.${ministry.id}.subtitle`)}</p>
                      <p className="text-lg font-semibold text-primary mb-3 italic">
                        "{t(`items.${ministry.id}.tagline`)}"
                      </p>
                      <p className="text-base text-foreground/90 mb-6 leading-relaxed">
                        {t(`items.${ministry.id}.description`)}
                      </p>
                      <div className="space-y-4">
                        {ministry.services.map((service) => (
                          <div key={service} className="pl-4 border-l-2 border-primary/30">
                            <h4 className="font-semibold text-foreground mb-1">
                              {t(`items.${ministry.id}.services.${service}.name`)}
                            </h4>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {t(`items.${ministry.id}.services.${service}.detail`)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
