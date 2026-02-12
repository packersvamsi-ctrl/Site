import { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Animated from "@/components/Animated";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/work-1.jpg",
    alt: "Professional packing service",
    category: "Packing",
  },
  {
    src: "/gallery/work-2.jpg",
    alt: "Loading furniture into truck",
    category: "Loading",
  },
  {
    src: "/gallery/work-3.jpg",
    alt: "Car transportation service",
    category: "Car Transport",
  },
  {
    src: "/gallery/work-5.jpg",
    alt: "Office relocation",
    category: "Office Shifting",
  },
  {
    src: "/gallery/work-6.jpg",
    alt: "Household goods packing",
    category: "Packing",
  },
  {
    src: "/gallery/work-7.jpg",
    alt: "Moving truck on highway",
    category: "Transportation",
  },
  {
    src: "/gallery/work-8.jpg",
    alt: "Unpacking at destination",
    category: "Unpacking",
  },
  {
    src: "/gallery/work-9.jpg",
    alt: "Careful handling of items",
    category: "Loading",
  },
  {
    src: "/gallery/work-11.jpg",
    alt: "Furniture moving",
    category: "Moving",
  },
  {
    src: "/gallery/work-12.jpg",
    alt: "Secure packaging",
    category: "Packing",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24 bg-secondary">
        <Animated variant="glide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs xs:text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              Our Work
            </span>
            <h1 className="font-heading font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 text-secondary-foreground leading-tight">
              Gallery
            </h1>
            <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-3 xs:mt-3.5 sm:mt-4 md:mt-5 lg:mt-6">
              Take a look at our previous work and see how we handle relocations with care and
              professionalism.
            </p>
          </div>
        </Animated>
      </section>

      {/* Filter Buttons */}
      <section className="py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10 bg-background border-b border-border">
        <Animated variant="fade" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 xs:px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-body text-xs xs:text-xs sm:text-sm md:text-base font-medium transition-all whitespace-nowrap min-h-10 ${ filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Animated>
      </section>

      {/* Gallery Grid */}
      <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 min-h-[80px] xs:min-h-[100px] sm:min-h-[150px]"
                onClick={() => setSelectedImage(image.src)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") setSelectedImage(image.src);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `/banners/banner-${(index % 5) + 1}.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end">
                  <div className="p-1.5 xs:p-2 sm:p-3 md:p-4">
                    <span className="font-subtitle text-[10px] xs:text-xs text-white/90 uppercase tracking-wider line-clamp-1">
                      {image.category}
                    </span>
                    <p className="font-body text-white text-[10px] xs:text-xs sm:text-sm mt-0.5 line-clamp-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-1.5 xs:p-2 sm:p-3 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-2 xs:top-2.5 sm:top-3 md:top-4 lg:top-6 right-2 xs:right-2.5 sm:right-3 md:right-4 lg:right-6 text-white hover:text-primary transition-colors min-h-10 min-w-10 flex items-center justify-center z-51"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery lightbox"
            className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.currentTarget.src = "/banners/banner-1.jpg";
            }}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-tight">
            Ready to Make Your Move?
          </h2>
          <p className="font-body text-xs xs:text-xs sm:text-sm md:text-base text-primary-foreground/80 max-w-xl mx-auto mb-4 xs:mb-6 sm:mb-8">
            Join thousands of satisfied customers who trusted us with their relocation.
          </p>
          <Button asChild className="h-10 xs:h-10 sm:h-11 md:h-12 text-xs xs:text-xs sm:text-sm md:text-base min-h-11" variant="secondary">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
