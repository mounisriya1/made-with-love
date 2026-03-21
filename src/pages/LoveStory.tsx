
import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { Heart, Sparkles, Phone, Camera, Film, CloudRain, Bike } from "lucide-react";

const events = [
  {
    year: "Childhood",
    title: "Childhood Friendship",
    desc: "Back when we were just kids, playing together without realizing that one day our lives would be so deeply connected. Those simple moments became the beginning of everything.",
    icon: Sparkles,
  },
  {
    year: "7 Nov 2018",
    title: "Diwali Proposal",
    desc: "On a beautiful Diwali night filled with lights and celebrations, our story truly began. That moment when feelings turned into love is something I will never forget.",
    icon: Heart,
  },
  {
    year: "31 Dec 2018",
    title: "New Year Bike Ride",
    desc: "Riding together into the new year, feeling the cold night air and the excitement of a new beginning. It felt like we were starting our journey together.",
    icon: Bike,
  },
  {
    year: "2019",
    title: "Long Late-Night Calls",
    desc: "Those long phone calls where hours passed without us even noticing. Talking, laughing, sharing dreams — slowly understanding each other more every day.",
    icon: Phone,
  },
  {
    year: "2020",
    title: "Our First Kiss",
    desc: "A moment that felt like time stopped. Nervous, excited, and full of emotion — the first kiss that made everything feel even more real.",
    icon: Heart,
  },
  {
    year: "2021",
    title: "Our First Photo Together",
    desc: "The first picture that captured us together. A small photo, but it holds a memory of a moment we wanted to keep forever.",
    icon: Camera,
  },
  {
    year: "13 Aug 2023",
    title: "First Movie Together",
    desc: "Watching a movie side by side, sharing popcorn and small smiles. It wasn’t just a movie — it was another beautiful memory together.",
    icon: Film,
  },
  {
    year: "25 July 2023",
    title: "Favorite Rainy Memory",
    desc: "That rainy birthday visit to our friend's house — laughter, rain, and unforgettable moments. One of those days that will always stay in my heart.",
    icon: CloudRain,
  },
  {
    year: "28 Sept 2024",
    title: "Movie Date & Temple Visit",
    desc: "A peaceful day spent together — watching a movie and visiting the temple. It felt calm, meaningful, and special just being together.",
    icon: Film,
  },
  {
    year: "4 Oct 2025",
    title: "The Gift Ring",
    desc: "The day you gave me the ring. A small gift, but it carried so much meaning — a promise, a memory, and something I will always treasure.",
    icon: Heart,
  },
  {
    year: "Today",
    title: "Still Together ❤️",
    desc: "After everything we’ve been through — all the memories, laughter, and moments — we’re still choosing each other every single day.",
    icon: Heart,
  },
];

const LoveStory = () => {
  const [fireworks, setFireworks] = useState(false);

  return (
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

      {/* fireworks animation */}
      {fireworks && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: 2,
                opacity: 0,
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400
              }}
              transition={{ duration: 1.5 }}
              className="absolute text-primary text-2xl"
            >
              ✨
            </motion.span>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-16 max-w-2xl relative z-10">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-5xl font-display font-bold text-center text-gradient-love mb-16"
        >
          Our Love Story
        </motion.h1>

        <div className="relative">

          {/* timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          {events.map((event, i) => {
            const Icon = event.icon;
            const isLast = i === events.length - 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onViewportEnter={() => {
                  if (isLast) setFireworks(true);
                }}
                className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
              >

                {/* glowing icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute left-3 sm:left-5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-romantic"
                >
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </motion.div>

                <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">
                  {event.year}
                </span>

                <h3 className="text-xl font-display font-semibold text-foreground mt-1">
                  {event.title}
                </h3>

                <p className="text-muted-foreground font-body mt-1">
                  {event.desc}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </PageWrapper>
  );
};

export default LoveStory;
