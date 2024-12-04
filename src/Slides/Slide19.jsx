import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide19() {
  return (
    <motion.div
    className="marginal overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
        <div className="">
      <img src="/images/slide19.webp" alt="Slide 19" className="fs" />

        </div>
        <Navigation theme="white" page={19} />
    </motion.div>
  );
}

export default Slide19;
