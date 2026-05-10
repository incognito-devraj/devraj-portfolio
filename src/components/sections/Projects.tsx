import { Github } from "lucide-react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { portfolioData } from "../../constants/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const statusClasses = {
  "In Progress": "bg-amber-500/15 text-amber-200 border-amber-400/30",
  Planning: "bg-slate-500/15 text-slate-200 border-slate-400/30",
} as const;

export const Projects = () => {
  return (
    <AnimatedSection id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Projects</p>
      <h2 className="mt-4 font-display text-3xl font-extrabold text-textPrimary sm:text-4xl">
        Current Build Pipeline
      </h2>
      <p className="mt-4 text-lg text-textSecondary">
        Building projects with Core Java &amp; Spring Boot — more coming soon
      </p>

      <LazyMotion features={domAnimation}>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col">
                <span
                  className={`inline-flex w-fit rounded-full border px-3 py-1 text-sm font-medium ${statusClasses[project.status]}`}
                >
                  {project.status}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-textPrimary">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-textSecondary">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </LazyMotion>
    </AnimatedSection>
  );
};
