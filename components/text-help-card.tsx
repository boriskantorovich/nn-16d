'use client'

export function TextHelpCard() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 max-w-[800px] w-full mx-auto">
      <div className="relative">
        <p 
          className="text-xl md:text-2xl text-black text-left relative inline"
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
          В этом году Центр начал работать на весь мир: пострадавшие за рубежом также могут получить помощь онлайн.
        </p>
      </div>
    </div>
  )
} 
