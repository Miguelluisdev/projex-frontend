import { inter } from "@/shared/fonts/inter"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      br: "/pt-BR",
    },
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#FFFFF] text-black/70  antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
