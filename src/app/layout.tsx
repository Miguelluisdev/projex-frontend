import { inter } from "@/shared/fonts/inter"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Projex",
    template: "Gerenciador de projetos pessoais",
  },
  keywords: "Gerenciador , Projetos , Gerenciador de projetos pessoais",
  description: "Gerencie seus projetos pessoais",
  openGraph: {
    title: "Projex",
    description: "Gerenciador de projetos",
    type: "website",
    locale: "pt-br",
    url: "http://localhost:3000",
    siteName: "Projex",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EAEEFE] text-black/70  antialiased`}>
        {children}
      </body>
    </html>
  )
}
