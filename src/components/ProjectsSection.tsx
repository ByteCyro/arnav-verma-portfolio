import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import kfcImg from "@/assets/projects/kfc.png";
import savemythreadsImg from "@/assets/projects/savemythreads.png";
import epancardImg from "@/assets/projects/epancard.png";
import fakessnImg from "@/assets/projects/fakessn.png";
import agriImg from "@/assets/projects/agri.png";
import kolkataffImg from "@/assets/projects/kolkataff.png";

const projects = [
  {
    title: "KFC Calorie Calculator",
    description:
      "A comprehensive nutritional tracking tool for KFC meals. Users can search, select, and calculate calories, protein, carbs, and fat across the full USA KFC menu.",
    tech: ["React", "Tailwind CSS", "SEO", "Responsive Design"],
    link: "https://kfc-calorie-calculator.com/",
    image: kfcImg,
    accent: "from-red-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "SaveMyThreads",
    description:
      "A fast, user-friendly Threads video downloader that lets users paste a link and instantly save videos, GIFs, and images from Threads.",
    tech: ["React", "Node.js", "API Integration", "UI/UX"],
    link: "https://savemythreads.com/",
    image: savemythreadsImg,
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "ePanCard.in",
    description:
      "An intuitive platform to download e-PAN cards instantly online via NSDL or UTIITSL portals. Built with a focus on trust, simplicity, and zero data storage.",
    tech: ["Next.js", "Tailwind CSS", "Government APIs", "SEO"],
    link: "https://epancard.in/",
    image: epancardImg,
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "Fake SSN Generator",
    description:
      "A developer utility tool that generates random, realistic-looking Social Security Numbers for software testing and form validation.",
    tech: ["JavaScript", "React", "Algorithms", "Testing Tools"],
    link: "https://fakessngenerator.com/",
    image: fakessnImg,
    accent: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    title: "Agri Loan Calculator",
    description:
      "A specialized farm loan payment calculator offering instant monthly estimates and detailed amortization schedules for FSA Microloans.",
    tech: ["React", "Financial Algorithms", "Charts", "Responsive"],
    link: "https://agriloancalculator.com/",
    image: agriImg,
    accent: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
  {
    title: "Kolkata FF Today",
    description:
      "A live results platform for Kolkata Fatafat (FF) — delivering the fastest updates for all 8 Bazi rounds with real-time result tracking.",
    tech: ["React", "Real-time Data", "API", "Tailwind CSS"],
    link: "https://kolkatafftoday.com/",
    image: kolkataffImg,
    accent: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative px-6 py-32">
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Projects</h2>
        <h3 className="mb-4 font-['Space_Grotesk'] text-4xl font-bold md:text-5xl">
          Selected <span className="text-primary">Work</span>
        </h3>
        <p className="mb-14 max-w-lg text-muted-foreground">
          A collection of projects I've built — each solving a real problem with clean code and thoughtful design.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.2)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Project screenshot */}
            <div className="relative overflow-hidden border-b border-border/40">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-40 mix-blend-overlay z-10`} />
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-['Space_Grotesk'] font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h4>
                </div>
                <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
