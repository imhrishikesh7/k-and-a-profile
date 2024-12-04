import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide5() {
  return (
    <motion.div
      className="marginal bg-white fs"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white px-8">
        <div className="w-[100%]  m-auto">
          <img src="/images/slide5.webp" alt="Slide 5" className="" />
        </div>
      </div>
      <Navigation theme="black" page={5} />
    </motion.div>
  );
}

export default Slide5;
