"use client"
import { logos } from "@/shared/data/logo-ticker-data"
import { motion } from "framer"
import Image from "next/image"

export const LogoTicker = () => {
  return (
    <section className="py-5 bg-white md:py-9">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={50}
                  height={50}
                  className="h-10 w-10"
                />
                <span>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
