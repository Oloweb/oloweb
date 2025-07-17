import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CustomHero from "@/components/custom-hero"
import Process from "@/components/process"

export const metadata: Metadata = {
  title: "Projekt na mieru - Oloweb.sk", // Updated title
  description:
    "Oloweb sa špecializuje na vývoj unikátnych digitálnych riešení presne podľa vašich špecifických potrieb. Od komplexných webových aplikácií po inovatívne systémy – premeníme vaše vízie na realitu.",
  keywords:
    "riešenia na mieru, custom development, unikátne webové aplikácie, špecializované systémy, softvérové riešenia, digitálne inovácie, vývoj na mieru, komplexné systémy",
  openGraph: {
    title: "Projekt na mieru - Oloweb.sk", // Matching Open Graph title
    description:
      "Oloweb: Unikátne digitálne projekty podľa vašich potrieb. Od komplexných webových aplikácií po inovatívne systémy.",
    type: "website",
    locale: "sk_SK",
  },
}

export default function CustomSolutions() {
  return (
    <>
      <Navigation showHomeLink={true} />
      <main className="min-h-screen">
        <CustomHero />

        {/* Text and Contact Form Section */}
        <section id="kontakt" className="py-12 lg:py-20 relative overflow-hidden">
          {" "}
          {/* Added id="kontakt" */}
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
                  VAŠE VÍZIE,
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    NAŠE RIEŠENIA
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway" }}>
                  Máte jedinečný nápad, ktorý nezapadá do štandardných kategórií? V Oloweb sa špecializujeme na vývoj
                  riešení na mieru, ktoré sú presne prispôsobené vašim špecifickým požiadavkám. Od komplexných interných
                  systémov po inovatívne webové aplikácie, náš tím je pripravený premeniť vaše najambicióznejšie vízie
                  na funkčnú a efektívnu digitálnu realitu.
                </p>
                <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Raleway" }}>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Analýza a návrh špecifických potrieb</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Vývoj unikátnych webových a softvérových riešení</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Integrácia s existujúcimi systémami</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Dlhodobá podpora a škálovateľnosť</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Náš proces section from main page */}
        <Process />
      </main>
      <Footer />
    </>
  )
}
