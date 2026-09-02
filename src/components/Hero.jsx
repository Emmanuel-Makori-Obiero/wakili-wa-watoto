import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="top" className="bg-[#FAF7F1] dark:bg-[#0E1626]">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        {/* Left: headline, mission, CTAs */}
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl font-medium leading-tight text-[#16233F] sm:text-5xl dark:text-[#F5F1E8]">
            Legal representation for every child
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            We're a legal aid club run by University of Nairobi law students.
            Most weeks that means school visits, community barazas on the
            Children Act, and free legal guidance for families who wouldn't
            otherwise get in front of a lawyer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/join"
              className="rounded-full bg-[#16233F] px-7 py-3.5 text-sm font-medium text-[#FAF7F1] transition-colors hover:bg-[#1F2F52] dark:bg-[#C6902E] dark:text-[#16233F] dark:hover:bg-[#D6A143]"
            >
              Join the club
            </Link>
            <Link
              to="/events"
              className="rounded-full border border-stone-300 px-7 py-3.5 text-sm font-medium text-[#16233F] transition-colors hover:border-stone-400 hover:bg-white dark:border-stone-700 dark:text-[#F5F1E8] dark:hover:border-stone-500 dark:hover:bg-white/5"
            >
              See upcoming events
            </Link>
          </div>
        </div>

        {/* Right: a torn-calendar-page treatment for the next event, tied to the subject rather than decorative */}
        <div className="border border-stone-300 bg-white dark:border-stone-700 dark:bg-[#111B2E]">
          <div className="flex items-stretch">
            <div className="flex w-24 shrink-0 flex-col items-center justify-center border-r border-stone-300 bg-[#16233F] py-6 dark:border-stone-700 dark:bg-[#C6902E]">
              <span className="text-xs font-medium uppercase tracking-widest text-[#C6902E] dark:text-[#16233F]">
                Sep
              </span>
              <span className="font-serif text-5xl leading-none text-[#FAF7F1] dark:text-[#16233F]">
                11
              </span>
              <span className="mt-1 text-xs text-[#FAF7F1]/70 dark:text-[#16233F]/70">
                Friday
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
                Training Session with Justice Pamoja
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                A practical, hands-on session — open to members and anyone
                interested in getting involved. Venue to be confirmed.
              </p>
              <Link
                to="/events"
                className="mt-4 inline-flex items-center text-sm font-medium text-[#16233F] underline decoration-stone-300 underline-offset-4 hover:decoration-[#16233F] dark:text-[#F5F1E8] dark:decoration-stone-600 dark:hover:decoration-[#F5F1E8]"
              >
                Reserve a seat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
