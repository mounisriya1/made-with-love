import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Gift,
  Heart,
  LockKeyhole,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const message =
  "Thank you for being part of my life. I am grateful for every moment with you. You are my happiness, my strength, my safe place, and my forever. No matter how many days pass, my heart will always choose you.";

const featureItems = [
  {
    icon: "💌",
    title: "Hidden Note",
  },
  {
    icon: "❤️",
    title: "Pure Love",
  },
  {
    icon: "✨",
    title: "Forever Wish",
  },
];

const SecretSurprise = () => {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const floatingItems = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        left: `${5 + Math.random() * 90}%`,
        delay: index * 0.4,
        duration: 8 + Math.random() * 4,
        size: 12 + Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    if (!open) {
      setTypedText("");
      return;
    }

    let index = 0;

    const interval = window.setInterval(() => {
      setTypedText(message.slice(0, index));
      index += 1;

      if (index > message.length) {
        window.clearInterval(interval);
      }
    }, 30);

    return () => {
      window.clearInterval(interval);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflowY = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <PageWrapper className="bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.2),transparent_42%)]" />

      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-rose-400/25 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-red-300/20 blur-3xl sm:h-80 sm:w-80" />

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingItems.map((item) => (
          <motion.span
            key={item.id}
            initial={{
              y: "100vh",
              opacity: 0,
            }}
            animate={{
              y: "-15vh",
              opacity: [0, 0.65, 0],
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

      {/* Page content */}
      <main className="relative z-10 w-full min-w-0 px-3 pb-12 pt-24 sm:px-5 sm:pb-16 sm:pt-28 lg:px-8">
        <motion.section
          initial={{
            opacity: 0,
            y: 22,
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
            mx-auto
            w-full
            max-w-5xl
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/75
            bg-white/50
            shadow-2xl
            shadow-rose-300/30
            backdrop-blur-xl
            sm:rounded-[2rem]
          "
        >
          {/* Inner glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-rose-300/30 blur-3xl" />

          <div
            className="
              relative
              grid
              grid-cols-1
              items-center
              gap-8
              px-4
              py-7
              sm:px-7
              sm:py-8
              lg:grid-cols-[minmax(260px,0.88fr)_minmax(0,1.12fr)]
              lg:gap-8
              lg:px-9
              lg:py-8
              xl:px-11
            "
          >
            {/* Gift section */}
            <div className="min-w-0 text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
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
                  border-rose-200/70
                  bg-white/70
                  px-3
                  py-2
                  text-[11px]
                  font-bold
                  text-rose-600
                  shadow-md
                  backdrop-blur-md
                  sm:px-4
                  sm:text-sm
                "
              >
                <LockKeyhole className="h-4 w-4 shrink-0" />

                <span className="truncate">Secret Love Box</span>

                <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
              </motion.div>

              {/* Gift orbit */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -16,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  delay: 0.15,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  relative
                  mx-auto
                  mt-5
                  aspect-square
                  w-full
                  max-w-[180px]
                  sm:max-w-[220px]
                  lg:max-w-[235px]
                "
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute inset-0 rounded-full border-2 border-dashed border-rose-300/80"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                  }}
                  className="pointer-events-none absolute inset-[17%] rounded-full bg-rose-400/40 blur-3xl"
                />

                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4,
                  }}
                  className="
                    absolute
                    inset-[19%]
                    flex
                    items-center
                    justify-center
                    rounded-[1.7rem]
                    border
                    border-white/70
                    bg-white/65
                    shadow-2xl
                    backdrop-blur-md
                  "
                >
                  <Gift className="h-14 w-14 text-rose-500 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 9,
                      ease: "linear",
                    }}
                    className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 shadow-lg sm:h-10 sm:w-10"
                  >
                    <Heart className="h-4 w-4 fill-white text-white sm:h-5 sm:w-5" />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.button
                type="button"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setOpen(true)}
                className="
                  mt-5
                  inline-flex
                  w-full
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
                  hover:shadow-xl
                  sm:w-auto
                  sm:px-7
                  sm:text-base
                "
              >
                <Mail className="h-5 w-5 shrink-0" />

                <span>Open Secret Message</span>

                <span className="text-lg sm:text-xl">💝</span>
              </motion.button>
            </div>

            {/* Right section */}
            <div className="min-w-0 text-center lg:text-left">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="
                  font-display
                  text-[clamp(2rem,4.6vw,3.9rem)]
                  font-extrabold
                  leading-[1.05]
                "
              >
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  A Secret Surprise
                </span>

                <span className="mt-1 block text-rose-700">
                  Only For You 💌
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-rose-700/75
                  sm:text-base
                  sm:leading-7
                  lg:mx-0
                "
              >
                Behind this little secret box is a message written straight
                from my heart, waiting only for you to open.
              </motion.p>

              {/* Feature cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {featureItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.78 + index * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      min-w-0
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/55
                      px-3
                      py-3
                      text-center
                      shadow-md
                      backdrop-blur-md
                    "
                  >
                    <p className="text-xl sm:text-2xl">{item.icon}</p>

                    <p className="mt-1 truncate text-xs font-bold text-rose-700 sm:text-sm">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Hint */}
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
        </motion.section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              w-full
              items-center
              justify-center
              overflow-y-auto
              overflow-x-hidden
              bg-black/55
              px-3
              py-5
              backdrop-blur-md
              sm:px-5
            "
          >
            <motion.div
              initial={{
                scale: 0.76,
                opacity: 0,
                y: 35,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.76,
                opacity: 0,
                y: 35,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                my-auto
                w-full
                max-w-xl
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/70
                bg-gradient-to-br
                from-white/95
                via-rose-50/95
                to-pink-100/95
                p-5
                text-center
                shadow-2xl
                backdrop-blur-xl
                sm:rounded-[2rem]
                sm:p-8
              "
            >
              <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-300/50 blur-3xl" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close secret message"
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-rose-100
                  text-rose-600
                  transition-colors
                  hover:bg-rose-200
                  sm:right-4
                  sm:top-4
                "
              >
                <X className="h-4 w-4" />
              </button>

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -15,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  delay: 0.1,
                }}
                className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500 shadow-lg shadow-rose-400/40 sm:h-16 sm:w-16"
              >
                <Mail className="h-7 w-7 text-white sm:h-8 sm:w-8" />
              </motion.div>

              <h2 className="relative z-10 mt-4 font-display text-2xl font-extrabold text-rose-700 sm:mt-5 sm:text-3xl">
                My Love Letter
              </h2>

              <div className="relative z-10 mt-4 rounded-2xl border border-rose-100 bg-white/70 px-4 py-5 shadow-inner sm:mt-5 sm:rounded-3xl sm:px-5">
                <p className="min-h-[150px] text-sm leading-6 text-rose-900/80 sm:min-h-[130px] sm:text-base sm:leading-7">
                  {typedText}

                  <span className="animate-pulse text-rose-500">|</span>
                </p>
              </div>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 2.8,
                }}
                className="relative z-10 mt-4 font-display text-base italic text-rose-600 sm:mt-5 sm:text-lg"
              >
                — With all my love ❤️
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default SecretSurprise;