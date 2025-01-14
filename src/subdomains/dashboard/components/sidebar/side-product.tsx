import { BarChart, CreditCard, FileText, MoreHorizontal } from "lucide-react"
import { MenuItem } from "./side-initial"
import { SectionTitle } from "./side-inset"

export function SidebarProducts({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div className="p-2">
      <SectionTitle isCollapsed={isCollapsed}>Produtos</SectionTitle>
      <div className="space-y-1">
        <MenuItem
          icon={<CreditCard className="h-4 w-4" />}
          label="Payments"
          hasSubmenu
          isCollapsed={isCollapsed}
        />
        <MenuItem
          icon={<FileText className="h-4 w-4" />}
          label="Billing"
          hasSubmenu
          isCollapsed={isCollapsed}
        />
        <MenuItem
          icon={<BarChart className="h-4 w-4" />}
          label="Relatórios"
          hasSubmenu
          isCollapsed={isCollapsed}
        />
        <MenuItem
          icon={<MoreHorizontal className="h-4 w-4" />}
          label="Mais"
          hasSubmenu
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  )
}
