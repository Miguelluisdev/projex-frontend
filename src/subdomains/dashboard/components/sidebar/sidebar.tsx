"use client"
import { ChevronDown } from "lucide-react"
import * as React from "react"
import SidebarDevelopers  from "./side-dev"
import { SidebarShortcuts } from "./side-footer"
import { SidebarNavigation } from "./side-nav"
import { SidebarHeader } from "./side-plataform"
import { SidebarProducts } from "./side-product"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <aside
      className={`relative flex flex-col border-r border-gray-200 bg-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="absolute -right-3 top-6 flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm"
        aria-label={isCollapsed ? "Expandir" : "Recolher"}
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isCollapsed ? "rotate-90" : "-rotate-90"
          }`}
        />
      </button>
      <SidebarHeader isCollapsed={isCollapsed} />
      <SidebarNavigation isCollapsed={isCollapsed} />
      <SidebarShortcuts isCollapsed={isCollapsed} />
      <SidebarProducts isCollapsed={isCollapsed} />
      <SidebarDevelopers isCollapsed={isCollapsed} />
    </aside>
  )
}
