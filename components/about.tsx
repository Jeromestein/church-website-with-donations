import { Card } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("About")

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance">{t("title")}</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-4">{t("subtitle")}</p>

          <Card className="p-8 md:p-12 mt-12 bg-card border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">{t("paragraphs.one")}</p>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">{t("paragraphs.two")}</p>
              <div className="mt-8 p-6 bg-accent/30 rounded-lg border-l-4 border-primary">
                <p className="text-base italic text-foreground/90">"{t("quote")}"</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
