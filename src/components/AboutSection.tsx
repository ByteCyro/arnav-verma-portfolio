import { motion } from "framer-motion";

const techStack = [
  { name: "JavaScript", color: "from-yellow-400/20 to-yellow-500/5" },
  { name: "TypeScript", color: "from-blue-400/20 to-blue-500/5" },
  { name: "React", color: "from-cyan-400/20 to-cyan-500/5" },
  { name: "Next.js", color: "from-white/15 to-white/5" },
  { name: "Node.js", color: "from-green-400/20 to-green-500/5" },
  { name: "Tailwind CSS", color: "from-teal-400/20 to-teal-500/5" },
  { name: "MongoDB", color: "from-emerald-400/20 to-emerald-500/5" },
  { name: "PostgreSQL", color: "from-indigo-400/20 to-indigo-500/5" },
  { name: "Git", color: "from-orange-400/20 to-orange-500/5" },
  { name: "REST APIs", color: "from-purple-400/20 to-purple-500/5" },
  { name: "SEO", color: "from-pink-400/20 to-pink-500/5" },
  { name: "Vercel", color: "from-white/15 to-white/5" },
  { name: "Netlify", color: "from-teal-300/20 to-teal-400/5" },
  { name: "Figma", color: "from-violet-400/20 to-violet-500/5" },
];

const stats = [
  { number: "3.5+", label: "Years Experience" },
  { number: "6+", label: "Live Products" },
  { number: "14+", label: "Technologies" },
];

const AboutSection = () => (
  <section id="about" className="relative px-6 py-32">
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">About</h2>
        <h3 className="mb-12 font-['Space_Grotesk'] text-4xl font-bold md:text-5xl">
          A bit about <span className="text-primary">me</span>
        </h3>
      </motion.div>

      <div className="grid gap-16 md:grid-cols-5">
        <motion.div
          className="space-y-5 text-muted-foreground leading-relaxed md:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-lg">
            I'm a passionate web developer with <span className="text-foreground font-medium">3.5 years</span> of experience building modern, performant web applications.
          </p>
          <p>
            From SEO-optimized content platforms to real-time data dashboards and developer utility tools — I enjoy working across the full stack to bring ideas to life. I care deeply about clean code, fast load times, and intuitive user experiences.
          </p>
          <div className="flex gap-8 pt-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-['Space_Grotesk'] text-3xl font-bold text-primary">{s.number}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="mb-5 text-sm font-medium tracking-widest text-primary uppercase">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t, i) => (
              <motion.span
                key={t.name}
                className={`rounded-full border border-border/50 bg-gradient-to-r ${t.color} px-3.5 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm transition-colors hover:text-foreground hover:border-primary/30`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
              >
                {t.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
