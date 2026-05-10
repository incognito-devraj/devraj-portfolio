import { LazyMotion, domAnimation, motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { portfolioData } from "../../constants/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-screen items-center overflow-hidden bg-hero-radial"
    >
      <div className="pointer-events-none absolute right-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl justify-center px-4 py-24 sm:px-6 lg:px-8">
        <LazyMotion features={domAnimation}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex max-w-4xl flex-col items-center text-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 shadow-glow"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Available for TCS NQT &amp; Internships
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl font-extrabold leading-tight tracking-tight text-textPrimary sm:text-6xl lg:text-7xl"
            >
              {portfolioData.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-xl font-semibold text-accent sm:text-2xl"
            >
              {portfolioData.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base leading-8 text-textSecondary sm:text-lg"
            >
              {portfolioData.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/Devraj_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-textPrimary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ExternalLink className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {["SGPA 8.48", "67 WPM", "Zscaler Certified"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bgSecondary px-4 py-2 text-sm font-medium text-textPrimary"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </LazyMotion>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-textSecondary">
        <ArrowDown className="h-7 w-7 animate-bounce" />
      </div>
    </section>
  );
};
