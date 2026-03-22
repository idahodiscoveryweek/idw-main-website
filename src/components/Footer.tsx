import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 w-full pt-12 sm:pt-16 pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Idaho Discovery Week Logo"
                className="w-auto h-10 sm:h-12"
                src="/idwnewlogo.png"
              />
              <span className="text-lg sm:text-xl font-bold text-white font-headline">
                Idaho Discovery Week
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed max-w-xs">
              A summer of hands-on learning, creativity, and discovery for
              curious young minds in Idaho.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-white font-label font-bold text-sm uppercase tracking-widest mb-1">
              Programs
            </h4>
            <Link
              href="/programs/electronics"
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Electronics & Circuitry
            </Link>
            <Link
              href="/programs/art"
              className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-300"
            >
              Drawing From Life
            </Link>
            <Link
              href="/programs/japanese"
              className="text-gray-400 text-sm hover:text-red-400 transition-colors duration-300"
            >
              Japanese Language & Culture
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-white font-label font-bold text-sm uppercase tracking-widest mb-1">
              Get In Touch
            </h4>
            <a
              href="mailto:idahodiscoveryweek@gmail.com"
              className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-base">
                email
              </span>
              idahodiscoveryweek@gmail.com
            </a>
            <a
              href="tel:2082835068"
              className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-base">
                phone
              </span>
              (208) 283-5068
            </a>
            <a
              href="/#mission"
              className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-base">
                info
              </span>
              About Us
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Idaho Discovery Week. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Made with
            <span className="material-symbols-outlined text-red-400 text-sm">
              favorite
            </span>
            in Idaho
          </p>
        </div>
      </div>
    </footer>
  );
}
