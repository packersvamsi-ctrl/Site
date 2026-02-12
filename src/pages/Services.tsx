import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Animated from "@/components/Animated";
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
      "Our expert team uses high-quality packing materials to ensure your belongings are safely packed and protected during transit. We handle everything from fragile glassware to heavy furniture with utmost care. We offer tailored packing plans, inventory management, secure sealing, and gentle unpacking so you’re ready immediately at destination. Our crews use color-coded labeling, anti-static wrapping for electronics, padded crates for antiques, on-site supervisors and optional furniture assembly—reducing claims and accelerating setup at arrival.",
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
      "Specialized car carrier vehicles for safe and secure transportation of your vehicles across India. We ensure your car reaches the destination in perfect condition. Each vehicle receives pre-transport inspection, secure tie-downs, covered carriers and tracking, plus optional door-to-door handling and insurance for peace of mind. We provide VIN-level tracking, post-delivery photo checks, climate-controlled trailers for classic cars, white-glove handover and streamlined paperwork to protect value and speed the delivery process.",
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
      "Our trained professionals handle loading and unloading with precision, using proper equipment and techniques to prevent any damage to your belongings. We use forklifts, ramps and trained riggers to protect heavy items, ensuring balanced loading and damage-free placement at the new site. Teams apply padded slings, floor protection, weight distribution planning and barcode inventory checks so items are tracked and positioned correctly during transit and delivery.",
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
      "Quick and efficient local relocation services within your city. We make moving within the city hassle-free with our streamlined process. Our team plans routes, manages parking and permits, and coordinates timing to reduce downtime and make local moves frictionless and efficient. We arrange elevator and stair access, provide short-term holding options, and offer configurable time windows to suit your schedule and minimize disruption.",
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
      "Safe and secure storage facilities for your belongings. Whether you need short-term or long-term storage, our warehouses are equipped to keep your items safe. Inventory management, pallet racking, CCTV monitoring and periodic condition checks keep stored goods organized and retrievable when you need them. We offer dedicated bins for fragile items, climate-controlled zones for sensitive goods, scheduled auditing and easy digital access to your stored inventory.",
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
      "Comprehensive insurance coverage for your belongings during transit. We provide complete peace of mind with our insurance options for all goods. Transparent policies, quick claims handling and optional valuation add-ons protect high-value items during every stage of transit and storage. Our claims team assists with documentation, rapid surveys, salvage coordination and settlement guidance to minimize disruption after any incident.",
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
      "Reliable transportation services across India with our fleet of well-maintained vehicles. We ensure timely and safe delivery of your goods. Dedicated routes, driver vetting, scheduled maintenance and cargo-secure fittings minimize delays and protect consignments from origin to destination. Clients can choose consolidation or dedicated options, receive live ETAs, and benefit from route-optimization and contingency planning.",
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
      "Complete moving solutions for residential and commercial relocations. From planning to execution, we handle everything for a seamless move. Project managers coordinate timelines, packing lists, transit windows and onsite setup so relocations finish on schedule with minimal disruption. We provide pre-move surveys, detailed checklists, subcontractor coordination, protective measures, and a final walkthrough to confirm client satisfaction and functionality.",
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
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 bg-secondary">
        <Animated variant="glide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs xs:text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 text-secondary-foreground leading-tight">
              Complete Moving Solutions
            </h1>
            <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-3 xs:mt-3.5 sm:mt-4 md:mt-5 lg:mt-6">
              From packing to delivery, we provide comprehensive relocation services tailored to your
              needs.
            </p>
          </div>
        </Animated>
      </section>

      {/* Services Grid */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <Animated
                key={service.title}
                variant={index % 2 === 0 ? "glide" : "pop"}
                direction={index % 2 === 0 ? "left" : "right"}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-10 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : "order-2 lg:order-1"}>
                  <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                    <service.icon className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 xs:mb-3 sm:mb-4 text-foreground leading-tight">
                    {service.title}
                  </h2>
                  <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-muted-foreground mb-3 xs:mb-4 sm:mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 mb-4 xs:mb-6 sm:mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5 xs:gap-2 min-h-10">
                        <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="font-body text-xs xs:text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="h-10 xs:h-10 sm:h-11 md:h-12 text-xs xs:text-xs sm:text-sm md:text-base min-h-11">
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
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-tight">
            Need a Custom Solution?
          </h2>
          <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto mb-4 xs:mb-6 sm:mb-8">
            Contact us to discuss your specific requirements. We offer customized solutions for all
            your packing and moving needs.
          </p>
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center">
            <Button asChild className="h-10 xs:h-10 sm:h-11 md:h-12 text-xs xs:text-xs sm:text-sm md:text-base min-h-11" variant="secondary">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              className="h-10 xs:h-10 sm:h-11 md:h-12 text-xs xs:text-xs sm:text-sm md:text-base min-h-11"
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
