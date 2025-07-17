"use client"

import Link from "next/link"

export default function BusinessHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Removed background waves SVG */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8 uppercase" /* Adjusted font size and added uppercase */
            style={{ fontFamily: "Archivo Black" }}
          >
            RIEŠENIA PRE
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">FIRMY</span>
          </h1>

          <p
            className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: "Raleway" }}
          >
            Profesionálne digitálne riešenia navrhnuté špeciálne pre podnikanie. Pomáhame firmám rásť a uspievať v
            digitálnom svete.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              Konzultácia zdarma
            </button>
            <Link
              href="/riesenia-pre-firmy/#riesenia"
              scroll={false}
              onClick={(e) => {
                e.preventDefault()
                setTimeout(() => {
                  const solutionsSection = document.getElementById("riesenia")
                  if (solutionsSection) {
                    solutionsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }, 100)
              }}
              className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Naše riešenia
            </Link>
            {/* Removed Cenník button */}
          </div>
        </div>
      </div>
    </section>
  )
}
