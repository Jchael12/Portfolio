import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function About() {
  const ref = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "0px 0px -200px 0px",
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setScrollDir(scrollY > lastScrollY ? "up" : "up");
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="w-10/12 mx-auto h-screen flex items-center justify-center"
    >
      <div className="text-8xl font-semibold text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: scrollDir === "down" ? 0 : 0.8 }}
        >
          Fascinated by frontend user interfaces
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: scrollDir === "down" ? 0.8 : 0 }}
          className="block"
        >
          I engineer cultivative and functional web experiences.
        </motion.span>
      </div>
    </section>
  );
}

export default About;
