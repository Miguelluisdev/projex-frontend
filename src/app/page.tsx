import { Header } from "@/shared/components/header"
import HeroSection from "@/subdomains/home/hero"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
    </main>
  )
}
