import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import React from "react"

type Props = {}

const SideShortCutScreen = (props: Props) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Atalhos</SidebarGroupLabel>
      <SidebarMenu></SidebarMenu>
    </SidebarGroup>
  )
}

export default SideShortCutScreen
