import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react"

const Faq = () => {
  return (
    <section
      className="text-black flex items-center justify-center bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] pb-5 overflow-x-clip"
      aria-labelledby="faq-title"
    >
      <div className="container">
        <h2
          id="faq-title"
          className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-[#472D59] to-[#001E80] text-transparent bg-clip-text mt-5"
        >
          Perguntas Frequentes
        </h2>
        <div className="flex justify-center mt-10">
          <Accordion
            type="single"
            collapsible
            className="max-w-[540px] w-full"
            aria-label="Lista de perguntas frequentes sobre o Projex"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className="text-xl md:text-2xl leading-tight tracking-wide"
                aria-expanded="false"
                aria-controls="faq-content-1"
              >
                O Projex é fácil de usar?
              </AccordionTrigger>
              <AccordionContent
                id="faq-content-1"
                className="leading-relaxed tracking-wide"
              >
                Sim, o Projex foi projetado para ser intuitivo e acessível para
                todos, com uma interface simples e ferramentas fáceis de usar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger
                className="text-xl md:text-2xl leading-tight tracking-wide"
                aria-expanded="false"
                aria-controls="faq-content-2"
              >
                Meus dados estão seguros no Projex?
              </AccordionTrigger>
              <AccordionContent
                id="faq-content-2"
                className="leading-relaxed tracking-wide"
              >
                Com certeza. Utilizamos criptografia ponta a ponta e
                implementamos práticas rigorosas de segurança para proteger seus
                dados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger
                className="text-xl md:text-2xl leading-tight tracking-wide"
                aria-expanded="false"
                aria-controls="faq-content-3"
              >
                Posso usar o Projex com minha equipe?
              </AccordionTrigger>
              <AccordionContent
                id="faq-content-3"
                className="leading-relaxed tracking-wide"
              >
                Sim! O Projex permite colaboração em equipe, facilitando o
                acompanhamento de tarefas e metas em grupo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
