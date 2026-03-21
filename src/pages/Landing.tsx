import { Link } from "react-router-dom";
import { Heart, Gift } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const Landing = () => {
  return (
    <PageWrapper className="gradient-hero">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center">
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <Heart className="w-12 h-12 text-primary fill-primary mb-4 mx-auto animate-pulse-heart" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gradient-love leading-tight"
        >
          Happy Birthday My Love ❤️
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-secondary border-4 border-primary/20 shadow-glow flex items-center justify-center overflow-hidden"
        >
          <img
            src="/images/Couple1.jpg"
            alt="Our Photo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-lg text-muted-foreground font-body max-w-md"
        >
          A little website for the most special person in my life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold shadow-romantic hover:scale-105 transition-transform"
          >
            <Heart className="w-4 h-4" /> Start Our Story ❤️
          </Link>

          <Link
            to="/surprise"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-body font-semibold border border-border hover:bg-rose-light transition-colors"
          >
            <Gift className="w-4 h-4" /> Open Birthday Surprise 🎁
          </Link>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Landing;