// Import Link from next/link
import Link from "next/link"

export default function Process() {
  const steps = [
    { title: "Analýza" },
    { title: "Dizajn" },
    { title: "Vývoj" },
    { title: "Testovanie" },
    { title: "Spustenie" },
  ]

  return (
    <section id="proces" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase"
            style={{ fontFamily: "Archivo Black" }}
          >
            NÁŠ <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">PROCES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "Raleway" }}>
            Od prvotnej myšlienky až po finálny produkt - sledujte cestu vášho projektu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-auto md:h-96">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            >
              <div className="absolute inset-0">
                {index === 0 && (
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                )}
                {index === 1 && (
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                )}
                {index === 2 && (
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                )}
                {index === 3 && (
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                )}
                {index === 4 && (
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=400&width=300')] bg-cover bg-center"></div>
                )}
                <div className="absolute inset-0 bg-blue-500/5"></div>
              </div>

              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
              </div>

              <div className="relative z-10">
                <div className="text-4xl font-black text-white mb-4 uppercase" style={{ fontFamily: "Archivo Black" }}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-8" style={{ fontFamily: "Raleway" }}>
            Každý projekt prechádza dôkladným procesom, ktorý zaručuje kvalitný výsledok
          </p>
          <Link
            href="/na-mieru"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-[15px] font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
          >
            Začať váš projekt
          </Link>
        </div>
      </div>
    </section>
  )
}
