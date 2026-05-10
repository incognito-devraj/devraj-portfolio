import profileImage from "../../assets/profile.jpg";
import { portfolioData } from "../../constants/data";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";

export const About = () => {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-textPrimary sm:text-4xl">
            Building secure Java systems with a recruiter-ready foundation
          </h2>
          <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-8 text-textSecondary">
            {portfolioData.profile}
          </p>
        </div>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-cyan-200" />
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={profileImage}
                alt="Devraj Mukherjee - Core Java Developer"
                className="h-64 w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Snapshot
              </p>
              <p className="mt-3 text-textSecondary">
                Focused on Java backend engineering, cybersecurity principles, and disciplined
                problem-solving for internship and TCS NQT opportunities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-bgSecondary p-4"
                >
                  <p className="text-2xl font-bold text-textPrimary">{stat.value}</p>
                  <p className="mt-1 text-sm text-textSecondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
};
