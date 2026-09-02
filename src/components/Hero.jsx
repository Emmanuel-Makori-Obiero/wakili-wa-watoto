export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FAF7F1]">
      {/* soft backdrop shape, kept quiet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C6902E]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        {/* Left: headline, mission, CTAs */}
        <div className="max-w-xl">
          <p className="text-sm font-medium text-[#8A6416]">
            Child legal aid in Kenya
          </p>

          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[#16233F] sm:text-5xl">
            Legal representation for every child
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Wakili Wa Watoto connects children across Kenya with legal aid,
            advocacy, and education, so that every child knows their rights
            under the Constitution and the Children Act and has someone in their
            corner when it matters most.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="rounded-full bg-[#16233F] px-7 py-3.5 text-sm font-medium text-[#FAF7F1] transition-colors hover:bg-[#1F2F52]"
            >
              Become a volunteer
            </a>
            <a
              href="#events"
              className="rounded-full border border-stone-300 px-7 py-3.5 text-sm font-medium text-[#16233F] transition-colors hover:border-stone-400 hover:bg-white"
            >
              See upcoming events
            </a>
          </div>
        </div>

        {/* Right: glassmorphism focal card, upcoming event preview */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#16233F]/10 to-[#C6902E]/10"
          />

          <div className="rounded-3xl border border-white/60 bg-white/40 p-7 shadow-sm backdrop-blur-md">
            <p className="text-xs font-medium uppercase tracking-wide text-[#8A6416]">
              Upcoming event
            </p>

            <h3 className="mt-3 font-serif text-2xl font-medium text-[#16233F]">
              Regional Moot Competition
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Secondary school students argue child-rights cases before a panel
              of practicing advocates.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-stone-200/70 pt-5">
              <div>
                <dt className="text-xs text-stone-500">Date</dt>
                <dd className="mt-1 text-sm font-medium text-[#16233F]">
                  14 November
                </dd>
              </div>
              <div>
                <dt className="text-xs text-stone-500">Venue</dt>
                <dd className="mt-1 text-sm font-medium text-[#16233F]">
                  Nairobi
                </dd>
              </div>
            </dl>

            <a
              href="#events"
              className="mt-6 inline-flex items-center text-sm font-medium text-[#16233F] underline decoration-stone-300 underline-offset-4 hover:decoration-[#16233F]"
            >
              Reserve a seat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
