import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "./contact-form" // Import the new ContactForm component

export default function Contact() {
  return (
    <section id="kontakt" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Background decoration - these are overlays, not full backgrounds */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-700 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase"
            style={{ fontFamily: "Archivo Black" }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              KONTAKTUJTE
            </span>{" "}
            NÁS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "Raleway" }}>
            Máte projekt? Napíšte nám a spoločne vytvoríme niečo úžasné
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
          {" "}
          {/* Adjusted gap to gap-8 lg:gap-16 */}
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">Email</h3>
                  <p className="text-gray-300">info@oloweb.sk</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">Telefón</h3>
                  <p className="text-gray-300">+421 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">Adresa</h3>
                  <p className="text-gray-300">Bratislava, Slovensko</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-4 uppercase" style={{ fontFamily: "Archivo Black" }}>
                Prečo Oloweb?
              </h3>
              <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Raleway" }}>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Bezplatná konzultácia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Rýchla odozva do 24 hodín</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Transparentné ceny</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Podpora aj po spustení</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
