import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide20() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
        when: "beforeChildren", // Start children animations after the container
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10, // Controls the bounce effect
      },
    },
  };

  return (
    <motion.div
      className="marginal bg-[#f4f4f4] overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="marginal m-auto !h-[85vh] w-[97%] bg-[#f7f7f8] flex justify-evenly font-extended"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            className="w-[22%]"
            key={index}
            variants={itemVariants}
          >
            <img src={`/images/${index * 11}.webp`} alt={`Image ${index}`} />
          </motion.div>
        ))}
      </motion.div>
      <Navigation theme="black" page={20} />
    </motion.div>
  );
}

export default Slide20;
