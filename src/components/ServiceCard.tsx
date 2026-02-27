import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, slug, delay = 0 }: ServiceCardProps) => {
  return (
    <AnimatedSection delay={delay}>
      <Link
        to={`/services/${slug}`}
        className="group block bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/30 h-full"
      >
        <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </AnimatedSection>
  );
};

export default ServiceCard;
