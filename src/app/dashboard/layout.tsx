import { Toaster } from "@/components/ui/toaster"
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
      <main>{children}</main>
      <Toaster />
    </section>
  )
}
