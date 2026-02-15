import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Animated from "@/components/Animated";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "45-48-25/2, opp: Gupta Medical & General Stores, Abid Nagar, Visakhapatnam- 530016 [A.P]",
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <>
          <a href="tel:+919247872222" className="hover:text-primary transition-colors block">
            +91 92478 72222
          </a>
          <a href="tel:+919032616993" className="hover:text-primary transition-colors block">
            +91 90326 16993
          </a>
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href="mailto:vamispackers@gmail.com" className="hover:text-primary transition-colors">
          vamispackers@gmail.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "24/7 Available for your service",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
        <Animated variant="fade-slide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              Contact Us
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 text-secondary-foreground leading-tight">
              Get In Touch
            </h1>
            <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-4 sm:mt-5 md:mt-6">
              Have questions or need a quote? We're here to help you with all your packing and
              moving needs.
            </p>
          </div>
        </Animated>
      </section>

      {/* Contact Content */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <Animated variant="fade-slide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="font-heading font-semibold text-lg xs:text-lg sm:text-xl md:text-2xl mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-card-foreground">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <div>
                  <label htmlFor="name" className="font-body text-xs sm:text-sm font-medium text-foreground block mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
                  <div>
                    <label htmlFor="email" className="font-body text-xs sm:text-sm font-medium text-foreground block mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-body text-xs sm:text-sm font-medium text-foreground block mb-1.5 sm:mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="font-body text-xs sm:text-sm font-medium text-foreground block mb-1.5 sm:mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your moving requirements..."
                    rows={4}
                    className="text-xs sm:text-sm"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-10 xs:h-10 sm:h-11 md:h-12 text-xs xs:text-xs sm:text-sm md:text-base min-h-11" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading font-semibold text-lg xs:text-lg sm:text-xl md:text-2xl mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-foreground">
                Contact Information
              </h2>
              <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5 lg:space-y-6 mb-4 xs:mb-6 sm:mb-8 md:mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 min-h-10">
                    <div className="w-10 xs:w-10 sm:w-11 md:w-12 h-10 xs:h-10 sm:h-11 md:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 xs:w-4 sm:w-5 md:w-6 h-4 xs:h-4 sm:h-5 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xs xs:text-sm sm:text-base text-foreground">{info.title}</h3>
                      <div className="font-body text-xs xs:text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-card h-36 xs:h-40 sm:h-48 md:h-64 lg:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Vamsi+Packers+%26+Movers+Visakhapatnam&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vamsi Packers and Movers Location"
                />
              </div>
            </div>
          </div>
        </Animated>
      </section>
    </Layout>
  );
};

export default Contact;
