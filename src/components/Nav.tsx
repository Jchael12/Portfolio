import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { Facebook, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScroll } from "../hooks/useScroll";

const menuVariants = {
  open: {
    clipPath: "circle(150% at calc(100% - 48px) 48px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    clipPath: "circle(0% at calc(100% - 48px) 48px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const socialVariants = {
  open: {
    scale: 1,
    opacity: 1,
  },
  closed: {
    scale: 0,
    opacity: 0,
  },
};

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const scrollToSection = useScroll();
  const activeSection = useActiveSection();

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    scrollToSection(sectionId);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "works", label: "Works" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const socialIcons = [
    { Icon: Github, href: "https://github.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Facebook, href: "https://facebook.com" },
  ];

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between p-5">
          <h1 className="font-bold uppercase font-cabinet text-xl">
            Jchael<sup>&copy;</sup>
          </h1>
          <div className="z-50">
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="w-12 h-12 bg-[#212529] rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Hamburger
                size={20}
                hideOutline={false}
                toggle={setOpen}
                toggled={isOpen}
                duration={0.8}
                color="#f8f9fa"
              />
            </motion.div>
          </div>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className="w-1/2 h-screen bg-[#212529] absolute top-0 right-0 p-10 flex flex-col justify-between"
          >
            <motion.ul className="space-y-8">
              {menuItems.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-6xl font-bold uppercase transition-colors ${
                      activeSection === item.id
                        ? "text-[#f8f9fa]"
                        : "text-[#6c757d] hover:text-[#f8f9fa]"
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
            <div className="space-y-5">
              <motion.p variants={itemVariants} className="text-[#e9ecef]">
                jhonmichaelabbas0712@gmail.com
              </motion.p>
              <motion.div className="flex space-x-4">
                {socialIcons.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-[#343a40] rounded-full flex items-center justify-center text-[#f8f9fa] hover:bg-[#495057] transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
