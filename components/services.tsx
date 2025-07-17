"use client"

import { useState } from "react"
import { Plus, Minus, Code, Smartphone, ShoppingCart, Search, Palette, Server } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Tvorba Webových Stránok",
    icon: Code,
    description:
      "Moderné, responzívne webové stránky optimalizované pre všetky zariadenia. Používame najnovšie technológie ako React, Next.js a TypeScript pre maximálny výkon a používateľský zážitok.",
  },
  {
    id: 2,
    title: "E-commerce Riešenia",
    icon: ShoppingCart,
    description:
      "Komplexné online obchody s pokročilými funkciami ako platobné brány, správa inventára, analytics a CRM integrácia. Optimalizované pre konverzie a predaj.",
  },
  {
    id: 3,
    title: "Mobilné Aplikácie",
    icon: Smartphone,
    description:
      "Natívne a hybridné mobilné aplikácie pre iOS a Android. React Native, Flutter alebo natívny vývoj podľa vašich potrieb a požiadaviek.",
  },
  {
    id: 4,
    title: "SEO Optimalizácia",
    icon: Search,
    description:
      "Komplexná SEO optimalizácia pre lepšie umiestnenie vo vyhľadávačoch. Technické SEO, obsahová stratégia a link building pre dlhodobý úspech.",
  },
  {
    id: 5,
    title: "UI/UX Dizajn",
    icon: Palette,
    description:
      "Moderný dizajn zameraný na používateľský zážitok. Wireframing, prototypovanie a testovanie používateľnosti pre optimálne výsledky.",
  },
  {
    id: 6,
    title: "Backend Vývoj",
    icon: Server,
    description:
      "Robustné backend riešenia s databázami, API, cloud infrastruktúrou a bezpečnostnými opatreniami. Škálovateľné a spoľahlivé systémy.",
  },
]

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null)

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id)
  }

  return (
    <section id="sluzby" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Removed background decoration SVG */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 mb-8 md-mb-16">
          {" "}
          {/* Adjusted gap to gap-8 lg:gap-16 */}
          <div>
            <h2
              className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase"
              style={{ fontFamily: "Archivo Black" }}
            >
              NAŠE{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">SLUŽBY</span>
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway" }}>
              Ponúkame komplexné digitálne riešenia od návrhu až po implementáciu. Naše služby sú navrhnuté tak, aby
              vašej firme pomohli uspieť v digitálnom svete.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {services.map((service) => {
            const IconComponent = service.icon
            const isOpen = openService === service.id

            return (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-white">
                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="pl-8 md:pl-16">
                      {" "}
                      {/* Adjusted pl-16 to pl-8 md:pl-16 */}
                      <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "Raleway" }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
