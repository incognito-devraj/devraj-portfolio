import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`rounded-xl border border-border bg-bgCard p-6 shadow-soft transition-shadow duration-300 hover:shadow-glow ${className}`}
    >
      {children}
    </motion.article>
  );
};
