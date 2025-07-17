"use client"

import { Code, Smartphone, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="uvod" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Removed background waves SVG */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {" "}
          {/* Adjusted gap to gap-8 lg:gap-12 */}
          {/* Left side - Text */}
          <div className="space-y-8">
            <h2
              className="text-4xl lg:text-6xl font-black text-white leading-tight uppercase" /* Added uppercase */
              style={{ fontFamily: "Archivo Black" }}
            >
              TVORÍME VÁŠ
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DIGITÁLNY
              </span>
              <br />
              SVET
              <span className="inline-block ml-2">
                {" "}
                {/* Container for dots */}
                <span className="animate-jump-dot animation-delay-0">.</span>
                <span className="animate-jump-dot animation-delay-100">.</span>
                <span className="animate-jump-dot animation-delay-200">.</span>
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway" }}>
              Tvoríme komplexné webové riešenia, prezentačné a firemné webstránky, e-shopy, webové aplikácie a staráme
              sa o kompletný marketing. Naše služby zahŕňajú moderné technológie, SEO optimalizáciu a AI riešenia pre
              váš digitálny úspech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/na-mieru"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
              >
                Začať projekt
              </Link>
              <Link
                href="/#sluzby"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault()
                  setTimeout(() => {
                    const servicesSection = document.getElementById("sluzby")
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }, 100)
                }}
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Naše služby
              </Link>
            </div>
          </div>
          {/* Right side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                  <Code className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold mb-2 uppercase">Webové riešenia</h3>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>• Komplexné webové riešenia</p>
                    <p>• Firemné webstránky</p>
                    <p>• Prezentačné webstránky</p>
                    <p>• Webové aplikácie</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                  <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold mb-2 uppercase">AI riešenia</h3>
                  <div className="text-gray-300 text-sm">
                    <p>• AI recepčná: OLGA AI</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {" "}
                {/* Removed mt-8 to align better on mobile */}
                <div className="bg-gradient-to-br from-blue-700/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                  <Globe className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold mb-2 uppercase">E-shopy</h3>
                  <p className="text-gray-300 text-sm">Online obchody</p>
                </div>
                <div className="bg-gradient-to-br from-blue-800/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                  <Zap className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold mb-2 uppercase">SEO & Marketing</h3>
                  <p className="text-gray-300 text-sm">Digitálny marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
