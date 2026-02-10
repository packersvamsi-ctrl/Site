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
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
        <Animated variant="glide" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subtitle text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold">
              Our Work
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 text-secondary-foreground leading-tight">
              Gallery
            </h1>
            <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-secondary-foreground/80 mt-4 sm:mt-5 md:mt-6">
              Take a look at our previous work and see how we handle relocations with care and
              professionalism.
            </p>
          </div>
        </Animated>
      </section>

      {/* Filter Buttons */}
      <section className="py-6 sm:py-8 md:py-10 bg-background border-b border-border">
        <Animated variant="fade" className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-body text-xs sm:text-sm md:text-base font-medium transition-all whitespace-nowrap min-h-10 ${
                  filter === category
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
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
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
                  <div className="p-2 sm:p-3 md:p-4">
                    <span className="font-subtitle text-xs text-white/90 uppercase tracking-wider line-clamp-1">
                      {image.category}
                    </span>
                    <p className="font-body text-white text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-2">{image.alt}</p>
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 text-white hover:text-primary transition-colors min-h-10 min-w-10 flex items-center justify-center z-51"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery lightbox"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.currentTarget.src = "/banners/banner-1.jpg";
            }}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-3 sm:mb-4 md:mb-6 leading-tight">
            Ready to Make Your Move?
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-primary-foreground/80 max-w-xl mx-auto mb-6 sm:mb-8">
            Join thousands of satisfied customers who trusted us with their relocation.
          </p>
          <Button asChild className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base" variant="secondary">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
