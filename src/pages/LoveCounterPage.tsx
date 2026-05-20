import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  CalendarHeart,
  Infinity as InfinityIcon,
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
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: i * 0.35,
        duration: 8 + Math.random() * 5,
        size: 14 + Math.random() * 12,
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
    { label: "Years", value: diff.years },
    { label: "Months", value: diff.months },
    { label: "Days", value: diff.days },
    { label: "Hours", value: diff.hours },
  ];

  return (
    <PageWrapper className="relative h-[calc(100vh-3.5rem)] overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-28 w-80 h-80 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-rose-400/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-red-300/25 blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ y: 520, opacity: 0 }}
            animate={{
              y: -100,
              opacity: [0, 0.7, 0],
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

      <div className="container mx-auto px-4 relative z-10 flex h-full items-center justify-center text-center">
        <div className="w-full max-w-5xl">
          {/* Main Heart Circle */}
          <motion.div
            initial={{ scale: 0, rotate: -25 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.15 }}
            className="relative mx-auto mb-3 h-20 w-20 sm:h-24 sm:w-24"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300"
            />

            <div className="absolute inset-3 rounded-full bg-white/70 shadow-xl backdrop-blur-md border border-white/70 flex items-center justify-center">
              <Heart className="h-9 w-9 sm:h-10 sm:w-10 fill-rose-500 text-rose-500 animate-pulse" />
            </div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute -right-2 top-1 rounded-full bg-rose-500 p-2 shadow-lg"
            >
              <InfinityIcon className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {diff.years} Years Together
            </span>
            <br />
            <span className="text-rose-700">And Forever To Go ❤️</span>
          </motion.h1>

          {/* Date Pill */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-700 shadow-md backdrop-blur-md border border-white/70"
          >
            <CalendarHeart className="h-4 w-4 text-rose-500" />
            Together Since 7 November 2018
          </motion.div>

          {/* Counter Blocks */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {blocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 35, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.75 + index * 0.12, type: "spring" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/45 px-3 py-4 sm:py-5 shadow-xl backdrop-blur-md"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-rose-300/30 blur-2xl" />

                <motion.div
                  key={block.value}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative text-3xl sm:text-5xl font-display font-extrabold text-rose-600 drop-shadow-sm"
                >
                  {block.value}
                </motion.div>

                <div className="relative mt-1 text-xs sm:text-sm font-body font-semibold text-rose-700/75">
                  {block.label}
                </div>

                <div className="relative mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35 }}
            className="mx-auto mt-5 max-w-2xl text-sm sm:text-base font-body text-rose-700/80 leading-relaxed"
          >
            From 7 November 2018 to this moment, every second with you became a
            memory my heart wants to keep forever.
          </motion.p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LoveCounterPage;