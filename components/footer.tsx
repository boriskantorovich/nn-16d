'use client'

import { SiInstagram } from '@icons-pack/react-simple-icons'
import { Send } from 'lucide-react'
import Link from 'next/link'
import { analytics } from '@/utils/analytics'
import { content } from '../data/content'

export function FooterComponent() {
  const handleSocialLinkClick = (platform: string) => {
    analytics.trackFooter('Social Link Click', platform);
  };

  return (
    <footer className="w-full bg-black py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <p className="text-white text-sm">
          {content.page.footer.copyright}
        </p>
        <div className="flex items-center space-x-4">
          <Link 
            href="https://instagram.com/nasiliutochkanet/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300"
            onClick={() => handleSocialLinkClick('Instagram')}
          >
            <SiInstagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link 
            href="https://t.me/nn_com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300"
            onClick={() => handleSocialLinkClick('Telegram')}
          >
            <Send size={20} />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
