import PageHeader from "../components/PageHeader";

const UPCOMING_EVENTS = [
  {
    title: "Training Session with Justice Pamoja",
    date: "Fri, 11 Sep",
    venue: "TBA",
    body: "A hands-on training session hosted in partnership with Justice Pamoja.",
  },
  {
    title: "Child Rights Moot Competition",
    date: "14 Nov",
    venue: "Parklands Campus, UoN",
    body: "Law students argue child-rights cases before a panel of practicing advocates.",
  },
  {
    title: "Legal Awareness Baraza",
    date: "TBA",
    venue: "TBA",
    body: "A community session walking parents and guardians through the Children Act, 2022.",
  },
];

// Placeholder past events — replace with real dates, venues, and recaps once available.
const PAST_EVENTS = [
  {
    title: "[Past event name placeholder]",
    date: "[Date]",
    venue: "[Venue placeholder]",
    body: "[Short recap of what happened at this event goes here.]",
  },
  {
    title: "[Past event name placeholder]",
    date: "[Date]",
    venue: "[Venue placeholder]",
    body: "[Short recap of what happened at this event goes here.]",
  },
  {
    title: "[Past event name placeholder]",
    date: "[Date]",
    venue: "[Venue placeholder]",
    body: "[Short recap of what happened at this event goes here.]",
  },
];

function EventRow({ event, past }) {
  return (
    <div
      className={`flex flex-col gap-2 py-6 sm:flex-row sm:gap-8 ${
        past ? "opacity-70" : ""
      }`}
    >
      <div className="w-full shrink-0 text-sm font-medium text-[#16233F] sm:w-28 dark:text-[#F5F1E8]">
        {event.date}
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-lg font-medium text-[#16233F] dark:text-[#F5F1E8]">
          {event.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
          {event.body}
        </p>
      </div>
      <div className="w-full shrink-0 text-sm text-stone-500 sm:w-40 sm:text-right dark:text-stone-400">
        {event.venue}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
      <PageHeader
        title="Seminars, moots, and campaigns"
        description="From moot competitions to community barazas, here's what's coming up — and a look back at what we've run before."
      />

      <section className="bg-white py-16 dark:bg-[#0B111F]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-2xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
            Upcoming events
          </h2>
          <div className="mt-6 divide-y divide-stone-300 border-t border-b border-stone-300 dark:divide-stone-700 dark:border-stone-700">
            {UPCOMING_EVENTS.map((event) => (
              <EventRow key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section id="past" className="bg-[#FAF7F1] py-16 dark:bg-[#0E1626]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-2xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
            Past events
          </h2>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            Placeholder entries below — swap in real event names, dates, venues,
            and recaps as they become available.
          </p>
          <div className="mt-6 divide-y divide-dashed divide-stone-300 border-t border-b border-dashed border-stone-300 dark:divide-stone-700 dark:border-stone-700">
            {PAST_EVENTS.map((event, i) => (
              <EventRow key={i} event={event} past />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
