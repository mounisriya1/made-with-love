import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  CalendarHeart,
  Infinity as InfinityIcon,
  Sparkles,
  Clock,
  Gift,
  Star,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const START = new Date("2018-11-07T00:00:00");

const LoveCounterPage = () => {
  const [diff, setDiff] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: i * 0.35,
        duration: 8 + Math.random() * 5,
        size: 12 + Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    const calc = () => {
      const now = new Date();

      let years = now.getFullYear() - START.getFullYear();
      let months = now.getMonth() - START.getMonth();
      let days = now.getDate() - START.getDate();
      const hours = now.getHours();

      if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setDiff({ years, months, days, hours });
    };

    calc();
    const interval = setInterval(calc, 60000);

    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Years", value: diff.years, icon: "💗" },
    { label: "Months", value: diff.months, icon: "🌙" },
    { label: "Days", value: diff.days, icon: "🌸" },
    { label: "Hours", value: diff.hours, icon: "✨" },
  ];

  const milestones = [
    {
      icon: <CalendarHeart className="h-4 w-4" />,
      title: "Started",
      value: "07 Nov 2018",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      title: "Counting",
      value: "Every moment",
    },
    {
      icon: <InfinityIcon className="h-4 w-4" />,
      title: "Promise",
      value: "Forever",
    },
  ];

  return (
    <PageWrapper className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-rose-400/30 blur-3xl" />
      <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-red-300/25 blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ y: 520, opacity: 0 }}
            animate={{
              y: -90,
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

      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-16 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-6xl rounded-[2rem] border border-white/70 bg-white/45 backdrop-blur-xl shadow-2xl shadow-rose-300/35 overflow-hidden"
        >
          {/* Decorative Glow inside card */}
          <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-pink-300/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-rose-300/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-4 items-center px-5 py-5 sm:px-7 sm:py-6">
            {/* Left Heart Capsule */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/60 px-4 py-2 text-xs font-bold text-rose-600 shadow-md backdrop-blur-md"
              >
                <Gift className="h-4 w-4" />
                Love Time Capsule
                <Sparkles className="h-4 w-4 text-pink-500" />
              </motion.div>

              {/* Big Heart Orbit */}
              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 160, delay: 0.2 }}
                className="relative mx-auto mt-5 h-44 w-44 sm:h-52 sm:w-52"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 16,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300/80"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 22,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-pink-300/70"
                />

                <div className="absolute inset-8 rounded-full border border-white/70 bg-white/65 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                  >
                    <Heart className="h-12 w-12 fill-rose-500 text-rose-500" />
                  </motion.div>

                  <p className="mt-2 text-xs font-bold text-rose-600">
                    Since 2018
                  </p>
                  <p className="text-[10px] text-rose-500/80">
                    beating for you
                  </p>
                </div>

                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute right-3 top-6 rounded-full bg-rose-500 p-2 shadow-lg shadow-rose-400/40"
                >
                  <InfinityIcon className="h-4 w-4 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ repeat: Infinity, duration: 2.4 }}
                  className="absolute bottom-5 left-3 rounded-full bg-pink-500 p-2 shadow-lg shadow-pink-400/40"
                >
                  <Star className="h-4 w-4 fill-white text-white" />
                </motion.div>
              </motion.div>

              {/* Since Date Ticket */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mx-auto mt-4 max-w-xs rounded-2xl border border-white/70 bg-white/55 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center justify-center gap-2 text-rose-600 font-bold text-sm">
                  <CalendarHeart className="h-4 w-4" />
                  Together Since
                </div>
                <p className="mt-1 text-xl font-display font-extrabold text-rose-700">
                  7 November 2018
                </p>
              </motion.div>
            </div>

            {/* Right Counter Section */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-3xl sm:text-5xl lg:text-5xl font-display font-extrabold leading-tight"
              >
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {diff.years} Years Together
                </span>
                <br />
                <span className="text-rose-700">And Forever To Go ❤️</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-3 max-w-2xl text-sm font-body text-rose-700/80 leading-relaxed mx-auto lg:mx-0"
              >
                From 7 November 2018 to this exact moment, every little second
                became part of our beautiful story.
              </motion.p>

              {/* Counter Blocks */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {blocks.map((block, index) => (
                  <motion.div
                    key={block.label}
                    initial={{ opacity: 0, y: 24, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                    }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 px-3 py-3 shadow-xl backdrop-blur-md"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-rose-300/30 blur-2xl" />

                    <div className="relative text-xl">{block.icon}</div>

                    <motion.div
                      key={block.value}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="relative mt-1 text-3xl sm:text-4xl font-display font-extrabold text-rose-600 drop-shadow-sm"
                    >
                      {block.value}
                    </motion.div>

                    <div className="relative mt-1 text-xs font-body font-semibold text-rose-700/75">
                      {block.label}
                    </div>

                    <div className="relative mx-auto lg:mx-0 mt-2 h-1 w-9 rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />
                  </motion.div>
                ))}
              </div>

              {/* Milestones */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {milestones.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="rounded-2xl border border-white/70 bg-white/45 px-3 py-3 shadow-md backdrop-blur-md"
                  >
                    <div className="flex justify-center lg:justify-start text-rose-500">
                      {item.icon}
                    </div>
                    <p className="mt-1 text-xs font-bold text-rose-700">
                      {item.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-rose-600/75">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35 }}
                className="mt-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-3 text-white shadow-xl shadow-rose-400/35"
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 font-bold text-sm">
                  <Heart className="h-4 w-4 fill-white" />
                  My favorite time is time with you
                </div>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-white/90">
                  This counter is not just numbers. It is every laugh, every
                  memory, every smile, and every moment my heart chose you.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default LoveCounterPage;