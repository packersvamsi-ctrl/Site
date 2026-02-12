import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link = "/services" }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group block h-full"
    >
      <div className="bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30 h-full flex flex-col backdrop-blur-sm hover:bg-card/95">
        {/* Icon Container */}
        <div className="mb-5 sm:mb-6 md:mb-7 flex-shrink-0">
          <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
            <Icon className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-primary group-hover:text-primary transition-colors duration-500" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-heading font-bold text-base sm:text-lg md:text-xl text-card-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-500">
            {title}
          </h3>
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border/30 group-hover:border-primary/50 transition-colors duration-500">
          <span className="inline-flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-500">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
