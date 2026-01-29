import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919247872222";
  const message = "Hello! I'm interested in your packing and moving services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center h-11 sm:h-12 md:h-14 w-11 sm:w-12 md:w-14 hover:w-48 sm:hover:w-56 md:hover:w-60 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-whatsapp transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-whatsapp/50"
    >
      {/* Icon */}
      <div className="flex items-center justify-center h-11 sm:h-12 md:h-14 w-11 sm:w-12 md:w-14 flex-shrink-0">
        <img src="/wa.svg" alt="WhatsApp Icon" className="w-6 sm:w-7 md:w-10 h-6 sm:h-7 md:h-10" />
      </div>

      {/* Text */}
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-1 sm:translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs sm:text-sm md:text-base font-bold pr-3 sm:pr-4 md:pr-6 leading-none">
        Talk on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
