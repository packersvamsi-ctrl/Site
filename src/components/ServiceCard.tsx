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
      className="group bg-card rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-full"
    >
      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary transition-colors">
        <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-card-foreground">{title}</h3>
      <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground">{description}</p>
    </Link>
  );
};

export default ServiceCard;
