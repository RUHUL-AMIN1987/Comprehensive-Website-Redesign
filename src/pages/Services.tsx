import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive home care, community support, and youth services across Northwest Ohio. Every program is designed around your family's unique needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} title={s.title} description={s.shortDesc} icon={s.icon} slug={s.slug} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Not Sure Which Service Is Right for You?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Our care team is ready to help you find the perfect solution. Reach out for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="hero-gradient text-primary-foreground font-semibold px-8 py-3 h-auto hover:opacity-90">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+14195551234">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 h-auto">
                  <Phone className="mr-2 h-4 w-4" /> (419) 555-1234
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
