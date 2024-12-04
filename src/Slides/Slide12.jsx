import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const Slide12 = () => {
    const images = [
        "/images/Picture 1.webp",
        "/images/Picture 2.webp",
        "/images/Picture 3.webp",
        "/images/Picture 4.webp",
        "/images/Picture 5.webp",
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
        }, 2000); // Change every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="h-[100vh] !bg-white flex justify-center items-center relative overflow-hidden">
            <div className="marginal !h-[85vh] w-[97%] flex justify-center font-extended relative z-10">
                {/* 65% Width Container */}
                <div className="flex p-4 flex-col h-full w-[65%] bg-white">
                <div className="w-fit mb-4">
                        <h1 className="text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#000000] to-[#f6c419] font-exb mb-3">
                            Stakeholder <br />
                            Reporting</h1>
                        <p className="text-2xl">_Annual Report</p>
                        <p className="text-2xl">_Integrated Report</p>
                    </div>
                    <div className="w-fit mb-4">
                    <h1 className="text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#000000] to-[#f6c419] font-exb mb-3">
                            Sustainability</h1>
                        <p className="text-2xl">_Sustainability Report</p>
                        <p className="text-2xl">_ESG Report</p>
                        <p className="text-2xl">_CSR Report</p>
                        <p className="text-2xl">
                            _UNGC Communication <br />
                            &nbsp;&nbsp;Progress Report
                        </p>
                        <p className="text-2xl">_IR Conclave / Workshops</p>
                    </div>
                    <motion.div
                        className="w-fit"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#000000] to-[#f6c419] font-exb mb-3">
                            Presentation</h1>
                        <p className="text-2xl">_Investor presentation</p>
                        <p className="text-2xl">_Corporate presentation</p>
                        <p className="text-2xl">_Quaterly presentation</p>
                        <p className="text-2xl">
                            _Marketing / Product <br />
                            &nbsp;&nbsp;specific Presentation
                        </p>

                    </motion.div>
                </div>

                {/* 35% Width Container */}
                <div className="flex flex-col h-full justify-between w-[35%] bg-[#f7f7f8] relative">
                    {/* Placeholder for alignment */}
                </div>
            </div>

            {/* Absolute Mockup Outside the Containers */}
            <div className="absolute top-1/2 right-[-35%] transform -translate-x-1/2 -translate-y-1/2 w-[70vw] z-20">
                <img
                    src="/images/mockup.webp"
                    className="w-full h-auto object-contain"
                    alt="MacBook Mockup"
                />
                {/* Screen-changing animation inside the mockup */}
                <div className="absolute top-[38%] left-[20.5%] w-[59%] h-[37.5%] overflow-hidden">
                <AnimatePresence>
                        <motion.img
                            key={currentImage} // Re-render image when it changes
                            src={images[currentImage]}
                            className="w-full h-full mix-blend-multiply absolute  "
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.7 }} // Smooth fade-in/out
                            alt={`Image ${currentImage + 1}`}
                        />
                    </AnimatePresence>
                </div>
            </div>
            <Navigation theme="black" page="12" />
        </div>
    );
};

export default Slide12;
