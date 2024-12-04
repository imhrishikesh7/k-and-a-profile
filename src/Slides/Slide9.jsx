import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide9() {
  return (
    <motion.div
    className="marginal overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
        <div className="">
      <img src="/images/slide9.webp" alt="Slide 9" className="fs" />

        </div>
        <Navigation theme="white" page={9} />
    </motion.div>
  );
}

export default Slide9;
