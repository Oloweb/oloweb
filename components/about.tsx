import { Wallet, Rocket, Users, Award } from "lucide-react" // Changed DollarSign to Banknote
import Link from "next/link"

interface AboutProps {
  hideMoreAboutUsButton?: boolean
}

export default function About({ hideMoreAboutUsButton = false }: AboutProps) {
  return (
    <section id="about" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Background decoration - these are subtle overlays, not full backgrounds */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">
          {" "}
          {/* Adjusted gap to gap-8 lg:gap-16 */}
          {/* Left side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                  <Wallet className="w-16 h-16 text-blue-400 mb-4" /> {/* Changed to Banknote */}
                  <h3 className="text-white font-bold text-lg mb-2 uppercase">Férové ceny a prístup</h3>
                  <p className="text-gray-300 text-sm">Transparentné ceny bez skrytých poplatkov</p>
                </div>
                <div className="bg-gradient-to-br from-blue-700/20 to-blue-800/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                  <Users className="w-16 h-16 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2 uppercase">Tím Expertov</h3>
                  <p className="text-gray-300 text-sm">Skúsení vývojári a dizajnéri</p>
                </div>
              </div>
              <div className="space-y-4">
                {" "}
                {/* Removed mt-8 to align better on mobile */}
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                  <Rocket className="w-16 h-16 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2 uppercase">Rýchlosť</h3>
                  <p className="text-gray-300 text-sm">Optimalizované pre maximálny výkon</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                  <Award className="w-16 h-16 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2 uppercase">Kvalita</h3>
                  <p className="text-gray-300 text-sm">Prémiové riešenia na mieru</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side - Text */}
          <div className="space-y-8 mt-8 md:mt-12 lg:mt-0">
            {" "}
            {/* Added mt-8 md:mt-12 lg:mt-0 for spacing */}
            <h2
              className="text-4xl lg:text-5xl font-black text-white leading-tight uppercase"
              style={{ fontFamily: "Archivo Black" }}
            >
              PREČO{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">OLOWEB</span>?{" "}
              {/* Shortened heading and added blue gradient to Oloweb */}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway" }}>
              Sme digitálna agentúra, ktorá spája kreativitu s najnovšími technológiami. Naším cieľom je vytvárať
              riešenia, ktoré nielen vyzerajú skvele, ale aj fungujú bezchybne.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-gray-300" style={{ fontFamily: "Raleway" }}>
                  Viac ako 100 úspešne dokončených projektov
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-gray-300" style={{ fontFamily: "Raleway" }}>
                  Moderné technológie a najlepšie praktiky
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-gray-300" style={{ fontFamily: "Raleway" }}>
                  24/7 podpora a údržba
                </p>
              </div>
            </div>
            {!hideMoreAboutUsButton && ( // Conditionally render the button
              <Link
                href="/riesenia-pre-firmy"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
              >
                Viac o nás
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
