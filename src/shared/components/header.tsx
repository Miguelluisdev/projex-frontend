"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAuthToken } from "../hooks/auth-token"
import { Buttons } from "./button"
import { HeaderMobile } from "./header-mobile"

export const Header = () => {
  const isAutehnticated = useAuthToken()
  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-20" role="banner">
        <div
          className="flex justify-center items-center py-3 bg-black text-white text-sm"
          aria-label="Promoção"
        >
          <p>
            <span className="text-white/40">Gerencie seus projetos</span>{" "}
            totalmente grátis
          </p>
          <ArrowRight
            className="h-4 w-4 ml-2 inline-flex justify-center items-center"
            aria-hidden="true"
          />
        </div>
        <nav
          className="py-5 px-3"
          role="navigation"
          aria-label="Menu principal"
        >
          <div className="container">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Voltar à página inicial">
                <Image
                  src="/project-management.png"
                  alt="Logo do site"
                  width={40}
                  height={40}
                />
              </Link>
              <HeaderMobile />
              <ul
                className="hidden md:flex gap-6 text-black/60 items-center"
                role="list"
              >
                <li role="listitem">
                  <a
                    href="#desenvolvedores"
                    id="desenvolvedores-link"
                    className="text-black/70 hover:text-[#1F3473] transition"
                  >
                    Desenvolvedores
                  </a>
                </li>
                <li role="listitem">
                  <Link
                    href="/#contato"
                    id="contato-link"
                    className="text-black/70 hover:text-[#1F3473] transition"
                  >
                    Fale com a equipe
                  </Link>
                </li>
                <li role="listitem">
                  {isAutehnticated ? (
                    <Link href="/dashboard" id="dashboard-link">
                      <Buttons words="Dashboard" />
                    </Link>
                  ) : (
                    <Link href="/sign-in" id="entrar-link">
                      <Buttons words="Entrar" />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
