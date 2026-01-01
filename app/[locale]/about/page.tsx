import Image from "next/image"
import { getLocale, getTranslations } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default async function AboutPage() {
  const t = await getTranslations("AboutPage")
  const elder = await getTranslations("Elder")
  const people = ["jin", "li", "liuXin", "liuGuidong"]
  const locale = await getLocale()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 md:py-28">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">{t("title")}</h1>
              <p className="text-base md:text-lg text-muted-foreground">{t("subtitle")}</p>
            </div>

            <Card id="elder-profile" className="p-8 md:p-12 bg-card border-border">
              <div className="grid gap-8 md:grid-cols-[240px,1fr] items-start">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5">
                    <Image
                      src="/church-website-pastor-photo.jpg"
                      alt={elder("photoAlt")}
                      fill
                      sizes="224px"
                      className="object-cover object-[50%_15%]"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground">{elder("name")}</p>
                    <p className="text-xs text-muted-foreground">{elder("role")}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{elder("sectionTitle")}</h2>
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
                </div>
              </div>
            </Card>

            <section className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("peopleTitle")}</h2>
                <p className="text-sm md:text-base text-muted-foreground">{t("peopleSubtitle")}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {people.map((personId) => (
                  <Card key={personId} className="p-6 md:p-8 bg-card border-border">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {t(`people.${personId}.name`)}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {t("labels.bio")}
                          </p>
                          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                            {isZh ? t(`people.${personId}.cnBio`) : t(`people.${personId}.enBio`)}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                            {t("labels.favoriteVerse")}
                          </p>
                          <p className="text-sm md:text-base text-foreground/90">
                            {t(`people.${personId}.verse`)}
                          </p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                            {t("labels.testimony")}
                          </p>
                          <p className="text-sm md:text-base text-foreground/90">
                            {t(`people.${personId}.testimony`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
