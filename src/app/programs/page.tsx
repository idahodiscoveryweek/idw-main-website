import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Idaho Discovery Week's summer 2026 programs — Electronics & Circuitry, Drawing From Life, and Japanese Language & Culture. Hands-on camps for kids in Meridian, Idaho.",
  openGraph: {
    title: "Programs | Idaho Discovery Week",
    description:
      "Explore our summer 2026 programs — Electronics, Drawing, and Japanese Language & Culture camps for kids in Meridian, Idaho.",
  },
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="bg-linear-to-br from-blue-50 to-indigo-50 pt-28 sm:pt-60 pb-12 sm:pb-24 relative"
          style={{
            backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay for opacity */}
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-4 sm:mb-6">
              Our Programs
            </h1>
            <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your adventure! Each program is designed to inspire
              creativity, build skills, and create unforgettable summer
              memories.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Electronics Program */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3 border border-gray-100">
                <div className="aspect-5/6 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt="Student building circuits with Arduino microcontroller at Idaho Discovery Week electronics camp"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/breadboard-wires-micro-servos-connected-600nw-2402057335.webp"
                  />
                  <div className="absolute top-4 left-4 bg-linear-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold font-label uppercase tracking-widest shadow-lg">
                    Tech Track
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-headline text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    Electronics & Circuitry
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    Master the invisible power! Using Arduino microcontrollers,
                    you'll learn electricity basics while navigating our "A Week
                    Lost In Space" curriculum.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-label text-blue-500 mb-6">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          devices
                        </span>
                        Electronics Kit Included
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">group</span>
                        Ages 10+
                      </span>
                    </div>
                    <Link
                      href="/programs/electronics"
                      className="mt-0 group flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-blue-500 to-blue-400 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-2xl"
                    >
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        bolt
                      </span>
                      <span>Discover: Electronics</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Art Program */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3 border border-gray-100">
                <div className="aspect-5/6 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt="Student sketching from life at Idaho Discovery Week drawing camp"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/drawingfromlife.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-xs font-bold font-label uppercase tracking-widest shadow-lg">
                    Art Track
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-headline text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-500 transition-colors duration-300">
                    Drawing From Life
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    See the world through an artist's eyes. You'll develop
                    fundamental drawing skills and explore various artistic
                    techniques in a creative environment.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-label text-amber-500 mb-6">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          palette
                        </span>
                        Art Supplies Included
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">group</span>
                        Ages 8+
                      </span>
                    </div>
                    <Link
                      href="/programs/art"
                      className="mt-0 group flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-amber-500 to-amber-400 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-2xl"
                    >
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        draw
                      </span>
                      <span>Discover: Drawing</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Japanese Program */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3 border border-gray-100">
                <div className="aspect-5/6 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt="Students learning Japanese language and culture at Idaho Discovery Week"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/japaneselanguageandculture.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold font-label uppercase tracking-widest shadow-lg">
                    Culture Track
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-headline text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-500 transition-colors duration-300">
                    Japanese Language & Culture
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    Immerse yourself in Japanese language and culture! Learn
                    basic phrases, writing systems, and explore traditions
                    through interactive activities.
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-label text-emerald-500 mb-6">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          menu_book
                        </span>
                        Materials Included
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">group</span>
                        Ages 8+
                      </span>
                    </div>
                    <Link
                      href="/programs/japanese"
                      className="mt-0 group flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-emerald-500 to-emerald-400 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-2xl"
                    >
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        temple_buddhist
                      </span>
                      <span>Discover: Japanese</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
