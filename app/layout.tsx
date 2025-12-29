import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Serif_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})


export const metadata: Metadata = {
  title: "Dynamic Evangelism Church | 在他乡，亦有故乡",
  description:
    "Dynamic Evangelism Church (纽约) 与 Dynamic Gospel Church (加州) - 服务在美华人与东亚社区的温暖属灵家园",
  generator: "v0.app",
  other: {
    "apple-mobile-web-app-title": "DYN EVG CH",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
