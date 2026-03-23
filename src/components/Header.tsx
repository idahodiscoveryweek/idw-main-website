"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="flex justify-between items-center w-full px-3 sm:px-6 py-2 sm:py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 sm:gap-6">
          <img
            alt="Idaho Discovery Week Logo"
            className="w-auto h-12 sm:h-28 transition-all duration-300 hover:scale-105"
            src="/idwnewlogo.png"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-4xl font-black text-[#437eb9] font-blocky tracking-tight leading-none uppercase">
              Idaho
              <br />
              Discovery
              <br />
              Week
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl flex items-center gap-1 border border-gray-200 text-base">
                Programs
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>

              {/* Dropdown Menu */}
              {programsDropdownOpen && (
                <div className="absolute top-full right-0 pt-1 w-56">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <Link
                      href="/programs/electronics"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-blue-500">
                        bolt
                      </span>
                      <div>
                        <div className="font-medium">
                          Electronics & Circuitry
                        </div>
                        <div className="text-xs text-gray-500">
                          Build circuits and robots
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/programs/art"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-amber-500">
                        draw
                      </span>
                      <div>
                        <div className="font-medium">Drawing From Life</div>
                        <div className="text-xs text-gray-500">
                          Develop artistic skills
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/programs/japanese"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <span className="material-symbols-outlined text-emerald-500">
                        temple_buddhist
                      </span>
                      <div>
                        <div className="font-medium">
                          Japanese Language & Culture
                        </div>
                        <div className="text-xs text-gray-500">
                          Learn language and traditions
                        </div>
                      </div>
                    </Link>
                    <div className="border-t border-gray-200">
                      <Link
                        href="/programs"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        onClick={() => setProgramsDropdownOpen(false)}
                      >
                        <span className="material-symbols-outlined text-gray-500">
                          grid_view
                        </span>
                        <div>
                          <div className="font-medium">View All Programs</div>
                          <div className="text-xs text-gray-500">
                            See complete overview
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl border border-gray-200 text-base"
              href="/#classroom"
            >
              Classroom
            </Link>
            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl border border-gray-200 text-base"
              href="/#schedule"
            >
              Schedule
            </Link>
            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl border border-gray-200 text-base"
              href="/#mission"
            >
              About
            </Link>
            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl border border-gray-200 text-base"
              href="/#contact"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#437eb9] text-white hover:bg-[#366898] transition-all duration-300 shadow-md"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu_open"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-linear-to-br from-white to-gray-50 border-t border-gray-200 px-6 py-4 shadow-2xl">
          <div className="flex flex-col gap-4">
            {/* Mobile Programs Section */}
            <div className="space-y-2">
              <Link
                className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:bg-blue-50 py-3 px-4 rounded-lg"
                href="/programs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg"
                  href="/programs/electronics"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-blue-500 text-sm">
                    bolt
                  </span>
                  <span className="text-sm">Electronics & Circuitry</span>
                </Link>
                <Link
                  className="flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors py-2 px-3 rounded-lg"
                  href="/programs/art"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-amber-500 text-sm">
                    draw
                  </span>
                  <span className="text-sm">Drawing From Life</span>
                </Link>
                <Link
                  className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors py-2 px-3 rounded-lg"
                  href="/programs/japanese"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-emerald-500 text-sm">
                    temple_buddhist
                  </span>
                  <span className="text-sm">Japanese Language & Culture</span>
                </Link>
              </div>
            </div>

            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:bg-blue-50 py-3 px-4 rounded-lg"
              href="/#classroom"
              onClick={() => setMobileMenuOpen(false)}
            >
              Classroom
            </Link>
            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:bg-blue-50 py-3 px-4 rounded-lg"
              href="/#schedule"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:bg-blue-50 py-3 px-4 rounded-lg"
              href="/#mission"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="text-[#437eb9] font-semibold hover:text-[#366898] transition-all duration-300 hover:bg-blue-50 py-3 px-4 rounded-lg"
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
