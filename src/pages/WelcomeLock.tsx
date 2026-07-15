import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Delete, Heart, LockKeyhole, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const SECRET_PIN = "07112018";

const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const floatingItems = [
  {
    icon: "❤️",
    top: "10%",
    left: "7%",
    className: "hidden sm:block",
  },
  {
    icon: "💖",
    top: "25%",
    left: "18%",
    className: "hidden lg:block",
  },
  {
    icon: "💕",
    top: "65%",
    left: "8%",
    className: "hidden md:block",
  },
  {
    icon: "✨",
    top: "14%",
    right: "10%",
    className: "hidden sm:block",
  },
  {
    icon: "🌸",
    top: "72%",
    right: "8%",
    className: "hidden lg:block",
  },
  {
    icon: "🎂",
    top: "40%",
    right: "18%",
    className: "hidden xl:block",
  },
];

const WelcomeLock = () => {
  const navigate = useNavigate();

  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);

  const handleNumberClick = (number: string) => {
    if (pin.length >= SECRET_PIN.length || isSuccess) return;

    setPin((previousPin) => previousPin + number);
    setError("");
  };

  const handleDelete = () => {
    if (isSuccess) return;

    setPin((previousPin) => previousPin.slice(0, -1));
    setError("");
  };

  const handleUnlock = () => {
    if (isSuccess) return;

    if (pin === SECRET_PIN) {
      setError("");
      setIsSuccess(true);

      sessionStorage.setItem("birthdayUnlocked", "true");

      window.setTimeout(() => {
        navigate("/home");
      }, 1200);

      return;
    }

    setError("Oops! That is not our special date 💌");
    setShakeCard(true);

    window.setTimeout(() => {
      setShakeCard(false);
      setPin("");
    }, 500);
  };

  return (
    <PageWrapper className="relative min-h-dvh w-full overflow-x-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-44 w-44 -translate-x-1/2 rounded-full bg-red-200/30 blur-3xl sm:h-60 sm:w-60" />

      {/* Floating decorative items */}
      {floatingItems.map((item, index) => (
        <motion.span
          key={`${item.icon}-${index}`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [-5, -20, -5],
            rotate: [-6, 7, -6],
            opacity: [0.25, 0.85, 0.25],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 3.2 + index * 0.4,
            delay: index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
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

      {/* Main area */}
      <main className="relative z-10 flex min-h-dvh w-full items-center justify-center overflow-x-hidden px-3 py-5 sm:px-5 sm:py-7">
        <motion.section
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          animate={
            shakeCard
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: [-10, 10, -8, 8, -4, 4, 0],
                }
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: 0,
                }
          }
          transition={{
            duration: shakeCard ? 0.45 : 0.65,
            ease: "easeOut",
          }}
          className="
            relative
            w-full
            max-w-[380px]
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
            sm:max-w-[430px]
            sm:rounded-[2rem]
            sm:px-7
            sm:py-7
          "
        >
          {/* Card glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink-300/25 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-rose-300/25 blur-2xl" />

          <div className="relative z-10">
            {/* Lock icon */}
            

            {/* Label */}
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
                delay: 0.25,
              }}
              className="mt-4 flex items-center justify-center gap-2 text-rose-500"
            >
              <Sparkles className="h-4 w-4 shrink-0" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] sm:text-xs">
                Secret Birthday PIN
              </p>

              <Sparkles className="h-4 w-4 shrink-0" />
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
                delay: 0.35,
              }}
              className="
                mx-auto
                mt-3
                max-w-[340px]
                font-display
                text-[clamp(1.6rem,7vw,2.5rem)]
                font-extrabold
                leading-[1.12]
                text-rose-700
              "
            >
              Only My Birthday Boy Can Enter ❤️
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
                delay: 0.48,
              }}
              className="
                mx-auto
                mt-3
                max-w-[330px]
                text-xs
                leading-5
                text-rose-700/75
                sm:text-sm
                sm:leading-6
              "
            >
              Enter our special date to unlock your birthday surprise.
            </motion.p>

            {/* PIN dots */}
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
                delay: 0.55,
              }}
              className="mt-5 flex items-center justify-center gap-2 sm:gap-3"
            >
              {Array.from({ length: SECRET_PIN.length }).map((_, index) => {
                const isFilled = pin.length > index;

                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: isFilled ? 1.2 : 1,
                    }}
                    className={`
                      h-3
                      w-3
                      shrink-0
                      rounded-full
                      border
                      border-rose-400
                      transition-all
                      duration-200
                      sm:h-3.5
                      sm:w-3.5
                      ${
                        isFilled
                          ? "bg-rose-500 shadow-md shadow-rose-400/40"
                          : "bg-white/70"
                      }
                    `}
                  />
                );
              })}
            </motion.div>

            {/* Message area */}
            <div className="mt-2 min-h-[24px]">
              {error && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="text-xs font-semibold text-red-500 sm:text-sm"
                >
                  {error}
                </motion.p>
              )}

              {isSuccess && (
                <motion.p
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="text-xs font-bold text-rose-600 sm:text-sm"
                >
                  Welcome, my love. Your surprise is opening ❤️
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
                delay: 0.65,
              }}
              className="mt-2 grid grid-cols-3 gap-2.5 sm:gap-3"
            >
              {keypadNumbers.map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => handleNumberClick(number)}
                  disabled={isSuccess}
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
                    disabled:cursor-default
                    disabled:opacity-60
                    sm:h-14
                    sm:text-lg
                  "
                >
                  {number}
                </button>
              ))}

              {/* Delete */}
              <button
                type="button"
                onClick={handleDelete}
                disabled={isSuccess}
                aria-label="Delete the last entered number"
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
                  disabled:cursor-default
                  disabled:opacity-60
                  sm:h-14
                "
              >
                <Delete className="h-5 w-5" />
              </button>

              {/* Zero */}
              <button
                type="button"
                onClick={() => handleNumberClick("0")}
                disabled={isSuccess}
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
                  disabled:cursor-default
                  disabled:opacity-60
                  sm:h-14
                  sm:text-lg
                "
              >
                0
              </button>

              {/* Unlock */}
              <button
                type="button"
                onClick={handleUnlock}
                disabled={isSuccess}
                aria-label="Unlock the birthday surprise"
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
                  disabled:cursor-default
                  disabled:opacity-70
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
                delay: 0.8,
              }}
              className="mt-4 text-[11px] font-medium text-rose-500/80 sm:text-xs"
            >
              Hint: A date our hearts will always remember ✨
            </motion.p>
          </div>
        </motion.section>
      </main>
    </PageWrapper>
  );
};

export default WelcomeLock;