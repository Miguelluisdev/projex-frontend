import { Footer } from "@/shared/components/footer"

import { Header } from "@/shared/components/header"
import Faq from "@/subdomains/home/components/faq"

import { HeroGrid } from "@/subdomains/home/components/hero-grid"
import { ProductShowcase } from "../subdomains/home//index"
import {
  CallToAction,
  CardInfo,
  LogoTicker,
} from "../subdomains/home/index"

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroGrid />
      <LogoTicker />
      <CardInfo />
      <ProductShowcase />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  )
}
