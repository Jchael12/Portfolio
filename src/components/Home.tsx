import { motion } from "framer-motion";
import profile from "../assets/profile2.png";

const header1 = `font-bold text-[#212529] font-cabinet uppercase md:text-[8rem] text-[4rem]`;

function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col-reverse md:flex-row items-center justify-between relative"
    >
      <div className="flex items-center justify-center p-10 relative z-10 md:w-1/2 md:h-full mt-28 md:mt-0">
        <div className="text-center md:mt-18 text-white">
          <motion.h1
            className={`${header1}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.0,
              delay: 2.5,
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
              delay: 3.0,
            }}
          >
            Jhon Michael Abbas
          </motion.span>
        </div>
      </div>
      <div className="absolute md:inset-y-0 md:right-0 md:w-1/2 w-56 top-24 md:p-5">
        <motion.img
          src={profile}
          style={{ objectPosition: "50% 40%" }}
          className="w-full h-full object-cover rounded-lg"
          alt="Profile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
        />
      </div>
    </section>
  );
}

export default Home;
