import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide16() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="h-[100vh] bg-cover bg-white bg-center bg-no-repeat flex justify-center relative overflow-hidden"
      // style={{ backgroundImage: "url('/images/16bg.webp')" }}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="marginal w-[90%]  justify-between font-extended"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-[21%] h-[70%] relative" variants={itemVariants}>
          <img src="/images/16-1c.webp" alt="" />
          <p className="text-gray-400 text-lg absolute -bottom-[10%]">Market capitalisation as on 15th July, 2024</p>
        </motion.div>
        <motion.div className="w-[21%] h-[70%]" variants={itemVariants}>
          <img src="/images/16-2c.webp" alt="" />
        </motion.div>
        <motion.div className="w-[21%] h-[70%]" variants={itemVariants}>
          <img src="/images/16-3c.webp" alt="" />
        </motion.div>
        <motion.div className="w-[21%] h-[70%]" variants={itemVariants}>
          <img src="/images/16-4c.webp" alt="" />
        </motion.div>
      </motion.div>

      <Navigation theme="black" page={16} />
    </motion.div>
  );
}

export default Slide16;
