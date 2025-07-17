import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CreativesHero from "@/components/creatives-hero"
import Projects from "@/components/projects"
// import ContactForm from "@/components/contact-form" // Remove this line

export const metadata: Metadata = {
  title: "Pre kreatívcov - Oloweb.sk", // Updated title
  description:
    "Oloweb vytvára špecializované webové stránky, online portfóliá a e-shopy pre umelcov, dizajnérov a kreatívnych profesionálov. Prezentujte svoju prácu a oslovte širšie publikum.",
  keywords:
    "riešenia pre kreatívcov, web pre umelcov, online portfólio, digitálny marketing pre dizajnérov, web pre fotografov, web pre hudobníkov, predaj umenia online",
  openGraph: {
    title: "Pre kreatívcov - Oloweb.sk", // Matching Open Graph title
    description:
      "Oloweb: Digitálne riešenia pre umelcov a dizajnérov. Personalizované portfóliá a online predaj umeleckých diel.",
    type: "website",
    locale: "sk_SK",
  },
}

export default function CreativesSolutions() {
  return (
    <>
      <Navigation showHomeLink={true} />
      <main className="min-h-screen">
        <CreativesHero />

        {/* Text and Contact Form Section - now using the full Contact component */}
        <section className="py-12 lg:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">
              {" "}
              {/* Adjusted gap to gap-8 lg:gap-16 */}
              {/* Left side - Text */}
              <div className="space-y-8">
                <h2
                  className="text-4xl lg:text-5xl font-black text-white leading-tight"
                  style={{ fontFamily: "Archivo Black" }}
                >
                  VAŠA KREATIVITA,
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    NAŠE RIEŠENIA
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway" }}>
                  V Oloweb rozumieme jedinečným potrebám kreatívnych profesionálov. Či už ste umelec, fotograf, dizajnér
                  alebo hudobník, pomôžeme vám vytvoriť online prítomnosť, ktorá skutočne odráža váš talent a víziu. Od
                  interaktívnych portfólií po e-shopy pre vaše diela, sme tu, aby sme vaše nápady premenili na digitálnu
                  realitu.
                </p>
                <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Raleway" }}>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Personalizované portfóliá</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Online predaj umeleckých diel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Optimalizácia pre vizuálny obsah</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Marketing pre kreatívne odvetvia</span>
                  </li>
                </ul>
              </div>
              {/* Right side - Contact Form (now part of the Contact component) */}
              {/* <ContactForm /> */}
            </div>
          </div>
        </section>

        <Projects />
      </main>
      <Footer />
    </>
  )
}
