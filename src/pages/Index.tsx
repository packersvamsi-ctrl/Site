import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import SectionTitle from "@/components/SectionTitle";
import Animated from "@/components/Animated";
import ServiceCard from "@/components/ServiceCard";
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
  CheckCircle,
  Users,
  Award,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Packing & Unpacking",
    description: "Expert packing with quality materials to ensure safe transit of your belongings.",
  },
  {
    icon: Car,
    title: "Car Transportation",
    description: "Specialized vehicles for safe and secure car transport across India.",
  },
  {
    icon: Truck,
    title: "Loading & Unloading",
    description: "Professional team for careful handling of your items during loading and unloading.",
  },
  {
    icon: MapPin,
    title: "Local Shifting",
    description: "Efficient local relocation services within your city with minimal hassle.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Safe and secure storage solutions for short and long-term needs.",
  },
  {
    icon: Shield,
    title: "Transit Insurance",
    description: "Comprehensive insurance coverage for complete peace of mind.",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "30+", label: "Years Experience" },
  { icon: MapPin, value: "500+", label: "Cities Covered" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const whyUs = [
  "Cost effective without compromising quality",
  "Well trained and professional team",
  "Proper packing supplies and equipment",
  "Proper vehicles for all types of goods",
  "Special attention to every aspect of moving",
  "Strong logistics support and connectivity",
  "Sophisticated warehouse facilities",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start lg:items-center">
            <Animated variant="fade-slide" className="order-2 lg:order-1" duration={0.7}>
              <SectionTitle
                subtitle="About Us"
                title="Your Trusted Partner for Safe Relocation"
                centered={false}
              />
              <p className="font-body text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                "Vamsi packers and movers innovative spirit generates an attitude of continuing
                development. The result is an organization focused upon Service, Quality and Trust"
              </p>
              <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                We are one of the leading Packers & Movers of Household goods, office shifting, car,
                furniture and machinery goods and removable services, having network in major cities
                all over the India.
              </p>
              <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm">
                <Link to="/about">
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </Link>
              </Button>
            </Animated>
            <Animated variant="ken-burns" className="order-1 lg:order-2 relative" duration={1.0}>
              <div className="aspect-video rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-card-hover bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/banners/banner-3.jpg"
                  alt="Professional packing service"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-3 sm:-left-6 md:-left-6 bg-primary text-primary-foreground p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-lg">
                <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl">30+</p>
                <p className="font-subtitle text-xs sm:text-sm">Years of Excellence</p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <Animated variant="fade-slide" duration={0.65}>
            <SectionTitle
              subtitle="Our Services"
              title="Complete Moving Solutions"
              description="From packing to delivery, we handle every aspect of your relocation with care and precision."
            />
          </Animated>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => (
              <Animated 
                key={service.title} 
                variant="scale-pop"
                duration={0.6}
                threshold={0.2}
              >
                <ServiceCard {...service} />
              </Animated>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Animated variant="scale-pop" duration={0.65}>
              <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base">
                <Link to="/services">
                  View All Services <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </Link>
              </Button>
            </Animated>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 space-y-12">
          {/* Row 1 — video from left */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <Animated variant="slide-directional" direction="left" className="md:w-1/2 w-full" duration={0.8}>
              <video
                src="/house.mp4"
                playsInline
                muted
                autoPlay
                loop
                preload="auto"
                controlsList="nodownload"
                webkit-playsinline="true"
                className="w-full h-auto rounded-lg shadow-lg bg-black"
                onError={(e) => console.error('Video error:', e)}
              />
            </Animated>
            <Animated variant="blur-focus" className="md:w-1/2 w-full" duration={0.75}>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-3">Household & Office Packing</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Specialist packing and transport for homes and offices — room-by-room packing with
                premium materials, custom crating for fragile items, secure loading and transport,
                and careful delivery. We handle furniture, electronics, and valuables with care to
                ensure they arrive intact.
              </p>
            </Animated>
          </div>

          {/* Row 2 — video from right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12">
            <Animated variant="slide-directional" direction="right" className="md:w-1/2 w-full" duration={0.8}>
              <video
                src="/car.mp4"
                playsInline
                muted
                autoPlay
                loop
                preload="auto"
                controlsList="nodownload"
                webkit-playsinline="true"
                className="w-full h-auto rounded-lg shadow-lg bg-black"
                onError={(e) => console.error('Video error:', e)}
              />
            </Animated>
            <Animated variant="blur-focus" className="md:w-1/2 w-full" duration={0.75}>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-3">Vehicle Packing & Transport</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Specialized solutions for cars and bikes — secure cradles, fuel-safe procedures,
                covered transport, and door-to-door handling. We perform inspections, offer
                optional insurance, and use expert loading techniques to protect vehicles in transit.
              </p>
            </Animated>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat) => (
              <Animated 
                key={stat.label} 
                variant="scale-pop"
                duration={0.65}
                threshold={0.3}
              >
                <div className="text-center">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                  <p className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-secondary-foreground">
                    {stat.value}
                  </p>
                  <p className="font-subtitle text-xs sm:text-sm text-secondary-foreground/70">{stat.label}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            <Animated variant="mask-reveal" className="order-2 lg:order-1" duration={0.85}>
              <div className="aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-card-hover bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/banners/banner-1.jpg"
                  alt="Professional moving team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </Animated>
            <Animated variant="fade-slide" className="order-1 lg:order-2" duration={0.7}>
              <SectionTitle subtitle="Why Choose Us" title="What Sets Us Apart" centered={false} />
              <ul className="space-y-3 sm:space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 sm:mt-8">
                <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <Animated variant="blur-focus" duration={0.8}>
            <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3 sm:mb-4 md:mb-6">
              Ready to Move?
            </h2>
          </Animated>
          <Animated variant="fade-slide" duration={0.7}>
            <p className="font-body text-xs sm:text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8">
              Get a free quote today and experience hassle-free relocation with Vamsi Packers and
              Movers.
            </p>
          </Animated>
          <Animated variant="scale-pop" duration={0.7}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base" variant="secondary">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base"
                variant="outline"
              >
                <a href="tel:+919247872222">Call Now: +91 92478 72222</a>
              </Button>
            </div>
          </Animated>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
