import { motion } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ rotate: isDark ? 16 : -16, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bgSecondary text-textPrimary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {isDark ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </motion.button>
  );
};
