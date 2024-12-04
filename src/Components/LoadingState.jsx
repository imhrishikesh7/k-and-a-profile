import { motion } from 'framer-motion';

export const LoadingState = () => {
  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
    </motion.div>
  );
}; 