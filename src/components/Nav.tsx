import Hamburger from "hamburger-react";
import { Facebook, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useScroll } from "../hooks/useScroll";

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const scrollToSection = useScroll();

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between p-5">
        <h1 className="font-bold uppercase font-cabinet text-xl">
          Jchael<sup>&copy;</sup>
        </h1>
        <Hamburger
          size={28}
          hideOutline={false}
          toggle={setOpen}
          toggled={isOpen}
          duration={0.8}
        />
        {isOpen && (
          <div className="w-3/6 rounded-md h-full bg-[#212529] absolute top-20 right-5 p-10 flex flex-col justify-between">
            <ul className="space-y-8">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="text-[#6c757d] text-6xl font-bold uppercase hover:text-[#f8f9fa]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-[#6c757d] text-6xl font-bold uppercase hover:text-[#f8f9fa]"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("works")}
                  className="text-[#6c757d] text-6xl font-bold uppercase hover:text-[#f8f9fa]"
                >
                  Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("testimonials")}
                  className="text-[#6c757d] text-6xl font-bold uppercase hover:text-[#f8f9fa]"
                >
                  Testimonials
                </button>
              </li>
            </ul>
            <div className="space-y-5">
              <p className="text-[#e9ecef]">jhonmichaelabbas0712@gmail.com</p>
              <div className="flex space-x-4 text-[#f8f9fa]">
                <Github />
                <Linkedin />
                <Facebook />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
