import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flyer",
  robots: { index: false, follow: false },
};

export default function FlyerPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div
        className="bg-white relative overflow-hidden"
        style={{ width: "1080px", height: "1080px" }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/horizontal-crumblepaper-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 mb-2">
              <img
                alt="Idaho Discovery Week Logo"
                src="/idwnewlogo.png"
                className="w-24 h-24 shrink-0 object-contain"
              />
              <h1 className="font-headline text-5xl font-black text-gray-800 tracking-tight">
                Idaho Discovery Week
              </h1>
            </div>
            <p className="font-label text-blue-500 font-bold tracking-widest uppercase text-sm">
              Summer 2026 &bull; Meridian, Idaho
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mb-6" />

          {/* Classes grid */}
          <div className="grid grid-cols-3 gap-5">
            {/* Electronics */}
            <div className="bg-blue-50 rounded-2xl p-5 border-2 border-blue-200 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    bolt
                  </span>
                </div>
                <h2 className="font-headline text-lg font-bold text-gray-800">
                  Electronics &<br />
                  Circuitry
                </h2>
              </div>
              <div className="rounded-xl overflow-hidden mb-3 aspect-4/3">
                <img
                  alt="Electronics camp"
                  src="/breadboard-wires-micro-servos-connected-600nw-2402057335.webp"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-3">
                Build circuits with Arduino microcontrollers in our &quot;A Week
                Lost In Space&quot; adventure. Code your own spaceship game to
                take home!
              </p>
              <div className="space-y-1.5 mt-auto">
                <div className="flex items-center gap-1.5 text-blue-600">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span className="text-xs font-bold">10:00 AM – 12:00 PM</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-600">
                  <span className="material-symbols-outlined text-sm">
                    inventory_2
                  </span>
                  <span className="text-xs font-bold">Kit Included</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-600">
                  <span className="material-symbols-outlined text-sm">
                    group
                  </span>
                  <span className="text-xs font-bold">
                    Ages 10+ &bull; $189
                  </span>
                </div>
              </div>
            </div>

            {/* Drawing */}
            <div className="bg-amber-50 rounded-2xl p-5 border-2 border-amber-200 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    draw
                  </span>
                </div>
                <h2 className="font-headline text-lg font-bold text-gray-800">
                  Drawing
                  <br />
                  From Life
                </h2>
              </div>
              <div className="rounded-xl overflow-hidden mb-3 aspect-4/3">
                <img
                  alt="Drawing camp"
                  src="/drawingfromlife.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-3">
                Develop fundamental drawing skills by sketching organic objects
                from life. Create a beautiful self-portrait as your final
                project!
              </p>
              <div className="space-y-1.5 mt-auto">
                <div className="flex items-center gap-1.5 text-amber-600">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span className="text-xs font-bold">10:00 AM – 12:00 PM</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-600">
                  <span className="material-symbols-outlined text-sm">
                    inventory_2
                  </span>
                  <span className="text-xs font-bold">
                    Drawing Kit Included
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-600">
                  <span className="material-symbols-outlined text-sm">
                    group
                  </span>
                  <span className="text-xs font-bold">Ages 8+ &bull; $174</span>
                </div>
              </div>
            </div>

            {/* Japanese */}
            <div className="bg-emerald-50 rounded-2xl p-5 border-2 border-emerald-200 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    temple_buddhist
                  </span>
                </div>
                <h2 className="font-headline text-lg font-bold text-gray-800">
                  Japanese Language
                  <br />& Culture
                </h2>
              </div>
              <div className="rounded-xl overflow-hidden mb-3 aspect-4/3">
                <img
                  alt="Japanese camp"
                  src="/japaneselanguageandculture.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-3">
                Journey through Japan! Learn words, phrases, and cultural
                customs. Enjoy traditional foods and participate in a formal
                Japanese meal.
              </p>
              <div className="space-y-1.5 mt-auto">
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span className="text-xs font-bold">12:15 PM – 2:15 PM</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <span className="material-symbols-outlined text-sm">
                    inventory_2
                  </span>
                  <span className="text-xs font-bold">
                    Materials & Snacks Included
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <span className="material-symbols-outlined text-sm">
                    group
                  </span>
                  <span className="text-xs font-bold">Ages 8+ &bull; $174</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule bar */}
          <div className="mt-5 bg-gray-800 rounded-2xl p-5 text-center">
            <div className="flex items-center justify-center gap-8">
              <div>
                <p className="text-white/60 text-xs font-label uppercase tracking-widest mb-1">
                  Week 1
                </p>
                <p className="text-white font-headline font-bold text-sm">
                  May 25 – 29
                </p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <p className="text-white/60 text-xs font-label uppercase tracking-widest mb-1">
                  Week 2
                </p>
                <p className="text-white font-headline font-bold text-sm">
                  June 1 – 5
                </p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <p className="text-white/60 text-xs font-label uppercase tracking-widest mb-1">
                  Week 3
                </p>
                <p className="text-white font-headline font-bold text-sm">
                  June 8 – 12
                </p>
              </div>
            </div>
            <p className="text-white/50 text-xs mt-2">
              Monday – Friday &bull; The Lark House, Meridian
            </p>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-500 text-xs font-label">
              idahodiscoveryweek.com
            </p>
            <p className="text-gray-500 text-xs font-label">
              idahodiscoveryweek@gmail.com &bull; (208) 283-5068
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
