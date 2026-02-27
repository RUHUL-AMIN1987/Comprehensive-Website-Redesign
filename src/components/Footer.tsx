import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-primary-foreground">RC</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg block leading-tight">Reliance Care</span>
                <span className="text-xs text-primary-foreground/70">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Providing compassionate home care and community support services throughout Northwest Ohio. Ohio certified and committed to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Services</Link>
              <Link to="/youth-programs" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Youth Programs</Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services/respite-services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Respite Services</Link>
              <Link to="/services/adult-day-services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Adult Day Services</Link>
              <Link to="/services/horse-animal-interactions" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Horse & Animal Therapy</Link>
              <Link to="/services/on-call-nurse-services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">On-Call Nurse Services</Link>
              <Link to="/services/non-medical-transportation" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Transportation</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+14195551234" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> (419) 555-1234
              </a>
              <a href="mailto:info@reliancecaresolutions.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> info@reliancecaresolutions.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> 123 Care Street<br />Toledo, OH 43604
              </div>
              <div className="flex gap-3 mt-2">
                <a href="#" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© 2026 Reliance Care Solutions. All rights reserved. Ohio Certified.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
