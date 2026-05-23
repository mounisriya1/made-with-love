import { Link } from "react-router-dom";
import { Gift, Heart, Sparkles, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const floatingItems = ["❤️", "💖", "💕", "✨", "🌸", "🎂"];

const loveNotes = [
  "My favorite person",
  "My safe place",
  "My forever smile",
];

const Landing = () => {
  return (
    <PageWrapper className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-rose-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-red-200/40 rounded-full blur-3xl" />

      {/* Floating Items */}
      {floatingItems.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0.35 }}
          animate={{
            y: [-8, -28, -8],
            opacity: [0.35, 1, 0.35],
            rotate: [-5, 8, -5],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute text-lg sm:text-3xl pointer-events-none"
          style={{
            top: `${8 + index * 13}%`,
            left: `${6 + index * 16}%`,
          }}
        >
          {item}
        </motion.span>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center px-4 py-3">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-5xl rounded-[2rem] bg-white/55 backdrop-blur-xl border border-white/80 shadow-2xl shadow-rose-300/40 overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-pink-300/40 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-rose-300/40 rounded-full blur-2xl" />

          <div className="relative grid md:grid-cols-2 gap-4 items-center px-5 py-5 sm:px-8 sm:py-7">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-rose-200 text-rose-600 text-xs sm:text-sm font-bold shadow-md"
              >
                <Crown className="w-4 h-4 text-rose-500" />
                Birthday Mission Unlocked
                <Sparkles className="w-4 h-4 text-pink-500" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight"
              >
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Happy Birthday
                </span>
                <br />
                <span className="text-rose-700">My Love ❤️</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-4 text-sm sm:text-base md:text-lg text-rose-700/80 font-body max-w-xl leading-relaxed mx-auto md:mx-0"
              >
                Today is not just your birthday. It is a whole little world made
                for you with memories, love, smiles, and surprises waiting to be
                opened one by one.
              </motion.p>

              {/* Mini Cards */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="mt-5 grid grid-cols-3 gap-2 sm:gap-3"
              >
                <div className="rounded-2xl bg-white/70 border border-rose-100 p-3 text-center shadow-md">
                  <Heart className="w-5 h-5 mx-auto text-rose-500 fill-rose-500" />
                  <p className="mt-1 text-[10px] sm:text-xs text-rose-600 font-bold">
                    Love
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 border border-rose-100 p-3 text-center shadow-md">
                  <Star className="w-5 h-5 mx-auto text-pink-500 fill-pink-500" />
                  <p className="mt-1 text-[10px] sm:text-xs text-rose-600 font-bold">
                    Memories
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 border border-rose-100 p-3 text-center shadow-md">
                  <Gift className="w-5 h-5 mx-auto text-red-500" />
                  <p className="mt-1 text-[10px] sm:text-xs text-rose-600 font-bold">
                    Surprise
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 }}
                className="mt-5"
              >
                <Link
                  to="/surprise"
                  className="group inline-flex items-center gap-3 px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-body font-bold shadow-lg shadow-rose-400/40 hover:shadow-xl hover:shadow-rose-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Open Birthday Surprise
                  <span className="text-xl">🎁</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Photo Section */}
            <div className="relative flex items-center justify-center mt-3 md:mt-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-2 border-dashed border-rose-300"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.55,
                  type: "spring",
                  stiffness: 120,
                }}
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-400 via-pink-300 to-red-400 blur-xl opacity-70 animate-pulse" />

                <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-rose-400 via-pink-300 to-red-400 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                    <img
                      src="/images/Couple1.jpg"
                      alt="Our Photo"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Love Notes */}
              {loveNotes.map((note, index) => (
                <motion.div
                  key={note}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [-4, -12, -4],
                  }}
                  transition={{
                    opacity: { delay: 0.9 + index * 0.2 },
                    scale: { delay: 0.9 + index * 0.2 },
                    y: {
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: index * 0.4,
                    },
                  }}
                  className={`absolute hidden sm:block px-3 py-2 rounded-full bg-white/80 border border-rose-100 text-rose-600 text-xs font-bold shadow-md ${
                    index === 0
                      ? "top-2 right-8"
                      : index === 1
                      ? "bottom-4 right-2"
                      : "bottom-8 left-4"
                  }`}
                >
                  {note}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Landing;