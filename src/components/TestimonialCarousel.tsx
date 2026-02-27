import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Reliance Care Solutions has been a blessing for our family. The respite care services gave us the peace of mind we needed while ensuring our mother received exceptional care.",
    name: "Sarah M.",
    role: "Family Caregiver, Toledo",
  },
  {
    quote: "The adult day services program transformed my father's daily life. He looks forward to going every morning, and the staff treats him like family.",
    name: "James T.",
    role: "Son of Client, Perrysburg",
  },
  {
    quote: "The horse therapy program was incredible for my daughter. We saw improvements in her confidence and emotional well-being within weeks.",
    name: "Maria L.",
    role: "Parent, Maumee",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto text-center">
      <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
      <div className="min-h-[160px] flex items-center justify-center">
        <div key={current}>
          <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic mb-6">
            "{testimonials[current].quote}"
          </p>
          <p className="font-semibold text-foreground">{testimonials[current].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2.5 bg-border"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
          className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
