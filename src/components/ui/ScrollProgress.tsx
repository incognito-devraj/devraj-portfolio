import { motion, useReducedMotion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-accent"
      style={reduceMotion ? undefined : { scaleX: scrollYProgress }}
    />
  );
};
