"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClassroomSection from "@/components/ClassroomSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-on-background antialiased">
      <Header />
      <main className="pt-14 sm:pt-20">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 sm:pt-20 pb-20 sm:pb-40"
          style={{
            backgroundImage: "url(/cloud_background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="font-headline text-3xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-6 sm:mb-8 leading-[1.1] animate-fade-in">
              Let's Create Something <br />{" "}
              <span
                className="text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #447CB6, #447CB6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontStyle: "italic",
                  fontWeight: "normal",
                  lineHeight: "1.2",
                  paddingRight: "0.1em",
                  display: "inline-block",
                }}
              >
                Amazing This Summer
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 font-medium leading-relaxed">
              Join us for a summer of hands-on fun, creativity, and discovery.
              Perfect for curious minds who love to build, draw, and explore new
              ideas together!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6">
              <Link
                href="/programs/electronics"
                className="group flex items-center gap-2 sm:gap-3 bg-linear-to-r from-blue-500 to-blue-400 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-2xl"
              >
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  bolt
                </span>
                <span>Discover: Electronics</span>
              </Link>
              <Link
                href="/programs/art"
                className="group flex items-center gap-2 sm:gap-3 bg-amber-100 text-amber-700 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base hover:bg-amber-200 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg"
              >
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  draw
                </span>
                <span>Discover: Drawing</span>
              </Link>
              <Link
                href="/programs/japanese"
                className="group flex items-center gap-2 sm:gap-3 bg-white text-red-400 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg"
              >
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  temple_buddhist
                </span>
                <span>Discover: Japanese</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Discovery Tracks Section */}
        <section
          className="mx-auto px-4 sm:px-6 py-12 sm:py-24 relative"
          style={{
            backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay for opacity */}
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
              <div className="max-w-xl text-center md:text-left">
                <span className="font-label text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                  Our Tracks
                </span>
                <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black text-gray-800 tracking-tight">
                  Choose Your Adventure
                </h2>
              </div>
              <div className="bg-linear-to-r from-indigo-50 to-blue-50 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6 shadow-sm">
                <p className="text-gray-700 font-serif text-sm sm:text-lg italic leading-relaxed">
                  All courses taught by passionate experts with real-world
                  experience. Each course runs 2 hours daily, Monday-Friday for
                  one week.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Track 1: Electronics */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3 border border-gray-100">
                <div className="aspect-5/6 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt="Electronics and circuitry class"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/breadboard-wires-micro-servos-connected-600nw-2402057335.webp"
                  />
                  <div className="absolute top-4 left-4 bg-linear-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold font-label uppercase tracking-widest shadow-lg">
                    Tech Track
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="grow">
                    <h3 className="font-headline text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                      Electronics & Circuitry
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                      Master the invisible power! Using Arduino
                      microcontrollers, you'll learn electricity basics while
                      navigating our "A Week Lost In Space" curriculum. Use your
                      computer to fix your ship and return to Earth, then build
                      your own spaceship game to take home.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-label text-blue-500">
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
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/programs/electronics"
                      className="mt-0 group flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-blue-500 to-blue-400 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-2xl"
                    >
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        bolt
                      </span>
                      <span>Discover: Electronics & Circuitry</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Track 2: Art */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3 border border-gray-100">
                <div className="aspect-5/6 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt="Drawing from life art class"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/drawingfromlife.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-xs font-bold font-label uppercase tracking-widest shadow-lg">
                    Arts Track
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="grow">
                    <h3 className="font-headline text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-500 transition-colors duration-300">
                      Drawing From Life
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                      See the world through an artist's eyes. You'll develop
                      fundamental drawing techniques by drawing organic objects
                      from life, building your artistic portfolio with
                      professional guidance. Your final project will be creating
                      a beautiful self portrait to take home.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-label text-amber-500">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">brush</span>
                        Drawing Kit Included
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          person
                        </span>
                        Ages 8+
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/programs/art"
                    className="mt-6 group flex items-center justify-center gap-2 sm:gap-3 bg-amber-100 text-amber-700 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base hover:bg-amber-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                      draw
                    </span>
                    <span>Discover: Drawing From Life</span>
                  </Link>
                </div>
              </div>

              {/* Track 3: Japanese */}
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-3 border border-gray-100">
                <div className="aspect-5/6 rounded-xl overflow-hidden mb-6 relative">
                  <img
                    alt="Japanese language and culture class"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/japaneselanguageandculture.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold font-label uppercase tracking-widest shadow-lg">
                    Global Track
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="grow">
                    <h3 className="font-headline text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-500 transition-colors duration-300">
                      Japanese Language & Culture
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                      A journey through Japan! You'll learn cultural nuances,
                      basic words, and phrases to help you get around Japan.
                      Experience traditional foods and snacks, then participate
                      in a formal Japanese meal while mastering proper eating
                      customs.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-label text-red-400">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          restaurant
                        </span>
                        Traditional Food & Games
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined">group</span>
                        Ages 8+
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/programs/japanese"
                      className="group flex items-center justify-center gap-2 sm:gap-3 bg-white text-red-400 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base border-2 border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        temple_buddhist
                      </span>
                      <span>Discover: Japanese Language & Culture</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          id="mission"
          className="bg-linear-to-br from-blue-50 to-indigo-50 py-16 sm:py-32 overflow-hidden relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden aspect-3/4 shadow-2xl -rotate-2 transition-transform hover:rotate-0 duration-500">
                    <img
                      alt="Grant, Instructor"
                      className="w-full h-full object-cover"
                      src="/IDWgrantprofile.png"
                    />
                  </div>
                  <div className="bg-blue-500 text-white p-3 sm:p-6 rounded-2xl shadow-lg">
                    <span className="font-label font-bold text-xs uppercase tracking-widest block mb-2">
                      Meet Grant
                    </span>
                    <p className="text-sm font-medium mb-3">
                      Electronics Enthusiast & Future Engineer
                    </p>
                    <div className="bg-white/20 rounded-lg px-3 py-2">
                      <p className="text-xs font-semibold">
                        Major: Business Administration & Computer Science
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-16">
                  <div className="rounded-2xl overflow-hidden aspect-3/4 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
                    <img
                      alt="Moema, Instructor"
                      className="w-full h-full object-cover"
                      src="/IDWmoemaprofile.png"
                    />
                  </div>
                  <div className="bg-emerald-500 text-white p-3 sm:p-6 rounded-2xl shadow-lg">
                    <span className="font-label font-bold text-xs uppercase tracking-widest block mb-2">
                      Meet Moema
                    </span>
                    <p className="text-sm font-medium mb-3">
                      Artist & Japanese Language Instructor
                    </p>
                    <div className="bg-white/20 rounded-lg px-3 py-2">
                      <p className="text-xs font-semibold">
                        Major: Animation & Japanese
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative cloud background for instructors */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44.7,-76.4C58.1,-69.2,69.2,-57.4,77.3,-44.1C85.4,-30.8,90.4,-15.4,88.7,-0.9C87.1,13.5,78.7,27,69.5,38.6C60.3,50.2,50.2,59.8,38.3,67.3C26.4,74.8,13.2,80.1,-0.6,81.1C-14.4,82.1,-28.8,78.7,-41.4,71.7C-54,64.7,-64.8,54.1,-72.8,41.6C-80.8,29.1,-86,14.5,-86.3,-0.1C-86.6,-14.8,-82,-29.6,-73.3,-41.9C-64.6,-54.2,-51.7,-64,-37.9,-70.8C-24.1,-77.6,-9.3,-81.4,3.1,-86.8C15.5,-92.2,28.7,-83.6,44.7,-76.4Z"
                    fill="#0058bc"
                    transform="translate(100 100)"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="font-label text-indigo-600 font-bold tracking-widest uppercase text-sm mb-6 block">
                Our Mission
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-8 leading-tight tracking-tight">
                Why Idaho Discovery Week?
              </h2>
              <div className="space-y-6 text-gray-600 font-medium text-sm sm:text-lg leading-relaxed">
                <p className="transition-all duration-300 hover:text-gray-800">
                  We believe that summer should be more than just a break. It
                  should be a launchpad. As students ourselves, we wanted to
                  create an experience we wish we had growing up in Idaho.
                </p>
                <p className="transition-all duration-300 hover:text-gray-800">
                  By attending Idaho Discovery Week, your kids aren't just
                  learning electronics, art, or Japanese; they're supporting
                  local students. We are teaching these summer classes to save
                  for college while striving to build the most creative,
                  high-energy environment for kids in our community.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-2xl">
                    school
                  </span>
                  <p className="text-base font-label font-bold text-gray-800">
                    500+ hours of teaching experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClassroomSection />

        {/* Camp Schedule */}
        <section
          id="schedule"
          className="bg-linear-to-br from-blue-50 to-indigo-50 py-16 sm:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <span className="font-label text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                Summer 2026
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black text-gray-800 tracking-tight mb-4">
                Camp Schedule
              </h2>
              <p className="text-gray-600 font-medium text-sm sm:text-lg max-w-2xl mx-auto">
                Each week offers the same great programs. Pick the week that
                works best for your family. All camps run Monday through Friday.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Week 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Week 1
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                    May 25 – May 29
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-blue-500">
                        bolt
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Electronics & Circuitry
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          10:00 AM – 12:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/eVq5kFdquca3e5Ect52Nq01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/electronics"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-blue-500 text-xs font-label font-bold py-2 rounded-lg border border-blue-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 sm:p-4 border border-amber-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-amber-500">
                        draw
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Drawing From Life
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          10:00 AM – 12:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/aFa3cx3PU0rl7Hg64H2Nq03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/art"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-amber-500 text-xs font-label font-bold py-2 rounded-lg border border-amber-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-emerald-500">
                        temple_buddhist
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Japanese Language & Culture
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          12:15 PM – 2:15 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/00w5kF3PU5LFgdMbp12Nq06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/japanese"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-emerald-500 text-xs font-label font-bold py-2 rounded-lg border border-emerald-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Week 2
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                    June 1 – June 5
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-blue-500">
                        bolt
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Electronics & Circuitry
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          10:00 AM – 12:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/14AfZj726gqjaTs9gT2Nq02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/electronics"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-blue-500 text-xs font-label font-bold py-2 rounded-lg border border-blue-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 sm:p-4 border border-amber-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-amber-500">
                        draw
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Drawing From Life
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          10:00 AM – 12:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/28E00l1HMgqjbXwct52Nq04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/art"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-amber-500 text-xs font-label font-bold py-2 rounded-lg border border-amber-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-emerald-500">
                        temple_buddhist
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Japanese Language & Culture
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          12:15 PM – 2:15 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/cNi6oJeuya1V5z850D2Nq07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/japanese"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-emerald-500 text-xs font-label font-bold py-2 rounded-lg border border-emerald-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold font-label uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Week 3
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                    June 8 – June 12
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-blue-500">
                        bolt
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Electronics & Circuitry
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          10:00 AM – 12:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/3cIfZjgCG8XRf9Ict52Nq00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/electronics"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-blue-500 text-xs font-label font-bold py-2 rounded-lg border border-blue-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 sm:p-4 border border-amber-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-amber-500">
                        draw
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Drawing From Life
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          10:00 AM – 12:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/8x2eVf726eibaTs2Sv2Nq05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/art"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-amber-500 text-xs font-label font-bold py-2 rounded-lg border border-amber-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border border-emerald-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-emerald-500">
                        temple_buddhist
                      </span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          Japanese Language & Culture
                        </p>
                        <p className="text-gray-500 text-xs font-label">
                          12:15 PM – 2:15 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://book.stripe.com/8x23cx3PUb5Zd1A50D2Nq08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-label font-bold py-2 rounded-lg transition-colors duration-300"
                      >
                        Register
                      </a>
                      <Link
                        href="/programs/japanese"
                        className="flex-1 text-center bg-white hover:bg-gray-100 text-emerald-500 text-xs font-label font-bold py-2 rounded-lg border border-emerald-200 transition-colors duration-300"
                      >
                        Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section
          className="mx-auto px-4 sm:px-6 py-12 sm:py-16 relative"
          style={{
            backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay for opacity */}
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="bg-linear-to-r from-[#437eb9] to-[#366898] rounded-2xl p-6 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl">
              <div
                className="absolute top-0 right-0 p-4 sm:p-8 opacity-60"
                style={{ color: "#f39608" }}
              >
                <span className="material-symbols-outlined text-5xl sm:text-9xl animate-pulse">
                  rocket_launch
                </span>
              </div>
              <h2
                className="text-2xl sm:text-5xl md:text-7xl font-normal text-white mb-4 sm:mb-8 relative z-10"
                style={{
                  fontFamily: "'Indie Flower', cursive",
                  WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                Ready to Start Exploring?
              </h2>
              <p
                className="text-white/90 max-w-xl mx-auto mb-6 sm:mb-12 text-base sm:text-2xl relative z-10"
                style={{
                  fontFamily: "'Indie Flower', cursive",
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
                }}
              >
                Limited spots available for 2026 sessions. Secure your child's
                place for a summer of discovery today.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto relative z-10">
                <Link
                  href="/programs/electronics"
                  className="group flex items-center gap-2 sm:gap-3 bg-white text-blue-600 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base hover:bg-gray-100 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg"
                >
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    bolt
                  </span>
                  <span>Discover: Electronics</span>
                </Link>
                <Link
                  href="/programs/art"
                  className="group flex items-center gap-2 sm:gap-3 bg-amber-100 text-amber-700 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base hover:bg-amber-200 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg"
                >
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    draw
                  </span>
                  <span>Discover: Drawing</span>
                </Link>
                <Link
                  href="/programs/japanese"
                  className="group flex items-center gap-2 sm:gap-3 bg-white text-red-400 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-label font-bold text-sm sm:text-base hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg"
                >
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    temple_buddhist
                  </span>
                  <span>Discover: Japanese</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
