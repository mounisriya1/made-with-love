import { Link } from "react-router-dom";
import {
  ArrowRight,
  Crown,
  Gift,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const floatingItems = [
  {
    icon: "❤️",
    top: "12%",
    left: "4%",
    className: "hidden sm:block",
  },
  {
    icon: "💖",
    top: "30%",
    left: "9%",
    className: "hidden xl:block",
  },
  {
    icon: "💕",
    bottom: "14%",
    left: "6%",
    className: "hidden lg:block",
  },
  {
    icon: "✨",
    top: "16%",
    right: "7%",
    className: "hidden sm:block",
  },
  {
    icon: "🌸",
    bottom: "12%",
    right: "7%",
    className: "hidden xl:block",
  },
  {
    icon: "🎂",
    top: "13%",
    right: "24%",
    className: "hidden lg:block",
  },
];

const featureCards = [
  {
    title: "Love",
    icon: Heart,
    iconClassName: "fill-rose-500 text-rose-500",
  },
  {
    title: "Memories",
    icon: Star,
    iconClassName: "fill-pink-500 text-pink-500",
  },
  {
    title: "Surprise",
    icon: Gift,
    iconClassName: "text-red-500",
  },
];

const Landing = () => {
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
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-rose-400/25 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-red-200/30 blur-3xl sm:h-64 sm:w-64" />

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
            rotate: [-6, 8, -6],
            opacity: [0.25, 0.85, 0.25],
            scale: [0.92, 1.08, 0.92],
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
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </motion.span>
      ))}

      {/* Main page area */}
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
            y: 28,
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
            max-w-[1400px]
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/80
            bg-white/60
            shadow-2xl
            shadow-rose-300/30
            backdrop-blur-xl
            sm:rounded-[2rem]
          "
        >
          {/* Card decorations */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-300/25 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-rose-300/25 blur-2xl" />

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
              sm:py-9
              lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]
              lg:gap-10
              lg:px-12
              lg:py-10
              xl:px-16
              xl:py-12
            "
          >
            {/* Left content */}
            <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
              {/* Badge */}
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
                className="
                  inline-flex
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-rose-200
                  bg-white/80
                  px-3
                  py-2
                  text-[10px]
                  font-extrabold
                  text-rose-600
                  shadow-md
                  sm:px-4
                  sm:text-sm
                "
              >
                <Crown className="h-4 w-4 shrink-0 text-rose-500" />

                <span className="truncate">
                  Birthday Mission Unlocked
                </span>

                <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="
                  mt-4
                  font-display
                  text-[clamp(2.3rem,4.6vw,5.3rem)]
                  font-extrabold
                  leading-[1]
                  tracking-tight
                "
              >
                <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Happy Birthday
                </span>

                <span className="mt-2 block text-rose-700">
                  My Love{" "}
                  <span className="inline-block align-middle text-[0.82em]">
                    ❤️
                  </span>
                </span>
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
                  mt-5
                  max-w-2xl
                  font-body
                  text-sm
                  leading-6
                  text-rose-700/80
                  sm:text-base
                  sm:leading-7
                  lg:mx-0
                  lg:text-lg
                  lg:leading-8
                "
              >
                Today is not just your birthday. It is a whole little world
                made for you with memories, love, smiles, and surprises waiting
                to be opened one by one.
              </motion.p>

              {/* Feature cards */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                }}
                className="
                  mx-auto
                  mt-6
                  grid
                  w-full
                  max-w-md
                  grid-cols-3
                  gap-2
                  sm:gap-3
                  lg:mx-0
                "
              >
                {featureCards.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="
                        min-w-0
                        rounded-xl
                        border
                        border-rose-100
                        bg-white/75
                        px-2
                        py-3
                        text-center
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-white/90
                        sm:rounded-2xl
                        sm:px-3
                        sm:py-4
                      "
                    >
                      <Icon
                        className={`mx-auto h-5 w-5 sm:h-6 sm:w-6 ${feature.iconClassName}`}
                      />

                      <p className="mt-1 truncate text-[10px] font-bold text-rose-600 sm:text-xs">
                        {feature.title}
                      </p>
                    </div>
                  );
                })}
              </motion.div>

              {/* Main button */}
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
                  delay: 0.82,
                }}
                className="mt-6"
              >
                <Link
                  to="/birthday-wish"
                  className="
                    group
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
                    py-3.5
                    font-body
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-rose-400/40
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:shadow-xl
                    hover:shadow-rose-500/45
                    active:translate-y-0
                    active:scale-[0.98]
                    sm:w-auto
                    sm:gap-3
                    sm:px-8
                    sm:py-4
                    sm:text-base
                  "
                >
                  <Gift className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-12" />

                  <span>Start the Birthday Journey</span>

                  <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right image section */}
            <div className="order-1 flex min-w-0 items-center justify-center lg:order-2">
              <div
                className="
                  relative
                  flex
                  aspect-square
                  w-full
                  max-w-[250px]
                  items-center
                  justify-center
                  sm:max-w-[330px]
                  lg:max-w-[420px]
                  xl:max-w-[460px]
                "
              >
                {/* Outer ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-[3%]
                    rounded-full
                    border
                    border-rose-300/50
                  "
                />

                {/* Dashed ring */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-[11%]
                    rounded-full
                    border-2
                    border-dashed
                    border-rose-300/90
                  "
                />

                {/* Photo */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: -5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    type: "spring",
                    stiffness: 110,
                    damping: 14,
                  }}
                  className="
                    relative
                    z-10
                    aspect-square
                    w-[62%]
                    rounded-full
                  "
                >
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-rose-400 via-pink-300 to-red-400 opacity-60 blur-xl" />

                  <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-rose-400 via-pink-300 to-red-400 p-1.5 shadow-2xl sm:p-2">
                    <div className="h-full w-full overflow-hidden rounded-full border-4 border-white bg-rose-100 sm:border-[6px]">
                      <img
                        src="/images/Couple1.jpg"
                        alt="Our special birthday memory"
                        loading="eager"
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          hover:scale-110
                        "
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Favorite person note */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [-4, -10, -4],
                  }}
                  transition={{
                    opacity: {
                      delay: 0.8,
                    },
                    scale: {
                      delay: 0.8,
                    },
                    y: {
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="
                    absolute
                    right-[1%]
                    top-[8%]
                    z-20
                    hidden
                    whitespace-nowrap
                    rounded-full
                    border
                    border-rose-100
                    bg-white/90
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-rose-600
                    shadow-lg
                    backdrop-blur-md
                    2xl:block
                  "
                >
                  My favorite person
                </motion.div>

                {/* Mobile decoration */}
                <motion.span
                  animate={{
                    y: [-3, -10, -3],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[4%] top-[12%] text-2xl lg:hidden"
                >
                  💕
                </motion.span>

                <motion.span
                  animate={{
                    y: [-3, -11, -3],
                    rotate: [5, -5, 5],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[10%] right-[5%] text-2xl lg:hidden"
                >
                  ✨
                </motion.span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </PageWrapper>
  );
};

export default Landing;