import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3, Crimson_Text, Dancing_Script } from "next/font/google"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

export const metadata: Metadata = {
  title: "雅选 - 品质生活，用心挑选",
  description: "发现生活中的美好细节，每一件商品都经过精心挑选和亲自体验",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${sourceSans.variable} ${crimsonText.variable} ${dancingScript.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
