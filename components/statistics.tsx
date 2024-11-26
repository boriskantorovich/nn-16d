'use client'

import { content } from '../data/content'

export function StatisticsComponent() {
  const { statistics } = content;
  
  return (
    <div className="p-6 md:p-10 rounded-lg max-w-4xl mx-auto text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{statistics.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {statistics.stats.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-4xl md:text-5xl font-bold">{stat.number}</span>
            <span className="text-lg md:text-xl whitespace-pre-line">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
