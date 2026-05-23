import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Gift } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100"
        >
          {/* Soft Glow Background */}
          <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-rose-400/30 blur-3xl" />

          {/* Floating Emojis */}
          {["❤️", "✨", "💖", "🎂", "💕", "🌸"].map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: 0, opacity: 0.25 }}
              animate={{
                y: [-8, -32, -8],
                opacity: [0.25, 0.9, 0.25],
                rotate: [-8, 8, -8],
              }}
              transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                delay: index * 0.25,
              }}
              className="absolute text-xl sm:text-3xl"
              style={{
                top: `${12 + index * 13}%`,
                left: `${8 + index * 15}%`,
              }}
            >
              {item}
            </motion.span>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 mx-4 w-full max-w-md rounded-[2rem] border border-white/75 bg-white/55 px-7 py-8 text-center shadow-2xl shadow-rose-300/40 backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full border-2 border-dashed border-rose-300"
            />

            <motion.div
              animate={{ scale: [1, 1.12, 1], y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 1.7 }}
              className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-xl shadow-rose-400/40"
            >
              <Heart className="h-11 w-11 fill-white text-white" />

              <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
                <Gift className="h-5 w-5 text-rose-500" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/60 px-4 py-2 text-xs font-bold text-rose-600">
                <Sparkles className="h-4 w-4 text-pink-500" />
                Preparing your surprise
                <Sparkles className="h-4 w-4 text-pink-500" />
              </div>

              <h1 className="mt-4 text-3xl font-display font-extrabold text-rose-700">
                Loading Love...
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-rose-700/75">
                A little birthday magic is getting ready just for you.
              </p>
            </motion.div>

            <div className="mt-7 flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-2.5 w-2.5 rounded-full bg-rose-500"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.45, 1, 0.45],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;