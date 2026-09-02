import { useState } from "react";
import logo from "../assets/watoto.jpg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
  { label: "Join", href: "#join" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FAF7F1]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo + name */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Wakili Wa Watoto logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-stone-200"
          />
          <span className="font-serif text-lg font-medium tracking-tight text-[#16233F]">
            Wakili Wa Watoto
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] text-stone-600 transition-colors hover:text-[#16233F]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#join"
          className="hidden rounded-full bg-[#16233F] px-5 py-2.5 text-sm font-medium text-[#FAF7F1] transition-colors hover:bg-[#1F2F52] md:inline-block"
        >
          Get involved
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#16233F] md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-stone-200 bg-[#FAF7F1] md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-2 py-3 text-[15px] text-stone-700 hover:bg-stone-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-[#16233F] px-5 py-3 text-center text-sm font-medium text-[#FAF7F1]"
              >
                Get involved
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
