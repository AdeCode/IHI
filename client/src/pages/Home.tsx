import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Briefcase, Globe, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


// const words = [
//   { text: "innovation.", className: "text-[#1C395C] bg-clip-text bg-gradient-to-r from-primary to-accent" },
//   { text: "connection.", className: "text-[#1C395C]" },
//   { text: "collaboration.", className: "text-[#1C395C]" },
//   { text: "Impact Makers.", className: "text-[#1C395C]" },
// ];

export default function Home() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  // Pull array from translation file
  const translatedWords = t("animatedWords", { returnObjects: true }) as string[];

  // Rebuild words array dynamically
  const words = useMemo(
    () =>
      translatedWords.map((word) => ({
        text: word,
        className:
          "text-[#1C395C] bg-clip-text bg-gradient-to-r from-primary to-accent",
      })),
    [translatedWords]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2s

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };




  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F3F5F8]">
        {/* Abstract Background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0" />
        <div className="absolute inset-0 opacity-20 
          bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] 
          bg-cover bg-center mix-blend-overlay" 
        /> */}

        {/* Animated Shapes */}
        {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" /> */}

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <h1 className="font-poppins text-5xl md:text-7xl font-bold text-black leading-tight">
              {/* Our world needs more<br /> */}
              {t("hero_title")}<br />

              <div className="relative h-[1.2em] overflow-hidden flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`absolute flex text-center ${words[index].className}`}
                  >
                    {words[index].text.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        className="whitespace-pre"
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span
                      className="ml-0.5 inline-block w-[2px] h-[1.0em] bg-current animate-[blink_1s_step-end_infinite]"
                    />
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <motion.p variants={fadeIn} className="text-xl text-black max-w-2xl mx-auto">
              {t("hero_subtitle")}
            </motion.p>

            {/* <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact-us">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg shadow-xl shadow-primary/20">
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-lg">
                Explore Programs
              </Button>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 md:px-0 bg-[#41BED0] md:mx-0 shadow-2xl z-20 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-5 md:px-8">
          <div className="flex items-center md:pl-20 py-5 md:py-20">
            <h2 className="text-white text-[26px] md:text-3xl font-medium font-poppins">
            {/* We are Impact Hub Ibadan, an entreprenuership hub inspiring, connecting, 
            and enabling entrepreneurs 
            to grow and scale sustainable solutions that make a positive impact. */}
              {t("who_we_are")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-8">
            <StatItem value="$12M+" label="worth of support provided to businesses and individuals" />
            <StatItem value="900+" label="Community Members" />
            <StatItem value="500+" label="Ventures Empowered Through Our Programs" />
            <StatItem value="9,500+" label="Jobs Created By Businesses In Our Community" />
          </div>
        </div>
      </section>

      {/* 3 Pillars Grid */}
      <section className="section-padding bg-slate-50 font-poppins">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="mb-16 md:text-center">
            <h2 className="text-5xl font-display font-bold mb-4 font-poppins">Are you looking to...</h2>
            {/* <div className="h-1 w-20 bg-primary mx-auto rounded-full" /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              title="...work in an inspiring space?"
              description="Our coworking space provides the perfect environment to fuel creativity, productivity, and collaboration. Find the support you need in a community of changemakers."
              cta="Join our community"
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
              title="...start or grow your business?"
              description="Access our business development programs, mentorship, and resources to take your startup from idea to scale. We're here to support your growth every step of the way."
              cta="Explore Programs"
            />
            <FeatureCard
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              title="...shape the ecosystem?"
              description="Collaborate with us to empower entrepreneurs and drive impactful change across Africa. Together, we can build a sustainable future for Ibadan's innovators."
              cta="Partner with us"
            />
          </div>
        </div>
      </section>

      {/* Global Advantage */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide">GLOBAL NETWORK</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight font-poppins">
                A Global Advantage for Local Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                We are a member of the Impact Hub Global Network, a rapidly expanding, diverse, global collective that is accelerating sustainable innovation at scale. When you join Impact Hub Ibadan, you join a world of opportunity.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Cities Worldwide</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-primary mb-1">24k+</div>
                  <div className="text-sm text-muted-foreground">Global Members</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3" />
              {/* diverse group of people connecting globally */}
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Global Community"
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-cover transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">TRUSTED BY GLOBAL PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented by text for this demo */}
            <span className="text-xl font-bold">Google</span>
            <span className="text-xl font-bold">UNDP</span>
            <span className="text-xl font-bold">GIZ</span>
            <span className="text-xl font-bold">Oracle</span>
            <span className="text-xl font-bold">British Council</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left group">
      <div className="text-6xl md:text-7xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 font-display">
        {value}
      </div>
      <div className="text-xl md:text-lg text-white font-bold uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({ image, title, description, cta }: { image: string, title: string, description: string, cta: string }) {
  return (
    <div className="group bg-white font-poppins rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-slate-100">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-primary transition-colors font-poppins">{title}</h3>
        <p className="text-muted-foreground mb-8 flex-grow leading-relaxed font-poppins">{description}</p>
        <div className="flex items-center text-primary font-bold uppercase tracking-wide text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
          {cta} <ArrowUpRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
