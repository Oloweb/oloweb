"use client"

import Image from "next/image"
import { Mail, Phone } from "lucide-react"

interface FooterProps {
  onOpenCookieSettings: () => void
}

export default function Footer({ onOpenCookieSettings }: FooterProps) {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
              <Image src="/logo.png" alt="Oloweb Logo" width={40} height={40} />
              <span className="text-xl font-black text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
                OLOWEB
              </span>
            </div>
            <p className="text-gray-400 mb-4" style={{ fontFamily: "Raleway" }}>
              Moderná digitálna agentúra špecializujúca sa na tvorbu webových stránok, e-shopov a mobilných aplikácií.
              Vytvárame riešenia pre digitálnu budúcnosť.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@oloweb.sk</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+421 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white font-bold mb-4 uppercase text-center md:text-left"
              style={{ fontFamily: "Archivo Black" }}
            >
              Služby
            </h3>
            <ul className="space-y-2 text-gray-400 text-center md:text-left" style={{ fontFamily: "Raleway" }}>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Webové stránky
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Mobilné aplikácie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  SEO optimalizácia
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-white font-bold mb-4 uppercase text-center md:text-left"
              style={{ fontFamily: "Archivo Black" }}
            >
              Spoločnosť
            </h3>
            <ul className="space-y-2 text-gray-400 text-center md:text-left" style={{ fontFamily: "Raleway" }}>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm" style={{ fontFamily: "Raleway" }}>
            © 2024 Oloweb. Všetky práva vyhradené.{" "}
            <button
              onClick={onOpenCookieSettings}
              className="text-blue-400 hover:underline ml-2 bg-transparent border-none cursor-pointer p-0"
              style={{ fontFamily: "Raleway" }}
            >
              Zásady ochrany súkromia
            </button>
            <button
              onClick={onOpenCookieSettings}
              className="text-blue-400 hover:underline ml-2 bg-transparent border-none cursor-pointer p-0"
              style={{ fontFamily: "Raleway" }}
            >
              Nastavenia súborov cookie
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}
