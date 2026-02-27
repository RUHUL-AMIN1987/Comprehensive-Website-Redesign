import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import teamImg from "@/assets/team-photo.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "Every interaction is rooted in genuine care and empathy for the individuals and families we serve." },
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in all our services, ensuring trust and transparency." },
  { icon: Users, title: "Community", desc: "We believe in building strong community connections and fostering inclusive environments." },
  { icon: Award, title: "Excellence", desc: "Continuous improvement and professional development drive the quality of our care." },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImg} alt="Our professional healthcare team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">About Reliance Care Solutions</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Over 15 years of compassionate home care and community support in Northwest Ohio.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in the heart of Toledo, Ohio, Reliance Care Solutions was born from a simple belief: everyone deserves access to high-quality, compassionate care — right where they feel most comfortable, at home and in their community.
              </p>
              <p>
                Today, we serve hundreds of families across Northwest Ohio with a comprehensive suite of services including in-home care, adult day programs, youth support, animal-assisted therapy, and vocational rehabilitation. Our Ohio-certified team of caregivers, nurses, and support professionals is committed to making a meaningful difference in every life we touch.
              </p>
              <p>
                We take pride in our person-centered approach, designing individualized care plans that honor each client's dignity, preferences, and goals. From the youngest child to the eldest community member, Reliance Care Solutions is here for your family.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">The principles that guide everything we do.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-shadow border border-border text-center h-full">
                  <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">Join Our Team or Get in Touch</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Whether you're looking for care or a career, we'd love to hear from you.</p>
            <Link to="/contact">
              <Button className="bg-card text-primary font-semibold px-8 py-3 h-auto hover:bg-card/90">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;
