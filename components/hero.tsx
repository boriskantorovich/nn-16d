'use client'

import Link from 'next/link'
import Image from 'next/image'
import { analytics } from '@/utils/analytics'
import { content } from '../data/content'

export function HeroComponent() {
  const { hero } = content;

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    analytics.trackHero('Learn More Click');
    const learnMoreSection = document.getElementById('learn-more');
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    analytics.trackHero('Donate Button Click');
    const donateSection = document.getElementById('donate-now');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[700px] md:h-[800px] flex flex-col justify-between items-center p-6 pb-16 text-white font-sans">
      <Image
        src="/images/hero/hero-background.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-[900px] w-full h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-left leading-tight">
            {hero.title}
          </h1>
          <p className="text-base md:text-lg mb-6 text-left" dangerouslySetInnerHTML={{ __html: hero.subtitle }}></p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-start">
            <button 
              className="w-full md:w-[400px] bg-custom-red hover:bg-custom-red-hover text-white font-bold py-3 md:py-4 px-6 rounded-full transition duration-300 text-lg md:text-xl"
              onClick={handleDonateClick}
            >
              <span className="block text-center">{hero.buttons.donate}</span>
            </button>
            <Link 
              href="#learn-more" 
              className="text-base md:text-lg underline mt-4 md:mt-0 md:ml-12 text-center md:text-left whitespace-nowrap" 
              onClick={handleLearnMoreClick}
            >
              {hero.buttons.learnMore}
            </Link>
          </div>
        </div>
        <p className="text-base md:text-lg text-left">
          В эти даты особенно важно говорить о насилии в отношении женщин, привлекать внимание к теме и ее актуальности, так как эта проблема в России только усугубляется.
        </p>
      </div>
    </div>
  )
}
