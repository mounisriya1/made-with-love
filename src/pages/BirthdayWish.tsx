import { motion, AnimatePresence } from "framer-motion";
import {
  Cake,
  Heart,
  Flame,
  Sparkles,
  Mail,
  Gift,
  Crown,
  Star,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import ConfettiEffect from "@/components/ConfettiEffect";

const birthdayMessage =
  "Happy Birthday to the person who makes my world brighter, softer, and happier. You are not just my favorite person today — you are my favorite person every day.";

const surpriseLetters = [
  {
    title: "A Memory",
    text: "One of my favorite things is how even a small moment with you becomes a memory I never want to forget.",
    icon: "💌",
  },
  {
    title: "A Promise",
    text: "I promise to always cheer for you, support you, and make you feel loved in every little way I can.",
    icon: "🤍",
  },
  {
    title: "A Wish",
    text: "May this year bring you happiness, success, peace, and all the beautiful things your heart deserves.",
    icon: "✨",
  },
];

const BirthdayWish = () => {
  const [typedText, setTypedText] = useState("");
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [openedLetters, setOpenedLetters] = useState<number[]>([]);
  const [showFinal, setShowFinal] = useState(false);

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: i * 0.35,
        duration: 7 + Math.random() * 5,
        size: 13 + Math.random() * 15,
      })),
    []
  );

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(birthdayMessage.slice(0, index));
      index++;

      if (index > birthdayMessage.length) {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
  };

  const handleOpenLetter = (index: number) => {
    if (!candlesBlown) return;

    if (!openedLetters.includes(index)) {
      const updatedLetters = [...openedLetters, index];
      setOpenedLetters(updatedLetters);

      if (updatedLetters.length === surpriseLetters.length) {
        setTimeout(() => {
          setShowFinal(true);
        }, 700);
      }
    }
  };

  return (
    <PageWrapper className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {showFinal && <ConfettiEffect />}

      {/* Background Blobs */}
      <div className="absolute -top-28 -left-24 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-28 w-80 h-80 bg-rose-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 left-1/3 w-72 h-72 bg-red-300/30 rounded-full blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ y: 620, opacity: 0 }}
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

      <div className="relative z-10 h-full flex items-center justify-center px-4 py-3">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-6xl rounded-[2rem] bg-white/55 backdrop-blur-xl border border-white/80 shadow-2xl shadow-rose-300/40 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-44 h-44 bg-pink-300/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-rose-300/40 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-5 items-center px-5 py-5 sm:px-8 sm:py-7">
            {/* Left Birthday Cake Universe */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-rose-200 text-rose-600 text-xs sm:text-sm font-bold shadow-md"
              >
                <Crown className="w-4 h-4 text-rose-500" />
                Birthday Universe
                <Sparkles className="w-4 h-4 text-pink-500" />
              </motion.div>

              <motion.div
                initial={{ scale: 0.75, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 120 }}
                className="mx-auto mt-5 relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-rose-300 via-pink-200 to-red-300 shadow-2xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-2 border-dashed border-white/80"
                />

                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/75 backdrop-blur-md border border-white shadow-xl flex flex-col items-center justify-center"
                >
                  <Cake className="w-14 h-14 sm:w-16 sm:h-16 text-rose-500" />

                  {!candlesBlown ? (
                    <motion.div
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [1, 0.75, 1],
                      }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    >
                      <Flame className="w-7 h-7 text-orange-400 fill-orange-400" />
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-3xl"
                    >
                      ✨
                    </motion.p>
                  )}
                </motion.div>

                {["❤️", "⭐", "💖"].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 9 + index * 2,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <span
                      className="absolute text-xl"
                      style={{
                        top: index === 0 ? "4%" : index === 1 ? "50%" : "80%",
                        left: index === 0 ? "50%" : index === 1 ? "4%" : "72%",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                onClick={handleBlowCandles}
                disabled={candlesBlown}
                whileTap={{ scale: 0.95 }}
                className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-lg shadow-rose-400/40 hover:scale-105 transition-all disabled:opacity-80"
              >
                <Sparkles className="w-5 h-5" />
                {candlesBlown ? "Magic Unlocked" : "Blow the Candle"}
              </motion.button>

              <p className="mt-3 text-xs sm:text-sm text-rose-600/80 font-semibold">
                Blow the candle first, then open the love letters 💌
              </p>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
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

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="mt-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/70 shadow-xl px-4 py-4 sm:px-6 sm:py-5"
              >
                <p className="text-sm sm:text-lg font-body text-rose-900/80 leading-relaxed min-h-[90px]">
                  {typedText}
                  <span className="animate-pulse text-rose-500">|</span>
                </p>
              </motion.div>

              {/* Love Letter Cards */}
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {surpriseLetters.map((letter, index) => {
                  const isOpened = openedLetters.includes(index);

                  return (
                    <motion.button
                      key={letter.title}
                      onClick={() => handleOpenLetter(index)}
                      disabled={!candlesBlown}
                      whileHover={candlesBlown ? { y: -5 } : {}}
                      whileTap={candlesBlown ? { scale: 0.96 } : {}}
                      className={`relative min-h-[125px] rounded-2xl border shadow-lg p-4 text-center transition-all overflow-hidden ${
                        isOpened
                          ? "bg-gradient-to-br from-rose-500 to-pink-500 text-white border-white/60"
                          : candlesBlown
                          ? "bg-white/70 text-rose-700 border-rose-100 hover:bg-rose-50"
                          : "bg-white/40 text-rose-400 border-white/50 opacity-70"
                      }`}
                    >
                      <div className="absolute -top-8 -right-8 w-20 h-20 bg-white/20 rounded-full blur-xl" />

                      {!isOpened ? (
                        <div className="h-full flex flex-col items-center justify-center">
                          <Mail className="w-7 h-7 mb-2" />
                          <p className="font-bold text-sm">
                            {candlesBlown ? "Open Letter" : "Locked"}
                          </p>
                          <p className="text-xs mt-1 opacity-80">
                            {letter.title}
                          </p>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, rotateY: 90 }}
                          animate={{ opacity: 1, rotateY: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <p className="text-2xl">{letter.icon}</p>
                          <h3 className="mt-1 font-bold text-sm">
                            {letter.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed">
                            {letter.text}
                          </p>
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Final Reveal */}
              <AnimatePresence>
                {showFinal && (
                  <motion.div
                    initial={{ opacity: 0, y: 18, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="mt-5 rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white px-5 py-4 shadow-xl shadow-rose-400/40"
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Gift className="w-5 h-5" />
                      <p className="font-bold">Final Surprise Unlocked</p>
                      <Star className="w-5 h-5 fill-white" />
                    </div>

                    <p className="mt-2 text-sm sm:text-base leading-relaxed">
                      No matter where life takes us, you will always have a
                      special place in my heart. Today, tomorrow, and always —
                      you are my favorite birthday boy ❤️
                    </p>

                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-bold"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      I love you endlessly
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showFinal && (
                <p className="mt-4 text-sm sm:text-base text-rose-700 italic">
                  Open all three letters to reveal the final surprise ❤️
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default BirthdayWish;