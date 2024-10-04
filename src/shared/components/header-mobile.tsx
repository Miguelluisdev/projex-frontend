import {
  Sheet,
  SheetContent,
  SheetDescription,

  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"


export const HeaderMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-10 h-10 md:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-black border-none">
        <SheetDescription>
          <div className="">
            <nav className="flex mt-40 flex-col justify-between items-center gap-8 text-sm ">
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
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
