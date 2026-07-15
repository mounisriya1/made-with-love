import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({
  children,
  className = "",
}: PageWrapperProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`
        relative
        isolate
        w-full
        min-w-0
        min-h-screen
        min-h-dvh
        overflow-x-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;