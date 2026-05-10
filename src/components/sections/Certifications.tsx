import { LazyMotion, domAnimation, motion } from "framer-motion";
import { portfolioData } from "../../constants/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";

const badgeColorMap = {
  blue: "bg-sky-500/15 text-sky-200 border-sky-400/30",
  green: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  orange: "bg-amber-500/15 text-amber-200 border-amber-400/30",
} as const;

export const Certifications = () => {
  return (
    <AnimatedSection id="certifications" className="bg-bgSecondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Certifications
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-textPrimary sm:text-4xl">
          Verified Learning &amp; Practical Exposure
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <LazyMotion features={domAnimation}>
            {portfolioData.certifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span
                      className={`inline-flex w-fit rounded-full border px-3 py-1 text-sm font-medium ${badgeColorMap[certification.color]}`}
                    >
                      {certification.issuer}
                    </span>
                    <span className="text-sm text-textSecondary">{certification.date}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-textPrimary">
                    {certification.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-textSecondary">
                    {certification.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </LazyMotion>
        </div>
      </div>
    </AnimatedSection>
  );
};
