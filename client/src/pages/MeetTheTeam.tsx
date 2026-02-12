import { motion } from "framer-motion";
import { Mail, Linkedin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";


export default function MeetTheTeam() {
  const [query, setQuery] = useState("");
  const { t } = useTranslation();

  const team = [
    {
      name: "Adebayo Afure Olubobokun",
      role: t('md'),
      image: '/images/sun.jpeg'
    },
    {
      name: "Omowumi Helen Oduyemi",
      role: t('cto'),
      image: "/images/helen.jpeg"
    },
    {
      name: "Oluwafemi Oluwadurotimi Popoola",
      role: t('coo'),
      image: "/images/femi.jpeg"
    },
    {
      name: "Cynthia Abagwe",
      role: t('space'),
      image: "/images/cynthia.jpeg"
    },
    {
      name: "Agoro Habeeb Adekorede",
      role: t('ict'),
      image: "/images/ade.jpeg"
    },
    {
      name: "Olalekan Sarafa Idris",
      role: t('brand'),
      image: "/images/lekan.jpeg"
    },
    {
      name: "Oladapo Akanji",
      role: t('finance'),
      image: "/images/dap.jpeg"
    }
  ];

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
            {t("meet_team")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base w-8/12 md:max-w-3xl text-white"
          >
            {t("meet_team_skills")}
          </motion.p>
        </div>
      </section>
            
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Field */}
        <div className="relative max-w-full mx-auto mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder={t("look_for")}
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
              {t("member_not_found")}
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
              <h3 className="text-xl font-bold font-display font-poppins text-slate-900 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-muted-foreground font-medium font-poppins">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
