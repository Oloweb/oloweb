"use client"

export default function BusinessServices() {
  const services = [
    {
      name: "Firemné webstránky",
      category: "Web Development",
      description: "Profesionálne prezentačné webstránky pre firmy",
    },
    {
      name: "E-commerce riešenia",
      category: "E-commerce",
      description: "Komplexné online obchody s pokročilými funkciami",
    },
    {
      name: "CRM systémy",
      category: "Business Solutions",
      description: "Správa zákazníkov a obchodných procesov",
    },
    {
      name: "ERP systémy",
      category: "Business Solutions",
      description: "Komplexná správa podnikových zdrojov",
    },
    {
      name: "Mobilné aplikácie",
      category: "Mobile Development",
      description: "Firemné mobilné aplikácie pre iOS a Android",
    },
    {
      name: "Digitálny marketing",
      category: "Marketing",
      description: "SEO, PPC kampane a social media marketing",
    },
    {
      name: "Cloud riešenia",
      category: "Cloud Services",
      description: "Migrácia a správa cloudových služieb",
    },
    {
      name: "Automatizácia procesov",
      category: "Automation",
      description: "Automatizácia obchodných procesov a workflow",
    },
    {
      name: "Analýza a reporting",
      category: "Analytics",
      description: "Business intelligence a pokročilé reporty",
    },
    {
      name: "Bezpečnostné riešenia",
      category: "Security",
      description: "Kybernetická bezpečnosť a ochrana dát",
    },
    {
      name: "Integrácie systémov",
      category: "Integration",
      description: "Prepojenie existujúcich systémov a API",
    },
    {
      name: "Konzultácie a audit",
      category: "Consulting",
      description: "IT audit a strategické konzultácie",
    },
  ]

  // Group services by category for better organization
  const categories = [
    "Web Development",
    "E-commerce",
    "Business Solutions",
    "Mobile Development",
    "Marketing",
    "Cloud Services",
  ]

  // Split services into 3 rows for animation
  const row1 = services.slice(0, 4)
  const row2 = services.slice(4, 8)
  const row3 = services.slice(8, 12)

  return (
    <section id="riesenia" className="py-12 lg:py-20 relative overflow-hidden">
      {" "}
      {/* Added id="riesenia" */}
      {/* Removed bg-gradient-to-b class */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase"
            style={{ fontFamily: "Archivo Black" }}
          >
            NAŠE{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">RIEŠENIA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "Raleway" }}>
            Komplexné digitálne služby pre moderné podnielanie
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1 - Moving left to right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right space-x-8 whitespace-nowrap">
              {[...row1, ...row1].map((service, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 hover:bg-white/10 transition-all duration-300 min-w-[300px]"
                >
                  <div className="text-white font-bold text-lg mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
                    {service.name}
                  </div>
                  <div className="text-blue-400 text-sm mb-2">{service.category}</div>
                  <div className="text-gray-400 text-sm">{service.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving right to left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 whitespace-nowrap">
              {[...row2, ...row2].map((service, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 hover:bg-white/10 transition-all duration-300 min-w-[300px]"
                >
                  <div className="text-white font-bold text-lg mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
                    {service.name}
                  </div>
                  <div className="text-blue-400 text-sm mb-2">{service.category}</div>
                  <div className="text-gray-400 text-sm">{service.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Moving left to right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right-slow space-x-8 whitespace-nowrap">
              {[...row3, ...row3].map((service, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 hover:bg-white/10 transition-all duration-300 min-w-[300px]"
                >
                  <div className="text-white font-bold text-lg mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
                    {service.name}
                  </div>
                  <div className="text-blue-400 text-sm mb-2">{service.category}</div>
                  <div className="text-gray-400 text-sm">{service.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              200+
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Firemných projektov
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              50+
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Spokojných firiem
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              99%
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Úspešnosť projektov
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              24/7
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Podpora
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Konzultácia zdarma
          </button>
        </div>
      </div>
    </section>
  )
}
