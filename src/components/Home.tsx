import { motion } from "framer-motion";

const header1 = `font-semibold text-[#212529] font-general uppercase text-[9rem]`;

function Home() {
  return (
    <section id="home" className="w-10/12 mx-auto h-screen flex items-center">
      <div className="flex items-center justify-center p-10">
        <div className="text-center mt-18">
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
            Jhon Michael Abbas
          </motion.h1>
          <motion.span
            className="uppercase text-[#6c757d]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              delay: 2.0,
            }}
          >
            Frontend Engineer
          </motion.span>
        </div>
      </div>
    </section>
  );
}

export default Home;
