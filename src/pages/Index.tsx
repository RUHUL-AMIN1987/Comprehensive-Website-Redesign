import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import heroImg from "@/assets/hero-care.jpg";
import communityImg from "@/assets/community-activities.jpg";
import { services } from "@/lib/services";

const featuredServices = services.slice(0, 6);

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "500+", label: "Families Served" },
  { value: "100+", label: "Trained Caregivers" },
  { value: "Ohio", label: "State Certified" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Compassionate caregiver assisting elderly person at home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-semibold mb-6">
              Ohio Certified • Serving Northwest Ohio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-tight mb-6">
              Compassionate Care in Your Home and Community
            </h1>
            <p className="text-lg md:text-xl text-background/80 leading-relaxed mb-8 max-w-xl">
              Reliance Care Solutions provides trusted in-home care, community support, and youth services throughout the Toledo area. Your family's well-being is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="hero-gradient text-primary-foreground font-semibold text-base px-8 py-3 h-auto hover:opacity-90 transition-opacity">
                  Schedule a Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+14195551234">
                <Button variant="outline" className="border-background/40 text-background hover:bg-background/10 font-semibold text-black text-base px-8 py-3 h-auto">
                  <Phone className="mr-2 h-4 w-4" /> Call (419) 555-1234
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl card-shadow border border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="py-8 px-6 text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Trusted Home Care &amp; Community Support in Toledo, Ohio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 15 years, we've been the region's trusted partner for in-home care, adult day programs, youth services, and community engagement. Every service we offer is built on compassion, professionalism, and respect for the individuals and families we serve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive care solutions tailored to your family's unique needs.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.slug} title={s.title} description={s.shortDesc} icon={s.icon} slug={s.slug} delay={i * 0.08} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 h-auto text-base">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src={communityImg} alt="Seniors enjoying community activities together" className="rounded-2xl card-shadow w-full h-80 lg:h-[450px] object-cover" />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Why Families Choose Reliance Care</h2>
              <div className="space-y-4">
                {[
                  "Ohio certified with 15+ years of trusted service",
                  "Personalized care plans designed around each individual",
                  "Trained, compassionate caregivers and medical staff",
                  "Comprehensive services — from in-home care to community programs",
                  "Transparent communication with families every step of the way",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-block mt-8">
                <Button className="hero-gradient text-primary-foreground font-semibold px-8 py-3 h-auto hover:opacity-90 transition-opacity">
                  Learn About Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-4">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">What Families Are Saying</h2>
          </AnimatedSection>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us today for a free, no-obligation assessment. We're here to help your family find the right care solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-card text-primary font-semibold text-base px-8 py-3 h-auto hover:bg-card/90 transition-colors">
                  Schedule Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+14195551234">
                <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground text-black hover:bg-primary-foreground/10 font-semibold text-base px-8 py-3 h-auto">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
