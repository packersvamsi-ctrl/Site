import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Animated from "@/components/Animated";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Target, Eye, Award } from "lucide-react";

const whyUsPoints = [
  "Cost effective without compromising with the quality of our services",
  "Well trained team that handles your stuff with precision and care",
  "Proper packing supplies and equipments for protection",
  "Proper vehicles depending on the type and amount of stuff",
  "Special attention to every aspect of moving process",
  "Strong logistics support with good connectivity",
  "Sophisticated warehouse for safe storage",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 bg-secondary">
        <Animated variant="fade-slide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs xs:text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              About Us
            </span>
            <h1 className="font-heading font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 text-secondary-foreground leading-tight title-reveal">
              Vamsi Packers and Movers
            </h1>
            <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-3 xs:mt-3.5 sm:mt-4 md:mt-5 lg:mt-6">
              "Innovative spirit generates an attitude of continuing development. The result is an
              organization focused upon Service, Quality and Trust"
            </p>
          </div>
        </Animated>
      </section>

      {/* About Content */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <Animated variant="fade-slide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <SectionTitle subtitle="Our Story" title="Welcome to Vamsi Packers and Movers" centered={false} />
              <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4 font-body text-muted-foreground text-xs xs:text-xs sm:text-base">
                <p>
                  We are one of the leading Packers & Movers of Household goods, office shifting, car,
                  furniture and machinery goods and removable services, having network in major cities
                  all over the India. We are excellent service to provide you with the best of
                  professional packing from the point to loading and final unpacking destination in
                  India on door to door basis as well as local shifting.
                </p>
                <p>
                  We provide excellent packers and movers services in India. Our team takes entire
                  responsibility of the delivery of your articles from delicate items of glassware to
                  the heaviest machinery is undertaken to their respective destinations. The packing
                  and transportation of the goods we apply modern techniques and the latest and most
                  suitable materials.
                </p>
                <p>
                  To maintain high standards of clients, we believe in the philosophy of unlimited
                  business for unlimited client satisfaction. It would be a matter of great privilege
                  for us to whom we can serve with total commitment and dedication.
                </p>
                <p>
                  We are always in search of innovative packing style to enhance our packing and moving
                  skills. We have excellent infrastructure for handling Multi Tasking Packers and
                  Movers job.
                </p>
              </div>
            </div>

            {/* Founder Section */}
            <div className="order-1 lg:order-2 bg-muted rounded-lg sm:rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8">
              <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden mb-3 xs:mb-4 sm:mb-5 md:mb-6 bg-secondary">
                <img
                  src="/vamsiowner.jpg"
                  alt="Founder - Vamsi Packers and Movers"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/banners/banner-1.jpg";
                  }}
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading font-semibold text-base xs:text-lg sm:text-xl text-foreground">Founder</h3>
              <p className="font-subtitle text-xs sm:text-sm text-muted-foreground">(founder name)</p>
              <p className="font-body text-muted-foreground mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-xs sm:text-sm md:text-base">
                With over 30+ years of experience in the logistics industry, our founder established
                Vamsi Packers and Movers with a vision to provide reliable, safe, and affordable
                relocation services across India.
              </p>
            </div>
          </div>
        </Animated>
      </section>

      {/* Vision & Mission */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-muted">
        <Animated variant="fade-slide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            {/* Vision */}
            <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 shadow-card">
              <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <Eye className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base xs:text-lg sm:text-xl md:text-2xl mb-2 xs:mb-3 sm:mb-4 text-card-foreground">
                Our Vision
              </h3>
              <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-muted-foreground">
                Our vision is to become a premier transportation company which offers integrated
                transportation solutions including full chain of logistics by means of total
                commitment to our clients and suppliers. We aim to provide our full transportation
                services, to deliver your cargo at the highest safety standards and to your complete
                satisfaction.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 shadow-card">
              <div className="w-10 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <Target className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base xs:text-lg sm:text-xl md:text-2xl mb-2 xs:mb-3 sm:mb-4 text-card-foreground">
                Our Mission
              </h3>
              <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-muted-foreground">
                Our mission is to provide our clients comprehensive relocation services of exceptional
                value. We strive to give our customers a relocation experience that is as trouble-free
                and convenient as possible, a single point for a complete spectrum of resources. We
                are committed to achieving quality through teamwork, integrity, coordination,
                cooperation and continuous improvement.
              </p>
            </div>
          </div>
        </Animated>
      </section>

      {/* Why Choose Us */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <Animated variant="fade-slide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionTitle
            subtitle="Why Us?"
            title="What Makes Us Different"
            description="We go above and beyond to ensure your relocation experience is seamless and stress-free."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
            {whyUsPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 bg-muted rounded-lg sm:rounded-xl p-3 xs:p-3.5 sm:p-4 md:p-6 transition-all hover:shadow-card min-h-10"
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </Animated>
      </section>

      {/* Values */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary">
        <Animated variant="scale-pop" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <SectionTitle
            subtitle="Our Values"
            title="Service, Quality & Trust"
            description="These three pillars guide everything we do at Vamsi Packers and Movers."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mt-6 xs:mt-8 sm:mt-10 md:mt-12">
            <div className="text-center">
              <div className="w-12 xs:w-14 sm:w-16 md:w-20 h-12 xs:h-14 sm:h-16 md:h-20 bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <Award className="w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg md:text-xl text-secondary-foreground mb-1.5 xs:mb-2 sm:mb-3">
                Service
              </h3>
              <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-secondary-foreground/70">
                Dedicated to providing exceptional service at every step of your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 xs:w-14 sm:w-16 md:w-20 h-12 xs:h-14 sm:h-16 md:h-20 bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <CheckCircle className="w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg md:text-xl text-secondary-foreground mb-1.5 xs:mb-2 sm:mb-3">
                Quality
              </h3>
              <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-secondary-foreground/70">
                Premium packing materials and trained professionals ensure top-quality handling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 xs:w-14 sm:w-16 md:w-20 h-12 xs:h-14 sm:h-16 md:h-20 bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <Target className="w-6 xs:w-7 sm:w-8 md:w-10 h-6 xs:h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg md:text-xl text-secondary-foreground mb-1.5 xs:mb-2 sm:mb-3">
                Trust
              </h3>
              <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-secondary-foreground/70">
                Building long-lasting relationships through reliability and transparency.
              </p>
            </div>
          </div>
        </Animated>
      </section>

      {/* Videos + Map Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-8 lg:gap-10 items-start">
            <video
              src="/house.mp4"
              playsInline
              muted
              autoPlay
              loop
              preload="metadata"
              className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg object-cover"
            />

            <video
              src="/car.mp4"
              playsInline
              muted
              autoPlay
              loop
              preload="metadata"
              className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12">
            <h3 className="font-heading font-semibold text-lg xs:text-lg sm:text-xl md:text-2xl mb-2 xs:mb-3 sm:mb-4">Our Location</h3>
            <div className="w-full h-48 xs:h-52 sm:h-56 md:h-64 lg:h-72 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.857265469847!2d83.29711007621308!3d17.701739868309466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3947496cd7f96f%3A0xcbf21ddaa4a68f32!2sVamsi%20Packers%20%26%20Movers!5e0!3m2!1sen!2sin!4v1707900000000"
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
      </section>

      {/* CTA */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-2 xs:mb-3 sm:mb-4 md:mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-primary-foreground/80 mb-4 xs:mb-6 sm:mb-8 max-w-xl mx-auto">
            Contact us today for a free quote and let us handle your relocation needs with care and
            professionalism.
          </p>
          <Button asChild className="h-10 xs:h-10 sm:h-11 md:h-12 text-xs xs:text-xs sm:text-sm md:text-base min-h-11" variant="secondary">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
