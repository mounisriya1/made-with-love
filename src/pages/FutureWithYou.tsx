
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const FutureWithYou = () => (
  <PageWrapper className="gradient-hero relative overflow-hidden">

    {/* floating hearts background */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(16)].map((_, i) => (
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

    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center max-w-2xl relative z-10">

      {/* sparkle + heart */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="flex items-center gap-3"
      >
        <Sparkles className="w-8 h-8 text-primary/70 animate-pulse" />

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-heart" />
        </motion.div>

        <Sparkles className="w-8 h-8 text-primary/70 animate-pulse" />
      </motion.div>

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-3xl sm:text-5xl font-display font-bold text-gradient-love"
      >
        Our Future Together
      </motion.h1>

      {/* message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-lg sm:text-xl font-body text-foreground/80 leading-relaxed"
      >
        I can't wait to create more memories with you and celebrate many more
        birthdays together. Every day with you is a gift, and I promise to
        cherish every single one.
      </motion.p>

      {/* forever text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-6 text-2xl font-display font-bold text-primary drop-shadow-lg"
      >
        Forever & Always ❤️
      </motion.p>

      {/* floating hearts row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 flex gap-4"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
          >
            <Heart className="w-6 h-6 text-primary/70 fill-primary/40" />
          </motion.div>
        ))}
      </motion.div>

    </div>
  </PageWrapper>
);

export default FutureWithYou;
