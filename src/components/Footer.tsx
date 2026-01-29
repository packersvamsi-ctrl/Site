import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const services = [
    "Packing and Unpacking",
    "Car Transportation",
    "Loading and Unloading",
    "Local Shifting",
    "Warehousing",
    "Transit Insurance",
    "Transportation",
    "Moving",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3 mb-6">
              <img
                src="/vamsi.png"
                alt="Vamsi Packers Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto flex-shrink-0"
                loading="eager"
              />
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base leading-tight">
                  Vamsi Packers
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-subtitle">
                  & Movers
                </p>
              </div>
            </div>

            <p className="font-body text-muted-foreground mb-6 text-xs sm:text-sm">
              Vamsi Packers and Movers' innovative spirit drives continuous
              improvement, focusing on Service, Quality, and Trust.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-green-500" />
              <span className="text-xs sm:text-sm">24/7 Available</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-body text-muted-foreground text-xs sm:text-sm">
                  45-48-25/2, Opp. Gupta Medical & General Stores, Abid Nagar,
                  Visakhapatnam – 530016 [A.P]
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919247872222"
                  className="font-body text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors"
                >
                  +91 92478 72222
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@vamsipackers.com"
                  className="font-body text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors break-all"
                >
                  info@vamsipackers.com
                </a>
              </li>
            </ul>
          </div>

          {/* Maps */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-6">
              Maps Location
            </h4>

            <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vamsi Packers and Movers Location"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="font-body text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Vamsi Packers and Movers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
