import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="relative px-6 py-32">
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Experience</h2>
        <h3 className="mb-12 font-['Space_Grotesk'] text-4xl font-bold md:text-5xl">
          Where I've <span className="text-primary">Worked</span>
        </h3>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* Timeline line */}
        <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="relative flex gap-6 pl-2">
          <div className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <Briefcase size={18} />
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 flex-1">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h4 className="font-['Space_Grotesk'] text-xl font-semibold">Freelance Web Developer</h4>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                2022 — Present
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building and shipping production-grade web applications for clients and personal ventures. Delivered <span className="text-foreground font-medium">6+ live products</span> spanning fintech calculators, content platforms, developer tools, and real-time data dashboards — all optimized for performance, SEO, and user experience.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "SEO", "Tailwind CSS", "APIs"].map((t) => (
                <span key={t} className="rounded-full border border-border/50 bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
