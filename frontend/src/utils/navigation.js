import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const scrollToSection = (selector) => {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(selector, { offset: -72, duration: 1.4 });
  } else {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

// Cross-route anchor navigation: from another page, go home first, then scroll.
export const useGoTo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return useCallback(
    (target) => {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(target), 500);
      } else {
        scrollToSection(target);
      }
    },
    [location.pathname, navigate]
  );
};

export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute("content", description);
    }
  }, [title, description]);
};
