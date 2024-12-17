"use client"
import { Buttons } from "@/shared/components/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      aria-labelledby="cta-title"
    >
      <div className="container">
        <div className="relative flex flex-col items-center justify-center text-center">
          <h2
            id="cta-title"
            className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
          >
            Crie sua conta grátis
          </h2>
          <p
            className="text-xl text-[#010D3E] mx-auto tracking-tight mt-6 max-w-xl"
            aria-label="Descrição do call to action"
          >
            Gerencie seus projetos de forma fácil e intuitiva. Mantenha sua
            equipe alinhada e acompanhe o progresso em tempo real com o Projex.
          </p>
          <motion.img
            src="/emojistar1.png"
            alt="Emoji de estrela representando sucesso"
            width={360}
            height={360}
            className="absolute hidden md:block -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
            aria-hidden="true"
          />
          <motion.img
            src="/helix2.png"
            alt="Ilustração de hélice 3D decorativa"
            width={360}
            height={360}
            className="absolute hidden md:block -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
            aria-hidden="true"
          />
        </div>

        <div className="flex gap-4 mt-10 justify-center">
          <Link href="/sign-up">
            <Buttons
              words="Criar conta"
              aria-label="Clique para criar uma conta"
            />
          </Link>
          <Link
            href="/about"
            className="text-[#010D3E] px-6 font-semibold transition flex items-center justify-center"
            aria-label="Saiba mais sobre o Projex"
          >
            Saiba mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
