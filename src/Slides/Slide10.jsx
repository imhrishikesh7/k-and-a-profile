import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const Slide10 = () => {
    const images = [
        "/images/10-1.webp",
        "/images/10-2.webp",
        "/images/10-3.webp",
        "/images/10-4.webp",
        "/images/10-5.webp",
        "/images/10-6.webp",
        "/images/10-7.webp",
        "/images/10-8.webp",
        "/images/10-9.webp",
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
        }, 2000); // Change every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <motion.div
            className="h-[100vh] !bg-white flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="marginal !h-[85vh] w-[97%] bg-[#f7f7f8] flex justify-center font-extended">
                {/* 65% Width Container */}
                <div className="flex p-4 flex-col h-full justify-between w-[65%]">
                        <motion.div
                            className="w-fit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#000000] to-[#f6c419] font-exb mb-4">Stakeholder <br />
                                Reporting</h1>
                            <p className="text-2xl">_Annual Report</p>
                            <p className="text-2xl">_Integrated Report</p>
                        </motion.div>
                </div>

                {/* 35% Width Container with Looping Images */}
                <div className="flex flex-col h-full justify-between w-[35%] relative overflow-hidden">
                    <AnimatePresence>
                        <motion.img
                            key={currentImage} // Re-render image when it changes
                            src={images[currentImage]}
                            className="w-full h-full absolute object-cover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1.5 }} // Smooth fade-in/out
                            alt={`Image ${currentImage + 1}`}
                        />
                    </AnimatePresence>
                </div>
            </div>
            <Navigation theme="black" page={10} />
        </motion.div>
    );
};

export default Slide10;
