import { Phone } from "lucide-react";
import { useState } from "react";

const CallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { number: "+919247872222", display: "+91 92478 72222" },
    { number: "+919032616993", display: "+91 9032616993" },
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
    setIsOpen(false);
  };

  return (
    <>
      {/* Call Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Call us"
        className="group fixed bottom-20 sm:bottom-24 md:bottom-28 right-4 sm:right-6 z-50 flex items-center h-11 sm:h-12 md:h-14 w-11 sm:w-12 md:w-14 hover:w-40 sm:hover:w-48 md:hover:w-52 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500/50"
      >
        {/* Icon */}
        <div className="flex items-center justify-center h-11 sm:h-12 md:h-14 w-11 sm:w-12 md:w-14 flex-shrink-0">
          <Phone className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
        </div>

        {/* Text */}
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-1 sm:translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs sm:text-sm md:text-base font-bold pr-3 sm:pr-4 md:pr-6 leading-none">
          Call Now
        </span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-end sm:items-center justify-end sm:justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full sm:max-w-md animate-in fade-in slide-in-from-bottom-5 sm:slide-in-from-center-0 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b border-gray-200 px-6 py-5">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                Choose a Number to Call
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Select which phone number you'd like to call
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="p-6 space-y-3">
              {phoneNumbers.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCall(item.number)}
                  className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <div className="h-12 w-12 rounded-full bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-body font-semibold text-gray-900">
                      {item.display}
                    </p>
                    <p className="text-xs text-gray-500">Tap to call</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Close Button */}
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-2.5 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallButton;
