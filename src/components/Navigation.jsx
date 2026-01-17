import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "dashboards",
  "experience",
  "certificates",
  "contact",
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      let currentSection = "home";

      SECTIONS.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop - 120;
          if (window.scrollY >= offsetTop) {
            currentSection = section;
          }
        }
      });
      

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = el.offsetTop - 80; 
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "dashboards", label: "Dashboards" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certifications" }, 
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
  onClick={() => scrollToSection("home")}
  className="
    text-lg md:text-xl font-semibold text-white
    tracking-wide hover:text-blue-400 transition
  "
>
  Ubaid <span className="text-blue-400">| Data Analyst</span>
</button>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    activeSection === item.id
                      ? "text-white bg-blue-500/20 border border-blue-500/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${
                    activeSection === item.id
                      ? "text-white bg-blue-500/20 border border-blue-500/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
