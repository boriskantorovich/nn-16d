'use client'

import Image from 'next/image';
import { content } from '../data/content'

export function Team() {
  const { team } = content;
  
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{team.title}</h2>
      <div className="space-y-8">
        {team.members.map((member, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 128px, 192px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: team.footer }} />
    </div>
  )
}
