import PageHeader from "../components/PageHeader";

const RESOURCES = [
  {
    id: "constitution",
    title: "The Constitution of Kenya",
    body: "Article 53 sets out the specific rights every child in Kenya is entitled to, from basic nutrition and shelter to protection from abuse and exploitation.",
  },
  {
    id: "children-act",
    title: "The Children Act, 2022",
    body: "Kenya's primary legislation on child welfare and protection, covering parental responsibility, care and protection orders, and the administration of justice for children.",
  },
  {
    id: "child-rights",
    title: "Children's rights under Kenyan law",
    body: "A plain-language overview of what children are entitled to, who is responsible for upholding it, and where to go if those rights aren't being respected.",
  },
  {
    id: "case-law",
    title: "Case law",
    body: "Key Kenyan court decisions that have shaped how children's rights are interpreted and enforced in practice.",
  },
  {
    id: "legislation",
    title: "Related legislation",
    body: "Other statutes that intersect with child welfare, including the Sexual Offences Act, the Basic Education Act, and county-level children's policies.",
  },
];

const FAQS = [
  {
    q: "Who can access Wakili Wa Watoto's services?",
    a: "Any child, parent, guardian, or school in Kenya can reach out. Our services are free and supervised by qualified members of faculty.",
  },
  {
    q: "Is this a substitute for a licensed advocate?",
    a: "No. We provide guidance and connect people to appropriate resources; for representation in court, we help refer families to licensed advocates and legal aid organizations.",
  },
  {
    q: "How can my school host a session?",
    a: "Reach out through our contact page and a member of the outreach team will get back to you to schedule a visit.",
  },
];

export default function Resources() {
  return (
    <>
      <PageHeader
        title="Know the law that protects you"
        description="Educational materials on children's rights in Kenya — written for parents, students, and anyone who wants a clear starting point."
      />

      <section className="bg-white py-16 dark:bg-[#0B111F]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="divide-y divide-stone-300 border-t border-b border-stone-300 dark:divide-stone-700 dark:border-stone-700">
            {RESOURCES.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <h3 className="w-full shrink-0 font-serif text-lg font-medium text-[#16233F] sm:w-64 dark:text-[#F5F1E8]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-[#FAF7F1] py-16 dark:bg-[#0E1626]">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-2xl font-medium text-[#16233F] dark:text-[#F5F1E8]">
            FAQs
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {FAQS.map((item) => (
              <div key={item.q}>
                <p className="font-medium text-[#16233F] dark:text-[#F5F1E8]">
                  {item.q}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
