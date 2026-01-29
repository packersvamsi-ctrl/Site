import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img
              src="/vamsi.png"
              alt="Vamsi Packers Logo"
              className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
              loading="eager"
            />
            <div className="flex flex-col">
              <h1 className="font-heading font-bold text-xs sm:text-base md:text-lg text-foreground leading-tight">
                Vamsi Packers
              </h1>
              <p className="text-xs text-muted-foreground font-subtitle">& Movers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm xl:text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+919247872222"
            className="hidden md:flex items-center gap-1 lg:gap-2 text-primary font-body font-semibold text-xs lg:text-sm hover:text-green-500 transition-colors hover:scale-105 transform origin-right min-h-11 px-3"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="hidden xl:inline">+91 92478 72222</span>
            <span className="xl:hidden">Call</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 sm:p-3 hover:bg-muted rounded-lg transition-colors min-h-11 min-w-11 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="lg:hidden pb-4 sm:pb-6 border-t border-border animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-2 font-body font-medium text-sm sm:text-base transition-colors hover:text-primary hover:bg-muted rounded ${
                  isActive(link.path) ? "text-primary bg-muted" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 sm:pt-6 border-t border-border mt-4 space-y-3">
              <a
                href="tel:+919247872222"
                className="flex items-center gap-2 text-primary font-body font-semibold text-sm sm:text-base hover:text-green-500 transition-colors min-h-11 px-2 py-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                +91 92478 72222
              </a>
              <Button asChild className="w-full h-11 text-sm sm:text-base">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
