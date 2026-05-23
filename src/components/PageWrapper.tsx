import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageWrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35 }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;