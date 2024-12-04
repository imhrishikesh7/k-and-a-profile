import { motion } from "framer-motion";

function Slide25() {
  return (
    <motion.div
    className="marginal overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
        <div className="">
      <img src="/images/slide25.webp" alt="Slide 25" className="fs" />

        </div>
    </motion.div>
  );
}

export default Slide25;
