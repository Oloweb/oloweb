"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams() // To detect hash changes

  useEffect(() => {
    const hash = window.location.hash
    // Only scroll to top if the hash is NOT '#kontakt'
    // This ensures that direct links to #kontakt are handled by the specific link logic
    // and other page navigations go to the top.
    if (hash !== "#kontakt") {
      window.scrollTo(0, 0)
    }
  }, [pathname, searchParams]) // Re-run when path or search params (including hash) change

  return <>{children}</>
}
