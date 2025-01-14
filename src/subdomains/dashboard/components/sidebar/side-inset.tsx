interface SectionTitleProps {
  children: React.ReactNode
  isCollapsed: boolean
}

export function SectionTitle({ children, isCollapsed }: SectionTitleProps) {
  if (isCollapsed) return null
  return <div className="mb-2 px-3  font-medium text-gray-500">{children}</div>
}
