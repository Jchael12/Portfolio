import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/links/About";
import Testimonials from "./components/links/Testimonials";
import Works from "./components/links/Works";

function App() {
  const containerRef = useRef(null);

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
      <div className="min-h-screen w-full bg-[#dee2e6]">
        <div className="fixed inset-0 opacity-50">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              filter: "contrast(180%) brightness(1000%)",
            }}
          />
        </div>
        <Nav />
        <div ref={containerRef} data-scroll-container className="relative z-10">
          <Home />
          <About />
          <Works />
          <Testimonials />
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
