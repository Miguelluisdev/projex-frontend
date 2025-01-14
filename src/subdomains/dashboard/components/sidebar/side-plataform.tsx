import SideDropdown from "./side-dropdown"

export function SidebarHeader({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div className="p-4">
      <SideDropdown isCollapsed={isCollapsed} />
    </div>
  )
}
