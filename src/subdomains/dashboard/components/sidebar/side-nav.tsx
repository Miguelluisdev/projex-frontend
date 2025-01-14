import { CreditCard, Home, Package, UserRoundCog, Users, Wallet } from "lucide-react"
import { MenuItem } from "./side-initial"

export function SidebarNavigation({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <nav className="flex-1 space-y-1 p-2">
      <MenuItem
        icon={<Home className="h-4 w-4" />}
        label="Página inicial"
        isActive
        isCollapsed={isCollapsed}
        href="/dashboard"
      />
      <MenuItem
        icon={<Wallet className="h-4 w-4" />}
        label="Tasks"
        isCollapsed={isCollapsed}
        href="/dashboard/tarefas"
      />
      <MenuItem
        icon={<Package className="h-4 w-4" />}
        label="Catálogo de projetos"
        isCollapsed={isCollapsed}
        href="/dashboard/projetos"
        isActive
      />
      <MenuItem
        icon={<CreditCard className="h-4 w-4" />}
        label="Graficos"
        isCollapsed={isCollapsed}
        isActive
        href="/dashboard/charts"
      />
      <MenuItem
        icon={<Users className="h-4 w-4" />}
        label="Usuarios"
        isCollapsed={isCollapsed}
        href="/dashboard/users"
        isActive
      />
      <MenuItem
        icon={<UserRoundCog className="h-4 w-4" />}
        label="Permissões"
        isCollapsed={isCollapsed}
        href="/dashboard/permission"
        isActive
      />
    </nav>
  )
}
