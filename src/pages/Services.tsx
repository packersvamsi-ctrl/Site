import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Package,
  Car,
  Truck,
  MapPin,
  Warehouse,
  Shield,
  ArrowRight,
  PackageOpen,
  MoveRight,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Packing and Unpacking",
    description:
      "Our expert team uses high-quality packing materials to ensure your belongings are safely packed and protected during transit. We handle everything from fragile glassware to heavy furniture with utmost care.",
    features: [
      "Quality packing materials",
      "Trained packing professionals",
      "Special care for fragile items",
      "Systematic labeling",
    ],
  },
  {
    icon: Car,
    title: "Car Transportation",
    description:
      "Specialized car carrier vehicles for safe and secure transportation of your vehicles across India. We ensure your car reaches the destination in perfect condition.",
    features: [
      "Enclosed carrier vehicles",
      "GPS tracking available",
      "Insurance coverage",
      "Door-to-door delivery",
    ],
  },
  {
    icon: Truck,
    title: "Loading and Unloading",
    description:
      "Our trained professionals handle loading and unloading with precision, using proper equipment and techniques to prevent any damage to your belongings.",
    features: [
      "Trained handling team",
      "Modern equipment",
      "Careful handling",
      "Efficient process",
    ],
  },
  {
    icon: MapPin,
    title: "Local Shifting",
    description:
      "Quick and efficient local relocation services within your city. We make moving within the city hassle-free with our streamlined process.",
    features: [
      "Same-day service",
      "Affordable rates",
      "Complete door-to-door",
      "Minimal disruption",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Safe and secure storage facilities for your belongings. Whether you need short-term or long-term storage, our warehouses are equipped to keep your items safe.",
    features: [
      "24/7 security",
      "Climate controlled",
      "Flexible duration",
      "Easy access",
    ],
  },
  {
    icon: Shield,
    title: "Transit Insurance",
    description:
      "Comprehensive insurance coverage for your belongings during transit. We provide complete peace of mind with our insurance options for all goods.",
    features: [
      "Full value coverage",
      "Easy claim process",
      "All goods covered",
      "Transparent terms",
    ],
  },
  {
    icon: MoveRight,
    title: "Transportation",
    description:
      "Reliable transportation services across India with our fleet of well-maintained vehicles. We ensure timely and safe delivery of your goods.",
    features: [
      "Pan-India network",
      "Well-maintained fleet",
      "Timely delivery",
      "Real-time updates",
    ],
  },
  {
    icon: PackageOpen,
    title: "Moving",
    description:
      "Complete moving solutions for residential and commercial relocations. From planning to execution, we handle everything for a seamless move.",
    features: [
      "Complete relocation",
      "Office shifting",
      "Residential moving",
      "End-to-end service",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 text-secondary-foreground leading-tight">
              Complete Moving Solutions
            </h1>
            <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-4 sm:mt-5 md:mt-6">
              From packing to delivery, we provide comprehensive relocation services tailored to your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : "order-2 lg:order-1"}>
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                    <service.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-foreground leading-tight">
                    {service.title}
                  </h2>
                  <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="font-body text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base">
                    <Link to="/contact">
                      Get Quote <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`order-1 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="aspect-[4/3] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-muted shadow-card">
                    <img
                      src={`/banners/banner-${(index % 5) + 1}.jpg`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3 sm:mb-4 md:mb-6 leading-tight">
            Need a Custom Solution?
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8">
            Contact us to discuss your specific requirements. We offer customized solutions for all
            your packing and moving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base" variant="secondary">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base"
              variant="outline"
            >
              <a href="tel:+919247872222">Call: +91 92478 72222</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
