import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide2() {
  return (
    <motion.div
    className="marginal"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/images/slide2.webp" alt="Slide 2" className="fs" />
      <Navigation theme="white" page={2} />

    </motion.div>
  );
}

export default Slide2;
