import { motion } from "framer-motion";
import profile from "../assets/profile2.png";

const header1 = `font-bold text-[#212529] font-cabinet uppercase text-[8rem]`;

function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-between relative"
    >
      <div className="flex items-center justify-center p-10 relative z-10 w-1/2 h-full">
        <div className="text-center mt-18 text-white">
          <motion.h1
            className={header1}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.0,
              delay: 1.7,
              ease: "easeOut",
            }}
          >
            Freelance Software Engineer
          </motion.h1>
          <motion.span
            className="font-cabinet uppercase font-semibold text-[#6c757d]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              delay: 2.0,
            }}
          >
            Jhon Michael Abbas
          </motion.span>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img
          src={profile}
          style={{ objectPosition: "50% 40%" }}
          className="w-full h-full object-cover rounded-md"
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Home;
