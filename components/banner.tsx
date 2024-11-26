'use client'

import { content } from '../data/content'

export function Banner() {
  const { hero } = content;
  
  return (
    <div className="bg-custom-red py-8 md:py-12">
      <div className="max-w-[800px] mx-auto px-4 md:px-0 relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left md:leading-normal">
          {hero.title}
        </h2>
        <span 
          className="absolute text-white font-bold"
          style={{
            right: '10px',
            bottom: '-35px',
            transform: 'rotate(-5deg)',
            fontSize: '1.1em',
            padding: '10px 10px 10px 10px'
          }}
        >
          #NoExcuse
        </span>
      </div>
    </div>
  )
} 
