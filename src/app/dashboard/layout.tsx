import { Toaster } from "@/components/ui/toaster"
import { Sidebar } from "@/subdomains/dashboard/components/sidebar/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <nav>
        <Sidebar />
      </nav>
      <main>{children}</main>
      <Toaster />
    </section>
  )
}
