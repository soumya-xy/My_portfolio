import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  "hero",
  "about",
  "projects",
  "experience",
  "skills",
  "hackathons",
  "contact",
];

interface MainNavProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const MainNav = ({ activeSection, onSectionClick }: MainNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* GitHub Icon with glassmorphism */}
      <div className="hidden md:flex fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-md">
        <a
          href="https://github.com/soumya-xy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-gray-900 dark:hover:text-white transition"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
      </div>

      {/* Theme Toggle with glassmorphism */}
      <div>
        <ThemeToggle />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-white/10 backdrop-blur-md shadow-lg border border-white/10 rounded-full px-6 py-2">
        <div className="flex gap-4 items-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionClick(section)}
              className={`px-4 py-2 rounded-full transition-all text-sm font-semibold capitalize text-foreground
                ${
                  activeSection === section
                    ? "bg-gradient-to-tr from-orange-900 to-blue-800 text-white shadow-md"
                    : "hover:text-black dark:hover:text-white hover:bg-white/10"
                }`}
            >
              {section === "hackathons" ? "Achievements" : section}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Nav Top Bar */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex justify-between items-center shadow-md">
          <span className="text-lg font-bold text-foreground tracking-widest">
            <Link to="https://github.com/soumya-xy">SJ</Link>
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-sm z-40 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-6 items-center justify-center h-full">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onSectionClick(section);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-semibold capitalize px-4 py-2 rounded-full transition-all tracking-wide text-foreground
                  ${
                    activeSection === section
                      ? "bg-gradient-to-tr from-orange-900 to-blue-800 text-white"
                      : "hover:bg-white/10 hover:text-black dark:hover:text-white text-foreground/70"
                  }`}
              >
                {section === "hackathons" ? "Achievements" : section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
