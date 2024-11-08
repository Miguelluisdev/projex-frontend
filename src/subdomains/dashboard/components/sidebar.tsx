"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import * as React from "react"
import SideDropdown from "./side-dropdown"
import SideFooter from "./side-footer"
import SideInset from "./side-inset"
import SidePlataform from "./side-plataform"
import SideProjects from "./side-projects"
import SideShortCutScreen from "./side-shortcut-screen"

export default function SideBar() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SideDropdown />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidePlataform />
          <SideShortCutScreen />
          <SideProjects />
        </SidebarContent>
        <SideFooter />
        <SidebarRail />
      </Sidebar>
      {/* sideInset fica o conteudo do dashboard */}
      <SideInset />
    </SidebarProvider>
  )
}
