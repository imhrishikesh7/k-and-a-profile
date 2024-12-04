import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide4() {
  return (
    <motion.div
    className="marginal"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/images/slide4.webp" alt="Slide 4" className="fs" />
      <Navigation theme="white" page={4} />
    </motion.div>
  );
}

export default Slide4;
