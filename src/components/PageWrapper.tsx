import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageWrapper = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className={`min-h-screen pt-14 ${className}`}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
