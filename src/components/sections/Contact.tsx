import { LazyMotion, domAnimation, motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "../../constants/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";

const contactItems = [
  {
    label: "Email",
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: portfolioData.phone,
    href: "tel:+916297003575",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: portfolioData.linkedin,
    href: portfolioData.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Location",
    value: portfolioData.location,
    icon: MapPin,
  },
] as const;

const flagMap: Record<string, string> = {
  English: "🇬🇧",
  Hindi: "🇮🇳",
  Bengali: "🇮🇳",
};

export const Contact = () => {
  return (
    <AnimatedSection id="contact" className="bg-bgSecondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-textPrimary sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Open to TCS NQT opportunities and Java backend internships
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="mt-12 grid grid-cols-1 gap-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="w-full">
                  <div className="flex items-start gap-4">
                    <span className="rounded-2xl bg-accentLight p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-textSecondary">
                        {item.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-textPrimary">{item.value}</p>
                    </div>
                  </div>
                </Card>
              );

              return (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </LazyMotion>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-textSecondary">
          {portfolioData.languages.map((language) => (
            <span
              key={language.name}
              className="rounded-full border border-border bg-bgCard px-4 py-2"
            >
              {flagMap[language.name]} {language.name} · {language.level}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
