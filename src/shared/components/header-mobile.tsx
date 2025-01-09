import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Triangle } from "lucide-react"
import Link from "next/link"

interface MobileHeaderProps {
  isAuthenticated: boolean
}

export default function MobileHeader({ isAuthenticated }: MobileHeaderProps) {
  return (
    <nav aria-label="Mobile Navigation" className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-black/95 border-neutral-800"
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col space-y-6 mt-8">
            <Link
              href="/about"
              className="text-white hover:text-white/80 transition-colors text-lg"
            >
              Sobre
            </Link>
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                id="dashboard-link"
                className="text-white hover:text-white/80 transition-colors text-lg"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/sign-in"
                id="entrar-link"
                className="text-white hover:text-white/80 transition-colors text-lg"
              >
                Entrar
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="text-white w-fit"
              aria-label="Toggle theme"
            >
              <Triangle className="h-5 w-5 rotate-180" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
