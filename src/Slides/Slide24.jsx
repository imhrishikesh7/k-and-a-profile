import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navigation from './Navigation';
const Slide24 = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);

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
        animateCounter(setCount1, 2500); // End value for the first counter
        animateCounter(setCount2, 100); // End value for the second counter
        animateCounter(setCount3, 10000);  // End value for the third counter
        animateCounter(setCount4, 82);  // End value for the third counter
        animateCounter(setCount5, 80);  // End value for the third counter
    },
        []);
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='h-[100vh] !bg-white flex justify-center items-center'
        >
            <div className='marginal !h-[85vh] w-[97%] flex justify- font-extended'>
                {/* bg-[#f7f7f8] */}
                <div className='flex flex-col w-[65%] h-full justify-end '>
                    <div className='relative h-[44%]'>
                        <motion.div
                            className='w-[55%] absolute top-0 left-20'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 1 }}
                        >
                            <img src="/images/24-1-1.webp" alt="" />
                        </motion.div>
                    </div>

                    <div className='flex justify-end p-4 '>
                        <div className='w-[80%]'>
                            <h3 className='text-3xl font-bold mb-4'>Integrated Reporting</h3>
                            <div className='p-4 h-[350px] flex justify-evenly items- bg-[#f7f7f8] rounded-3xl'>
                                <div className='w-[48%] flex'>
                                    <div className='w-fit m-auto h-[70%] '>
                                        <h1 className='text-7xl w-fit mb-2'>{count1.toLocaleString()}+</h1>
                                        <p className='text-2xl w-fit'>
                                            Organisations <br />
                                            In 70+ countries have <br />
                                            adopted Integrated <br />
                                            Reporting
                                        </p>
                                    </div>
                                </div>
                                <div className='w-[4px] h-full bg-white rounded-full'>
                                </div>
                                <div className='w-[48%] flex'>
                                    <div className='w-fit m-auto h-[70%]'>
                                        <h1 className='text-7xl mb-2'>~{count2.toLocaleString()}</h1>
                                        <p className='text-2xl'>
                                            Organisations <br />
                                            In India adopted <br />
                                            Integrated Reporting
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='flex flex-col w-[35%] h-full justify-end'>
                    <h3 className='text-3xl font-bold mb-4'>GRI Reporting</h3>
                    <div className='bg-[#f7f7f8] p-4 flex flex-col items-center justify-evenly rounded-3xl w-full h-[85%] mb-4'>
                        <div className='w-[80%]'> 
                            <h1 className='text-7xl mb-2'>{count3.toLocaleString()}+</h1>
                            <p className='text-2xl'>
                                GRI reporters <br />
                                in over 100 countries
                            </p>
                        </div>
                        <div className='w-[80%] h-[4px] bg-white rounded-full'>
                        </div>
                        <div className='w-[80%]'> 
                            <h1 className='text-7xl mb-2'>{count4.toLocaleString()}%</h1>
                            <p className='text-2xl'>
                                of the world's largest <br />
                                250 organisations use <br />
                                GRI standards
                            </p>
                        </div>
                        <div className='w-[80%] h-[4px] bg-white rounded-full'>
                        </div>
                        <div className='w-[80%]'> 
                            <h1 className='text-7xl mb-2'>{count5.toLocaleString()}+</h1>
                            <p className='text-2xl'>
                                organisations <br />
                                in India follow the GRI <br />
                                standards
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <Navigation theme="black" page={24} />
        </motion.div>
    )
}

export default Slide24