"use client"

import { useState } from "react" // Import useState
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Process from "@/components/process"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import CookieSettingsModal from "@/components/cookie-settings-modal" // Import CookieSettingsModal

export default function HomeClient() {
  const [isCookieSettingsModalOpen, setIsCookieSettingsModalOpen] = useState(false)

  const handleOpenCookieSettings = () => {
    setIsCookieSettingsModalOpen(true)
  }

  const handleCloseCookieSettings = () => {
    setIsCookieSettingsModalOpen(false)
  }

  return (
    <>
      <Navigation showHomeLink={false} />
      <main className="min-h-screen">
        <Hero id="uvod" />
        <About />
        <Services id="sluzby" />
        <Projects id="projekty" />
        <Process id="proces" />
        <Contact id="kontakt" /> {/* Ensure the Contact component has id="kontakt" */}
      </main>
      <Footer onOpenCookieSettings={handleOpenCookieSettings} /> {/* Pass handler to Footer */}
      <CookieConsent onOpenSettings={handleOpenCookieSettings} /> {/* Pass handler to CookieConsent */}
      <CookieSettingsModal isOpen={isCookieSettingsModalOpen} onClose={handleCloseCookieSettings} />{" "}
      {/* Render the modal */}
    </>
  )
}
