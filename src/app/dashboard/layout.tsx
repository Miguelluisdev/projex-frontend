import SideBar from "@/subdomains/dashboard/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-screen h-screen flex flex-col">
      <nav>
        <SideBar />
      </nav>
      {children}
    </section>
  )
}
