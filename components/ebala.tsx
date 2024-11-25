'use client'

import { content } from '../data/content'
import { cn } from "@/lib/utils"

export function Ebala() {
  return (
    <div className={cn(
      "bg-black text-white w-full py-2 px-4",
      "text-base leading-tight",
      "sm:text-base sm:leading-tight"
    )}>
      <p className="text-center">
        {content.page.ebalaText}
      </p>
    </div>
  )
}
