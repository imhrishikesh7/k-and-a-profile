import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide8() {
  return (
    <motion.div
    className="marginal overflow-hidden bg-white "
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
        <div className="!w-[90%]  m-auto">
      <img src="/images/n8.webp" alt="Slide 8 " className="" />
        </div>
        <Navigation theme="black" page={8} />

    </motion.div>
  );
}

export default Slide8;
