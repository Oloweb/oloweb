"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"

interface CookieConsentProps {
  onOpenSettings: () => void
}

export default function CookieConsent({ onOpenSettings }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (consent === null) {
      // Show if no consent has been recorded
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted")
    localStorage.setItem("cookie_preferences", JSON.stringify({ necessary: true, analytics: true, marketing: true }))
    setIsVisible(false)
  }

  const handleDeclineAll = () => {
    localStorage.setItem("cookie_consent", "declined")
    localStorage.setItem("cookie_preferences", JSON.stringify({ necessary: true, analytics: false, marketing: false }))
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm text-white p-4 z-[100] shadow-lg border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left" style={{ fontFamily: "Raleway" }}>
          Používame súbory cookie na zlepšenie vášho zážitku na našej webovej stránke. Pokračovaním v prehliadaní
          súhlasíte s ich používaním. Viac informácií nájdete v našich{" "}
          <button
            onClick={onOpenSettings}
            className="text-blue-400 hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            Zásadách ochrany súkromia
          </button>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            onClick={handleDeclineAll}
            className="border border-white/20 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Odmietnuť všetko
          </Button>
          <Button
            onClick={onOpenSettings}
            className="border border-white/20 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Nastavenia súborov cookie
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Prijať všetko
          </Button>
        </div>
      </div>
    </div>
  )
}
