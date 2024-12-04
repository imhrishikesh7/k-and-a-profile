import { motion } from "framer-motion";
import React from "react";
import Navigation from "./Navigation";

// Generate a random position for the initial scatter state
const randomScatterPosition = () => ({
    x: Math.random() * 1000 - 500, // Random value between -500 and 500
    y: Math.random() * 800 - 400,
    opacity: 0,
    scale: Math.random() * 0.5 + 0.5, // Random scale between 0.5 and 1
});

const Slide04 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[100vh] !bg-white flex justify-center items-center"
        >
            <div className="marginal !h-[95vh] w-[97%] relative flex justify-between font-extended">
                {/* Left Section */}
                <div className="flex w-[49%] h-full justify-between relative">
                    {/* Image 1 */}
                    <motion.div
                        initial={randomScatterPosition()}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.42, 0, 0.58, 1], // Smooth cubic bezier
                        }}
                        className="w-[55%] mt-[6%]"
                    >
                        <img src="/images/1.webp" alt="" />
                    </motion.div>
                    {/* Image 2 */}
                    <motion.div
                        initial={randomScatterPosition()}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: [0.42, 0, 0.58, 1],
                        }}
                        className="w-[43%] absolute left-[52%] top-[32%]"
                    >
                        <img src="/images/2.webp" alt="" />
                    </motion.div>
                </div>

                {/* Right Section */}
                <div className="flex w-[49%] flex-col h-full justify-between relative">
                    {/* Image 3 */}
                    <motion.div
                        initial={randomScatterPosition()}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.6,
                            ease: [0.42, 0, 0.58, 1],
                        }}
                        className="w-[40vw] absolute top-[12%]"
                    >
                        <img src="/images/3.webp" alt="" />
                    </motion.div>
                    {/* Image 4 */}
                    <motion.div
                        initial={randomScatterPosition()}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.42, 0, 0.58, 1],
                        }}
                        className="z-10 w-[27vw] absolute left-[30%] top-[58%]"
                    >
                        <img src="/images/4.webp" alt="" />
                    </motion.div>
                </div>

                {/* Image 5 */}
                <motion.div
                    initial={randomScatterPosition()}
                    animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: [0.42, 0, 0.58, 1],
                    }}
                    className="absolute top-[22%] right-4 w-[79vw]"
                >
                    <img src="/images/5.webp" alt="" />
                </motion.div>
            </div>
            <Navigation theme="black" page={3} />
        </motion.div>
    );
};

export default Slide04;
