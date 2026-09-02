import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element matching the URL hash after each navigation,
// or to the top of the page when there's no hash. React Router doesn't
// do this automatically, so without it links like "/about#mission"
// would land on the page but not jump to the section.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the new page has rendered before we look for the element.
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant" in window ? "instant" : "auto",
      });
    }
  }, [pathname, hash]);

  return null;
}
