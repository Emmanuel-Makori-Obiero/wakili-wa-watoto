import { Link } from "react-router-dom";
import logo from "../assets/watoto.jpg";

const FOOTER_COLUMNS = [
  {
    heading: "Home",
    links: [
      { label: "What is Wakili Wa Watoto?", to: "/about" },
      { label: "Mission", to: "/about#mission" },
      { label: "Upcoming events", to: "/events" },
      { label: "Past events", to: "/events#past" },
    ],
  },
  {
    heading: "Child rights",
    links: [
      {
        label: "Children's rights under Kenyan law",
        to: "/resources#child-rights",
      },
      { label: "Constitution", to: "/resources#constitution" },
      { label: "Children Act 2022", to: "/resources#children-act" },
      { label: "FAQs", to: "/resources#faqs" },
    ],
  },
  {
    heading: "Events",
    links: [
      { label: "Upcoming seminars", to: "/events" },
      { label: "Moot competitions", to: "/events" },
      { label: "Past events", to: "/events#past" },
      { label: "Registration", to: "/join" },
    ],
  },
  {
    heading: "Our work",
    links: [
      { label: "School visits", to: "/about#work" },
      { label: "Community outreach", to: "/about#work" },
      { label: "Legal aid", to: "/about#work" },
      { label: "Advocacy", to: "/about#work" },
    ],
  },
  {
    heading: "Join us",
    links: [
      { label: "Become a member", to: "/join" },
      { label: "Volunteer", to: "/join" },
      { label: "Contact us", to: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Child-rights materials", to: "/resources" },
      { label: "Case law", to: "/resources#case-law" },
      { label: "Legislation", to: "/resources#legislation" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-[#F3EFE6] dark:border-stone-800 dark:bg-[#0B111F]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Brand block, full width on its own row */}
        <div className="flex flex-col gap-6 border-b border-stone-300/70 pb-10 dark:border-stone-800 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Wakili Wa Watoto logo"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-stone-300 dark:ring-stone-700"
              />
              <span className="font-serif text-base font-medium text-[#16233F] dark:text-[#F5F1E8]">
                Wakili Wa Watoto
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              A student-led legal aid club at the University of Nairobi School
              of Law, advancing children's rights across Kenya.
            </p>
          </div>

          <div className="text-sm text-stone-600 dark:text-stone-400 sm:text-right">
            <p className="font-medium text-[#16233F] dark:text-[#F5F1E8]">
              Contact
            </p>
            <p className="mt-1">
              School of Law, University of Nairobi, Parklands Campus
            </p>
            <a
              href="mailto:info@wakiliwawatoto.org"
              className="mt-1 inline-block hover:text-[#16233F] dark:hover:text-[#F5F1E8]"
            >
              info@wakiliwawatoto.org
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-medium text-[#16233F] dark:text-[#F5F1E8]">
                {column.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm leading-snug text-stone-600 transition-colors hover:text-[#16233F] dark:text-stone-400 dark:hover:text-[#F5F1E8]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-stone-300/70 pt-6 dark:border-stone-800">
          <p className="text-sm text-stone-500 dark:text-stone-500">
            © {year} Wakili Wa Watoto, University of Nairobi School of Law. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
