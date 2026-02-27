import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/lib/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <AnimatedSection>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to All Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-14 w-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground">{service.title}</h1>
            </div>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">{service.shortDesc}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">About This Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">{service.fullDesc}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-5">Key Benefits</h3>
              <div className="space-y-4 mb-12">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-muted rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Ready to Learn More?</h3>
                <p className="text-muted-foreground mb-6">Contact us to discuss how {service.title.toLowerCase()} can benefit you or your loved one.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="hero-gradient text-primary-foreground font-semibold px-8 py-3 h-auto hover:opacity-90">
                      Schedule Assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="tel:+14195551234">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 h-auto">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
