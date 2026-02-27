import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { youthServices } from "@/lib/services";
import youthImg from "@/assets/youth-programs.jpg";

const YouthPrograms = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={youthImg} alt="Children and youth in a supportive group environment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Youth Programs</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Dedicated services for children and young people — from certified assessments to group home support and emergency placement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Supporting Young Lives Across Northwest Ohio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every child deserves safety, support, and opportunity. Our youth-focused programs provide structured environments, professional assessments, and crisis support tailored to each child's unique needs and strengths.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youthServices.map((s, i) => (
              <ServiceCard key={s.slug} title={s.title} description={s.shortDesc} icon={s.icon} slug={s.slug} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Our Commitment to Youth</h2>
            <div className="space-y-4">
              {[
                "Certified CANS assessments for accurate needs identification",
                "CPI-trained staff for safe crisis management",
                "Individualized care plans focused on growth and well-being",
                "Coordination with families, schools, and agencies",
                "Safe, nurturing environments in all programs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">Learn How We Can Help Your Child</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Reach out for a free consultation about our youth programs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-card text-primary font-semibold px-8 py-3 h-auto hover:bg-card/90">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+14195551234">
                <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-3 h-auto">
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

export default YouthPrograms;
