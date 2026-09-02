import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const HIGHLIGHTS = [
  {
    title: "Legal aid clinics",
    body: "Sit-down sessions where families bring custody, protection, and welfare questions directly to us — supervised, and always free.",
  },
  {
    title: "School outreach",
    body: "We go into Nairobi schools and explain kids' rights in language they'll actually remember, not legal jargon.",
  },
  {
    title: "Moot & advocacy training",
    body: "Members argue real child-rights problems in front of practicing advocates, not just each other.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-[#FAF7F1] py-20 dark:bg-[#0E1626]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
            What a typical month looks like
          </h2>

          <div className="mt-10 divide-y divide-stone-300 border-t border-b border-stone-300 dark:divide-stone-700 dark:border-stone-700">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <h3 className="w-full shrink-0 font-serif text-lg font-medium text-[#16233F] sm:w-56 dark:text-[#F5F1E8]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="text-sm font-medium text-[#16233F] underline decoration-stone-300 underline-offset-4 hover:decoration-[#16233F] dark:text-[#F5F1E8] dark:decoration-stone-600"
            >
              Read our full story
            </Link>
            <Link
              to="/join"
              className="text-sm font-medium text-[#16233F] underline decoration-stone-300 underline-offset-4 hover:decoration-[#16233F] dark:text-[#F5F1E8] dark:decoration-stone-600"
            >
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
