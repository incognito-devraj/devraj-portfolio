import { Code2, Database, Globe, ShieldCheck, Speech } from "lucide-react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { portfolioData } from "../../constants/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const iconMap = {
  "Core Programming": Code2,
  "Backend & Frameworks": Database,
  Cybersecurity: ShieldCheck,
  "Web Basics": Globe,
  "Soft Skills": Speech,
} as const;

export const Skills = () => {
  return (
    <AnimatedSection id="skills" className="bg-bgSecondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Skills</p>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-textPrimary sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-textSecondary">
          Recruiter-friendly capabilities centered on Core Java, Spring technologies, secure
          system design, and communication.
        </p>

        <LazyMotion features={domAnimation}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {portfolioData.skillGroups.map((group, groupIndex) => {
              const Icon = iconMap[group.category];

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                >
                  <Card className={group.featured ? "shadow-glow" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-accentLight p-3 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-textPrimary">{group.category}</h3>
                        {group.featured ? (
                          <p className="text-sm text-textSecondary">
                            Featured for Java backend readiness
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {group.skills.map((skill, badgeIndex) => {
                        const isFeaturedJava = group.category === "Core Programming" && skill === "Java (Core)";

                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, delay: badgeIndex * 0.1 }}
                          >
                            <Badge
                              className={
                                isFeaturedJava
                                  ? "border-accent px-4 py-2 text-base font-semibold shadow-glow"
                                  : ""
                              }
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </LazyMotion>
      </div>
    </AnimatedSection>
  );
};
