import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

type Shortcut = {
  path: string
  addedAt: number
}

const SHORTCUT_EXPIRY_MS = 2 * 24 * 60 * 60 * 1000 
const STORAGE_KEY = "shortcuts"

const SideShortCutScreen = () => {
  const pathname = usePathname()
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([])


  const addShortcut = (path: string) => {
    const existingShortcuts: Shortcut[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]",
    )
    const now = Date.now()


    if (!existingShortcuts.some((shortcut) => shortcut.path === path)) {
      const updatedShortcuts = [...existingShortcuts, { path, addedAt: now }]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedShortcuts))
      setShortcuts(updatedShortcuts)
    }
  }


  const removeExpiredShortcuts = () => {
    const existingShortcuts: Shortcut[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]",
    )
    const now = Date.now()

    const validShortcuts = existingShortcuts.filter(
      (shortcut) => now - shortcut.addedAt < SHORTCUT_EXPIRY_MS,
    )

    localStorage.setItem(STORAGE_KEY, JSON.stringify(validShortcuts))
    setShortcuts(validShortcuts)
  }


  useEffect(() => {
    removeExpiredShortcuts()


    const handleRouteChange = () => {
      const currentPath = window.location.pathname
      addShortcut(currentPath)
    }


    handleRouteChange()


    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const getShortcutName = (path: string) => {
    const segments = path.split("/").filter(Boolean)
    return segments.length > 0 ? segments[segments.length - 1] : "Home"
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Atalhos</SidebarGroupLabel>
      <SidebarMenu>
        {shortcuts.map((shortcut) => (
          <Link
            key={shortcut.path}
            rel="noopener noreferrer"
            title={shortcut.path}
            href={shortcut.path}
            style={{ display: "block", marginBottom: "8px" }}
            role="navigation"
            className={`link ${
              pathname === shortcut.path ? " font-bold" : ""
            }`}
          >
            {getShortcutName(shortcut.path)}
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default SideShortCutScreen
