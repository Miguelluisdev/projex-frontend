import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Buttons } from "./button"

export const HeaderMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-8 w-8 md:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-[#EAEEFE] border-none">
        <SheetDescription>
          <div className="">
            <nav className="flex mt-40 flex-col justify-between items-center gap-8 text-sm ">
              <a href="" className="text-black hover:text-[#1F3473] transition">
                Sobre
              </a>
              <a href="" className="text-black hover:text-[#1F3473] transition">
                Avaliações
              </a>
              <a href="" className="text-black hover:text-[#1F3473] transition">
                Desenvolvedores
              </a>
              <a href="" className="text-black hover:text-[#1F3473] transition">
                Projetos
              </a>
              <Buttons words="Entrar" />
            </nav>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
