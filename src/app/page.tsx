import { Header } from "@/shared/components/header"
import HeroSection from "@/subdomains/home/components/hero"
import LogoTicker from "@/subdomains/home/components/logo-ticker"
import { ProductShowcase } from "@/subdomains/home/components/product-showcase"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <LogoTicker />
      <ProductShowcase />
    </main>
  )
}
