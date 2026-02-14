import { Star } from "lucide-react";
import Animated from "./Animated";
import SectionTitle from "./SectionTitle";
import InfiniteMarquee from "./InfiniteMarquee";

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Raj Kumar",
    city: "Delhi",
    rating: 5,
    review: "Exceptional service! Vamsi Packers handled my home shift with utmost care and professionalism. All items arrived in perfect condition.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    review: "Outstanding experience from start to finish. The team was punctual, courteous, and very efficient. Highly recommended!",
  },
  {
    name: "Amit Patel",
    city: "Bangalore",
    rating: 4,
    review: "Great service and competitive pricing. The packing was secure and delivery was on time. Very satisfied with the entire process.",
  },
  {
    name: "Neha Gupta",
    city: "Hyderabad",
    rating: 5,
    review: "Best moving experience ever! The team handled our furniture and delicate items with incredible care. Truly professional!",
  },
  {
    name: "Vikram Singh",
    city: "Pune",
    rating: 5,
    review: "Reliable and trustworthy. They completed the job exactly as promised. No hidden charges, just honest and great service.",
  },
  {
    name: "Anjali Verma",
    city: "Jaipur",
    rating: 4,
    review: "Very impressed with their systematic approach. The insurance coverage gave me peace of mind throughout the relocation.",
  },
  {
    name: "Suresh Nair",
    city: "Chennai",
    rating: 5,
    review: "Top-notch service quality. The entire team was friendly and made the stressful moving process seamless and enjoyable.",
  },
  {
    name: "Pooja Desai",
    city: "Ahmedabad",
    rating: 5,
    review: "Excellent coordination and communication. They kept me updated every step of the way. Absolutely professional company!",
  },
  {
    name: "Deepak Mishra",
    city: "Lucknow",
    rating: 5,
    review: "Outstanding attention to detail. The packing quality was exceptional and everything arrived safely. Worth every penny!",
  },
  {
    name: "Shruti Saxena",
    city: "Noida",
    rating: 5,
    review: "Professional team with great communication. They made the entire relocation process smooth and stress-free for us.",
  },
  {
    name: "Rohan Kapoor",
    city: "Gurgaon",
    rating: 4,
    review: "Really happy with the service. The movers were careful, efficient, and completed the job faster than expected. Great value!",
  },
  {
    name: "Divya Panyala",
    city: "Visakhapatnam",
    rating: 5,
    review: "Local expertise with professional standards. They understand the local area well and provided excellent service. Highly satisfied!",
  },
  {
    name: "Arjun Reddy",
    city: "Secunderabad",
    rating: 5,
    review: "Five-star experience! Professional handling, perfect packaging, and on-time delivery. Couldn't ask for better service.",
  },
  {
    name: "Kavya Iyer",
    city: "Kochi",
    rating: 5,
    review: "Best packers and movers in the city. Their transparency, professionalism, and quality of service are unmatched!",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-orange-500 text-orange-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <Animated variant="fade-slide" duration={0.7}>
          <SectionTitle
            subtitle="Customer Testimonials"
            title="What Our Clients Say"
            description="Trusted by thousands of happy customers across India"
          />
        </Animated>

        {/* Testimonials Carousel */}
        <div className="mt-10 xs:mt-12 sm:mt-14 md:mt-16">
          <InfiniteMarquee
            direction="left"
            speed="slow"
            gap="3.5rem"
            pauseOnHover={true}
            gradientEdges={true}
            gradientColor="white"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 w-72 xs:w-80 sm:w-96 bg-gradient-to-br from-slate-50 to-gray-100 p-5 xs:p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-500 border border-gray-200"
              >
                <StarRating rating={testimonial.rating} />
                <p className="font-body text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed mb-4 xs:mb-5 sm:mb-6 min-h-20 sm:min-h-24">
                  "{testimonial.review}"
                </p>
                <div className="border-t border-gray-200 pt-4 xs:pt-5">
                  <p className="font-heading font-bold text-sm xs:text-base text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="font-subtitle text-xs text-gray-600">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
