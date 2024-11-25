'use client'

import Image from 'next/image';
import { content } from '../data/content'

export function MediaMentionsComponent() {
  const { mediaMentions } = content;
  
  return (
    <div className="w-full max-w-[900px] mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">О НАС ПИШУТ</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12 justify-items-center">
        {mediaMentions.logos.map((media, index) => (
          <div key={index} className="flex">
            <div className={`w-24 h-24 md:w-28 md:h-28 bg-white flex items-center justify-center ${index % 2 === 0 ? 'overflow-visible' : 'overflow-hidden'}`}>
              <div className={`relative w-full h-full`}>
                <Image
                  src={media.logo}
                  alt={media.name}
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
