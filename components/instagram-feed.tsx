'use client'

import { useEffect } from 'react'
import { analytics } from '@/utils/analytics'

const INSTAGRAM_POSTS = [
  'https://www.instagram.com/p/DCyXAm0CGK0/',
  'https://www.instagram.com/p/DCqroYGi56_/',
  'https://www.instagram.com/p/DCHBObcCKQq/'
];

export function InstagramFeed() {
  useEffect(() => {
    // Track that the Instagram feed was viewed
    analytics.trackInstagram('View', 'Instagram Feed Loaded');

    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Add click interceptor after embed loads
    script.onload = () => {
      document.querySelectorAll('.instagram-post-container').forEach((container, index) => {
        container.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          // Track carousel navigation
          if (target.closest('.coreSpriteRightChevron')) {
            analytics.trackInstagram('Next Photo', INSTAGRAM_POSTS[index]);
          } else if (target.closest('.coreSpriteLeftChevron')) {
            analytics.trackInstagram('Previous Photo', INSTAGRAM_POSTS[index]);
          } else {
            // Track attempted post interaction
            analytics.trackInstagram('Post Interaction Attempted', INSTAGRAM_POSTS[index]);
            e.preventDefault();
            e.stopPropagation();
          }
        }, true);
      });
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSTAGRAM_POSTS.map((postUrl, index) => (
          <div 
            key={index} 
            className="instagram-post-container" 
            style={{ minHeight: '600px' }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
              data-instgrm-captioned
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                margin: '0',
                maxWidth: '100%',
                minWidth: '280px',
                padding: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 
