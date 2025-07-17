import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Archivo_Black, Raleway } from "next/font/google"
import "./globals.css"
import AnimatedGradientBackground from "@/components/animated-gradient-background"
import ScrollToTop from "@/components/scroll-to-top" // Import the refined ScrollToTop component

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Tvoríme váš digitálny svet - Oloweb.sk",
  description:
    "Oloweb.sk – Tvoríme váš digitálny svet. Webstránky, e-shopy, AI riešenia, aplikácie, online marketing a profesionálne SEO.",
  keywords:
    "tvorba webových stránok, digitálna agentúra, web development, e-shop, mobilné aplikácie, SEO optimalizácia, AI riešenia, webstránky na mieru, Slovensko, online marketing",
  authors: [{ name: "Oloweb" }],
  creator: "Oloweb",
  publisher: "Oloweb",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://oloweb.sk",
    title: "Tvoríme váš digitálny svet - Oloweb.sk",
    description:
      "Oloweb.sk – Tvoríme váš digitálny svet. Webstránky, e-shopy, AI riešenia, aplikácie, online marketing a profesionálne SEO.",
    siteName: "Oloweb",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with your actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Oloweb - Moderná Digitálna Agentúra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tvoríme váš digitálny svet - Oloweb.sk",
    description:
      "Oloweb.sk – Tvoríme váš digitálny svet. Webstránky, e-shopy, AI riešenia, aplikácie, online marketing a profesionálne SEO.",
    images: ["/placeholder.svg?height=675&width=1200"], // Replace with your actual Twitter image
  },
  icons: {
    icon: "/logo.png", // Standard favicon for most browsers
    shortcut: "/logo.png", // For older browsers that use 'shortcut icon'
    apple: "/logo.png", // Apple touch icon for iOS devices
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className={`${archivoBlack.variable} ${raleway.variable}`}>
      <body className="antialiased">
        <AnimatedGradientBackground>
          <Suspense fallback={null}>
            <ScrollToTop>{children}</ScrollToTop>
          </Suspense>
        </AnimatedGradientBackground>
      </body>
    </html>
  )
}
