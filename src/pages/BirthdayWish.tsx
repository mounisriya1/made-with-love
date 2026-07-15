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
  ArrowRight,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: `${4 + Math.random() * 92}%`,
        delay: index * 0.4,
        duration: 7 + Math.random() * 4,
        size: 12 + Math.random() * 12,
      })),
    []
  );

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      setTypedText(birthdayMessage.slice(0, index));
      index += 1;

      if (index > birthdayMessage.length) {
        window.clearInterval(interval);
      }
    }, 28);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
  };

  const handleOpenLetter = (index: number) => {
    if (!candlesBlown || openedLetters.includes(index)) return;

    const updatedLetters = [...openedLetters, index];
    setOpenedLetters(updatedLetters);

    if (updatedLetters.length === surpriseLetters.length) {
      window.setTimeout(() => {
        setShowFinal(true);
      }, 700);
    }
  };

  return (
    <PageWrapper
      className="
        relative
        min-h-dvh
        w-full
        overflow-x-hidden
        bg-gradient-to-br
        from-rose-50
        via-pink-100
        to-red-100
        pt-20
      "
    >
      {showFinal && <ConfettiEffect />}

      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-rose-400/25 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-red-300/25 blur-3xl sm:h-72 sm:w-72" />

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{
              y: "100vh",
              opacity: 0,
            }}
            animate={{
              y: "-15vh",
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

      {/* Main content */}
      <main
        className="
          relative
          z-10
          flex
          min-h-[calc(100dvh-5rem)]
          w-full
          items-center
          justify-center
          px-3
          py-6
          sm:px-5
          sm:py-8
          lg:px-8
        "
      >
        <motion.section
          initial={{
            opacity: 0,
            y: 26,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-6xl
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/80
            bg-white/60
            shadow-2xl
            shadow-rose-300/35
            backdrop-blur-xl
            sm:rounded-[2rem]
          "
        >
          {/* Card glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-pink-300/35 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-rose-300/35 blur-3xl" />

          <div
            className="
              relative
              grid
              grid-cols-1
              items-center
              gap-8
              px-4
              py-6
              sm:px-7
              sm:py-8
              lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]
              lg:gap-8
              lg:px-9
              lg:py-9
              xl:px-12
            "
          >
            {/* Left cake section */}
            <div className="order-1 min-w-0 text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  inline-flex
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-rose-200
                  bg-white/75
                  px-3
                  py-2
                  text-[11px]
                  font-bold
                  text-rose-600
                  shadow-md
                  sm:px-4
                  sm:text-sm
                "
              >
                <Crown className="h-4 w-4 shrink-0 text-rose-500" />

                <span className="truncate">Birthday Universe</span>

                <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
              </motion.div>

              {/* Cake universe */}
              <motion.div
                initial={{
                  scale: 0.75,
                  rotate: -8,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.25,
                  type: "spring",
                  stiffness: 120,
                }}
                className="
                  relative
                  mx-auto
                  mt-5
                  flex
                  aspect-square
                  w-full
                  max-w-[180px]
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-tr
                  from-rose-300
                  via-pink-200
                  to-red-300
                  shadow-2xl
                  sm:max-w-[230px]
                  lg:max-w-[250px]
                "
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 16,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-[5%]
                    rounded-full
                    border-2
                    border-dashed
                    border-white/80
                  "
                />

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                    flex
                    aspect-square
                    w-[70%]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/75
                    shadow-xl
                    backdrop-blur-md
                  "
                >
                  <Cake className="h-12 w-12 text-rose-500 sm:h-16 sm:w-16" />

                  {!candlesBlown ? (
                    <motion.div
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [1, 0.75, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                      }}
                    >
                      <Flame className="h-6 w-6 fill-orange-400 text-orange-400 sm:h-7 sm:w-7" />
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="text-2xl sm:text-3xl"
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
                    className="pointer-events-none absolute inset-0"
                  >
                    <span
                      className="absolute text-base sm:text-xl"
                      style={{
                        top:
                          index === 0
                            ? "4%"
                            : index === 1
                            ? "50%"
                            : "80%",
                        left:
                          index === 0
                            ? "50%"
                            : index === 1
                            ? "4%"
                            : "72%",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                type="button"
                onClick={handleBlowCandles}
                disabled={candlesBlown}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-5
                  inline-flex
                  w-full
                  max-w-[260px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-rose-500
                  to-pink-500
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-rose-400/40
                  transition-all
                  hover:scale-[1.03]
                  disabled:cursor-default
                  disabled:opacity-80
                  sm:w-auto
                  sm:px-6
                "
              >
                <Sparkles className="h-5 w-5" />

                {candlesBlown ? "Magic Unlocked" : "Blow the Candle"}
              </motion.button>

              <p className="mx-auto mt-3 max-w-sm text-xs font-semibold leading-5 text-rose-600/80 sm:text-sm">
                Blow the candle first, then open the love letters 💌
              </p>
            </div>

            {/* Right content */}
            <div className="order-2 min-w-0 text-center lg:text-left">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="
                  font-display
                  text-[clamp(2rem,4.5vw,4.25rem)]
                  font-extrabold
                  leading-[1.05]
                "
              >
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Happy Birthday
                </span>

                <span className="mt-1 block text-rose-700">
                  My Beautiful Love 🎂
                </span>
              </motion.h1>

              {/* Typing message */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/55
                  px-4
                  py-4
                  shadow-xl
                  backdrop-blur-md
                  sm:px-6
                  sm:py-5
                "
              >
                <p className="min-h-[78px] text-sm leading-6 text-rose-900/80 sm:min-h-[90px] sm:text-base sm:leading-7 lg:text-lg">
                  {typedText}

                  <span className="animate-pulse text-rose-500">|</span>
                </p>
              </motion.div>

              {/* Letter cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {surpriseLetters.map((letter, index) => {
                  const isOpened = openedLetters.includes(index);

                  return (
                    <motion.button
                      key={letter.title}
                      type="button"
                      onClick={() => handleOpenLetter(index)}
                      disabled={!candlesBlown}
                      whileHover={candlesBlown ? { y: -4 } : {}}
                      whileTap={candlesBlown ? { scale: 0.97 } : {}}
                      className={`
                        relative
                        min-h-[125px]
                        min-w-0
                        overflow-hidden
                        rounded-2xl
                        border
                        p-4
                        text-center
                        shadow-lg
                        transition-all
                        sm:min-h-[150px]
                        ${
                          isOpened
                            ? "border-white/60 bg-gradient-to-br from-rose-500 to-pink-500 text-white"
                            : candlesBlown
                            ? "border-rose-100 bg-white/75 text-rose-700 hover:bg-rose-50"
                            : "border-white/50 bg-white/40 text-rose-400 opacity-70"
                        }
                      `}
                    >
                      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/20 blur-xl" />

                      {!isOpened ? (
                        <div className="flex h-full flex-col items-center justify-center">
                          <Mail className="mb-2 h-7 w-7" />

                          <p className="text-sm font-bold">
                            {candlesBlown ? "Open Letter" : "Locked"}
                          </p>

                          <p className="mt-1 text-xs opacity-80">
                            {letter.title}
                          </p>
                        </div>
                      ) : (
                        <motion.div
                          initial={{
                            opacity: 0,
                            rotateY: 90,
                          }}
                          animate={{
                            opacity: 1,
                            rotateY: 0,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                        >
                          <p className="text-2xl">{letter.icon}</p>

                          <h3 className="mt-1 text-sm font-bold">
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

              {/* Final reveal */}
              <AnimatePresence>
                {showFinal && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 18,
                      scale: 0.94,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="
                      mt-5
                      rounded-3xl
                      bg-gradient-to-r
                      from-rose-500
                      via-pink-500
                      to-red-500
                      px-4
                      py-4
                      text-white
                      shadow-xl
                      shadow-rose-400/40
                      sm:px-5
                    "
                  >
                    <div className="flex items-center justify-center gap-2 lg:justify-start">
                      <Gift className="h-5 w-5" />

                      <p className="font-bold">
                        Final Surprise Unlocked
                      </p>

                      <Star className="h-5 w-5 fill-white" />
                    </div>

                    <p className="mt-2 text-sm leading-relaxed sm:text-base">
                      No matter where life takes us, you will always have a
                      special place in my heart. Today, tomorrow, and always —
                      you are my favorite birthday boy ❤️
                    </p>

                    <motion.div
                      animate={{
                        scale: [1, 1.06, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                      className="
                        mt-3
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white/20
                        px-4
                        py-2
                        text-sm
                        font-bold
                      "
                    >
                      <Heart className="h-4 w-4 fill-white" />
                      I love you endlessly
                    </motion.div>

                    
                  </motion.div>
                )}
              </AnimatePresence>

              {!showFinal && (
                <p className="mt-4 text-sm italic text-rose-700 sm:text-base">
                  Open all three letters to reveal the final surprise ❤️
                </p>
              )}
            </div>
          </div>
        </motion.section>
      </main>
    </PageWrapper>
  );
};

export default BirthdayWish;