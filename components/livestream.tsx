import { getTranslations } from "next-intl/server"

export async function Livestream() {
  const t = await getTranslations("Livestream")

  return (
    <section id="livestream" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("title")}</h2>
            <p className="text-lg text-muted-foreground text-balance">{t("subtitle")}</p>
            <p className="text-base text-muted-foreground mt-2 max-w-2xl mx-auto">{t("description")}</p>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/A7lmqYbnzHk?start=230"
              title={t("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">{t("time")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
