import React from 'react';
import { motion } from 'framer-motion';

const Slide1 = () => {
    return (
        <motion.div
            className="marginal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }} // Smooth 1-second animation
        >
<video autoPlay muted loop
          style={{width:"100%",
          }}
        >
            <source src='/images/Comp 3.webm' />
        </video>
        </motion.div>
    );
};

export default Slide1;
