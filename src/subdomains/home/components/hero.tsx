"use client"
import { Buttons } from "@/shared/components/button"
import { easeInOut, motion, useScroll } from "framer"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function HeroSection() {
  return (
    <section className=" h-full flex items-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className=" space-y-6 text-center md:text-left">
          <p className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Open Source
          </p>
          <h1 className="text-5xl md:text-5xl tracking-tighter lg:text-6xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] mx-auto tracking-tight mt-6 max-w-md lg:mx-0">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex flex-col sm:flex-row gap-1 justify-center lg:justify-start">
            <Link href="#">
              <Buttons words="Acesso gratuito" />
            </Link>
            <Link
              href="#"
              className="text-[#010D3E] px-6 font-semibold  transition duration-300 flex items-center justify-center"
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
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <motion.img
            src="/Visual.png"
            alt="Productivity app 3D objects"
            width={400}
            className="w-full h-auto"
            animate={{
              translateY: [-30, 10],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: easeInOut,
            }}
          />
        </div>
      </div>
    </section>
  )
}
