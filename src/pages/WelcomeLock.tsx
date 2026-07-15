import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Delete, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const SECRET_PIN = "07112018";

const floatingItems = [
  {
    icon: "❤️",
    top: "10%",
    left: "6%",
    className: "hidden sm:block",
  },
  {
    icon: "💖",
    top: "22%",
    left: "18%",
    className: "hidden lg:block",
  },
  {
    icon: "💕",
    top: "36%",
    left: "31%",
    className: "hidden xl:block",
  },
  {
    icon: "✨",
    top: "16%",
    right: "12%",
    className: "hidden md:block",
  },
  {
    icon: "🌸",
    top: "70%",
    left: "12%",
    className: "hidden md:block",
  },
  {
    icon: "🎂",
    top: "72%",
    right: "26%",
    className: "hidden sm:block",
  },
];

const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const WelcomeLock = () => {
  const navigate = useNavigate();

  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleNumberClick = (number: string) => {
    if (pin.length >= SECRET_PIN.length) return;

    setPin((previousPin) => previousPin + number);
    setError("");
  };

  const handleDelete = () => {
    setPin((previousPin) => previousPin.slice(0, -1));
    setError("");
  };

  const handleUnlock = () => {
    if (pin === SECRET_PIN) {
      setError("");
      navigate("/home");
      return;
    }

    setError("Oops! Wrong secret number 💌");
    setPin("");
  };

  return (
    <PageWrapper className="relative h-dvh w-full overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute right-[8%] top-1/3 h-44 w-44 rounded-full bg-red-200/35 blur-3xl sm:h-60 sm:w-60" />

      <div className="pointer-events-none absolute left-[8%] top-[55%] h-40 w-40 rounded-full bg-pink-200/30 blur-3xl" />

      {/* Floating emojis */}
      {floatingItems.map((item, index) => (
        <motion.span
          key={`${item.icon}-${index}`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [-5, -18, -5],
            opacity: [0.25, 0.85, 0.25],
            rotate: [-7, 8, -7],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 3.2 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
          className={`pointer-events-none absolute z-[1] text-xl sm:text-2xl lg:text-3xl ${item.className}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </motion.span>
      ))}

      {/* Scrollable safe area */}
      <main
        className="
          relative
          z-10
          h-full
          w-full
          overflow-y-auto
          overflow-x-hidden
          px-3
          py-4
          sm:px-5
          sm:py-5
          lg:px-8
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            main::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }
          `}
        </style>

        <div className="flex min-h-full w-full items-center justify-center">
          <motion.section
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              max-w-[360px]
              overflow-hidden
              rounded-[1.75rem]
              border
              border-white/80
              bg-white/65
              px-4
              py-5
              text-center
              shadow-2xl
              shadow-rose-300/35
              backdrop-blur-xl
              sm:max-w-[410px]
              sm:rounded-[2rem]
              sm:px-7
              sm:py-6
              lg:max-w-[430px]
            "
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink-300/25 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-rose-300/25 blur-2xl" />

            <div className="relative z-10">
              {/* Top label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="flex items-center justify-center gap-2 text-rose-500"
              >
                <Sparkles className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.2em]">
                  Secret Birthday PIN
                </p>

                <Sparkles className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="
                  mx-auto
                  mt-3
                  max-w-[320px]
                  font-display
                  font-extrabold
                  leading-[1.12]
                  text-rose-700
                  text-[clamp(1.55rem,6vw,2.35rem)]
                "
              >
                Only My Birthday Boy Can Enter{" "}
                <span className="inline-block">❤️</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="
                  mx-auto
                  mt-2
                  max-w-[330px]
                  font-body
                  text-xs
                  leading-5
                  text-rose-700/75
                  sm:mt-3
                  sm:text-sm
                  sm:leading-6
                "
              >
                Tap the secret numbers to unlock your birthday surprise.
              </motion.p>

              {/* PIN indicators */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="mt-4 flex items-center justify-center gap-2 sm:mt-5 sm:gap-3"
              >
                {Array.from({
                  length: SECRET_PIN.length,
                }).map((_, index) => {
                  const isFilled = pin.length > index;

                  return (
                    <motion.div
                      key={index}
                      animate={{
                        scale: isFilled ? 1.15 : 1,
                      }}
                      className={`
                        h-3
                        w-3
                        shrink-0
                        rounded-full
                        border
                        border-rose-400
                        transition-colors
                        duration-200
                        sm:h-3.5
                        sm:w-3.5
                        ${
                          isFilled
                            ? "bg-rose-500 shadow-sm shadow-rose-400/50"
                            : "bg-white/70"
                        }
                      `}
                    />
                  );
                })}
              </motion.div>

              {/* Error */}
              <div className="min-h-[22px]">
                {error && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-2 text-xs font-semibold text-red-500 sm:text-sm"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              {/* Keypad */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="mt-2 grid grid-cols-3 gap-2.5 sm:mt-3 sm:gap-3"
              >
                {keypadNumbers.map((number) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => handleNumberClick(number)}
                    aria-label={`Enter number ${number}`}
                    className="
                      flex
                      h-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-rose-100
                      bg-white/80
                      text-base
                      font-bold
                      text-rose-700
                      shadow-md
                      shadow-rose-200/40
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:scale-[1.03]
                      hover:bg-rose-50
                      active:translate-y-0
                      active:scale-95
                      sm:h-14
                      sm:text-lg
                    "
                  >
                    {number}
                  </button>
                ))}

                {/* Delete button */}
                <button
                  type="button"
                  onClick={handleDelete}
                  aria-label="Delete last entered number"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-rose-100
                    bg-white/65
                    text-rose-600
                    shadow-md
                    shadow-rose-200/40
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:bg-rose-50
                    active:translate-y-0
                    active:scale-95
                    sm:h-14
                  "
                >
                  <Delete className="h-5 w-5" />
                </button>

                {/* Zero button */}
                <button
                  type="button"
                  onClick={() => handleNumberClick("0")}
                  aria-label="Enter number 0"
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-rose-100
                    bg-white/80
                    text-base
                    font-bold
                    text-rose-700
                    shadow-md
                    shadow-rose-200/40
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:bg-rose-50
                    active:translate-y-0
                    active:scale-95
                    sm:h-14
                    sm:text-lg
                  "
                >
                  0
                </button>

                {/* Unlock button */}
                <button
                  type="button"
                  onClick={handleUnlock}
                  aria-label="Unlock birthday surprise"
                  className="
                    group
                    flex
                    h-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-rose-500
                    to-pink-500
                    text-white
                    shadow-lg
                    shadow-rose-400/35
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:shadow-xl
                    hover:shadow-rose-400/45
                    active:translate-y-0
                    active:scale-95
                    sm:h-14
                  "
                >
                  <Heart className="h-5 w-5 fill-white transition-transform duration-200 group-hover:scale-110 sm:h-6 sm:w-6" />
                </button>
              </motion.div>

              {/* Hint */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.75,
                }}
                className="mt-4 text-[11px] font-medium text-rose-500/80 sm:text-xs"
              >
                Hint: Try our special number ✨
              </motion.p>
            </div>
          </motion.section>
        </div>
      </main>
    </PageWrapper>
  );
};

export default WelcomeLock;