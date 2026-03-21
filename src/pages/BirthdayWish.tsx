import { motion } from "framer-motion";
import { Heart, Cake } from "lucide-react";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import ConfettiEffect from "@/components/ConfettiEffect";

const message =
  "Happy Birthday to the most amazing person in my life. Thank you for being my happiness, my support, and my best friend. You make every day of my life more beautiful.";

const BirthdayWish = () => {

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper className="gradient-hero relative overflow-hidden">

      <ConfettiEffect />

      {/* floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -900, opacity: 1 }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.4
            }}
            className="absolute text-primary text-xl opacity-40"
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center max-w-2xl relative z-10">

        {/* heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Heart className="w-16 h-16 text-primary fill-primary mx-auto animate-pulse-heart" />
        </motion.div>

        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-4xl sm:text-6xl font-display font-bold text-gradient-love"
        >
          Happy Birthday, My Love 🎂
        </motion.h1>

        {/* cake icon */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="mt-6"
        >
          <Cake className="w-12 h-12 text-primary mx-auto" />
        </motion.div>

        {/* typing message */}
        <p className="mt-8 text-lg sm:text-xl font-body text-foreground/80 leading-relaxed min-h-[120px]">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* final message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-8 text-lg font-body text-muted-foreground italic"
        >
          I love you more than words could ever say ❤️
        </motion.p>

      </div>
    </PageWrapper>
  );
};

export default BirthdayWish;
