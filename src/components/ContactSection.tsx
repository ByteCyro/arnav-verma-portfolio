import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const DiscordIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
  </svg>
);

const socialLinks = [
  { Icon: Github, href: "https://github.com/ByteCyro" },
  { Icon: Linkedin, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: DiscordIcon, href: "https://discord.com/users/yourdiscordid" },
];

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
        {socialLinks.map(({ Icon, href }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border/50 p-3.5 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-110">
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
