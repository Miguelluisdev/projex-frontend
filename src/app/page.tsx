import { Footer } from "@/shared/components/footer"

import Header from "@/shared/components/header"
import Faq from "@/subdomains/home/components/faq"
import { ProductShowcase } from "../subdomains/home//index"
import {
  CallToAction,
  CardInfo,
  HeroSection,
  LogoTicker,
} from "../subdomains/home/index"

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
