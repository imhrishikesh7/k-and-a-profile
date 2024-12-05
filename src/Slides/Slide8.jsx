import { motion } from "framer-motion";
import Navigation from "./Navigation";

function Slide8() {
  // Animation variants
  const parentBubbleVariants = {
    initial: { y: "-200%", scale: 0.7, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 1,
      },
    },
  };

  const childBubbleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (index) => ({
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 1 + index * 0.3, // Sequentially appear after parent
        duration: 0.6,
      },
    }),
  };

  
  return (
    <motion.div
      className="marginal overflow-hidden bg-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="!w-[90%] h-[85vh] relative m-auto">
        {/* Parent bubble */}
        <motion.div
          className="parent absolute w-[20%] right-0 top-[25%]"
          variants={parentBubbleVariants}
          initial="initial"
          animate="animate"
        >
          <img src="/images/loc1.png" alt="Parent Bubble" />
        </motion.div>

        {/* Child bubbles */}
        {[
          { className: "child1", src: "/images/loc2.png", position: { right: "30%", top: "7%" } },
          { className: "child2", src: "/images/loc3.png", position: { right: "45%", top: "45%" } },
          { className: "child3", src: "/images/loc4.png", position: { right: "25%", top: "62%" } },
        ].map((child, index) => (
          <motion.div
            key={index}
            className={`${child.className} absolute w-[25%]`}
            style={{ right: child.position.right, top: child.position.top }}
            variants={childBubbleVariants}
            initial="initial"
            animate="animate"
            custom={index} // Pass index for sequencing
          >
            <img src={child.src} alt={`Child Bubble ${index + 1}`} />

          </motion.div>
        ))}
        <motion.img src="/images/loc5.png" className="absolute w-[9%] right-[35%] top-[38%]" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        />
        <motion.div 
        className="absolute top-[30%] left-0 font-exb bg-gradient-to-r bg-clip-text text-transparent from-[#000000] to-[#f6c419] "
        initial={{ opacity: 0, x: -30 }} // Initially invisible and 30px lower
        animate={{ opacity: 1, x: 0 }}   // Animate to full opacity and original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
        >
          <motion.h1
        className="text-5xl font-bold mb-4"
      >
        Sprawling offices
      </motion.h1>
      <motion.h1
        className="text-5xl font-bold"
      >
        across major cities
      </motion.h1>
        </motion.div>
      </div>
      <Navigation theme="black" page={8} />
    </motion.div>
  );
}

export default Slide8;
