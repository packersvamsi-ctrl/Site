import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
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
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              About Us
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 text-secondary-foreground leading-tight">
              Vamsi Packers and Movers
            </h1>
            <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-4 sm:mt-5 md:mt-6">
              "Innovative spirit generates an attitude of continuing development. The result is an
              organization focused upon Service, Quality and Trust"
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <SectionTitle subtitle="Our Story" title="Welcome to Vamsi Packers and Movers" centered={false} />
              <div className="space-y-3 sm:space-y-4 font-body text-muted-foreground text-sm sm:text-base">
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
            <div className="order-1 lg:order-2 bg-muted rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-5 md:mb-6 bg-secondary">
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
              <h3 className="font-heading font-semibold text-lg sm:text-xl text-foreground">Founder</h3>
              <p className="font-subtitle text-sm text-muted-foreground">(founder name)</p>
              <p className="font-body text-muted-foreground mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
                With over 15 years of experience in the logistics industry, our founder established
                Vamsi Packers and Movers with a vision to provide reliable, safe, and affordable
                relocation services across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Vision */}
            <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card">
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <Eye className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-card-foreground">
                Our Vision
              </h3>
              <p className="font-body text-muted-foreground text-sm sm:text-base">
                Our vision is to become a premier transportation company which offers integrated
                transportation solutions including full chain of logistics by means of total
                commitment to our clients and suppliers. We aim to provide our full transportation
                services, to deliver your cargo at the highest safety standards and to your complete
                satisfaction.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card">
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                <Target className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-card-foreground">
                Our Mission
              </h3>
              <p className="font-body text-muted-foreground text-sm sm:text-base">
                Our mission is to provide our clients comprehensive relocation services of exceptional
                value. We strive to give our customers a relocation experience that is as trouble-free
                and convenient as possible, a single point for a complete spectrum of resources. We
                are committed to achieving quality through teamwork, integrity, coordination,
                cooperation and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionTitle
            subtitle="Why Us?"
            title="What Makes Us Different"
            description="We go above and beyond to ensure your relocation experience is seamless and stress-free."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {whyUsPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-muted rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all hover:shadow-card"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <p className="font-body text-xs sm:text-sm md:text-base text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <SectionTitle
            subtitle="Our Values"
            title="Service, Quality & Trust"
            description="These three pillars guide everything we do at Vamsi Packers and Movers."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <div className="text-center">
              <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Award className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl text-secondary-foreground mb-2 sm:mb-3">
                Service
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-secondary-foreground/70">
                Dedicated to providing exceptional service at every step of your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <CheckCircle className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl text-secondary-foreground mb-2 sm:mb-3">
                Quality
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-secondary-foreground/70">
                Premium packing materials and trained professionals ensure top-quality handling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-primary rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Target className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl text-secondary-foreground mb-2 sm:mb-3">
                Trust
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-secondary-foreground/70">
                Building long-lasting relationships through reliability and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3 sm:mb-4 md:mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-primary-foreground/80 mb-6 sm:mb-8 max-w-xl mx-auto">
            Contact us today for a free quote and let us handle your relocation needs with care and
            professionalism.
          </p>
          <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base" variant="secondary">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
