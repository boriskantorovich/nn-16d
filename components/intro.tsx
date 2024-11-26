'use client'

import { content } from '../data/content'

export function IntroComponent() {
  const { intro } = content;
  
  return (
    <div className="flex flex-col items-center bg-white py-8 px-4 md:px-8">
      <div className="max-w-[800px] w-full relative">
        <p 
          className="text-base md:text-lg text-black text-left relative inline"
          style={{
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
            background: '#FFC8A9',
            padding: '0.15em 4px',
            lineHeight: '1.6',
            display: 'inline',
            marginBottom: '0.15em'
          }}
        >
          {intro.text}
        </p>
        <span 
          className="absolute text-custom-red font-bold"
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
