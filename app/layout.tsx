import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ashima Tiwari - Portfolio",
  description:
    "Computer Science student, Frontend Developer, AI & Cloud Enthusiast. Passionate about creating beautiful and meaningful web experiences.",
  keywords: "Ashima Tiwari, Computer Science, Frontend Developer, React, Python, AI, Cloud Computing, Portfolio",
  authors: [{ name: "Ashima Tiwari" }],
  creator: "Ashima Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashimatiwari.dev",
    title: "Ashima Tiwari - Portfolio",
    description: "Computer Science student, Frontend Developer, AI & Cloud Enthusiast",
    siteName: "Ashima Tiwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashima Tiwari - Portfolio",
    description: "Computer Science student, Frontend Developer, AI & Cloud Enthusiast",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
