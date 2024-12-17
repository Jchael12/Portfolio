import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = new Map();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const threshold = section.id === "home" ? 0.5 : 0.3;

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      });

      observer.observe(section);
      observers.set(section, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}
