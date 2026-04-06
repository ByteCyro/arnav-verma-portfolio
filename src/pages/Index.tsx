import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowUpRight, Menu, X } from "lucide-react";

const projects = [
  {
    title: "KFC Calorie Calculator",
    description:
      "A comprehensive nutritional tracking tool for KFC meals. Users can search, select, and calculate calories, protein, carbs, and fat across the full USA KFC menu — helping them make informed dietary choices.",
    tech: ["React", "Tailwind CSS", "SEO", "Responsive Design"],
    link: "https://kfc-calorie-calculator.com/",
  },
  {
    title: "SaveMyThreads",
    description:
      "A fast, user-friendly Threads video downloader that lets users paste a link and instantly save videos, GIFs, and images from Threads — cross-platform and completely free.",
    tech: ["React", "Node.js", "API Integration", "UI/UX"],
    link: "https://savemythreads.com/",
  },
  {
    title: "ePanCard.in",
    description:
      "An intuitive platform to download e-PAN cards instantly online via NSDL or UTIITSL portals. Built with a focus on trust, simplicity, and zero data storage for user privacy.",
    tech: ["Next.js", "Tailwind CSS", "Government APIs", "SEO"],
    link: "https://epancard.in/",
  },
  {
    title: "Fake SSN Generator",
    description:
      "A developer utility tool that generates random, realistic-looking Social Security Numbers for software testing, form validation, and database seeding — no real data involved.",
    tech: ["JavaScript", "React", "Algorithms", "Testing Tools"],
    link: "https://fakessngenerator.com/",
  },
  {
    title: "Agri Loan Calculator",
    description:
      "A specialized farm loan payment calculator offering instant monthly estimates and detailed amortization schedules for FSA Microloans, Direct Farm Ownership Loans, and bank loans.",
    tech: ["React", "Financial Algorithms", "Charts", "Responsive"],
    link: "https://agriloancalculator.com/",
  },
  {
    title: "Kolkata FF Today",
    description:
      "A live results platform for Kolkata Fatafat (FF) — delivering the fastest updates for all 8 Bazi rounds with game schedules, chart history, daily tips, and real-time result tracking.",
    tech: ["React", "Real-time Data", "API", "Tailwind CSS"],
    link: "https://kolkatafftoday.com/",
  },
];

const techStack = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "MongoDB", "PostgreSQL", "Git", "REST APIs",
  "SEO", "Vercel", "Netlify", "Figma",
];

const navLinks = ["About", "Projects", "Experience", "Contact"];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-primary">
            AV<span className="text-foreground">.</span>
          </a>
          <div className="hidden gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l}
              </a>
            ))}
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-primary">
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center px-6">
        <div className="mx-auto max-w-5xl pt-20">
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">Web Developer</p>
          <h1 className="mb-6 font-['Space_Grotesk'] text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-primary">Arnav Verma</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build fast, scalable, and SEO-optimized web applications. With 3.5 years of experience crafting digital products that solve real problems.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              View Projects <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              Get in Touch
            </a>
          </div>
          <div className="mt-12 flex gap-5">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Github size={20} /></a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Twitter size={20} /></a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">About</h2>
          <h3 className="mb-8 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">A bit about me</h3>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate web developer with 3.5 years of experience building modern, performant web applications. I specialize in creating tools and platforms that are both functional and delightful to use.
              </p>
              <p>
                From SEO-optimized content platforms to real-time data dashboards and developer utility tools — I enjoy working across the full stack to bring ideas to life. I care deeply about clean code, fast load times, and intuitive user experiences.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Projects</h2>
          <h3 className="mb-12 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">Selected Work</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(150_60%_50%/0.15)]"
              >
                <div className="mb-3 flex items-start justify-between">
                  <h4 className="font-['Space_Grotesk'] text-xl font-semibold group-hover:text-primary transition-colors">{p.title}</h4>
                  <ExternalLink size={16} className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Experience</h2>
          <h3 className="mb-12 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">Where I've Worked</h3>
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h4 className="font-['Space_Grotesk'] text-lg font-semibold">Freelance Web Developer</h4>
                <span className="text-sm text-muted-foreground">2022 — Present</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Building and shipping production-grade web applications for clients and personal ventures. Delivered 6+ live products spanning fintech calculators, content platforms, developer tools, and real-time data dashboards — all optimized for performance, SEO, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Contact</h2>
          <h3 className="mb-6 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl">Let's Work Together</h3>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
          <a
            href="mailto:arnavverma574@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Mail size={16} /> arnavverma574@gmail.com
          </a>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Github size={20} /></a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Twitter size={20} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arnav Verma. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
