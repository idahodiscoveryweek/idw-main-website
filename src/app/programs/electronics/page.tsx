import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClassroomSection from "@/components/ClassroomSection";

export const metadata: Metadata = {
  title: "Electronics & Circuitry Camp",
  description:
    "Learn electronics and circuitry with Arduino microcontrollers at Idaho Discovery Week. Build circuits, code games, and take home your own electronics kit. Summer 2026 in Meridian, Idaho.",
  openGraph: {
    title: "Electronics & Circuitry Camp | Idaho Discovery Week",
    description:
      "Build circuits, code with Arduino microcontrollers, and take home your own electronics kit. Summer 2026 camp in Meridian, Idaho.",
    images: [
      { url: "/breadboard-wires-micro-servos-connected-600nw-2402057335.webp" },
    ],
  },
};

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="pt-28 sm:pt-56 pb-12 sm:pb-20 relative"
          style={{
            backgroundImage: "url(/cloud_background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/75 to-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div>
              <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-white text-3xl sm:text-5xl">
                    bolt
                  </span>
                  <h1 className="font-headline text-2xl sm:text-5xl md:text-6xl font-black text-white">
                    Electronics & Circuitry
                  </h1>
                </div>
                <a
                  href="#register"
                  className="hidden sm:flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-label font-bold text-sm shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl shrink-0"
                >
                  <span className="material-symbols-outlined text-lg">
                    how_to_reg
                  </span>
                  Register Now
                </a>
              </div>
              <p className="text-sm sm:text-xl text-white/90 max-w-3xl">
                Dive into the exciting world of electronics! Build circuits,
                work with microcontrollers, and bring your ideas to life through
                hands-on projects.
              </p>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full border border-white/30">
                  <span className="material-symbols-outlined text-white text-lg">
                    inventory_2
                  </span>
                  <span className="text-white font-label font-semibold text-sm">
                    Microcontroller Game Kit Included
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full border border-white/30">
                  <span className="material-symbols-outlined text-white text-lg">
                    thumb_up
                  </span>
                  <span className="text-white font-label font-semibold text-sm">
                    Beginner Friendly
                  </span>
                </div>
                <span className="inline-flex items-center bg-white/20 backdrop-blur text-white text-sm font-bold font-label px-4 py-2 rounded-full border border-white/30">
                  $189
                </span>
              </div>
              <a
                href="#register"
                className="sm:hidden mt-4 inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-full font-label font-bold text-sm shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
              >
                <span className="material-symbols-outlined text-lg">
                  how_to_reg
                </span>
                Register Now
              </a>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section
          className="py-10 sm:py-20 relative"
          style={{
            backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay for opacity */}
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-16 items-start">
              {/* Left Column - Description */}
              <div className="space-y-8">
                <div className="bg-blue-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                  <h2 className="font-headline text-xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                    What You'll Learn
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm sm:text-lg">
                    <p>
                      Embark on an exciting 5-day sci-fi adventure where you'll
                      learn coding and circuitry! Through an immersive space
                      mission storyline, you'll repair a crashed spaceship by
                      completing daily hands-on projects that teach real-world
                      tech skills.
                    </p>
                    <p>
                      Perfect for beginners and future innovators, this course
                      makes learning engaging and practical as you dive into C++
                      programming, exploring the Arduino Coding Environment, and
                      build essential circuit-building skills that will last a
                      lifetime.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                  <h3 className="font-headline text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Key Topics
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-blue-500 mt-1">
                        check_circle
                      </span>
                      <span className="text-gray-600">
                        Circuit design and breadboarding
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-blue-500 mt-1">
                        check_circle
                      </span>
                      <span className="text-gray-600">
                        Working with resistors, capacitors, and LEDs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-blue-500 mt-1">
                        check_circle
                      </span>
                      <span className="text-gray-600">
                        C++ programming fundamentals
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-blue-500 mt-1">
                        check_circle
                      </span>
                      <span className="text-gray-600">
                        Connecting components to microcontrollers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Projects & Instructor */}
              <div className="space-y-8">
                <div className="bg-blue-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                  <h3 className="font-headline text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                    Hands-On Projects
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-blue-500 text-xl">
                          lightbulb
                        </span>
                        <h4 className="font-bold text-gray-800">
                          LED Light Show
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Create programmable LED patterns using Arduino and basic
                        coding concepts.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-blue-500 text-xl">
                          dashboard
                        </span>
                        <h4 className="font-bold text-gray-800">
                          Flight Control Dashboard
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Create a display dashboard that shows vital signs of
                        your spaceship, including power levels, oxygen status,
                        and navigation data.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-blue-500 text-xl">
                          sports_esports
                        </span>
                        <h4 className="font-bold text-gray-800">
                          Spaceship Video Game
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Build a real spaceship gaming system that you get to
                        take home and play with friends and family.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-gray-800 mb-4">
                    Meet Your Instructor
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/IDWgrantprofile.png"
                        alt="Grant - Electronics Instructor"
                        className="w-full h-full rounded-full object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Grant</h4>
                      <p className="text-gray-600 text-sm">
                        Electronics Enthusiast & Future Engineer
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Major: Business Administration & Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClassroomSection />

        {/* Registration Section */}
        <section id="register" className="py-10 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="font-label text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                Enroll Now
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl font-black text-gray-800 mb-4">
                Choose Your Week
              </h2>
              <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
                Select the week that works best for your schedule. Each session
                runs Monday through Friday with the same incredible curriculum.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Week 1 */}
              <div className="bg-blue-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-blue-400 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Week 1
                  </span>
                  <h3 className="font-headline text-xl font-bold text-gray-800">
                    May 25 – May 29
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">
                      schedule
                    </span>
                    10:00 AM – 12:00 PM
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">
                      group
                    </span>
                    Limited Spots Available
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                    $189
                  </p>
                  <a
                    href="https://book.stripe.com/eVq5kFdquca3e5Ect52Nq01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-linear-to-r from-blue-500 to-blue-400 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                  >
                    Register & Pay
                  </a>
                </div>
              </div>

              {/* Week 2 */}
              <div className="bg-blue-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-blue-400 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Week 2
                  </span>
                  <h3 className="font-headline text-xl font-bold text-gray-800">
                    June 1 – June 5
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">
                      schedule
                    </span>
                    10:00 AM – 12:00 PM
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">
                      group
                    </span>
                    Limited Spots Available
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                    $189
                  </p>
                  <a
                    href="https://book.stripe.com/14AfZj726gqjaTs9gT2Nq02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-linear-to-r from-blue-500 to-blue-400 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                  >
                    Register & Pay
                  </a>
                </div>
              </div>

              {/* Week 3 */}
              <div className="bg-blue-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-blue-400 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Week 3
                  </span>
                  <h3 className="font-headline text-xl font-bold text-gray-800">
                    June 8 – June 12
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">
                      schedule
                    </span>
                    10:00 AM – 12:00 PM
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">
                      group
                    </span>
                    Limited Spots Available
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                    $189
                  </p>
                  <a
                    href="https://book.stripe.com/3cIfZjgCG8XRf9Ict52Nq00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-linear-to-r from-blue-500 to-blue-400 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                  >
                    Register & Pay
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Secure checkout powered by Stripe. All major credit cards
              accepted.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
