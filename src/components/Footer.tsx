import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

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
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 mb-4 xs:mb-5 sm:mb-6">
              <img
                src="/vamsi.png"
                alt="Vamsi Packers Logo"
                className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-20 w-auto flex-shrink-0"
                loading="eager"
              />
              <div>
                <h3 className="font-heading font-bold text-xs xs:text-sm sm:text-base leading-tight">
                  Vamsi Packers
                </h3>
                <p className="text-xs text-muted-foreground font-subtitle">
                  & Movers
                </p>
              </div>
            </div>

            <p className="font-body text-muted-foreground mb-4 xs:mb-5 sm:mb-6 text-xs xs:text-xs sm:text-sm">
              Vamsi Packers and Movers' innovative spirit drives continuous
              improvement, focusing on Service, Quality, and Trust.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs xs:text-xs sm:text-sm">24/7 Available</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm xs:text-sm sm:text-lg mb-4 xs:mb-5 sm:mb-6">
              Our Services
            </h4>
            <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service} className="min-h-10 flex items-center">
                  <Link
                    to="/services"
                    className="font-body text-muted-foreground hover:text-primary transition-colors text-xs xs:text-xs sm:text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm xs:text-sm sm:text-lg mb-4 xs:mb-5 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to} className="min-h-10 flex items-center">
                  <Link
                    to={link.to}
                    className="font-body text-muted-foreground hover:text-primary transition-colors text-xs xs:text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm xs:text-sm sm:text-lg mb-4 xs:mb-5 sm:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 xs:space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 xs:gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground text-xs xs:text-xs sm:text-sm leading-snug">
                  45-48-25/2, Opp. Gupta Medical & General Stores, Abid Nagar,
                  Visakhapatnam – 530016 [A.P]
                </span>
              </li>

              <li className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-h-10">
                <Phone className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919247872222"
                  className="font-body text-muted-foreground text-xs xs:text-xs sm:text-sm hover:text-primary transition-colors"
                >
                  +91 92478 72222
                </a>
              </li>

              <li className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-h-10">
                <Phone className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919247872222"
                  className="font-body text-muted-foreground text-xs xs:text-xs sm:text-sm hover:text-primary transition-colors"
                >
                  +91 9032616993
                </a>
              </li>

              <li className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-h-10">
                <Mail className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@vamsipackers.com"
                  className="font-body text-muted-foreground text-xs xs:text-xs sm:text-sm hover:text-primary transition-colors break-all"
                >
                  vamispackers@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-h-10">
                <Instagram className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="https://www.instagram.com/vamsipackers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-muted-foreground text-xs xs:text-xs sm:text-sm hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              </ul>
          </div>

          {/* Maps */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-sm xs:text-sm sm:text-lg mb-4 xs:mb-5 sm:mb-6">
              Maps Location
            </h4>

            <div className="w-full h-36 xs:h-40 sm:h-48 rounded-lg overflow-hidden border border-border">
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

        {/* Copyright */}
        <div className="border-t border-border mt-8 xs:mt-10 pt-4 xs:pt-5 sm:pt-6 text-center">
          <p className="font-body text-muted-foreground text-xs xs:text-xs sm:text-sm">
            © {new Date().getFullYear()} Vamsi Packers and Movers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
