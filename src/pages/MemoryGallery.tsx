import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles, Images } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const images = [
  { src: "/images/memories/photo1.jpg", caption: "One of my favorite memories ❤️", height: "h-[360px]" },
  { src: "/images/memories/photo2.jpg", caption: "A beautiful day together", height: "h-[220px]" },
  { src: "/images/memories/photo3.jpg", caption: "Moments I never want to forget", height: "h-[220px]" },
  { src: "/images/memories/photo4.jpg", caption: "Just us being happy", height: "h-[390px]" },
  { src: "/images/memories/photo5.jpg", caption: "Another special memory", height: "h-[220px]" },
  { src: "/images/memories/photo6.jpg", caption: "Smiles that mean everything", height: "h-[250px]" },
  { src: "/images/memories/photo7.jpg", caption: "A memory close to my heart", height: "h-[240px]" },
  { src: "/images/memories/photo8.jpg", caption: "Laughing together forever", height: "h-[240px]" },
  { src: "/images/memories/photo9.jpg", caption: "Forever my favorite person ❤️", height: "h-[380px]" },
];

const MemoryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageWrapper className="relative min-h-screen overflow-x-hidden bg-[#fff3f7]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.23),transparent_40%)]" />

      <div className="container mx-auto px-4 py-10 sm:py-14 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Memory Collage
            </span>
          </h1>

          <p className="mt-3 text-rose-700/75 font-body text-base sm:text-lg">
            A tiny wall full of smiles, love, and beautiful memories.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 90 }}
              whileHover={{ y: -6, scale: 1.015 }}
              onClick={() => setSelected(i)}
              className="group relative mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-[2rem] bg-white/60 border border-white/80 shadow-xl hover:shadow-rose-300/60 transition-all duration-300"
            >
              <div className={`relative ${img.height} overflow-hidden rounded-[2rem]`}>
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/25 backdrop-blur-md border border-white/25 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>

                <div className="absolute left-5 right-5 bottom-5">
                  <p className="text-white font-body font-semibold text-base sm:text-lg leading-snug drop-shadow">
                    {img.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                initial={{ scale: 0.8, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 40 }}
                transition={{ type: "spring", stiffness: 130 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-[2rem] overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-3">
                  <img
                    src={images[selected].src}
                    alt={images[selected].caption}
                    className="w-full max-h-[78vh] object-contain rounded-[1.5rem]"
                  />

                  <div className="absolute left-6 right-6 bottom-6 rounded-2xl bg-black/55 backdrop-blur-md px-5 py-4 text-center">
                    <p className="text-white font-body text-base sm:text-lg">
                      {images[selected].caption}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
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