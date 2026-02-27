import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Respite Services", slug: "respite-services" },
  { name: "Adult Day Services", slug: "adult-day-services" },
  { name: "Community Group Activities", slug: "community-group-activities" },
  { name: "Vocational Rehabilitation", slug: "vocational-rehabilitation" },
  { name: "Horse & Animal Interactions", slug: "horse-animal-interactions" },
  { name: "On-Call Nurse Services", slug: "on-call-nurse-services" },
  { name: "Non-Medical Transportation", slug: "non-medical-transportation" },
  { name: "Staff Training", slug: "staff-training" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="hero-gradient">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <p className="text-sm text-primary-foreground/90">
            Serving Northwest Ohio &amp; the Toledo Area
          </p>
          <a href="tel:+14195551234" className="flex items-center gap-1.5 text-sm font-semibold text-primary-foreground">
            <Phone className="h-3.5 w-3.5" />
            (419) 555-1234
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-lg">RC</span>
          </div>
          <div>
            <span className="font-serif font-bold text-lg text-foreground leading-tight block">Reliance Care</span>
            <span className="text-xs text-muted-foreground leading-none">Solutions</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/") ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
            Home
          </Link>
          
          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${isActive("/services") ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg card-shadow border border-border py-2 z-50">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/youth-programs" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/youth-programs") ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
            Youth Programs
          </Link>
          <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/about") ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
            About Us
          </Link>
          <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}>
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button className="hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">Services</Link>
            <Link to="/youth-programs" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">Youth Programs</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary">Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full hero-gradient text-primary-foreground font-semibold mt-2">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
