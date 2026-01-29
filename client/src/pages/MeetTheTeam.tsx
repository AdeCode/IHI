import { motion } from "framer-motion";
import { Mail, Linkedin, Search } from "lucide-react";
import { useMemo, useState } from "react";

const team = [
  {
    name: "Adebayo Olubobokun",
    role: "MD/CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    name: "Omowumi Helen Oduyemi",
    role: "Chief Trade Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Gloria Okoye",
    role: "Program Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Banke Adeoye",
    role: "Space Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    name: "Jesus Alleluyanatha-Anozia",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
  },
  {
    name: "Karina Karunwi",
    role: "Service Delivery",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80"
  },
  {
    name: "Stella Ashi",
    role: "Community Host",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  }
];

export default function MeetTheTeam() {
  const [query, setQuery] = useState("");

  const filteredTeam = useMemo(() => {
    return team.filter(member =>
      member.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen pt-5 md:pt-3">
      <section className="bg-[#41BED0] py-16 md:py-24 text-white md:min-h-[56vh]">
        <div className="max-w-full px-5 md:px-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[4.8vw] leading-[1.1em] font-poppins font-bold mb-6 text-[#EDEFF2]"
          >
            Meet the team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base w-8/12 md:max-w-3xl text-white"
          >
            Our skills and personalities are as diverse as our locations, yet we are united by our common commitment to support the growth and well-being of our community in Ibadan.
          </motion.p>
        </div>
      </section>
            
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Field */}
        <div className="relative max-w-full mx-auto mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="I'm looking for..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full bg-slate-100 pl-12 pr-6 py-4
                      text-base outline-none
                      focus:ring-2 focus:ring-primary/30
                      placeholder:text-muted-foreground"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTeam.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground text-lg">
              No team member found
            </p>
          )}
          {filteredTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 bg-slate-100">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 duration-500" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Social Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex gap-4 justify-center bg-gradient-to-t from-black/80 to-transparent">
                  <button className="bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-muted-foreground font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
