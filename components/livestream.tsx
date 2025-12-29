export function Livestream() {
  return (
    <section id="livestream" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">在线直播敬拜</h2>
            <p className="text-lg text-muted-foreground text-balance">Live Worship Service</p>
            <p className="text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
              无论您身在何处，都可以通过在线直播与我们一同敬拜、祷告、学习神的话语。
            </p>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/A7lmqYbnzHk?start=230"
              title="Church Livestream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              主日崇拜时间：纽约每周日上午10:00 | 尔湾每周日上午11:00 (太平洋时间)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
