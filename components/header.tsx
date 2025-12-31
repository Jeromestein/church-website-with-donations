"use client"

import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations("Nav")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { key: "home", href: "#home" },
    { key: "livestream", href: "#livestream" },
    { key: "about", href: "#about" },
    { key: "ministries", href: "#ministries" },
    { key: "locations", href: "#locations" },
    { key: "testimonials", href: "#testimonials" },
  ]

  const localeOptions = [
    { code: "en", label: t("locale.en") },
    { code: "zh", label: t("locale.zh") },
  ]

  const handleLocaleChange = (nextLocale: string) => {
    if (nextLocale === locale) {
      return
    }

    const segments = pathname.split("/")
    if (segments.length > 1) {
      segments[1] = nextLocale
    } else {
      segments.push(nextLocale)
    }
    const nextPath = segments.join("/") || `/${nextLocale}`
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    router.push(`${nextPath}${hash}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold text-primary">{t("brand")}</div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-border bg-background/80 p-1 text-xs">
              {localeOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => handleLocaleChange(option.code)}
                  aria-label={`${t("language")} ${option.label}`}
                  aria-pressed={locale === option.code}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    locale === option.code
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
