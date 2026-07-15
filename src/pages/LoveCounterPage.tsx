import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarHeart,
  Clock,
  Gift,
  Heart,
  Infinity as InfinityIcon,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const START_DATE = new Date(2018, 10, 7, 0, 0, 0);

interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CounterBlock {
  label: string;
  value: number;
  icon: string;
}

interface Milestone {
  icon: LucideIcon;
  title: string;
  value: string;
}

const calculateDifference = (): TimeDifference => {
  const now = new Date();

  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();
  let hours = now.getHours() - START_DATE.getHours();
  let minutes = now.getMinutes() - START_DATE.getMinutes();
  let seconds = now.getSeconds() - START_DATE.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const previousMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();

    days += previousMonthDays;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
};

const LoveCounterPage = () => {
  const [difference, setDifference] = useState<TimeDifference>(
    calculateDifference
  );

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        left: `${5 + Math.random() * 90}%`,
        delay: index * 0.45,
        duration: 8 + Math.random() * 4,
        size: 12 + Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    const updateCounter = () => {
      setDifference(calculateDifference());
    };

    updateCounter();

    const interval = window.setInterval(updateCounter, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const counterBlocks: CounterBlock[] = [
    {
      label: "Years",
      value: difference.years,
      icon: "💗",
    },
    {
      label: "Months",
      value: difference.months,
      icon: "🌙",
    },
    {
      label: "Days",
      value: difference.days,
      icon: "🌸",
    },
    {
      label: "Hours",
      value: difference.hours,
      icon: "✨",
    },
    {
      label: "Minutes",
      value: difference.minutes,
      icon: "💌",
    },
    {
      label: "Seconds",
      value: difference.seconds,
      icon: "❤️",
    },
  ];

  const milestones: Milestone[] = [
    {
      icon: CalendarHeart,
      title: "Started",
      value: "07 Nov 2018",
    },
    {
      icon: Clock,
      title: "Counting",
      value: "Every second",
    },
    {
      icon: InfinityIcon,
      title: "Promise",
      value: "Forever",
    },
  ];

  return (
    <PageWrapper className="bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.2),transparent_42%)]" />

      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-rose-400/25 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-red-300/20 blur-3xl sm:h-80 sm:w-80" />

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
              rotate: [0, 18, -18, 0],
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

      {/* Page content */}
      <main className="relative z-10 w-full min-w-0 px-3 pb-10 pt-24 sm:px-5 sm:pb-12 sm:pt-28 lg:px-8">
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
            duration: 0.6,
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
            border-white/75
            bg-white/50
            shadow-2xl
            shadow-rose-300/30
            backdrop-blur-xl
            sm:rounded-[2rem]
          "
        >
          {/* Inner glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-pink-300/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-rose-300/30 blur-3xl" />

          <div
            className="
              relative
              grid
              grid-cols-1
              items-center
              gap-7
              px-4
              py-6
              sm:px-7
              sm:py-7
              lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)]
              lg:gap-7
              lg:px-8
              lg:py-7
              xl:px-10
            "
          >
            {/* Left section */}
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
                <Gift className="h-4 w-4 shrink-0" />

                <span className="truncate">Love Time Capsule</span>

                <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
              </motion.div>

              {/* Heart orbit */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  delay: 0.2,
                }}
                className="
                  relative
                  mx-auto
                  mt-4
                  aspect-square
                  w-full
                  max-w-[170px]
                  sm:max-w-[210px]
                  lg:max-w-[225px]
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
                  className="pointer-events-none absolute inset-0 rounded-full border-2 border-dashed border-rose-300/80"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 22,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute inset-[10%] rounded-full border border-pink-300/70"
                />

                <div
                  className="
                    absolute
                    inset-[18%]
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/70
                    bg-white/70
                    shadow-2xl
                    backdrop-blur-md
                  "
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                    }}
                  >
                    <Heart className="h-10 w-10 fill-rose-500 text-rose-500 sm:h-12 sm:w-12" />
                  </motion.div>

                  <p className="mt-1 text-xs font-bold text-rose-600 sm:text-sm">
                    Since 2018
                  </p>

                  <p className="text-[9px] text-rose-500/80 sm:text-[11px]">
                    beating for you
                  </p>
                </div>

                <motion.div
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="absolute right-[5%] top-[12%] rounded-full bg-rose-500 p-2 shadow-lg shadow-rose-400/40"
                >
                  <InfinityIcon className="h-4 w-4 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [4, -4, 4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4,
                  }}
                  className="absolute bottom-[10%] left-[5%] rounded-full bg-pink-500 p-2 shadow-lg shadow-pink-400/40"
                >
                  <Star className="h-4 w-4 fill-white text-white" />
                </motion.div>
              </motion.div>

              {/* Date card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  mx-auto
                  mt-4
                  w-full
                  max-w-xs
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/65
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-md
                "
              >
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-rose-600">
                  <CalendarHeart className="h-4 w-4" />

                  Together Since
                </div>

                <p className="mt-1 font-display text-lg font-extrabold text-rose-700 sm:text-xl">
                  7 November 2018
                </p>
              </motion.div>
            </div>

            {/* Right section */}
            <div className="min-w-0 text-center lg:text-left">
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
                  font-display
                  text-[clamp(1.9rem,4vw,3.5rem)]
                  font-extrabold
                  leading-[1.05]
                "
              >
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Every Second With You
                </span>

                <span className="mt-1 block text-rose-700">
                  Matters ❤️
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
                  delay: 0.48,
                }}
                className="
                  mx-auto
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-rose-700/80
                  sm:text-base
                  sm:leading-7
                  lg:mx-0
                "
              >
                From 7 November 2018 to this exact moment, every second has
                become another beautiful part of our story.
              </motion.p>

              {/* Counter cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {counterBlocks.map((block, index) => (
                  <motion.div
                    key={block.label}
                    initial={{
                      opacity: 0,
                      y: 18,
                      scale: 0.92,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.6 + index * 0.08,
                      type: "spring",
                      stiffness: 120,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    className="
                      relative
                      min-w-0
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/65
                      px-3
                      py-3
                      text-center
                      shadow-xl
                      backdrop-blur-md
                      lg:text-left
                    "
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-rose-300/25 blur-2xl" />

                    

                    <motion.div
                      key={block.value}
                      initial={{
                        scale: 0.75,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        relative
                        mt-1
                        truncate
                        font-display
                        text-2xl
                        font-extrabold
                        text-rose-600
                        sm:text-3xl
                      "
                    >
                      {String(block.value).padStart(2, "0")}
                    </motion.div>

                    <p className="relative mt-1 text-xs font-semibold text-rose-700/75">
                      {block.label}
                    </p>

                    <div className="relative mx-auto mt-2 h-1 w-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 lg:mx-0" />
                  </motion.div>
                ))}
              </div>

              {/* Milestones */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {milestones.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 14,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 1 + index * 0.1,
                      }}
                      className="
                        min-w-0
                        rounded-2xl
                        border
                        border-white/70
                        bg-white/50
                        px-3
                        py-2.5
                        text-center
                        shadow-md
                        backdrop-blur-md
                        lg:text-left
                      "
                    >
                      <div className="flex justify-center text-rose-500 lg:justify-start">
                        <Icon className="h-4 w-4" />
                      </div>

                      <p className="mt-1 text-xs font-bold text-rose-700">
                        {item.title}
                      </p>

                      <p className="truncate text-[10px] text-rose-600/75 sm:text-xs">
                        {item.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              
            </div>
          </div>
        </motion.section>
      </main>
    </PageWrapper>
  );
};

export default LoveCounterPage;