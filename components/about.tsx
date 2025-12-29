import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-balance">
            不只是一间教会，更是一个大家庭
          </h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-4">Not Just a Church, But a Family</p>

          <Card className="p-8 md:p-12 mt-12 bg-card border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                Dynamic Evangelism Church (纽约) 与 Dynamic Gospel Church (加州)
                致力于服务在美的华人与东亚社区。我们深知移民生活的酸甜苦辣——从语言的隔阂到文化的冲击，从身份的焦虑到生活的压力。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                在这里，我们不仅分享福音的真理，更分享生活的重担。我们由一群热心的移民组成，长老与同工们都曾经历过您正在经历的一切。我们聚在一起，是为了在异国他乡彼此扶持，用基督的爱温暖每一个漂泊的灵魂。
              </p>
              <div className="mt-8 p-6 bg-accent/30 rounded-lg border-l-4 border-primary">
                <p className="text-base italic text-foreground/90">
                  "在这里，我们由一群热心的移民组成，长老与同工们都曾经历过您正在经历的一切。"
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
