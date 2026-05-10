import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      className={`inline-flex items-center rounded-full border border-border bg-accentLight px-3 py-1 text-sm font-medium text-textPrimary ${className}`}
    >
      {children}
    </motion.span>
  );
};
