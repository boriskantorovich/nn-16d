'use client'

import { content } from '../data/content'

export function CtaComponent() {
  const { cta } = content;
  
  return (
    <div className="flex flex-col items-center bg-custom-red py-8 px-4 md:px-8">
      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-[800px] w-full">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
          <p className="text-base md:text-lg mb-4">
            {cta.subtitle}
          </p>
          {cta.statistics.map((stat: string, index: number) => (
            <p 
              key={index} 
              className="text-base md:text-lg mb-4" 
              dangerouslySetInnerHTML={{ __html: stat }} 
            />
          ))}
          {cta.mainText.map((text: string, index: number) => (
            <p 
              key={index} 
              className="text-base md:text-lg mb-4" 
              dangerouslySetInnerHTML={{ __html: text }} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
