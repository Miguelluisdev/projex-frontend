import { FlipWords } from "@/components/ui/flip-words"
import React from "react"
import { words } from "../types/word"

export function HeroGrid() {
  return (
    <section
      className="h-[40rem] w-full shadow-none dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center"
      aria-labelledby="hero-heading"
      role="region"
    >
      <div
        className="container mx-auto absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        aria-hidden="true"
      ></div>
      <div className="text-4xl md:text-5xl px-8 py-8 tracking-tighter lg:text-7xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
        <h1 id="hero-heading">
          Projex -
          <span className="sr-only">Gerencie seus projetos pessoais com </span>
          <FlipWords words={words} /> <br />
          <span className="sr-only">uma solução prática e moderna</span>
          gerencie seus projetos pessoais
        </h1>
      </div>
    </section>
  )
}
