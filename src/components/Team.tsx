'use client'

import { motion } from 'framer-motion'
import { Instagram, Play, Heart, MessageCircle, Share2 } from 'lucide-react'

export function Team() {
  const instagramReels = [
    {
      id: 1,
      title: "Latest Performance",
      description: "Amazing live performance showcase",
      views: "12.5K",
      likes: "2.3K",
      thumbnailGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Behind The Scenes",
      description: "Studio session highlights",
      views: "8.7K",
      likes: "1.8K",
      thumbnailGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Artist Spotlight",
      description: "Featured talent showcase",
      views: "15.2K",
      likes: "3.1K",
      thumbnailGradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Live Event",
      description: "Community gathering moments",
      views: "10.1K",
      likes: "2.5K",
      thumbnailGradient: "from-green-500 to-teal-500"
    }
  ]

  return (
    <div className="relative py-32 bg-background w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Recent Highlights
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            Latest from @the.buzz_sandton
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Catch up on our latest content, performances, and behind-the-scenes moments
          </p>

          {/* Instagram Follow Button */}
          <a
            href="https://www.instagram.com/the.buzz_sandton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            Follow @the.buzz_sandton
          </a>
        </div>

        {/* Instagram Reels Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Reel Container - Instagram style vertical */}
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-black">
                  
                  {/* Thumbnail with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reel.thumbnailGradient} opacity-80`} />
                  
                  {/* Placeholder for reel content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <div className="text-sm font-semibold px-4">{reel.title}</div>
                    </div>
                  </div>

                  {/* Instagram Reel Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-semibold">@the.buzz_sandton</span>
                      </div>
                      <p className="text-xs mb-2">{reel.description}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          {reel.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {reel.likes}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Instagram Reel Actions - Right Side */}
                  <div className="absolute right-3 bottom-20 flex flex-col gap-4">
                    <button className="text-white hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7" />
                    </button>
                    <button className="text-white hover:scale-110 transition-transform">
                      <MessageCircle className="w-7 h-7" />
                    </button>
                    <button className="text-white hover:scale-110 transition-transform">
                      <Share2 className="w-7 h-7" />
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Click to View on Instagram */}
                <a
                  href="https://www.instagram.com/the.buzz_sandton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-label={`View ${reel.title} on Instagram`}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Want to see more? Follow us on Instagram for daily updates!
            </p>
            <a
              href="https://www.instagram.com/the.buzz_sandton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Full Instagram Feed
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}