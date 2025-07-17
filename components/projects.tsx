"use client"

export default function Projects() {
  const companies = [
    "TechCorp",
    "StartupXYZ",
    "E-Shop Pro",
    "FinanceApp",
    "HealthTech",
    "EduPlatform",
    "WebStudio",
    "DataFlow",
    "CloudTech",
    "MobileFirst",
    "DigitalHub",
    "CodeCraft",
    "InnovateLab",
    "SmartSolutions",
    "NextGen",
    "TechVision",
    "WebMasters",
    "AppForge",
  ]

  // Split companies into 3 rows
  const row1 = companies.slice(0, 6)
  const row2 = companies.slice(6, 12)
  const row3 = companies.slice(12, 18)

  return (
    <section id="projekty" className="py-12 lg:py-20 relative overflow-hidden">
      {" "}
      {/* Removed bg-gradient-to-b class */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase"
            style={{ fontFamily: "Archivo Black" }}
          >
            NAŠE{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">PROJEKTY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "Raleway" }}>
            Dôverujú nám popredné spoločnosti a startupy z celého Slovenska
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1 - Moving left to right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right space-x-8 whitespace-nowrap">
              {[...row1, ...row1].map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-white font-bold text-lg uppercase" style={{ fontFamily: "Archivo Black" }}>
                    {company}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Web Development</div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving right to left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 whitespace-nowrap">
              {[...row2, ...row2].map((company, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-white font-bold text-lg uppercase" style={{ fontFamily: "Archivo Black" }}>
                    {company}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">E-commerce</div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Moving left to right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right-slow space-x-8 whitespace-nowrap">
              {[...row3, ...row3].map((company, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-8 py-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-white font-bold text-lg uppercase" style={{ fontFamily: "Archivo Black" }}>
                    {company}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Mobile App</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              100+
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Dokončených projektov
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              50+
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Spokojných klientov
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400 mb-2 uppercase" style={{ fontFamily: "Archivo Black" }}>
              5+
            </div>
            <div className="text-gray-300" style={{ fontFamily: "Raleway" }}>
              Rokov skúseností
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
      </div>
    </section>
  )
}
