import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function ChurchFooter() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">
              Dynamic
              <br />
              Evangelism
              <br />
              Church
            </h3>
            <p className="text-sm opacity-80">国际动力福音教会</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>626-269-8850</p>
              <p>office@dec4u.org</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">地点</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>19360 Colima Rd</p>
              <p>Rowland Heights, CA 91748</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">导航</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80">
              <Link href="#about" className="hover:text-accent transition-colors">
                关于
              </Link>
              <Link href="#ministries" className="hover:text-accent transition-colors">
                事工
              </Link>
              <Link href="#live" className="hover:text-accent transition-colors">
                直播
              </Link>
              <Link href="#events" className="hover:text-accent transition-colors">
                活动
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Dynamic Evangelism Church. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-accent transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="mailto:office@dec4u.org" className="hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
