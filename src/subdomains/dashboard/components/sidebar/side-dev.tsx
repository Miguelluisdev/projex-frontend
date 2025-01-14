import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Code } from "lucide-react"
import Link from "next/link"

import React from "react"
import { MenuItem } from "./side-initial"

type User = {
  name: string
  email: string
}

const SidebarDevelopers = ({ isCollapsed }: { isCollapsed: boolean }) => {


  const user: User = {
    name: "Carlos Nunes",
    email: "carlos.nunes@example.com",
  }

  return (
    <div className="mt-48 p-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuItem
            icon={<Code className="h-4 w-4" />}
            label="Seu Perfil"
            isCollapsed={isCollapsed}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 rounded-lg bg-white shadow-lg"
          align="start"
          side="bottom"
          sideOffset={8}
        >
          <DropdownMenuLabel className="text-xs text-gray-500">
            Perfil
          </DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
            <Link href="/dashboard/profile">
              <div className="ml-2 flex flex-col cursor-pointer">
                <span className="text-sm font-semibold">{user.name}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => console.log("Editar Perfil")}
            className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <Link href="/dashboard/notificações">Notificações</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("Sair")}
            className="p-2 hover:bg-gray-100 rounded-md text-red-500"
          >
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SidebarDevelopers
