import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, X, Mail, Sparkles, LockKeyhole } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const message =
  "Thank you for being part of my life. I am grateful for every moment with you. You are my happiness, my strength, my safe place, and my forever. No matter how many days pass, my heart will always choose you.";

const SecretSurprise = () => {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const floatingItems = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: i * 0.35,
        duration: 7 + Math.random() * 5,
        size: 13 + Math.random() * 12,
      })),
    []
  );

  useEffect(() => {
    if (!open) {
      setTypedText("");
      return;
    }

    let i = 0;

    const interval = setInterval(() => {
      setTypedText(message.slice(0, i));
      i++;

      if (i > message.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <PageWrapper className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-rose-400/30 blur-3xl" />
      <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-red-300/25 blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingItems.map((item) => (
          <motion.span
            key={item.id}
            initial={{ y: 520, opacity: 0 }}
            animate={{
              y: -100,
              opacity: [0, 0.7, 0],
              rotate: [0, 18, -18, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear",
            }}
            className="absolute text-rose-500"
            style={{
              left: item.left,
              fontSize: `${item.size}px`,
            }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-16 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 px-5 py-6 shadow-2xl shadow-rose-300/35 backdrop-blur-xl sm:px-8 sm:py-7"
        >
          {/* Inner Glow */}
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-rose-300/30 blur-3xl" />

          <div className="relative grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Gift */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/60 px-4 py-2 text-xs font-bold text-rose-600 shadow-md backdrop-blur-md"
              >
                <LockKeyhole className="h-4 w-4" />
                Secret Love Box
                <Sparkles className="h-4 w-4 text-pink-500" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -16 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, delay: 0.15 }}
                whileHover={{ scale: 1.04 }}
                className="relative mx-auto mt-6 h-48 w-48 sm:h-56 sm:w-56"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300/80"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.45, 0.85, 0.45],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                  }}
                  className="absolute inset-8 rounded-full bg-rose-400/40 blur-3xl"
                />

                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4,
                  }}
                  className="absolute inset-10 flex items-center justify-center rounded-[2rem] border border-white/70 bg-white/60 shadow-2xl backdrop-blur-md"
                >
                  <Gift className="h-20 w-20 text-rose-500" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 9,
                      ease: "linear",
                    }}
                    className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 shadow-lg"
                  >
                    <Heart className="h-5 w-5 fill-white text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setOpen(true)}
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-base font-bold text-white shadow-lg shadow-rose-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/50"
              >
                <Mail className="h-5 w-5" />
                Open Secret Message
                <span className="text-xl">💝</span>
              </motion.button>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-4xl font-display font-extrabold leading-tight sm:text-6xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  A Secret Surprise
                </span>
                <br />
                <span className="text-rose-700">Only For You 💌</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mx-auto mt-4 max-w-xl text-sm font-body leading-relaxed text-rose-700/75 sm:text-base lg:mx-0"
              >
                Behind this little secret box is a message written straight from
                my heart, waiting only for you to open.
              </motion.p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: "💌", title: "Hidden Note" },
                  { icon: "❤️", title: "Pure Love" },
                  { icon: "✨", title: "Forever Wish" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 + index * 0.12 }}
                    className="rounded-2xl border border-white/70 bg-white/50 px-4 py-4 shadow-md backdrop-blur-md"
                  >
                    <p className="text-2xl">{item.icon}</p>
                    <p className="mt-2 text-sm font-bold text-rose-700">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-6 rounded-3xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-4 text-white shadow-xl shadow-rose-400/35"
              >
                <div className="flex items-center justify-center gap-2 font-bold lg:justify-start">
                  <Heart className="h-5 w-5 fill-white" />
                  Tiny hint
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  This is not just a message. It is a little piece of my heart,
                  wrapped like a gift for you.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 bg-white pointer-events-none"
              />

              <motion.div
                initial={{ scale: 0.72, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.72, opacity: 0, y: 40 }}
                transition={{ type: "spring", stiffness: 140 }}
                className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/95 via-rose-50/95 to-pink-100/95 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-300/50 blur-3xl" />

                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition-colors hover:bg-rose-200"
                >
                  <X className="h-4 w-4" />
                </button>

                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500 shadow-lg shadow-rose-400/40"
                >
                  <Mail className="h-8 w-8 text-white" />
                </motion.div>

                <h2 className="relative z-10 mt-5 text-3xl font-display font-extrabold text-rose-700">
                  My Love Letter
                </h2>

                <div className="relative z-10 mt-5 rounded-3xl border border-rose-100 bg-white/65 px-5 py-5 shadow-inner">
                  <p className="min-h-[130px] text-sm font-body leading-relaxed text-rose-900/80 sm:text-base">
                    {typedText}
                    <span className="animate-pulse text-rose-500">|</span>
                  </p>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8 }}
                  className="relative z-10 mt-5 text-lg font-display italic text-rose-600"
                >
                  — With all my love ❤️
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default SecretSurprise;