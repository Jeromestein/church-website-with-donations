import { Card } from "@/components/ui/card"
import Image from "next/image"
import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("About")
  const elder = await getTranslations("Elder")
  const certificate = await getTranslations("BaptismCertificate")

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance">{t("title")}</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-4">{t("subtitle")}</p>

          <div className="space-y-8 mt-12">
            <Card className="p-8 md:p-12 bg-card border-border">
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">{t("paragraphs.one")}</p>
                <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">{t("paragraphs.two")}</p>
                <div className="mt-8 p-6 bg-accent/30 rounded-lg border-l-4 border-primary">
                  <p className="text-base italic text-foreground/90">"{t("quote")}"</p>
                </div>
              </div>
            </Card>

            <Card id="elder-profile" className="p-8 md:p-12 bg-card border-border">
              <div className="grid gap-8 md:grid-cols-[220px,1fr] items-start">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative h-52 w-52 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5">
                    <Image
                      src="/church-website-pastor-photo.jpg"
                      alt={elder("photoAlt")}
                      fill
                      sizes="216px"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground">{elder("name")}</p>
                    <p className="text-xs text-muted-foreground">{elder("role")}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{elder("sectionTitle")}</h3>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">{elder("paragraphs.intro")}</p>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-foreground">{elder("focusTitle")}</p>
                    <ul className="space-y-2 text-sm md:text-base text-foreground/90 list-disc pl-5">
                      <li>{elder("focusItems.worship")}</li>
                      <li>{elder("focusItems.bible")}</li>
                      <li>{elder("focusItems.care")}</li>
                      <li>{elder("focusItems.outreach")}</li>
                    </ul>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">{elder("paragraphs.mission")}</p>
                  <div className="mt-6 rounded-2xl border border-border bg-background/50 p-4">
                    <div className="grid gap-4 md:grid-cols-[1fr,220px] items-center">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">{certificate("title")}</h4>
                        <p className="text-sm md:text-base text-foreground/80">{certificate("subtitle")}</p>
                      </div>
                      <div className="relative w-full overflow-hidden rounded-xl border border-border bg-background p-3 aspect-[4/3]">
                        <div className="relative h-full w-full">
                          <Image
                            src="/CERTIFICATE-OF-BAPTISM.jpg"
                            alt={certificate("imageAlt")}
                            fill
                            sizes="(min-width: 768px) 220px, 100vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
