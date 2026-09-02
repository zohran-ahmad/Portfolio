import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight"
        >
          ZA<span className="text-accent">K</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-accent ${
                  active === link.href ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void hover:bg-accent-dim transition-colors"
        >
          Contact Me
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void border-b border-line px-6 pb-6">
          <ul className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider pt-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 transition-colors hover:text-accent ${
                    active === link.href ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-void"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
