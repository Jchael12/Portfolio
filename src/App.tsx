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
        <div className="fixed inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23000000'/%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
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
