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
    name: "Arun Kumar",
    city: "Visakhapatnam",
    rating: 5,
    review: "Good service, i am very satisfied",
  },
  {
    name: "Chakradhar Sathujoda",
    city: "Visakhapatnam",
    rating: 4,
    review: "Good service, but negotiation plays key role.",
  },
  {
    name: "Ravi Kasa",
    city: "Visakhapatnam",
    rating: 5,
    review: "Excellent Service",
  },
  {
    name: "Raj Kumar",
    city: "Bhimavaram",
    rating: 5,
    review: "Good service, I have taken there services to move from Vizag to Bhimavaram they have moved the goods very safely.",
  },
  {
    name: "K Bhupati",
    city: "Hyderabad",
    rating: 5,
    review: "Had A Great Experience With Them While Shifting Our House Hold Articles From Vizag To Hyderabad With Safe Packing and Handling",
  },
  {
    name: "Akash Rajana",
    city: "Visakhapatnam",
    rating: 5,
    review: "Best packers and movers. I have used there service for moving my household goods locally they quoted me a reasonable costing.",
  },
  {
    name: "T Lakshmi",
    city: "Hyderabad",
    rating: 5,
    review: "We have shifted from Vizag to Hyderabad. Choosing this Vamsi packers and movers makes us so happy and as well as Packing was too good and safe 👍",
  },
  {
    name: "Chaitanya",
    city: "Visakhapatnam",
    rating: 5,
    review: "Very good packing and shipping, the owner is very helpful person and highly recommend",
  },
  {
    name: "Hussian Jeelani",
    city: "Visakhapatnam",
    rating: 5,
    review: "Shifting process was really fast and clean. The staff were really helpful. Owner response was also good. Good service at a convenient price.",
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
