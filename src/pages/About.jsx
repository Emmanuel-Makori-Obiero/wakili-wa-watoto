import PageHeader from "../components/PageHeader";

const WORK_AREAS = [
  {
    title: "School visits",
    body: "Members visit primary and secondary schools around Nairobi to run rights-awareness sessions in language children can actually use.",
  },
  {
    title: "Community outreach",
    body: "Barazas and community-hall sessions that walk parents and guardians through the Children Act and how to access help.",
  },
  {
    title: "Legal aid",
    body: "Supervised, free legal guidance for families dealing with custody, protection, and welfare matters involving children.",
  },
  {
    title: "Advocacy",
    body: "Submissions, campaigns, and partnerships that push for stronger enforcement of children's rights in Kenya.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="Law students, standing up for children"
        description="Wakili Wa Watoto is a student-led legal aid club at the University of Nairobi School of Law. We exist so that every child in Kenya has someone who understands their rights under the Constitution and the Children Act, and is willing to act on their behalf."
      />

      <section id="mission" className="bg-white py-16 dark:bg-[#0B111F]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-2xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
            Turning legal training into protection for children
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-300">
            We believe children's rights are only as strong as the people
            willing to enforce them. Wakili Wa Watoto gives University of
            Nairobi law students a structured way to put their training to work
            outside the classroom, while giving children, families, and schools
            direct access to legal knowledge and support they might not
            otherwise reach.
          </p>
        </div>
      </section>

      <section id="work" className="bg-[#FAF7F1] py-16 dark:bg-[#0E1626]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
            Four areas we focus on
          </h2>

          <div className="mt-8 divide-y divide-stone-300 border-t border-b border-stone-300 dark:divide-stone-700 dark:border-stone-700">
            {WORK_AREAS.map((area) => (
              <div
                key={area.title}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <h3 className="w-full shrink-0 font-serif text-lg font-medium text-[#16233F] sm:w-56 dark:text-[#F5F1E8]">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
