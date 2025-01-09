import Link from "next/link"
import { Buttons } from "./button"

interface DesktopHeaderProps {
  isAuthenticated: boolean
}

export default function DesktopHeader({ isAuthenticated }: DesktopHeaderProps) {
  return (
    <nav aria-label="Primary" className="hidden md:flex items-center space-x-8">
      <Link
        href="/about"
        className="text-white hover:text-white/80 transition-colors"
      >
        Sobre
      </Link>
      {isAuthenticated ? (
        <Link
          href="/dashboard"
          id="dashboard-link"
          className="transition-colors"
        >
          <Buttons words="Dashboard" />
        </Link>
      ) : (
        <Link href="/sign-in" id="entrar-link" className="transition-colors">
          <Buttons words="Entrar" />
        </Link>
      )}
    </nav>
  )
}
