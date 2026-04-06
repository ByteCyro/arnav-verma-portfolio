import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden px-6">
    {/* Animated background grid */}
    <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Glowing orb */}
    <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
    <div className="pointer-events-none absolute -left-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />

    <div className="mx-auto max-w-5xl pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-wider text-primary uppercase">Available for work</span>
        </div>
      </motion.div>

      <motion.h1
        className="mb-6 font-['Space_Grotesk'] text-5xl font-bold leading-[1.1] tracking-tight md:text-8xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        I build things
        <br />
        for the <span className="relative text-primary">
          web
          <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
            <motion.path
              d="M2 8 C50 2, 150 2, 198 8"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </svg>
        </span>
      </motion.h1>

      <motion.p
        className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        CyroByte aka Arnav Verma — Full-stack developer with 3.5 years of experience crafting fast, scalable, and SEO-optimized digital products.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105">
          View Projects <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary">
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        className="mt-16 flex gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="group rounded-full border border-border/50 p-3 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary">
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
