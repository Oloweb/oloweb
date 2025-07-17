import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BusinessHero from "@/components/business-hero"
import About from "@/components/about"
import BusinessServices from "@/components/business-services"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Riešenia pre firmy - Oloweb.sk", // Updated title
  description:
    "Oloweb ponúka špecializované digitálne riešenia pre firmy: firemné webstránky, e-shopy, CRM/ERP systémy, digitálny marketing a cloud riešenia. Pomáhame vášmu podnikaniu rásť online.",
  keywords:
    "riešenia pre firmy, firemné webstránky, podnikové riešenia, CRM systémy, ERP systémy, digitálny marketing pre firmy, cloud riešenia, automatizácia, IT audit, web pre biznis",
  openGraph: {
    title: "Riešenia pre firmy - Oloweb.sk", // Matching Open Graph title
    description:
      "Oloweb: Profesionálne digitálne riešenia pre podnikanie. Firemné webstránky, e-shopy, CRM systémy a komplexný digitálny marketing.",
    type: "website",
    locale: "sk_SK",
  },
}

export default function BusinessSolutions() {
  return (
    <>
      <Navigation showHomeLink={true} /> {/* Show "Domov" link on subpages */}
      <main className="min-h-screen">
        <BusinessHero />
        <About hideMoreAboutUsButton={true} /> {/* Pass prop to hide the button */}
        <BusinessServices />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
