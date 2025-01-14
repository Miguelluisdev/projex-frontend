import { ChevronDown } from "lucide-react"
import Link from "next/link"
import * as React from "react"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  href?: string
  isActive?: boolean
  hasSubmenu?: boolean
  submenuItems?: { label: string; href: string }[]
  isCollapsed?: boolean
  onClick?: () => void
}

export function MenuItem({
  icon,
  label,
  href = "#",
  isActive,
  hasSubmenu,
  submenuItems,
  isCollapsed,
}: MenuItemProps) {
  const [showSubmenu, setShowSubmenu] = React.useState(false)

  return (
    <section
      className="relative"
      onMouseEnter={() => isCollapsed && setShowSubmenu(true)}
      onMouseLeave={() => isCollapsed && setShowSubmenu(false)}
    >
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
          isActive
            ? "text-primary bg-primary/5"
            : "text-gray-600 hover:bg-gray-100"
        } ${isCollapsed ? "justify-center" : ""}`}
        rel="noopener noreferrer"
        role="navigation"
      >
        <div
          className={`${
            isCollapsed ? "w-6 h-6 flex items-center justify-center" : ""
          }`}
        >
          {icon}
        </div>
        {!isCollapsed && <span className="flex-1">{label}</span>}
        {!isCollapsed && hasSubmenu && <ChevronDown className="h-4 w-4" />}
        {isCollapsed && showSubmenu && (
          <div className="absolute left-14 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50">
            <div className="px-3 py-2 text-sm font-medium text-gray-900 border-b">
              {label}
            </div>
            {submenuItems && (
              <div className="mt-1">
                {submenuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </Link>
    </section>
  )
}
