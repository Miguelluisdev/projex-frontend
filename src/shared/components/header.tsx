"use client"

import { FolderGit2, Triangle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAuthToken } from "../hooks/auth-token"
import DesktopHeader from "./header-desktop"
import MobileHeader from "./header-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isAuthenticated = useAuthToken()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="Home">
            <FolderGit2 className="text-white" />
          </Link>

          <DesktopHeader isAuthenticated={isAuthenticated} />
          <MobileHeader isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </header>
  )
}
