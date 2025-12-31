import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function Footer() {
  const t = await getTranslations("Footer")
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/web-app-manifest-512x512.png"
                alt={t("brand")}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">{t("brand")}</h3>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">{t("description")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("ny.title")}</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>60-20 Woodside Ave, Suite 205, Woodside, NY 11377</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(917) 200-4938</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("ca.title")}</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>72 Granite Path, Irvine, CA 92620</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>{t("copyright", { year })}</p>
          <p className="mt-2">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  )
}
