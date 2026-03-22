import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-white text-3xl sm:text-5xl">
                draw
              </span>
              <h1 className="font-headline text-2xl sm:text-5xl md:text-6xl font-black text-white">
                Drawing From Life
              </h1>
            </div>
            <p className="text-sm sm:text-xl text-white/90 max-w-3xl">
              See the world through an artist's eyes. Develop fundamental
              drawing skills and explore various artistic techniques in a
              creative environment.
            </p>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full border border-white/30">
                <span className="material-symbols-outlined text-white text-lg">
                  inventory_2
                </span>
                <span className="text-white font-label font-semibold text-sm">
                  Beginner Drawing Kit Included
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
                $174
              </span>
            </div>
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
              <div className="bg-green-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                <h2 className="font-headline text-xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                  What You'll Learn
                </h2>
                <div className="space-y-4 text-gray-600 text-sm sm:text-lg">
                  <p>
                    In our Drawing From Life program, students discover the joy
                    of artistic expression through observation, technique, and
                    imagination.
                  </p>
                  <p>
                    From basic sketching to advanced shading techniques, you'll
                    develop the skills to capture the world around you with
                    confidence and creativity.
                  </p>
                </div>
              </div>

              <div className="bg-green-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                <h3 className="font-headline text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Key Topics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Fundamental drawing techniques and shading
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Perspective and proportion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Still life composition
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Portrait drawing basics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Nature and landscape sketching
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Projects & Instructor */}
            <div className="space-y-8">
              <div className="bg-green-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                <h3 className="font-headline text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Creative Projects
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-green-600 text-xl">
                        auto_stories
                      </span>
                      <h4 className="font-bold text-gray-800">
                        Personal Sketchbook
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Develop your own artistic style through daily sketching
                      exercises.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-green-600 text-xl">
                        palette
                      </span>
                      <h4 className="font-bold text-gray-800">
                        Still Life Masterpiece
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Create a detailed still life drawing using advanced
                      shading techniques.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-green-600 text-xl">
                        face
                      </span>
                      <h4 className="font-bold text-gray-800">
                        Portrait Study
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Learn to capture facial features and expressions with
                      self-portrait final project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 rounded-2xl p-5 sm:p-8 shadow-lg">
                <h3 className="font-headline text-lg sm:text-xl font-bold text-gray-800 mb-4">
                  Meet Your Instructor
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <img
                      src="/IDWmoemaprofile.png"
                      alt="Moema - Art Instructor"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Moema</h4>
                    <p className="text-gray-600 text-sm">
                      Artist & Japanese Language Instructor
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Major: Animation & Japanese
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="font-label text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">
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
            <div className="bg-green-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-green-400 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Week 1
                </span>
                <h3 className="font-headline text-xl font-bold text-gray-800">
                  May 25 – May 29
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-base">
                    schedule
                  </span>
                  12:00 PM – 1:50 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-base">
                    group
                  </span>
                  Limited Spots Available
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                  $174
                </p>
                <a
                  href="https://book.stripe.com/aFa3cx3PU0rl7Hg64H2Nq03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-linear-to-r from-green-600 to-green-500 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                >
                  Register & Pay
                </a>
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-green-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-green-400 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Week 2
                </span>
                <h3 className="font-headline text-xl font-bold text-gray-800">
                  June 1 – June 5
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-base">
                    schedule
                  </span>
                  12:00 PM – 1:50 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-base">
                    group
                  </span>
                  Limited Spots Available
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                  $174
                </p>
                <a
                  href="https://book.stripe.com/28E00l1HMgqjbXwct52Nq04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-linear-to-r from-green-600 to-green-500 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                >
                  Register & Pay
                </a>
              </div>
            </div>

            {/* Week 3 */}
            <div className="bg-green-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-green-400 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Week 3
                </span>
                <h3 className="font-headline text-xl font-bold text-gray-800">
                  June 8 – June 12
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-base">
                    schedule
                  </span>
                  12:00 PM – 1:50 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-green-600 text-base">
                    group
                  </span>
                  Limited Spots Available
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                  $174
                </p>
                <a
                  href="https://book.stripe.com/8x2eVf726eibaTs2Sv2Nq05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-linear-to-r from-green-600 to-green-500 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                >
                  Register & Pay
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Secure checkout powered by Stripe. All major credit cards accepted.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
