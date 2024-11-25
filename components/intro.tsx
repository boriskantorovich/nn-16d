'use client'

import { content } from '../data/content'

export function IntroComponent() {
  const { intro } = content;
  
  return (
    <div className="flex flex-col items-center bg-custom-red py-8 px-4 md:px-8">
      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-[800px] w-full">
        <div className="text-left">
          <p className="text-base md:text-lg">{intro.text}</p>
        </div>
      </div>
    </div>
  )
} 
