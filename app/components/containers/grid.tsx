import React from "react";
import { motion } from "framer-motion";

const Grid : React.FC = ({children}) => {
  return (
    <motion.div
      className={`grid grid-cols-4 gap-x-4 md:grid-col-8 lg:grid-cols-12 lg:gap-x-6 overflow-visible h-auto w-full`}
    >
        {children}
    </motion.div>
  );
};

export default Grid;
