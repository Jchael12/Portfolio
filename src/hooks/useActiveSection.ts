import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = new Map();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(
            `Section ${entry.target.id} is intersecting with ratio: ${entry.intersectionRatio}`
          );
          setActiveSection(entry.target.id);
        }
      });
    };

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
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
