import { LazyMotion, domAnimation, motion } from "framer-motion";
import { portfolioData } from "../../constants/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export const Education = () => {
  return (
    <AnimatedSection id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Education</p>
      <h2 className="mt-4 font-display text-3xl font-extrabold text-textPrimary sm:text-4xl">
        Academic Journey
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-textSecondary">
        A consistent foundation in computer science with strong academic performance and
        steady upward momentum.
      </p>

      <LazyMotion features={domAnimation}>
        <div className="relative mt-12 pl-8 md:pl-12">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent/60 to-transparent md:left-5"
          />

          <div className="space-y-8">
            {portfolioData.education.map((item, index) => (
              <motion.div
                key={`${item.degree}-${item.year}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                <span
                  className={`absolute left-[-1.65rem] top-8 z-10 h-4 w-4 rounded-full border-4 border-bgPrimary md:left-[-2.15rem] ${
                    item.current ? "bg-accent shadow-glow" : "bg-slate-400"
                  }`}
                />
                <Card>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-textPrimary">{item.degree}</h3>
                      <p className="mt-2 text-base text-textSecondary">{item.institution}</p>
                    </div>
                    {item.current ? <Badge className="w-fit border-accent">Current</Badge> : null}
                  </div>
                  <div className="mt-5 flex flex-col gap-2 text-sm text-textSecondary sm:flex-row sm:gap-8">
                    <span>{item.year}</span>
                    <span>{item.score}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </LazyMotion>
    </AnimatedSection>
  );
};
