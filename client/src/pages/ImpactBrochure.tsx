import React from 'react'
import { motion } from "framer-motion";


function ImpactBrochure() {
  return (
    <div className="min-h-screen pt-20">
        {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* office collaboration people working */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 text-white font-poppins"
          >
            We are Impact Makers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed font-light"
          >
            The dreamers, doers, thinkers, and leaders committed to building a just and sustainable society in Ibadan and beyond.
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default ImpactBrochure