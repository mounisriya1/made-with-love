
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const images = [
  { src: "/images/memories/photo1.jpg", caption: "One of my favorite memories ❤️" },
  { src: "/images/memories/photo2.jpg", caption: "A beautiful day together" },
  { src: "/images/memories/photo3.jpg", caption: "Moments I never want to forget" },
  { src: "/images/memories/photo4.jpg", caption: "Just us being happy" },
  { src: "/images/memories/photo5.jpg", caption: "Another special memory" },
  { src: "/images/memories/photo6.jpg", caption: "Smiles that mean everything" },
  { src: "/images/memories/photo7.jpg", caption: "A memory close to my heart" },
  { src: "/images/memories/photo8.jpg", caption: "Laughing together forever" },
  { src: "/images/memories/photo9.jpg", caption: "Forever my favorite person ❤️" },
];

const rotations = [-8, -4, -2, 3, 6, -6, 4, 2, -3];

const MemoryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageWrapper className="gradient-hero">

      <div className="container mx-auto px-4 py-16 max-w-6xl">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-5xl font-display font-bold text-center text-gradient-love mb-4"
        >
          Memory Gallery
        </motion.h1>

        <p className="text-center text-muted-foreground font-body mb-16">
          Every moment with you is my favorite memory.
        </p>

        {/* photo wall */}
        <div className="relative flex flex-wrap justify-center gap-16">

          {/* hanging string */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/30"></div>

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="cursor-pointer"
              style={{ rotate: rotations[i] }}
              onClick={() => setSelected(i)}
            >

              {/* clip */}
              <div className="w-6 h-4 bg-primary rounded-sm mx-auto mb-[-6px] z-10 relative"></div>

              {/* polaroid */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.3 }}
                className="bg-white p-4 pb-10 shadow-romantic rounded-md w-[280px]"
              >

                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={img.src}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-center text-sm font-body text-gray-600 mt-3">
                  {img.caption}
                </p>

              </motion.div>

            </motion.div>
          ))}

        </div>

        {/* lightbox viewer */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
              onClick={() => setSelected(null)}
            >

              {/* camera flash */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white"
              />

              <motion.div
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                className="relative max-w-xl rounded-2xl overflow-hidden shadow-glow"
                onClick={(e) => e.stopPropagation()}
              >

                <img
                  src={images[selected].src}
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </PageWrapper>
  );
};

export default MemoryGallery;
