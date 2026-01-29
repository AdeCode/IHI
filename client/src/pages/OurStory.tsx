import { motion } from "framer-motion";
import { Users, Globe2, Lightbulb } from "lucide-react";

export default function OurStory() {
  return (
    <div className="min-h-screen md:pt-5 font-poppins">
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

      {/* Mission */}
      <section className="pb-24 bg-white">
        <div className="max-full font-poppins">
          <div className="mb-16 flex flex-col md:flex-row bg-[#7EBB55] py-28 px-4 md:px-24">
            <h2 className="text-xl md:text-2xl font-poppins font-normal leading-relaxed mb-12 text-white w-full md:w-2/5">
              We believe that the world's biggest problems cannot be solved by one organization but by collaboration, connectivity and community.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-3/5">
              <div className="text-center md:p-6 rounded-2xl">
                <div className="text-6xl font-bold text-white mb-2">280+</div>
                <div className="text-white font-medium uppercase tracking-wide">Impact Makers</div>
              </div>
              <div className="text-center md:p-6 rounded-2xl">
                <div className="text-6xl font-bold text-white mb-2">80+</div>
                <div className="text-white font-medium uppercase tracking-wide">Impact Hubs</div>
              </div>
              <div className="text-center md:p-6 rounded-2xl">
                <div className="text-6xl font-bold text-white mb-2">5+</div>
                <div className="text-white font-medium uppercase tracking-wide">Years of Impact</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-16 font-poppins">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold font-poppins">Turning Ideas to Lasting Impact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We inspire, connect, and enable Impact Makers worldwide. Together, our mission is to build a just and sustainable world where business and profit serve people and the planet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Ibadan, we provide a unique ecosystem of resources, inspiration, and collaboration opportunities to grow the positive impact of your work.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4" />
              {/* diverse team meeting discussion */}
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80" 
                alt="Impact Hub Community" 
                className="rounded-2xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
