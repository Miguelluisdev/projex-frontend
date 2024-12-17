import { Footer } from "@/shared/components/footer"
import { Header } from "@/shared/components/header"
import { CardInfo } from "../subdomains/home/index"
import Faq from "@/subdomains/home/components/faq"
import { HeroSection } from "../subdomains/home/index"
import { LogoTicker } from "../subdomains/home/index"
import { ProductShowcase } from "../subdomains/home//index"
import { CallToAction } from "../subdomains/home/index"

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <LogoTicker />
      <CardInfo />
      <ProductShowcase />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  )
}
