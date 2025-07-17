"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { X, Menu } from "lucide-react"

interface NavigationProps {
  showHomeLink?: boolean
}

export default function Navigation({ showHomeLink = true }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleKontaktClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault() // Prevent default Link behavior

    // Always navigate to the main page with the hash, then scroll
    router.push("/#kontakt", { scroll: false }) // Navigate without default scroll
    // Add a small delay to allow the page to render before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById("kontakt")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100) // Adjust delay as needed for smooth transition
    setIsOpen(false) // Close mobile menu if open
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Oloweb Logo" width={40} height={40} />
            <span className="text-xl font-black text-white" style={{ fontFamily: "Archivo Black" }}>
              OLOWEB
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {showHomeLink && (
              <Link
                href="/"
                className="text-white hover:text-blue-400 transition-colors"
                style={{ fontFamily: "Raleway" }}
              >
                Domov
              </Link>
            )}
            <Link
              href="/riesenia-pre-firmy"
              className="text-white hover:text-blue-400 transition-colors"
              style={{ fontFamily: "Raleway" }}
            >
              Riešenia pre firmy
            </Link>
            <Link
              href="/pre-kreativcov"
              className="text-white hover:text-blue-400 transition-colors"
              style={{ fontFamily: "Raleway" }}
            >
              Pre kreatívcov
            </Link>
            <Link
              href="/#kontakt" // Always point to the main page's contact section
              className="text-white hover:text-blue-400 transition-colors"
              style={{ fontFamily: "Raleway" }}
              scroll={false} // Disable default scroll behavior for this link
              onClick={handleKontaktClick} // Use custom click handler
            >
              Kontakt
            </Link>
            {/* Changed button to Link and updated text */}
            <Link
              href="/na-mieru"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Projekt na mieru
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {showHomeLink && (
                <Link
                  href="/"
                  className="text-white hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "Raleway" }}
                >
                  Domov
                </Link>
              )}
              <Link
                href="/riesenia-pre-firmy"
                className="text-white hover:text-blue-400 transition-colors"
                style={{ fontFamily: "Raleway" }}
              >
                Riešenia pre firmy
              </Link>
              <Link
                href="/pre-kreativcov"
                className="text-white hover:text-blue-400 transition-colors"
                style={{ fontFamily: "Raleway" }}
              >
                Pre kreatívcov
              </Link>
              <Link
                href="/#kontakt" // Always point to the main page's contact section
                className="text-white hover:text-blue-400 transition-colors"
                style={{ fontFamily: "Raleway" }}
                scroll={false} // Disable default scroll behavior for this link
                onClick={handleKontaktClick} // Use custom click handler
              >
                Kontakt
              </Link>
              {/* Changed button to Link and updated text */}
              <Link
                href="/na-mieru"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-fit"
              >
                Projekt na mieru
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
