"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
      aria-labelledby="showcase-title"
    >
      <div className="container">
        <header className="max-w-[540px] mx-auto text-center">
          <div className="flex justify-center">
            <span
              className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight"
              aria-label="Maximize seus projetos"
            >
              Maximize seus projetos
            </span>
          </div>
          <h2
            id="showcase-title"
            className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5"
          >
            Uma forma mais eficiente de gerenciar e acompanhar seus projetos
          </h2>
          <p
            className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5"
            aria-label="Descrição sobre o Projex"
          >
            Transforme suas ideias em projetos bem-estruturados e organizados. O
            Projex oferece ferramentas completas para planejar, gerenciar e
            alcançar seus objetivos com facilidade e eficiência.
          </p>
        </header>

        <div
          className="relative"
          role="img"
          aria-label="Imagens de demonstração do Projex"
        >
          <Image
            src="/product-image.png"
            alt="Interface do dashboard do Projex"
            width={1920}
            height={1080}
            quality={100}
            className="mt-10"
          />
          <motion.img
            src="/pyramid1.png"
            alt="Ilustração 3D de uma pirâmide flutuante"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
            aria-hidden="true"
          />
          <motion.img
            src="/torus1.png"
            alt="Ilustração 3D de um torus flutuante"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
