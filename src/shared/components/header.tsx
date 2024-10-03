import { Menu } from "lucide-react"
import Image from "next/image"
import { HeaderMobile } from "./header-mobile"

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
            <button className=" relative border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 ">
                <div className=" rounded-lgborder border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg  border absolute inset-0 border-white/40  [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div
                  className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg
                 "
                ></div>
              </div>
              <span>Entrar</span>
            </button>
            <HeaderMobile />
          </div>
        </div>
      </div>
    </header>
  )
}
