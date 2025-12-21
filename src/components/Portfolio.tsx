'use client'

import { Play, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Featured Work
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Latest Projects</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Check out the official music video for "HIM", a collaborative single by Southside Mohammed (featuring Jordan Ajibade) off his recent EP release, "Where The Bad Guys Fly" - executive production by 808x and visual production by THE. BUZZ. Watch the video on Youtube or listen to the EP on all major streaming platforms.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow">
            {/* Video Embed */}
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/wsxrEpfstX4?rel=0&showinfo=0&modestbranding=1"
                  title="Southside Mohammed - HIM (feat. Jordan Ajibade)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-t-3xl"
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute top-6 right-6">
                <span className="glass-effect rounded-xl px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Latest Project
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                    Music Video
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Artist: Southside Mohammed ft. Jordan Ajibade
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  HIM
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Official music video for "HIM", a collaborative single by Southside Mohammed featuring Jordan Ajibade from the EP "Where The Bad Guys Fly". Executive production by 808x and visual production by THE. BUZZ.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Industry</span>
                    <span className="font-medium">Music Video</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Style</span>
                    <span className="font-medium">Hip Hop/R&B</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Production</span>
                    <span className="font-medium">808x / THE. BUZZ</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Format</span>
                    <span className="font-medium">Official Music Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}