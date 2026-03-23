"use client";

import { useState, useEffect } from "react";

const larkHouseImages = [
  "/larkhousefrontphoto.webp",
  "/larkhouseentrance.png",
  "/larkhousewhole.png",
];

export default function ClassroomSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % larkHouseImages.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="classroom"
      className="py-16 sm:py-24 relative"
      style={{
        backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Rotating Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-4/3 group">
            {larkHouseImages.map((src, index) => (
              <img
                key={src}
                alt="The Lark House gathering center"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                src={src}
              />
            ))}
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prev) =>
                    (prev - 1 + larkHouseImages.length) %
                    larkHouseImages.length,
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-xl">
                chevron_left
              </span>
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prev) => (prev + 1) % larkHouseImages.length,
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-xl">
                chevron_right
              </span>
            </button>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <span className="font-label text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Classroom
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black text-gray-800 leading-tight tracking-tight">
              The Lark House
            </h2>
            <div className="space-y-6 text-gray-600 font-medium text-sm sm:text-lg leading-relaxed">
              <p className="transition-all duration-300 hover:text-gray-800">
                We're proud to partner with The Lark House, a vibrant
                community gathering center in Meridian completed in 2025.
                All Idaho Discovery Week classes are held on the second
                floor of this beautiful space.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 sm:p-5 border border-blue-100">
                <span className="material-symbols-outlined text-blue-500 text-2xl mt-0.5">
                  location_on
                </span>
                <div>
                  <h4 className="font-label font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">
                    Address
                  </h4>
                  <a
                    href="https://maps.app.goo.gl/XARyxC4kRNek5ygK7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline text-sm sm:text-base transition-colors duration-300"
                  >
                    1748 W Island Green Dr, Meridian, ID 83646
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 sm:p-5 border border-blue-100">
                <span className="material-symbols-outlined text-blue-500 text-2xl mt-0.5">
                  architecture
                </span>
                <div>
                  <h4 className="font-label font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">
                    Inspiring Space
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Beautiful modern architecture designed to create an
                    uplifting environment where students can thrive and feel
                    inspired.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-4 sm:p-5 border border-blue-100">
                <span className="material-symbols-outlined text-blue-500 text-2xl mt-0.5">
                  local_parking
                </span>
                <div>
                  <h4 className="font-label font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">
                    Parking
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Free parking is available on-site for easy drop-off and
                    pick-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
