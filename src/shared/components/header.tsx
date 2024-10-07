import { ArrowRight, Menu, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Buttons } from "./button"
import { HeaderMobile } from "./header-mobile"

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-20">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
          <div className="inline-flex gap-1 items-center"></div>
          <p>
            {" "}
            <span className="text-white/40">Gerencie seus projetos</span>{" "}
            totalmente gratís{" "}
          </p>
          <ArrowRight className="h-4 w-4 ml-2 inline-flex justify-center items-center" />
        </div>
        <nav className="py-5 px-3">
          <div className="container">
            <div className="flex items-center justify-between">
              <Link rel="stylesheet" href="/">
                <Image
                  src="/project-management.png"
                  alt="logo do site"
                  width={40}
                  height={40}
                />
              </Link>
              <HeaderMobile />
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a
                  href=""
                  className="text-black/70 hover:text-[#1F3473] transition"
                >
                  Sobre
                </a>
                <a
                  href=""
                  className="text-black/70 hover:text-[#1F3473] transition"
                >
                  Avaliações
                </a>
                <a
                  href=""
                  className="text-black/70 hover:text-[#1F3473] transition"
                >
                  Desenvolvedores
                </a>
                <a
                  href=""
                  className="text-black/70 hover:text-[#1F3473] transition"
                >
                  Projetos
                </a>
                <Buttons words="Entrar" />
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
