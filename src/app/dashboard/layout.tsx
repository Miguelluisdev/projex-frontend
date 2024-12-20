import SideBar from "@/subdomains/dashboard/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-lvw h-dvh flex flex-col">
      <nav>
        <SideBar />
      </nav>
      {children}
    </section>
  )
}
