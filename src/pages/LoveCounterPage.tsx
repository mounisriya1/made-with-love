import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const START = new Date("2018-11-07T00:00:00");

const LoveCounterPage = () => {
  const [diff, setDiff] = useState({ years: 0, months: 0, days: 0, hours: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      let years = now.getFullYear() - START.getFullYear();
      let months = now.getMonth() - START.getMonth();
      let days = now.getDate() - START.getDate();
      const hours = now.getHours();

      if (days < 0) {
        months--;
        const prev = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prev.getDate();
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
    <PageWrapper className="gradient-hero relative overflow-hidden">

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -900, opacity: 1 }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.4
            }}
            className="absolute text-primary opacity-40 text-lg"
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center relative z-10">

        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-heart" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-3xl sm:text-5xl font-display font-bold text-gradient-love"
        >
          {diff.years} Years Together ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-muted-foreground font-body"
        >
          Together Since 7 November 2018
        </motion.p>

        {/* Counter Blocks */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">

          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              whileHover={{ scale: 1.07 }}
              className="w-28 sm:w-36 py-6 rounded-2xl bg-secondary border border-border shadow-romantic"
            >

              {/* animated number */}
              <motion.div
                key={b.value}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-5xl font-display font-bold text-primary drop-shadow-lg"
              >
                {b.value}
              </motion.div>

              <div className="mt-1 text-sm font-body text-muted-foreground">
                {b.label}
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </PageWrapper>
  );
};

export default LoveCounterPage;
