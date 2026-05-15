import { AnimatePresence, LazyMotion, domAnimation, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "../../constants/data";
import { ThemeToggle } from "../ui/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 px-3 sm:px-6"
      >
        <motion.div
          animate={{
            y: isScrolled ? -2 : 0,
            rotate: isScrolled ? -0.35 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto max-w-6xl rounded-[1.75rem] border px-4 py-3 shadow-soft transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-border bg-[var(--nav-bg)] shadow-glow backdrop-blur-2xl"
              : "border-border bg-[var(--nav-bg)] backdrop-blur-xl"
          }`}
        >
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
            <a
              href="#home"
              className="justify-self-start font-display text-lg font-extrabold tracking-tight text-textPrimary"
            >
              {portfolioData.name}
            </a>

            <nav className="hidden items-center justify-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-textSecondary transition hover:-translate-y-0.5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-self-end gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bgSecondary text-textPrimary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mx-auto mt-3 max-w-6xl rounded-[1.5rem] border border-border bg-[var(--nav-bg)] px-4 pb-4 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-3 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-textSecondary transition hover:bg-accentLight hover:text-textPrimary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </LazyMotion>
  );
};
