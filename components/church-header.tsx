"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function ChurchHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-accent">
            Dynamic
            <br />
            Evangelism
            <br />
            Church
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            关于我们
          </Link>
          <Link href="#ministries" className="text-sm font-medium hover:text-primary transition-colors">
            事工
          </Link>
          <Link href="#live" className="text-sm font-medium hover:text-primary transition-colors">
            直播
          </Link>
          <Link href="#events" className="text-sm font-medium hover:text-primary transition-colors">
            活动
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            联系
          </Link>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="#donate">奉献</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 py-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              关于我们
            </Link>
            <Link
              href="#ministries"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              事工
            </Link>
            <Link href="#live" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              直播
            </Link>
            <Link
              href="#events"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              活动
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              联系
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="#donate" onClick={() => setIsMenuOpen(false)}>
                奉献
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
