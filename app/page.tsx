import type { Metadata } from "next" // Metadata import is fine for server components
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: "Tvoríme váš digitálny svet - Oloweb.sk", // Updated title
  description:
    "Oloweb.sk – Tvoríme váš digitálny svet. Webstránky, e-shopy, AI riešenia, aplikácie, online marketing a profesionálne SEO.",
  keywords:
    "tvorba webových stránok, digitálna agentúra, web development, e-shop, mobilné aplikácie, SEO optimalizácia, AI riešenia, webstránky na mieru, Slovensko, online marketing",
  openGraph: {
    title: "Tvoríme váš digitálny svet - Oloweb.sk", // Matching Open Graph title
    description:
      "Oloweb.sk – Tvoríme váš digitálny svet. Webstránky, e-shopy, AI riešenia, aplikácie, online marketing a profesionálne SEO.",
    type: "website",
    locale: "sk_SK",
  },
}

export default function Home() {
  return <HomeClient />
}
