import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const Slide23 = () => {
  const images = [
    "/images/23-1.webp",
    "/images/23-2.webp",
    "/images/23-3.webp",
    "/images/23-4.webp",
    "/images/23-5.webp",
    "/images/23-6.webp",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const imageVariants = {
    initial: { opacity: 0, x: 100, scale: 0.8, rotate: 10 },
    animate: { opacity: 1, x: 0, scale: 1, rotate: 0 },
    exit: { opacity: 0, x: -100, scale: 0.8, rotate: -10 },
  };

  const transitionSettings = {
    duration: 1.2,
    ease: [0.6, -0.05, 0.01, 0.99], // Custom cubic-bezier for fluid motion
  };

  return (
    <div className="h-[100vh] bg-[#f4f3f4] flex justify-center items-center relative overflow-hidden">
      <div className="marginal bg-white !h-[85vh] w-[95%] flex justify-center font-extended relative z-10">
        <AnimatePresence>
          <motion.img
            key={currentImage} // Re-render image when it changes
            src={images[currentImage]}
            className="w-[95%] h-full absolute mix-blend-multiply object-contain"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionSettings}
            alt={`Image ${currentImage + 1}`}
          />
        </AnimatePresence>
      </div>
      <Navigation theme="black" page="23" />
    </div>
  );
};

export default Slide23;
