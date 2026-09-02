import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/watoto.jpg";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FAF7F1]/90 backdrop-blur-sm dark:border-stone-800 dark:bg-[#0E1626]/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo + name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Wakili Wa Watoto logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-stone-200 dark:ring-stone-700"
          />
          <span className="font-serif text-lg font-medium tracking-tight text-[#16233F] dark:text-[#F5F1E8]">
            Wakili Wa Watoto
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-[15px] transition-colors hover:text-[#16233F] dark:hover:text-[#F5F1E8] ${
                    isActive
                      ? "font-medium text-[#16233F] dark:text-[#F5F1E8]"
                      : "text-stone-600 dark:text-stone-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-[#16233F] transition-colors hover:bg-white dark:border-stone-700 dark:text-[#F5F1E8] dark:hover:bg-white/5"
          >
            {theme === "dark" ? (
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5M12 19.5V21M4.5 12H3M21 12h-1.5M5.6 5.6l1.05 1.05M17.35 17.35l1.05 1.05M18.4 5.6l-1.05 1.05M6.65 17.35l-1.05 1.05"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15A8.25 8.25 0 019.85 3.75a8.25 8.25 0 1010.4 10.4z"
                />
              </svg>
            )}
          </button>

          <Link
            to="/join"
            className="rounded-full bg-[#16233F] px-5 py-2.5 text-sm font-medium text-[#FAF7F1] transition-colors hover:bg-[#1F2F52] dark:bg-[#C6902E] dark:text-[#16233F] dark:hover:bg-[#D6A143]"
          >
            Join the club
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#16233F] dark:text-[#F5F1E8] md:hidden"
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
        <div className="border-t border-stone-200 bg-[#FAF7F1] dark:border-stone-800 dark:bg-[#0E1626] md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-2 py-3 text-[15px] hover:bg-stone-100 dark:hover:bg-white/5 ${
                      isActive
                        ? "font-medium text-[#16233F] dark:text-[#F5F1E8]"
                        : "text-stone-700 dark:text-stone-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 pt-2">
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-full bg-[#16233F] px-5 py-3 text-center text-sm font-medium text-[#FAF7F1] dark:bg-[#C6902E] dark:text-[#16233F]"
              >
                Join the club
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-300 text-[#16233F] dark:border-stone-700 dark:text-[#F5F1E8]"
              >
                {theme === "dark" ? (
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1.5M12 19.5V21M4.5 12H3M21 12h-1.5M5.6 5.6l1.05 1.05M17.35 17.35l1.05 1.05M18.4 5.6l-1.05 1.05M6.65 17.35l-1.05 1.05"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15A8.25 8.25 0 019.85 3.75a8.25 8.25 0 1010.4 10.4z"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
