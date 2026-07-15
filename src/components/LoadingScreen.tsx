import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const floatingItems = [
  {
    icon: "❤️",
    top: "10%",
    left: "7%",
    className: "hidden sm:block",
  },
  {
    icon: "✨",
    top: "18%",
    right: "8%",
    className: "block",
  },
  {
    icon: "💖",
    top: "47%",
    left: "5%",
    className: "hidden md:block",
  },
  {
    icon: "🎂",
    top: "65%",
    right: "7%",
    className: "hidden sm:block",
  },
  {
    icon: "💕",
    bottom: "10%",
    left: "12%",
    className: "block",
  },
  {
    icon: "🌸",
    bottom: "16%",
    right: "18%",
    className: "hidden md:block",
  },
];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2600);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(completeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="
            fixed
            inset-0
            z-[200]
            flex
            min-h-dvh
            w-full
            items-center
            justify-center
            overflow-y-auto
            overflow-x-hidden
            bg-gradient-to-br
            from-rose-50
            via-pink-100
            to-red-100
            px-3
            py-4
            sm:px-5
            sm:py-6
          "
        >
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.22),transparent_42%)]" />

          {/* Background glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-rose-400/25 blur-3xl sm:h-96 sm:w-96" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-200/25 blur-3xl sm:h-64 sm:w-64" />

          {/* Floating decorations */}
          {floatingItems.map((item, index) => (
            <motion.span
              key={`${item.icon}-${index}`}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: [-5, -18, -5],
                opacity: [0.2, 0.8, 0.2],
                rotate: [-8, 8, -8],
                scale: [0.9, 1.08, 0.9],
              }}
              transition={{
                duration: 3.1 + index * 0.35,
                repeat: Infinity,
                delay: index * 0.22,
                ease: "easeInOut",
              }}
              className={`pointer-events-none absolute z-[1] text-xl sm:text-2xl lg:text-3xl ${item.className}`}
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
            >
              {item.icon}
            </motion.span>
          ))}

          {/* Loading card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
              scale: 0.95,
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
              z-10
              my-auto
              w-full
              max-w-[360px]
              overflow-hidden
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/60
              px-5
              py-6
              text-center
              shadow-2xl
              shadow-rose-300/35
              backdrop-blur-xl
              sm:max-w-md
              sm:rounded-[2rem]
              sm:px-7
              sm:py-8
            "
          >
            {/* Card glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-rose-300/30 blur-3xl" />

            {/* Main icon section */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[125px] items-center justify-center sm:max-w-[150px]">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-0 rounded-full border-2 border-dashed border-rose-300/90"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="pointer-events-none absolute inset-[10%] rounded-full border border-pink-300/70"
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  y: [-3, 3, -3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.7,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  flex
                  aspect-square
                  w-[66%]
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-rose-500
                  to-pink-500
                  shadow-xl
                  shadow-rose-400/40
                "
              >
                <Heart className="h-9 w-9 fill-white text-white sm:h-11 sm:w-11" />

                <motion.span
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-md
                    sm:h-9
                    sm:w-9
                  "
                >
                  <Gift className="h-4 w-4 text-rose-500 sm:h-5 sm:w-5" />
                </motion.span>
              </motion.div>
            </div>

            {/* Text section */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              className="relative z-10 mt-5 sm:mt-6"
            >
              <div
                className="
                  inline-flex
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-rose-200/70
                  bg-white/70
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  text-rose-600
                  shadow-sm
                  sm:px-4
                  sm:text-xs
                "
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-pink-500 sm:h-4 sm:w-4" />

                <span className="truncate">
                  Preparing your birthday surprise
                </span>

                <Sparkles className="h-3.5 w-3.5 shrink-0 text-pink-500 sm:h-4 sm:w-4" />
              </div>

              <h1
                className="
                  mt-4
                  font-display
                  text-[clamp(1.8rem,8vw,2.5rem)]
                  font-extrabold
                  leading-none
                  text-rose-700
                "
              >
                Loading Love...
              </h1>

              <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-rose-700/75 sm:text-sm sm:leading-6">
                A little birthday magic is getting ready just for you.
              </p>
            </motion.div>

            {/* Loading progress */}
            <div className="relative z-10 mt-5 sm:mt-6">
              <div className="mx-auto h-2 w-full max-w-[230px] overflow-hidden rounded-full bg-white/80 shadow-inner">
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 2.6,
                    ease: "easeInOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-500"
                />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: index * 0.18,
                      ease: "easeInOut",
                    }}
                    className="h-2.5 w-2.5 rounded-full bg-rose-500"
                  />
                ))}
              </div>
            </div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="relative z-10 mt-4 text-[10px] font-semibold tracking-wide text-rose-500/80 sm:text-xs"
            >
              Creating something special ❤️
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;