import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to discuss your care needs? We're here to help. Reach out for a free, no-obligation assessment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send Us a Message</h2>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+14195551234" className="text-muted-foreground hover:text-primary transition-colors">(419) 555-1234</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@reliancecaresolutions.com" className="text-muted-foreground hover:text-primary transition-colors">info@reliancecaresolutions.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">123 Care Street<br />Toledo, OH 43604</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon–Fri: 8:00 AM – 6:00 PM<br />On-call services available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-muted rounded-xl p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-2">Free Assessment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Not sure where to start? Our care team offers free assessments to help determine the best services for your situation. Call us or fill out the form and we'll respond within 24 hours.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
