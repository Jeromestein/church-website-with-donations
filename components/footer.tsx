import { MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dynamic Evangelism Church</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              在他乡，亦有故乡。我们致力于服务在美的华人与东亚社区，用基督的爱温暖每一个漂泊的灵魂。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">纽约堂</h4>
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
            <h4 className="text-lg font-semibold mb-4">加州堂</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>72 Granite Path, Irvine, CA 92620</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>© {new Date().getFullYear()} Dynamic Evangelism Church. All rights reserved.</p>
          <p className="mt-2">用爱服务社区 · Serving the Community with Love</p>
        </div>
      </div>
    </footer>
  )
}
