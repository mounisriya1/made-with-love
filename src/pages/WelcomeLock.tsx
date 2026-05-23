import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Delete, Heart, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const floatingItems = ["❤️", "💖", "💕", "✨", "🌸", "🎂"];

const SECRET_PIN = "07112018";
// Change this PIN as you like: "143", "2003", "1234", birthday date, etc.

const WelcomeLock = () => {
  const navigate = useNavigate();

  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleNumberClick = (num: string) => {
    if (pin.length < SECRET_PIN.length) {
      setPin((prev) => prev + num);
      setError("");
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
    setError("");
  };

  const handleUnlock = () => {
    if (pin === SECRET_PIN) {
      setError("");
      navigate("/home");
    } else {
      setError("Oops! Wrong secret number 💌");
      setPin("");
    }
  };

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <PageWrapper className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-rose-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-8 w-44 h-44 bg-red-200/40 rounded-full blur-3xl" />

      {/* Floating Emojis */}
      {floatingItems.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0.35 }}
          animate={{
            y: [-6, -25, -6],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 3 + index * 0.35,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className="absolute text-lg sm:text-2xl pointer-events-none"
          style={{
            top: `${8 + index * 13}%`,
            left: `${8 + index * 15}%`,
          }}
        >
          {item}
        </motion.span>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center px-4 py-3 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm rounded-[1.7rem] bg-white/65 backdrop-blur-xl border border-white/80 shadow-2xl shadow-rose-300/40 px-6 py-5 sm:px-7 sm:py-6"
        >
          

          <div className="mt-4 flex items-center justify-center gap-2 text-rose-500">
            <Sparkles className="w-4 h-4" />
            <p className="text-xs font-bold tracking-widest uppercase">
              Secret Birthday PIN
            </p>
            <Sparkles className="w-4 h-4" />
          </div>

          <h1 className="mt-3 text-2xl sm:text-3xl font-display font-extrabold text-rose-700 leading-tight">
            Only My Birthday Boy Can Enter ❤️
          </h1>

          <p className="mt-2 text-sm text-rose-700/75 font-body leading-relaxed">
            Tap the secret numbers to unlock your birthday surprise.
          </p>

          {/* PIN Dots */}
          <div className="mt-4 flex items-center justify-center gap-3">
            {Array.from({ length: SECRET_PIN.length }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full border border-rose-400 transition-all ${
                  pin.length > index
                    ? "bg-rose-500 scale-110"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-xs sm:text-sm text-red-500 font-semibold"
            >
              {error}
            </motion.p>
          )}

          {/* Number Keypad */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {numbers.slice(0, 9).map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="h-12 rounded-2xl bg-white/80 border border-rose-100 text-rose-700 text-lg font-bold shadow-md hover:bg-rose-100 hover:scale-105 transition-all"
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleDelete}
              className="h-12 rounded-2xl bg-white/60 border border-rose-100 text-rose-600 flex items-center justify-center shadow-md hover:bg-rose-100 hover:scale-105 transition-all"
            >
              <Delete className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNumberClick("0")}
              className="h-12 rounded-2xl bg-white/80 border border-rose-100 text-rose-700 text-lg font-bold shadow-md hover:bg-rose-100 hover:scale-105 transition-all"
            >
              0
            </button>

            <button
              onClick={handleUnlock}
              className="h-12 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
            >
              <Heart className="w-5 h-5 fill-white" />
            </button>
          </div>

          <p className="mt-4 text-xs text-rose-500/75">
            Hint: Try our special number ✨
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default WelcomeLock;