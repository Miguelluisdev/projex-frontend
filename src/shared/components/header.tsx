import Image from "next/image"
import { HeaderMobile } from "./header-mobile"
import { Button } from "./button"

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex  justify-center border-white/15">
              <Image
                src="/project-management.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm ">
              <a href="" className="text-white/70 hover:text-white transition">
                Sobre
              </a>
              <a href="" className="text-white/70 hover:text-white transition">
                Avaliações
              </a>
              <a href="" className="text-white/70 hover:text-white transition">
                Desenvolvedores
              </a>
              <a href="" className="text-white/70 hover:text-white transition">
                Projetos
              </a>
            </nav>
          </div>

          <div className="flex gap-2 items-center">
           <Button words="Entrar" />
            <HeaderMobile />
          </div>
        </div>
      </div>
    </header>
  )
}
