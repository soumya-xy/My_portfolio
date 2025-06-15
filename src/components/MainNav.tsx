
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X, Github } from "lucide-react";
import { useState } from "react";

const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'hackathons', 'contact'];

interface MainNavProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const MainNav = ({ activeSection, onSectionClick }: MainNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation (with aligned GitHub + ThemeToggle) */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 min-w-[340px] items-center space-x-6">
        {/* Left: GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors mr-3"
          aria-label="GitHub"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Github size={24} />
        </a>
        {/* Center: Sections */}
        <div className="flex space-x-6 items-center flex-1 justify-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionClick(section)}
              className={`text-sm font-medium transition-colors duration-300 capitalize hover:text-primary ${
                activeSection === section ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {section === 'hackathons' ? 'Achievements' : section}
            </button>
          ))}
        </div>
        {/* Right: Theme Toggle */}
        <div className="flex items-center ml-3">
          <ThemeToggle className="relative" />
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-lg px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-bold">SJ</span>
          <div className="flex items-center gap-2">
            {/* Removed ThemeToggle on mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    onSectionClick(section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors duration-300 capitalize hover:text-primary text-left p-2 rounded ${
                    activeSection === section ? 'text-primary bg-accent' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'hackathons' ? 'Achievements' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MainNav;
