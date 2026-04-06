import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="relative px-6 py-32">
    {/* Glow effect */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-[300px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
    </div>

    <div className="relative mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Contact</h2>
        <h3 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold md:text-5xl">
          Let's Work <span className="text-primary">Together</span>
        </h3>
        <p className="mx-auto mb-10 max-w-md text-muted-foreground">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <motion.a
        href="mailto:arnavverma574@gmail.com"
        className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail size={18} />
        arnavverma574@gmail.com
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.a>

      <motion.div
        className="mt-10 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {[Github, Linkedin, Twitter,Discord].map((Icon, i) => (
          <a key={i} href="#" className="rounded-full border border-border/50 p-3.5 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-110">
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
