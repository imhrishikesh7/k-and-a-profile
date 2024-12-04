import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navigation from './Navigation';

const Slide6 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const controls = useAnimation();

    // Function to handle counting animation for each counter
    const animateCounter = (setCount, endValue) => {
        let startValue = 0;
        const duration = 1500; // Total animation duration in milliseconds
        const interval = 30; // Update interval in milliseconds
        const step = (endValue / duration) * interval; // Increment per interval

        const counter = setInterval(() => {
            startValue += step;
            if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(counter);
            }
            setCount(Math.floor(startValue));
        }, interval);
    };

    useEffect(() => {
        animateCounter(setCount1, 100); // End value for the first counter
        animateCounter(setCount2, 250); // End value for the second counter
        animateCounter(setCount3, 30);  // End value for the third counter
        animateCounter(setCount4, 12);  // End value for the third counter
        animateCounter(setCount5, 90);  // End value for the third counter

        // Start the bar animation
        controls.start({
            height: "35vh",
            transition: { duration: 1.5, ease: "easeOut" },
        });
    }, [controls]);

    return (
        <motion.div className='h-[100vh] !bg-white flex justify-center items-center'    
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            <div className='marginal !h-[87vh]  bg-[#f7f7f8] flex justify- font-extended'>
                <div className='flex flex-col ml-8 h-full justify-end items- w-[32%]'>
                    <div className='mb-12'>
                        <img src="/images/6-3.webp" className='w-full mix-blend-multiply' alt="" />
                    </div>
                    <div className='w-[90%] mb-4'>
                        <img src="/images/6-1.webp" className='w-full mix-blend-multiply' alt="" />
                    </div>
                    <div className='w-[90%] mb-4'>
                        <img src="/images/6-2.webp" className='w-full mix-blend-multiply' alt="" />
                    </div>
                </div>
                <div className='flex flex-col relative ml-8 h-full justify-center items- w-[13%]'>
                    <div className='mb-10'>
                        <h3 className='text-3xl mb-2'>Team <br /> strength</h3>
                        <p className="text-6xl">~{count1}</p> {/* Displaying the first count */}
                    </div>
                    <motion.div
                        className="bar w-[80%] rounded-3xl bg-gradient-45 from-[#000000] to-[#f6c419] absolute bottom-4"
                        initial={{ height: 0 }}
                        animate={controls}
                    ></motion.div>
                </div>
                <div className='flex flex-col relative bg-white h-full justify-evenly items- w-[18%] px-4'>
                    <div>
                        <h3 className='text-3xl mb-2'>Clients <br /> served</h3>
                        <p className="text-6xl">{count2}+</p> {/* Displaying the first count */}
                    </div>
                    <div>
                        <h3 className='text-3xl mb-2'>BRSR <br /> created</h3>
                        <p className="text-6xl">{count3}+</p> {/* Displaying the first count */}
                    </div>
                    <div>
                        <h3 className='text-3xl mb-2'>Sustainability <br /> consultants</h3>
                        <p className="text-6xl">{count4}+</p> {/* Displaying the first count */}
                    </div>
                </div>
                <div className='flex flex-col h-full ml-auto justify-center items- w-[34%]'>
                    <div className='w-full mt-[28%] flex justify-center items-center relative'>
                        <svg
                            width="440"
                            height="440"
                            viewBox="0 0 120 120"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute"
                        >
                            <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="#ddd"
                                strokeWidth="5"
                            />
                            <motion.circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="#f2c506"
                                strokeWidth="5"
                                strokeDasharray="314" // 2πr (for a circle with r=50)
                                strokeDashoffset="314"
                                animate={{
                                    strokeDashoffset: 314 - (314 * (count5 / 100)),
                                }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                style={{
                                    transform: 'rotate(-90deg)', // Adjust starting point of circle (rotate 90deg counter-clockwise)
                                    transformOrigin: 'center',  // Ensure rotation happens from the center
                                }}
                            />
                        </svg>

                        <div>
                            <h3 className='text-3xl mb-2'>Clients retained <br /> (YoY)</h3>
                            <p className="text-6xl">~{count5}%</p> {/* Displaying the first count */}
                        </div>
                    </div>
                    <div className='h-full flex mb-4'>
                        <div className='relative mt-auto'>
                        <div className=''>
                            <img src="/images/6-4.webp" className='w-[95%] rounded-3xl -ml-4' alt="" />
                        </div>

                        {/* Animated Yellow Circle 1 */}
                        <motion.div
                            className="absolute w-8 h-8 bg-yellow-500 rounded-full mix-blend-multiply"
                            style={{ top: '30%', left: '51%' }} // Adjust the position based on the map's coordinates
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>

                        {/* Animated Yellow Circle 2 */}
                        <motion.div
                            className="absolute w-8 h-8 bg-yellow-500 rounded-full"
                            style={{ top: '65%', left: '44%' }}// Adjust the position based on the map's coordinates
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        ></motion.div>

                        {/* Animated Yellow Circle 3 */}
                        <motion.div
                            className="absolute w-8 h-8 bg-yellow-500 rounded-full"
                            style={{ top: '50%', left: '73%' }} // Adjust the position based on the map's coordinates
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        ></motion.div>
                        <motion.div
                            className="absolute w-8 h-8 bg-yellow-500 rounded-full"
                            style={{ top: '70%', left: '56%' }} // Adjust the position based on the map's coordinates
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        ></motion.div>
                    </div>
                    </div>
                </div>
            </div>
            <Navigation theme="black" page={6} />
        </motion.div>
    );
}

export default Slide6;
