import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslations } from "next-intl/server"

export async function Locations() {
  const t = await getTranslations("Locations")
  const locations = [
    {
      id: "ny",
      picUrl: "/church1.jpg",
      address: "60-20 Woodside Ave, Woodside, NY 11377",
    },
    {
      id: "ca",
      picUrl: "/church2.jpg",
      address: "72 Granite Path, Irvine, CA 92620",
    },
  ]

  return (
    <section id="locations" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">{t("title")}</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-16">{t("subtitle")}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => {
              const contact = t(`items.${location.id}.contact`)
              return (
                <Card key={location.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={location.picUrl}
                      alt={t("imageAlt", { name: t(`items.${location.id}.name`) })}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{t(`items.${location.id}.name`)}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{t(`items.${location.id}.nameSecondary`)}</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90 leading-relaxed">{location.address}</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/90">{t(`items.${location.id}.time`)}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/90">{t(`items.${location.id}.phone`)}</p>
                        {contact ? <p className="text-xs text-muted-foreground mt-1">{contact}</p> : null}
                      </div>
                    </div>
                  </div>

                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                      {t("cta")}
                    </Button>
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
