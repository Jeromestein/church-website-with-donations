import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-balance">见证分享</h2>
          <p className="text-sm md:text-base text-center text-muted-foreground mb-16">Testimonials</p>

          <Card className="p-8 md:p-12 bg-card relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8 italic">
                刚来纽约时，我举目无亲。是教会的兄弟姐妹在地铁站递给我的一份热饭，让我感受到了久违的温暖。现在，我也穿上了义工马甲，去帮助更多像我一样的人。
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/asian-young-man-smiling-portrait-volunteer.jpg')`,
                  }}
                />
                <div>
                  <p className="font-semibold text-foreground">Jin 弟兄</p>
                  <p className="text-sm text-muted-foreground">社区义工 | Community Volunteer</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <p className="text-sm text-muted-foreground">年服务经验</p>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">家庭受益</p>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-sm text-muted-foreground">服务据点</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
