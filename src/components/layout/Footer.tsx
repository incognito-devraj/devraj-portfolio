const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-bgSecondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-textSecondary sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-display text-lg font-bold text-textPrimary">Devraj Mukherjee</p>
            <p>Built with React &amp; Framer Motion</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p>&copy; {new Date().getFullYear()} Devraj Mukherjee. All rights reserved.</p>
      </div>
    </footer>
  );
};
