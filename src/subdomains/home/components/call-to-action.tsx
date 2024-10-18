"use client"
import { Buttons } from "@/shared/components/button"
import { motion, useScroll, useTransform } from "framer"
import Link from "next/link"
import { useRef } from "react"

export   const CallToAction = () => {
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
    >
      <div className="container ">
        <div className="relative flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter  font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Faça a conta gratís
          </h2>
          <p className="text-xl text-[#010D3E] mx-auto tracking-tight mt-6 max-w-xl lg:mx-0">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src="/emojistar1.png"
            alt=""
            width={360}
            height={360}
            className="absolute hidden md:block -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src="/helix2.png"
            alt=""
            width={360}
            height={360}
            className="absolute hidden md:block  -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Link href="#">
            <Buttons words="Criar conta " />
          </Link>
          <Link
            href="#"
            className="text-[#010D3E] px-6 font-semibold  transition flex items-center justify-center"
          >
            Learn more
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


