
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, X } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const message =
  "Thank you for being part of my life. I am grateful for every moment with you. You are my everything — my happiness, my strength, and my forever.";

const SecretSurprise = () => {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!open) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <PageWrapper className="gradient-hero relative overflow-hidden">

      {/* floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -900, opacity: 1 }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.4
            }}
            className="absolute text-primary opacity-40 text-lg"
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center relative z-10">

        {/* Gift icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
        >
          <Gift className="w-16 h-16 text-primary mx-auto animate-bounce" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-3xl sm:text-5xl font-display font-bold text-gradient-love"
        >
          A Secret Surprise
        </motion.h1>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.07 }}
          onClick={() => setOpen(true)}
          className="mt-10 px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg shadow-romantic"
        >
          Click for a Secret Message 💌
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setOpen(false)}
            >

              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                className="relative w-full max-w-md p-8 rounded-3xl gradient-card border border-border shadow-glow text-center"
                onClick={(e) => e.stopPropagation()}
              >

                {/* close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>

                {/* heart animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Heart className="w-10 h-10 text-primary fill-primary mx-auto animate-pulse-heart" />
                </motion.div>

                <h2 className="mt-4 text-2xl font-display font-bold text-foreground">
                  My Love Letter 💌
                </h2>

                {/* typing text */}
                <p className="mt-4 text-foreground/80 font-body leading-relaxed min-h-[90px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>

                <p className="mt-4 text-primary font-display italic">
                  — With all my love ❤️
                </p>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  );
};

export default SecretSurprise;
