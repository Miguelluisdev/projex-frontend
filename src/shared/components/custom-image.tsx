import { ClassValue } from "clsx"
import Image from "next/image"
import React from "react"
import { cn } from "../lib/utils"

interface CustomImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string
  width: number
  height: number
  quality?: number
  className: string
  alt: string
}

const CustomImage = (props: CustomImageProps) => {
  return (
    <aside>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        quality={props.quality}
        alt={props.alt}
        className={cn("", props.className)}
      />
    </aside>
  )
}

export default CustomImage
