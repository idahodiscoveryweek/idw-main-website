import Link from "next/link";
import Header from "@/components/Header";

export default function JapanesePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section
        className="pt-56 pb-20 relative"
        style={{
          backgroundImage: "url(/cloud_background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/75 to-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-white text-5xl">
                temple_buddhist
              </span>
              <h1 className="font-headline text-5xl md:text-6xl font-black text-white">
                Japanese Language & Culture
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl">
              Immerse yourself in Japanese language and culture! Learn basic
              phrases, writing systems, and explore traditions through
              interactive activities.
            </p>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full border border-white/30">
                <span className="material-symbols-outlined text-white text-lg">
                  inventory_2
                </span>
                <span className="text-white font-label font-semibold text-sm">
                  Japanese Materials and Snacks Included
                </span>
              </div>
              <span className="inline-flex items-center bg-white/20 backdrop-blur text-white text-sm font-bold font-label px-4 py-2 rounded-full border border-white/30">
                $174.99
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <div className="bg-red-100 rounded-2xl p-8 shadow-lg">
                <h2 className="font-headline text-3xl font-bold text-gray-800 mb-6">
                  What You'll Learn
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    In our Japanese Language & Culture program, students
                    discover the richness of Japan through language, traditions,
                    and hands-on cultural experiences.
                  </p>
                  <p>
                    From basic conversational phrases to the beautiful art of
                    calligraphy, you'll gain practical language skills and
                    cultural understanding.
                  </p>
                </div>
              </div>

              <div className="bg-red-100 rounded-2xl p-8 shadow-lg">
                <h3 className="font-headline text-2xl font-bold text-gray-800 mb-6">
                  Key Topics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Basic Japanese greetings and phrases
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Introduction to Hiragana and Katakana
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Japanese calligraphy (Shodo)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Traditional arts and crafts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span className="text-gray-600">
                      Cultural festivals and customs
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Projects & Instructor */}
            <div className="space-y-8">
              <div className="bg-red-100 rounded-2xl p-8 shadow-lg">
                <h3 className="font-headline text-2xl font-bold text-gray-800 mb-6">
                  Cultural Activities
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-red-600 text-xl">
                        brush
                      </span>
                      <h4 className="font-bold text-gray-800">
                        Calligraphy Workshop
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Learn the art of Japanese brush painting and write your
                      name in Katakana.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-red-600 text-xl">
                        content_cut
                      </span>
                      <h4 className="font-bold text-gray-800">
                        Origami Creations
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Master traditional paper folding techniques to create
                      beautiful designs.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-red-600 text-xl">
                        local_cafe
                      </span>
                      <h4 className="font-bold text-gray-800">
                        Traditional Meal Experience
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Participate in a simplified traditional Japanese meal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 rounded-2xl p-8 shadow-lg">
                <h3 className="font-headline text-xl font-bold text-gray-800 mb-4">
                  Meet Your Instructors
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <img
                        src="/IDWgrantprofile.png"
                        alt="Grant - Japanese Instructor"
                        className="w-full h-full rounded-full object-cover"
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
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <img
                        src="/IDWmoemaprofile.png"
                        alt="Moema - Japanese Instructor"
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
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-label text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Enroll Now
            </span>
            <h2 className="font-headline text-4xl font-black text-gray-800 mb-4">
              Choose Your Week
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select the week that works best for your schedule. Each session
              runs Monday through Friday with the same incredible curriculum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Week 1 */}
            <div className="bg-red-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-red-400 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Week 1
                </span>
                <h3 className="font-headline text-xl font-bold text-gray-800">
                  May 25 – May 29
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">
                    schedule
                  </span>
                  2:00 PM – 4:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">
                    group
                  </span>
                  Limited Spots Available
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                  $174.99
                </p>
                <a
                  href="https://book.stripe.com/00w5kF3PU5LFgdMbp12Nq06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-linear-to-r from-red-600 to-red-500 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                >
                  Register & Pay
                </a>
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-red-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-red-400 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Week 2
                </span>
                <h3 className="font-headline text-xl font-bold text-gray-800">
                  June 1 – June 5
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">
                    schedule
                  </span>
                  2:00 PM – 4:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">
                    group
                  </span>
                  Limited Spots Available
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                  $174.99
                </p>
                <a
                  href="https://book.stripe.com/cNi6oJeuya1V5z850D2Nq07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-linear-to-r from-red-600 to-red-500 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
                >
                  Register & Pay
                </a>
              </div>
            </div>

            {/* Week 3 */}
            <div className="bg-red-100 rounded-2xl p-6 shadow-lg flex flex-col text-center border-2 border-transparent hover:border-red-400 transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Week 3
                </span>
                <h3 className="font-headline text-xl font-bold text-gray-800">
                  June 8 – June 12
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">
                    schedule
                  </span>
                  2:00 PM – 4:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-red-600 text-base">
                    group
                  </span>
                  Limited Spots Available
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-2xl font-bold font-headline text-gray-800 mb-4">
                  $174.99
                </p>
                <a
                  href="https://book.stripe.com/8x23cx3PUb5Zd1A50D2Nq08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-linear-to-r from-red-600 to-red-500 text-white py-3 rounded-full font-label font-bold shadow-lg hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl"
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
    </div>
  );
}
