import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navigation from './Navigation';
const Slide7 = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    useEffect(() => {
        controls1.start({
            height: "18vh",
            transition: { duration: 1.5, ease: "easeOut" },
        });
        controls2.start({
            height: "36vh",
            transition: { duration: 1.5, ease: "easeOut" },
        });
        controls3.start({
            height: "58vh",
            transition: { duration: 1.5, ease: "easeOut" },
        });
    }, [controls1, controls2, controls3]);
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='h-[100vh] !bg-white flex justify-center items-center'
        >
            <div className='marginal !h-[85vh] w-[97%]  bg-[#f7f7f8] flex justify- font-extended'>
                <div className='flex p-4 flex-col h-full justify-between items- w-[30%]'>
                    <div className='mt-4'>
                        <motion.img
                            src="/images/7-1.webp"
                            className='mix-blend-multiply' alt=""
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                    <div className='flex justify-evenly items-baseline'>
                        <motion.div
                            className='w-[30%] bg-[#f6c419] h-32 rounded-3xl'
                            initial={{ height: 0 }}
                            animate={controls1}
                        >
                        </motion.div>
                        <motion.div
                            className='w-[30%] bg-[#000] h-32 rounded-3xl'
                            initial={{ height: 0 }}
                            animate={controls2}
                        >
                        </motion.div>
                        <motion.div
                            className='w-[30%] bg-gradient-45 from-[#000000] to-[#f6c419] h-32 rounded-3xl'
                            initial={{ height: 0 }}
                            animate={controls3}
                        >
                        </motion.div>
                    </div>
                </div>
                <div className='flex p-4 flex-col h-full justify-center items-center w-[30%]'>
                    <div className='mt-[50%]'>
                        <motion.img
                            src="/images/7-2.webp"
                            className='mix-blend-multiply' alt=""
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                    </div>
                </div>
                <div className='flex relative flex-col h-full justify-end items-center w-[40%]'>
                    <div className='absolute top-14 right-[50%] w-full'>
                        <motion.img
                            src="/images/7-3.webp"
                            className='mix-blend-multiply' alt=""
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                    </div>
                    <div className='w-full relative'>
                        <img src="/images/Mapp2.webp" className='' alt="" />
                        {/* Marker 1 */}
                        <motion.div
                            className="absolute bg-yellow-500 w-6 h-6 rounded-full shadow-lg"
                            style={{
                                top: '44%', // Adjust this to match your map location
                                left: '42%', // Adjust this to match your map location
                            }}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Pulse Effect */}
                            <motion.div
                                className="absolute inset-0 bg-yellow-400 w-full h-full rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                }}
                            ></motion.div>
                        </motion.div>

                        {/* Marker 2 */}
                        <motion.div
                            className="absolute bg-yellow-500 w-6 h-6 rounded-full shadow-lg"
                            style={{
                                top: '48%', // Adjust this to match your map location
                                left: '45%', // Adjust this to match your map location
                            }}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        >
                            {/* Pulse Effect */}
                            <motion.div
                                className="absolute inset-0 bg-yellow-400 w-full h-full rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                }}
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Navigation theme="black" page={7} />
        </motion.div>
    )
}

export default Slide7