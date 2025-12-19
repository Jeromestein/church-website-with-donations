import Image from "next/image"
import { cn } from "@/lib/utils"

type ChurchLogoProps = {
  className?: string
  imageClassName?: string
  textClassName?: string
}

export function ChurchLogo({ className, imageClassName, textClassName }: ChurchLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/web-app-manifest-512x512.png"
        alt="Dynamic Evangelism Church logo"
        width={48}
        height={48}
        className={cn("h-10 w-10", imageClassName)}
        priority
      />
      <span className={cn("text-lg font-bold leading-tight text-accent", textClassName)}>
        Dynamic Evangelism Church
      </span>
    </div>
  )
}
