import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Locations() {
  const locations = [
    {
      name: "纽约堂",
      picUrl: "/church1.jpg",
      nameEn: "New York Campus",
      address: "60-20 Woodside Ave, Suite 205, Woodside, NY 11377",
      time: "每周日/周一 下午 2:00",
      phone: "(917) 200-4938",
      contact: "Peiming Tian 长老",
      mapQuery: "Woodside Queens New York street scene community",
    },
    {
      name: "加州堂",
      picUrl: "/church2.jpg",
      nameEn: "California Campus",
      address: "72 Granite Path, Irvine, CA 92620",
      time: "西岸家庭团契与新移民接待",
      phone: "联系纽约堂获取更多信息",
      contact: "",
      mapQuery: "Irvine California suburban neighborhood sunny",
    },
  ]

  return (
    <section id="locations" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">聚会时间与地点</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-16">Visit Us</p>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={location.picUrl}
                    alt={`${location.name} map preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{location.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{location.nameEn}</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/90 leading-relaxed">{location.address}</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/90">{location.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/90">{location.phone}</p>
                        {location.contact && <p className="text-xs text-muted-foreground mt-1">{location.contact}</p>}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    获取路线
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
