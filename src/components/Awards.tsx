'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Awards() {
  const logoPlaceholders = [
    { delay: "0s" },
    { delay: "0.5s" },
    { delay: "1s" },
    { delay: "1.5s" },
    { delay: "2s" },
    { delay: "2.5s" }
  ]

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      


      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              POWERED BY BEEZGLAM STUDIOS
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Partners & Affiliates
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Celebrated excellence in AI-powered film production
          </p>
        </div>

        {/* Logo Placeholders Display */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Logo Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {logoPlaceholders.map((placeholder, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                {/* Logo Frame */}
                <div className="relative mb-6 w-full">
                  
                  {/* Framed Logo Placeholder */}
                  <div className="relative p-8 rounded-2xl border-4 border-gray-300 shadow-lg transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white via-gray-50 to-gray-100"
                       style={{ 
                         boxShadow: '0 8px 24px rgba(0,0,0,0.12), inset 0 2px 4px rgba(255,255,255,0.8)'
                       }}>
                    
                    {/* Logo Placeholder Content */}
                    <div className="w-full aspect-video flex items-center justify-center bg-gray-200 rounded-lg border-2 border-gray-300"
                         style={{
                           minHeight: '150px'
                         }}>
                      <div className="text-center">
                        <div className="text-4xl font-black text-gray-400 mb-2">LOGO</div>
                        <div className="text-sm text-gray-500">Partner Logo Here</div>
                      </div>
                    </div>
                    
                    {/* Frame decorative elements */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent-blue" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent-blue" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent-purple" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent-purple" />

                  </div>
                  
                  {/* Floating Animation */}
                  <div className="float-gentle absolute inset-0 pointer-events-none" />
                </div>

              </motion.div>
            ))}
          </div>

        </div>


      </div>
      
    </section>
  )
}