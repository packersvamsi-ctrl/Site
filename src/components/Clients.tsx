import Animated from "./Animated";
import SectionTitle from "./SectionTitle";
import InfiniteMarquee from "./InfiniteMarquee";

const clients = [
  { name: "State Bank of India", logo: "/clients/sbi.png" },
  { name: "Bank of Baroda", logo: "/clients/bank-of-baroda-1.svg" },
  { name: "Canara Bank", logo: "/clients/canarabank.png" },
  { name: "Union Bank", logo: "/clients/unionbank.png" },
  { name: "Indian Oil", logo: "/clients/Indian_Oil_Logo.svg" },
  { name: "Tata Group", logo: "/clients/tata-logo.svg" },
];

const Clients = () => {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <Animated variant="fade-slide" duration={0.7}>
          <SectionTitle
            subtitle="Our Trusted Partners"
            title="Our Clients"
            description="Trusted by leading organizations across India"
          />
        </Animated>

        {/* Clients Infinite Carousel */}
        <div className="mt-10 xs:mt-12 sm:mt-14 md:mt-16">
          <InfiniteMarquee
            direction="left"
            speed="normal"
            gap="2rem"
            pauseOnHover={true}
            gradientEdges={true}
            gradientColor="rgb(248, 250, 252)"
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 h-16 xs:h-20 sm:h-24 md:h-28 w-32 xs:w-40 sm:w-48 md:w-56 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border border-gray-200 flex items-center justify-center p-3 xs:p-4 sm:p-6"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
};

export default Clients;
