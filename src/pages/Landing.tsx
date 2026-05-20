import { Link } from "react-router-dom";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const floatingItems = ["❤️", "💖", "💕", "✨", "🌸"];

const Landing = () => {
  return (
    <PageWrapper className="relative h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-400/30 rounded-full blur-3xl" />

      {/* Floating Items */}
      {floatingItems.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0.35 }}
          animate={{
            y: [-8, -30, -8],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            delay: index * 0.35,
          }}
          className="absolute text-xl sm:text-3xl pointer-events-none"
          style={{
            top: `${12 + index * 14}%`,
            left: `${8 + index * 20}%`,
          }}
        >
          {item}
        </motion.span>
      ))}

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Happy Birthday
          </span>
          <br />
          <span className="text-rose-700">My Love ❤️</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.75, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
          className="relative mt-6 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full"
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-rose-700/80 font-body max-w-xl leading-relaxed"
        >
          A little website for the most special person in my life, filled with
          love, memories, smiles, and a beautiful surprise just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6"
        >
          <Link
            to="/surprise"
            className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-body font-bold shadow-lg shadow-rose-400/40 hover:shadow-xl hover:shadow-rose-500/50 hover:scale-105 transition-all duration-300"
          >
            <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Open Birthday Surprise
            <span className="text-xl">🎁</span>
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Landing;