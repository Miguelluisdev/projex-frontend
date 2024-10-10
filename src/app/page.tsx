import { Footer } from "@/shared/components/footer"
import { Header } from "@/shared/components/header"
import CallToAction from "@/subdomains/home/components/call-to-action"
import Faq from "@/subdomains/home/components/faq"
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
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  )
}
