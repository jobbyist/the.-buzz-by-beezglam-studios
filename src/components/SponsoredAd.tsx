'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface SponsoredAdProps {
  size?: 'small' | 'medium' | 'large'
}

export function SponsoredAd({ size = 'medium' }: SponsoredAdProps) {
  const sizeClasses = {
    small: 'py-8',
    medium: 'py-12',
    large: 'py-16'
  }

  const contentSizeClasses = {
    small: 'h-24',
    medium: 'h-32',
    large: 'h-48'
  }

  return (
    <section className={`relative ${sizeClasses[size]} bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Sponsored Label */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
              <span className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
              Sponsored
              <span className="w-2 h-2 bg-muted-foreground/40 rounded-full" />
            </span>
          </div>

          {/* Ad Placeholder */}
          <div 
            role="img"
            aria-label="Advertisement placeholder"
            className={`relative ${contentSizeClasses[size]} max-w-6xl mx-auto bg-card border-2 border-dashed border-muted-foreground/20 rounded-xl overflow-hidden group hover:border-muted-foreground/40 transition-all duration-300`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="w-full h-full" 
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-muted-foreground/50">
                  Advertisement Space
                </div>
                <div className="text-sm text-muted-foreground/40 flex items-center justify-center gap-2">
                  <span>Your brand here</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom Border Accent */}
          <div className="flex justify-center mt-4 gap-2">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
