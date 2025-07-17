"use client"
import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always active
    analytics: false,
    marketing: false,
  })
  const [activeTab, setActiveTab] = useState<"settings" | "privacy">("settings")

  // Load preferences from localStorage on mount
  useEffect(() => {
    const storedPreferences = localStorage.getItem("cookie_preferences")
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences))
    }
  }, [])

  const handleSavePreferences = useCallback(() => {
    localStorage.setItem("cookie_preferences", JSON.stringify(preferences))
    localStorage.setItem("cookie_consent", "custom") // Mark as custom consent
    onClose()
    // In a real app, you'd re-initialize analytics/marketing scripts here based on preferences
    // For example: if (preferences.analytics) initGoogleAnalytics();
  }, [preferences, onClose])

  const handleAcceptAll = useCallback(() => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    setPreferences(allAccepted)
    localStorage.setItem("cookie_preferences", JSON.stringify(allAccepted))
    localStorage.setItem("cookie_consent", "accepted")
    onClose()
  }, [onClose])

  const handleDeclineAll = useCallback(() => {
    const allDeclined = { necessary: true, analytics: false, marketing: false }
    setPreferences(allDeclined)
    localStorage.setItem("cookie_preferences", JSON.stringify(allDeclined))
    localStorage.setItem("cookie_consent", "declined")
    onClose()
  }, [onClose])

  const handleSwitchChange = (category: keyof CookiePreferences, checked: boolean) => {
    setPreferences((prev) => ({ ...prev, [category]: checked }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-black/80 backdrop-blur-sm border border-white/10 text-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
            Nastavenia súborov cookie
          </DialogTitle>
          <DialogDescription className="text-gray-300" style={{ fontFamily: "Raleway" }}>
            Spravujte svoje preferencie súborov cookie.
          </DialogDescription>
        </DialogHeader>

        <div className="flex border-b border-white/10 mb-4">
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "settings" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
            }`}
            style={{ fontFamily: "Raleway" }}
          >
            Nastavenia
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "privacy" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
            }`}
            style={{ fontFamily: "Raleway" }}
          >
            Zásady ochrany súkromia
          </button>
        </div>

        {activeTab === "settings" && (
          <div className="space-y-6 max-h-[calc(90vh-240px)] overflow-y-auto pr-2">
            {" "}
            {/* Added max-h and overflow-y-auto */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
                  Nevyhnutné súbory cookie
                </h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: "Raleway" }}>
                  Tieto súbory cookie sú nevyhnutné pre fungovanie webovej stránky a nemožno ich vypnúť v našich
                  systémoch.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
                  Analytické súbory cookie
                </h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: "Raleway" }}>
                  Tieto súbory cookie nám umožňujú počítať návštevy a zdroje prenosu, aby sme mohli merať a zlepšovať
                  výkon našej stránky.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => handleSwitchChange("analytics", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
                  Marketingové súbory cookie
                </h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: "Raleway" }}>
                  Tieto súbory cookie môžu byť nastavené prostredníctvom našej stránky našimi reklamnými partnermi. Môžu
                  byť použité na vytvorenie profilu vašich záujmov a zobrazenie relevantných reklám na iných stránkach.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => handleSwitchChange("marketing", checked)}
              />
            </div>
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="space-y-4 text-gray-300 max-h-[calc(90vh-240px)] overflow-y-auto pr-2">
            {" "}
            {/* Added max-h and overflow-y-auto */}
            <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
              Zásady ochrany súkromia
            </h3>
            <p>
              V Oloweb si vážime vaše súkromie. Tieto zásady ochrany súkromia vysvetľujú, ako zhromažďujeme, používame a
              chránime vaše osobné údaje, ktoré nám poskytnete prostredníctvom našej webovej stránky, najmä cez
              kontaktný formulár.
            </p>
            <h4 className="font-semibold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
              Zhromažďovanie a používanie informácií
            </h4>
            <p>
              Keď vyplníte a odošlete kontaktný formulár na našej webovej stránke, zhromažďujeme nasledujúce osobné
              údaje: vaše meno, emailovú adresu, predmet správy a samotnú správu. Tieto informácie sú nevyhnutné na to,
              aby sme mohli spracovať vašu požiadavku, odpovedať na vaše otázky a poskytnúť vám požadované služby.
            </p>
            <p>
              Vaše osobné údaje používame výhradne na účely komunikácie s vami, poskytovania informácií o našich
              službách a riešenia vašich dopytov. Môžeme vás kontaktovať prostredníctvom emailu alebo telefónu, ak ste
              tieto údaje poskytli a súvisia s vašou požiadavkou.
            </p>
            <h4 className="font-semibold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
              Zdieľanie informácií
            </h4>
            <p>
              Vaše osobné údaje nepredávame, neprenajímame ani inak neposkytujeme tretím stranám na marketingové účely.
              Môžeme ich zdieľať s dôveryhodnými partnermi alebo poskytovateľmi služieb, ktorí nám pomáhajú pri
              prevádzke našej webovej stránky alebo poskytovaní služieb, avšak len v rozsahu nevyhnutnom na splnenie
              týchto úloh a za podmienok, ktoré zaručujú ochranu vašich údajov.
            </p>
            <h4 className="font-semibold text-white uppercase" style={{ fontFamily: "Archivo Black" }}>
              Vaše práva
            </h4>
            <p>
              Máte právo požiadať o prístup k svojim osobným údajom, ich opravu, vymazanie alebo obmedzenie spracovania.
              Máte tiež právo namietať proti spracovaniu a právo na prenosnosť údajov. Pre uplatnenie týchto práv nás
              prosím kontaktujte na info@oloweb.sk.
            </p>
            <p>
              Používaním našej webovej stránky a poskytovaním vašich osobných údajov prostredníctvom kontaktného
              formulára súhlasíte so zhromažďovaním a používaním týchto informácií v súlade s týmito zásadami ochrany
              súkromia.
            </p>
          </div>
        )}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            onClick={handleDeclineAll}
            className="border border-white/20 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Odmietnuť všetko
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Prijať všetko
          </Button>
          <Button
            onClick={handleSavePreferences}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Uložiť preferencie
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
