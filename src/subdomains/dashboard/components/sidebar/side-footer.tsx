import React, { useEffect, useState } from "react"
import { BarChart, Clock, LayoutGrid, Link2, Shield } from "lucide-react"
import { MenuItem } from "./side-initial"
import { SectionTitle } from "./side-inset"
import { usePathname } from "next/navigation"

type Shortcut = {
  path: string
  addedAt: number
}

const SHORTCUT_EXPIRY_MS = 2 * 24 * 60 * 60 * 1000 // 2 dias
const STORAGE_KEY = "shortcuts"

export function SidebarShortcuts({ isCollapsed }: { isCollapsed: boolean }) {
  const pathname = usePathname()
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([])

  const addShortcut = (path: string) => {
    const existingShortcuts: Shortcut[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
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
      localStorage.getItem(STORAGE_KEY) || "[]"
    )
    const now = Date.now()

    const validShortcuts = existingShortcuts.filter(
      (shortcut) => now - shortcut.addedAt < SHORTCUT_EXPIRY_MS
    )

    localStorage.setItem(STORAGE_KEY, JSON.stringify(validShortcuts))
    setShortcuts(validShortcuts)
  }

  const getShortcutName = (path: string) => {
    const segments = path.split("/").filter(Boolean)
    return segments.length > 0 ? segments[segments.length - 1] : "Home"
  }

  useEffect(() => {
    removeExpiredShortcuts()
    addShortcut(pathname)

    const handleRouteChange = () => {
      const currentPath = window.location.pathname
      addShortcut(currentPath)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [pathname])

  return (
    <div className="p-2">
      <SectionTitle isCollapsed={isCollapsed}>Atalhos</SectionTitle>
      <div className="space-y-1">
        {shortcuts.map((shortcut) => (
          <MenuItem
            key={shortcut.path}
            icon={<LayoutGrid className="h-4 w-4" />}
            label={getShortcutName(shortcut.path)}
            isCollapsed={isCollapsed}
            onClick={() => (window.location.href = shortcut.path)}
          />
        ))}
      </div>
    </div>
  )
}
