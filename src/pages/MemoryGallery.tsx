import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  Sparkles,
  Camera,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const images = [
  {
    src: "/images/memories/photo1.jpg",
    caption: "One of my favorite memories ❤️",
    height: "h-[340px]",
    rotate: "-rotate-2",
    tag: "Favorite",
  },
  {
    src: "/images/memories/photo2.jpg",
    caption: "A beautiful day together",
    height: "h-[220px]",
    rotate: "rotate-2",
    tag: "Sweet",
  },
  {
    src: "/images/memories/photo3.jpg",
    caption: "Moments I never want to forget",
    height: "h-[230px]",
    rotate: "-rotate-1",
    tag: "Special",
  },
  {
    src: "/images/memories/photo4.jpg",
    caption: "Just us being happy",
    height: "h-[360px]",
    rotate: "rotate-2",
    tag: "Happy",
  },
  {
    src: "/images/memories/photo5.jpg",
    caption: "Another special memory",
    height: "h-[220px]",
    rotate: "-rotate-2",
    tag: "Cute",
  },
  {
    src: "/images/memories/photo6.jpg",
    caption: "Smiles that mean everything",
    height: "h-[250px]",
    rotate: "rotate-1",
    tag: "Smile",
  },
  {
    src: "/images/memories/photo7.jpg",
    caption: "A memory close to my heart",
    height: "h-[240px]",
    rotate: "-rotate-1",
    tag: "Heart",
  },
  {
    src: "/images/memories/photo8.jpg",
    caption: "Laughing together forever",
    height: "h-[240px]",
    rotate: "rotate-2",
    tag: "Laugh",
  },
  {
    src: "/images/memories/photo9.jpg",
    caption: "Forever my favorite person ❤️",
    height: "h-[360px]",
    rotate: "-rotate-2",
    tag: "Forever",
  },
];

const MemoryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleNext = () => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  };

  const handlePrev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <PageWrapper className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.22),transparent_40%)]" />
      <div className="absolute -top-32 -left-28 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-rose-400/18 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-red-300/18 rounded-full blur-3xl" />

      {/* Floating Decorations */}
      {["❤️", "✨", "💖", "🌸", "💕", "⭐"].map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0.14 }}
          animate={{
            y: [-8, -28, -8],
            opacity: [0.14, 0.65, 0.14],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className="absolute text-xl sm:text-3xl pointer-events-none"
          style={{
            top: `${10 + index * 13}%`,
            left: `${7 + index * 15}%`,
          }}
        >
          {item}
        </motion.span>
      ))}

      <div className="container mx-auto px-4 pt-16 pb-16 sm:pt-20 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/55 backdrop-blur-md border border-white/70 shadow-md text-rose-600 text-xs sm:text-sm font-bold">
            <Camera className="w-4 h-4" />
            Our Little Memory Wall
            <Sparkles className="w-4 h-4 text-pink-500" />
          </div>

          <h1 className="mt-3 text-4xl sm:text-6xl font-display font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Memory Collage
            </span>
          </h1>

          <p className="mt-2 text-rose-700/75 font-body text-base sm:text-lg max-w-2xl mx-auto">
            A tiny wall full of smiles, love, and beautiful memories that I want
            to keep forever.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 text-rose-600 text-xs font-bold shadow-sm">
              {images.length} Memories
            </div>
            <div className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 text-rose-600 text-xs font-bold shadow-sm">
              Endless Smiles
            </div>
            <div className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 text-rose-600 text-xs font-bold shadow-sm">
              Forever Us
            </div>
          </div>
        </motion.div>

        {/* Memory Board */}
        <div className="relative rounded-[2.3rem] bg-white/24 backdrop-blur-md border border-white/55 shadow-2xl shadow-rose-300/20 px-4 py-7 sm:px-8 sm:py-9">
          <div className="absolute top-5 left-7 text-2xl">💌</div>
          <div className="absolute top-5 right-7 text-2xl">🎀</div>
          <div className="absolute bottom-5 left-7 text-2xl">✨</div>
          <div className="absolute bottom-5 right-7 text-2xl">❤️</div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-7 space-y-7">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.06,
                  type: "spring",
                  stiffness: 90,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                  rotate: 0,
                }}
                onClick={() => setSelected(i)}
                className={`group relative mb-7 break-inside-avoid cursor-pointer ${img.rotate}`}
              >
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-20 h-7 rotate-2 rounded-sm bg-pink-200/70 backdrop-blur-sm border border-white/70 shadow-sm" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white/72 border border-white/85 shadow-xl hover:shadow-rose-300/60 transition-all duration-300 p-2">
                  <div
                    className={`relative ${img.height} overflow-hidden rounded-[1.6rem]`}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs font-bold">
                      #{i + 1} {img.tag}
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/25 backdrop-blur-md border border-white/25 flex items-center justify-center"
                    >
                      <Heart className="w-5 h-5 text-white fill-white" />
                    </motion.div>

                    <div className="absolute left-5 right-5 bottom-5">
                      <p className="text-white font-body font-bold text-base sm:text-lg leading-snug drop-shadow">
                        {img.caption}
                      </p>

                      <p className="mt-2 text-white/80 text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Tap to open this memory closely ✨
                      </p>
                    </div>
                  </div>

                  <div className="px-3 py-3 text-center">
                    <p className="text-xs font-semibold text-rose-400">
                      saved memory #{i + 1}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-block rounded-[2rem] bg-white/45 backdrop-blur-md border border-white/65 shadow-xl px-6 py-5">
            <Star className="w-7 h-7 mx-auto text-rose-500 fill-rose-500" />
            <p className="mt-3 text-rose-700 font-semibold max-w-xl">
              These are not just photos. They are tiny pieces of us, saved in my
              heart forever.
            </p>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center px-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.82, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.82, y: 40 }}
                transition={{ type: "spring", stiffness: 130 }}
                className="relative w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 shadow-2xl">
                  <img
                    src={images[selected].src}
                    alt={images[selected].caption}
                    className="w-full max-h-[76vh] object-contain rounded-[1.5rem]"
                  />

                  <div className="px-4 py-4 text-center">
                    <p className="text-rose-700 font-bold text-base sm:text-xl">
                      {images[selected].caption}
                    </p>
                    <p className="mt-1 text-xs text-rose-400">
                      saved memory #{selected + 1}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  <button
                    onClick={handlePrev}
                    className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default MemoryGallery;