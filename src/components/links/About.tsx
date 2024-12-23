import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function About({ setBgColor }: { setBgColor: (color: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "0px 0px -200px 0px",
  });

  useEffect(() => {
    setBgColor(isInView ? "#212529" : "#dee2e6");
  }, [isInView, setBgColor]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="w-10/12 mx-auto h-screen flex items-center justify-center"
      animate={isInView ? { color: "#dee2e6" } : { color: "#212529" }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-[6.5rem] font-cabinet leading-snug font-semibold text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          Fascinated by frontend user interfaces,
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="block"
        >
          I engineer cultivative and functional web experiences.
        </motion.span>
      </div>
    </motion.section>
  );
}

export default About;
