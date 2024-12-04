import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const Slide13 = () => {
    const images = [
        "/images/13-1.webp",
        "/images/13-2.webp",
        "/images/13-3.webp",
        "/images/13-4.webp",
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
        }, 2000); // Change every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div
            className="h-[100vh] !bg-white flex justify-center items-center"

        >
            <div className="marginal !h-[85vh] w-[97%] bg-[#f7f7f8] flex flex-wrap justify-center font-extended">
                {/* 65% Width Container */}
                <div className="flex p-4 h-full w-[65%] space-x-4">
                    {/* First Column */}
                    <div className="flex flex-col w-[50%]">
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
                        <div className="w-fit">
                            <h1 className="text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#000000] to-[#f6c419] font-exb mb-3">
                                Presentation</h1>
                            <p className="text-2xl">_Investor presentation</p>
                            <p className="text-2xl">_Corporate presentation</p>
                            <p className="text-2xl">_Quaterly presentation</p>
                            <p className="text-2xl">
                                _Marketing / Product <br />
                                &nbsp;&nbsp;specific Presentation
                            </p>

                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="flex flex-col w-[50%] ">

                        <motion.div
                            className="w-fit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-5xl bg-gradient-to-r w-fit bg-clip-text text-transparent from-[#000000] to-[#f6c419] font-exb mb-3">
                                Digital</h1>
                            <p className="text-2xl">_Corporate Website</p>
                            <p className="text-2xl">_Annual report microsite</p>
                            <p className="text-2xl">_Annual report movie</p>
                            <p className="text-2xl">_Corporate movie</p>
                            <p className="text-2xl">_Social Media management</p>

                        </motion.div>
                    </div>
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
            <Navigation theme="black" page="13" />
        </div>
    );
};

export default Slide13;
