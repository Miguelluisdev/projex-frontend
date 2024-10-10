import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react"

const Faq = () => {
  return (
    <section className="text-black flex items-center justify-center bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] pb-5 overflow-x-clip">
      <div className="container">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-[#472D59] to-[#001E80] text-transparent bg-clip-text mt-5">
          Perguntas frequentes
        </h2>
        <div className="flex justify-center mt-10">
          <Accordion type="single" collapsible className="max-w-[540px] w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl md:text-2xl leading-tight tracking-wide">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed tracking-wide">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl md:text-2xl leading-tight tracking-wide">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed tracking-wide">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl md:text-2xl leading-tight tracking-wide">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed tracking-wide">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
