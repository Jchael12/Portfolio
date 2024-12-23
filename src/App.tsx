import { motion } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/links/About";
import Testimonials from "./components/links/Testimonials";
import Works from "./components/links/Works";

function App() {
  const containerRef = useRef(null);
  const [bgColor, setBgColor] = useState("#ced4da");
  const isDark = bgColor === "#212529";

  const options = {
    smooth: true,
    multiplier: 0.6,
    lerp: 0.08,
    class: "is-revealed",
    smartphone: {
      smooth: true,
      lerp: 0.08,
    },
    tablet: {
      smooth: true,
      lerp: 0.08,
    },
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={containerRef}>
      <motion.div
        className="min-h-screen w-full"
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.8 }}
      >
        <div className="fixed inset-0 opacity-20">
          <motion.div
            className="h-full w-full"
            animate={{
              backgroundImage: isDark
                ? `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23FFFFFF'/%3E%3C/svg%3E")`
                : `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23000000'/%3E%3C/svg%3E")`,
            }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <Nav isDark={isDark} />
        <div ref={containerRef} data-scroll-container className="relative z-10">
          <Home />
          <About setBgColor={setBgColor} />
          <Works />
          <Testimonials />
        </div>
      </motion.div>
    </LocomotiveScrollProvider>
  );
}

export default App;
