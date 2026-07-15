import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Delete,
  Heart,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const SECRET_PIN = "07112018";
const UNLOCK_STORAGE_KEY = "birthdayUnlocked";

const keypadNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

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

interface LocationState {
  from?: string;
}

const WelcomeLock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTimerRef = useRef<number | null>(null);
  const errorTimerRef = useRef<number | null>(null);

  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);

  useEffect(() => {
    const isAlreadyUnlocked =
      sessionStorage.getItem(UNLOCK_STORAGE_KEY) === "true";

    if (isAlreadyUnlocked) {
      const state = location.state as LocationState | null;
      const destination = state?.from || "/home";

      navigate(destination, {
        replace: true,
      });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    return () => {
      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
      }

      if (errorTimerRef.current !== null) {
        window.clearTimeout(errorTimerRef.current);
      }
    };
  }, []);

  const handleNumberClick = (number: string) => {
    if (pin.length >= SECRET_PIN.length || isSuccess) {
      return;
    }

    setPin((previousPin) => previousPin + number);
    setError("");
  };

  const handleDelete = () => {
    if (isSuccess) {
      return;
    }

    setPin((previousPin) => previousPin.slice(0, -1));
    setError("");
  };

  const triggerErrorAnimation = (clearPin = false) => {
    setShakeCard(true);

    if (errorTimerRef.current !== null) {
      window.clearTimeout(errorTimerRef.current);
    }

    errorTimerRef.current = window.setTimeout(() => {
      setShakeCard(false);

      if (clearPin) {
        setPin("");
      }
    }, 500);
  };

  const handleUnlock = () => {
    if (isSuccess) {
      return;
    }

    if (pin.length !== SECRET_PIN.length) {
      setError("Please enter the complete special date 💌");
      triggerErrorAnimation();
      return;
    }

    if (pin === SECRET_PIN) {
      setError("");
      setIsSuccess(true);

      sessionStorage.setItem(UNLOCK_STORAGE_KEY, "true");

      const state = location.state as LocationState | null;
      const destination = state?.from || "/home";

      redirectTimerRef.current = window.setTimeout(() => {
        navigate(destination, {
          replace: true,
        });
      }, 1000);

      return;
    }

    setError("Oops! That is not our special date 💌");
    triggerErrorAnimation(true);
  };

  return (
    <PageWrapper className="bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-44 w-44 -translate-x-1/2 rounded-full bg-red-200/30 blur-3xl sm:h-60 sm:w-60" />

      {/* Floating decorations */}
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

      {/* Main section */}
      <main
        className="
          relative
          z-10
          flex
          min-h-dvh
          w-full
          items-center
          justify-center
          overflow-x-hidden
          px-3
          py-4
          sm:px-5
          sm:py-7
        "
      >
        <motion.section
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          animate={
            shakeCard
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: [-9, 9, -7, 7, -4, 4, 0],
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
            max-w-[370px]
            overflow-hidden
            rounded-[1.5rem]
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
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
              className="
                relative
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-rose-500
                to-pink-500
                shadow-xl
                shadow-rose-400/40
                sm:h-20
                sm:w-20
              "
            >
              <LockKeyhole className="h-7 w-7 text-white sm:h-9 sm:w-9" />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-[-8px] rounded-full border-2 border-dashed border-rose-300 sm:inset-[-10px]"
              />
            </motion.div>

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
                delay: 0.2,
              }}
              className="mt-4 flex items-center justify-center gap-2 text-rose-500"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.18em]">
                Secret Birthday PIN
              </p>

              <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-3
                max-w-[340px]
                font-display
                text-[clamp(1.55rem,7vw,2.5rem)]
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
                delay: 0.42,
              }}
              className="
                mx-auto
                mt-2.5
                max-w-[330px]
                text-[11px]
                leading-5
                text-rose-700/75
                sm:mt-3
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
                delay: 0.5,
              }}
              className="mt-4 flex items-center justify-center gap-2 sm:mt-5 sm:gap-3"
            >
              {Array.from({
                length: SECRET_PIN.length,
              }).map((_, index) => {
                const isFilled = pin.length > index;

                return (
                  <motion.span
                    key={index}
                    animate={{
                      scale: isFilled ? 1.18 : 1,
                    }}
                    className={`
                      h-2.5
                      w-2.5
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
                          : "bg-white/75"
                      }
                    `}
                  />
                );
              })}
            </motion.div>

            {/* Status message */}
            <div
              aria-live="polite"
              className="mt-2 flex min-h-[24px] items-center justify-center"
            >
              {error && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="text-[11px] font-semibold leading-5 text-red-500 sm:text-sm"
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
                  className="text-[11px] font-bold leading-5 text-rose-600 sm:text-sm"
                >
                  Welcome, my love. Your surprise is opening ❤️
                </motion.p>
              )}
            </div>

            {/* Keypad */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.58,
              }}
              className="mt-1 grid grid-cols-3 gap-2 sm:mt-2 sm:gap-3"
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
                    h-11
                    items-center
                    justify-center
                    rounded-xl
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
                    hover:bg-rose-50
                    active:translate-y-0
                    active:scale-95
                    disabled:cursor-default
                    disabled:opacity-60
                    sm:h-14
                    sm:rounded-2xl
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
                disabled={isSuccess || pin.length === 0}
                aria-label="Delete the last entered number"
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-rose-100
                  bg-white/70
                  text-rose-600
                  shadow-md
                  shadow-rose-200/40
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-rose-50
                  active:translate-y-0
                  active:scale-95
                  disabled:cursor-default
                  disabled:opacity-45
                  sm:h-14
                  sm:rounded-2xl
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
                  h-11
                  items-center
                  justify-center
                  rounded-xl
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
                  hover:bg-rose-50
                  active:translate-y-0
                  active:scale-95
                  disabled:cursor-default
                  disabled:opacity-60
                  sm:h-14
                  sm:rounded-2xl
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
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-rose-500
                  to-pink-500
                  text-white
                  shadow-lg
                  shadow-rose-400/35
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-rose-400/45
                  active:translate-y-0
                  active:scale-95
                  disabled:cursor-default
                  disabled:opacity-70
                  sm:h-14
                  sm:rounded-2xl
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
                delay: 0.72,
              }}
              className="mt-3 text-[10px] font-medium leading-4 text-rose-500/80 sm:mt-4 sm:text-xs"
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