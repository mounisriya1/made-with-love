import { motion } from "framer-motion";
import { Cake, Gift, Stars } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import ConfettiEffect from "@/components/ConfettiEffect";

const message =
  "Happy Birthday to the most amazing person in my life. Thank you for being my happiness, my support, and my best friend. You make every day of my life more beautiful.";

const loveNotes = [
  "My Happiness",
  "My Best Friend",
  "My Favorite Smile",
  "My Forever Love",
];

const BirthdayWish = () => {
  const [typedText, setTypedText] = useState("");

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: i * 0.45,
        duration: 8 + Math.random() * 5,
        size: 14 + Math.random() * 14,
      })),
    []
  );

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper className="relative h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      <ConfettiEffect />

      {/* Soft Background Blobs */}
      <div className="absolute -top-32 -left-24 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-28 w-96 h-96 bg-rose-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-red-300/30 rounded-full blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ y: 600, opacity: 0 }}
            animate={{
              y: -120,
              opacity: [0, 0.65, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear",
            }}
            className="absolute text-rose-500"
            style={{
              left: heart.left,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full text-center max-w-3xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Happy Birthday
          </span>
          <br />
          <span className="text-rose-700">My Beautiful Love 🎂</span>
        </motion.h1>

        {/* Cake + Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-4 flex items-center justify-center gap-4"
        >
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 backdrop-blur-md shadow-md flex items-center justify-center"
          >
            <Cake className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 backdrop-blur-md shadow-md flex items-center justify-center"
          >
            <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 backdrop-blur-md shadow-md flex items-center justify-center"
          >
            <Stars className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
          </motion.div>
        </motion.div>

        {/* Love Tags */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-5 flex flex-wrap justify-center gap-2"
        >
          {loveNotes.map((note, index) => (
            <motion.span
              key={note}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95 + index * 0.12 }}
              className="px-3 py-1.5 rounded-full bg-white/55 backdrop-blur-md border border-white/60 text-rose-600 text-xs sm:text-sm font-semibold shadow-sm"
            >
              {note}
            </motion.span>
          ))}
        </motion.div>

        {/* Typing Message */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mt-5 max-w-2xl rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 shadow-xl px-4 py-4 sm:px-6 sm:py-5"
        >
          <p className="text-sm sm:text-lg font-body text-rose-900/80 leading-relaxed min-h-[105px] sm:min-h-[120px]">
            {typedText}
            <span className="animate-pulse text-rose-500">|</span>
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
          className="mt-4 text-base sm:text-lg font-body text-rose-700 italic"
        >
          I love you more than words could ever say ❤️
        </motion.p>
      </div>
    </PageWrapper>
  );
};

export default BirthdayWish;