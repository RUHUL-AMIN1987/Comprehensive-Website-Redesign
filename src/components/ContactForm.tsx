import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  phone: z.string().trim().max(20).optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-foreground">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1.5"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1.5"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1.5"
            placeholder="(419) 555-1234"
          />
        </div>
        <div>
          <Label htmlFor="service" className="text-foreground">Service Interest</Label>
          <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="respite">Respite Services</SelectItem>
              <SelectItem value="adult-day">Adult Day Services</SelectItem>
              <SelectItem value="community">Community Activities</SelectItem>
              <SelectItem value="vocational">Vocational Rehabilitation</SelectItem>
              <SelectItem value="animal-therapy">Horse & Animal Interactions</SelectItem>
              <SelectItem value="nursing">On-Call Nurse Services</SelectItem>
              <SelectItem value="youth">Youth Programs</SelectItem>
              <SelectItem value="transportation">Transportation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1.5 min-h-[120px]"
          placeholder="Tell us how we can help..."
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full sm:w-auto hero-gradient text-primary-foreground font-semibold text-base px-8 py-3 h-auto hover:opacity-90 transition-opacity">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
