import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

interface MemoryImage {
  src: string;
  caption: string;
  height: string;
  rotate: string;
  tag: string;
}

const images: MemoryImage[] = [
  {
    src: "/images/memories/photo1.jpg",
    caption: "One of my favorite memories ❤️",
    height: "h-[280px] sm:h-[330px]",
    rotate: "lg:-rotate-2",
    tag: "Favorite",
  },
  {
    src: "/images/memories/photo2.jpg",
    caption: "A beautiful day together",
    height: "h-[240px] sm:h-[270px]",
    rotate: "lg:rotate-2",
    tag: "Sweet",
  },
  {
    src: "/images/memories/photo3.jpg",
    caption: "Moments I never want to forget",
    height: "h-[250px] sm:h-[290px]",
    rotate: "lg:-rotate-1",
    tag: "Special",
  },
  {
    src: "/images/memories/photo4.jpg",
    caption: "Just us being happy",
    height: "h-[290px] sm:h-[350px]",
    rotate: "lg:rotate-2",
    tag: "Happy",
  },
  {
    src: "/images/memories/photo5.jpg",
    caption: "Another special memory",
    height: "h-[240px] sm:h-[270px]",
    rotate: "lg:-rotate-2",
    tag: "Cute",
  },
  {
    src: "/images/memories/photo6.jpg",
    caption: "Smiles that mean everything",
    height: "h-[260px] sm:h-[300px]",
    rotate: "lg:rotate-1",
    tag: "Smile",
  },
  {
    src: "/images/memories/photo7.jpg",
    caption: "A memory close to my heart",
    height: "h-[250px] sm:h-[290px]",
    rotate: "lg:-rotate-1",
    tag: "Heart",
  },
  {
    src: "/images/memories/photo8.jpg",
    caption: "Laughing together forever",
    height: "h-[250px] sm:h-[290px]",
    rotate: "lg:rotate-2",
    tag: "Laugh",
  },
  {
    src: "/images/memories/photo9.jpg",
    caption: "Forever my favorite person ❤️",
    height: "h-[290px] sm:h-[350px]",
    rotate: "lg:-rotate-2",
    tag: "Forever",
  },
];

const floatingItems = [
  {
    icon: "❤️",
    top: "8%",
    left: "4%",
    className: "hidden sm:block",
  },
  {
    icon: "✨",
    top: "20%",
    right: "6%",
    className: "hidden md:block",
  },
  {
    icon: "💖",
    top: "45%",
    left: "4%",
    className: "hidden lg:block",
  },
  {
    icon: "🌸",
    top: "63%",
    right: "5%",
    className: "hidden xl:block",
  },
  {
    icon: "💕",
    bottom: "12%",
    left: "7%",
    className: "hidden lg:block",
  },
  {
    icon: "⭐",
    bottom: "18%",
    right: "8%",
    className: "hidden md:block",
  },
];

const MemoryGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClose = () => {
    setSelected(null);
  };

  const handleNext = () => {
    setSelected((current) => {
      if (current === null) return null;

      return (current + 1) % images.length;
    });
  };

  const handlePrevious = () => {
    setSelected((current) => {
      if (current === null) return null;

      return (current - 1 + images.length) % images.length;
    });
  };

  useEffect(() => {
    if (selected === null) {
      document.body.style.overflowY = "auto";
      return;
    }

    document.body.style.overflowY = "hidden";

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.body.style.overflowY = "auto";
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selected]);

  return (
    <PageWrapper className="bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Full-page background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.22),transparent_40%)]" />

      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-red-300/20 blur-3xl sm:h-80 sm:w-80" />

      {/* Floating decorations */}

      {floatingItems.map((item, index) => (
        <motion.span
          key={`${item.icon}-${index}`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [-6, -20, -6],
            opacity: [0.15, 0.65, 0.15],
            rotate: [-8, 8, -8],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 3.2 + index * 0.4,
            repeat: Infinity,
            delay: index * 0.25,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute z-[1] text-xl sm:text-2xl lg:text-3xl ${item.className}`}
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </motion.span>
      ))}

      {/* Navbar space is reserved here */}

      <main className="relative z-10 w-full min-w-0 px-3 pb-20 pt-28 sm:px-5 sm:pb-24 sm:pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}

          <motion.header
            initial={{
              opacity: 0,
              y: -18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-8 text-center sm:mb-10"
          >
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-2 text-[11px] font-bold text-rose-600 shadow-md backdrop-blur-md sm:px-4 sm:text-sm">
              <Camera className="h-4 w-4 shrink-0" />

              <span className="truncate">Our Little Memory Wall</span>

              <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.7rem)] font-extrabold leading-none">
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Memory Collage
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-rose-700/75 sm:text-base sm:leading-7 lg:text-lg">
              A tiny wall full of smiles, love, and beautiful memories that I
              want to keep forever.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="rounded-full border border-white/70 bg-white/55 px-4 py-2 text-xs font-bold text-rose-600 shadow-sm backdrop-blur-md">
                {images.length} Memories
              </span>

              <span className="rounded-full border border-white/70 bg-white/55 px-4 py-2 text-xs font-bold text-rose-600 shadow-sm backdrop-blur-md">
                Endless Smiles
              </span>

              <span className="rounded-full border border-white/70 bg-white/55 px-4 py-2 text-xs font-bold text-rose-600 shadow-sm backdrop-blur-md">
                Forever Us
              </span>
            </div>
          </motion.header>

          {/* Gallery board */}

          <section className="relative w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/30 px-3 py-8 shadow-2xl shadow-rose-300/20 backdrop-blur-md sm:rounded-[2rem] sm:px-6 sm:py-10 lg:px-8">
            <span className="pointer-events-none absolute left-5 top-5 hidden text-2xl sm:block">
              💌
            </span>

            <span className="pointer-events-none absolute right-5 top-5 hidden text-2xl sm:block">
              🎀
            </span>

            <span className="pointer-events-none absolute bottom-5 left-5 hidden text-2xl sm:block">
              ✨
            </span>

            <span className="pointer-events-none absolute bottom-5 right-5 hidden text-2xl sm:block">
              ❤️
            </span>

            <div className="columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-7">
              {images.map((image, index) => (
                <motion.article
                  key={image.src}
                  initial={{
                    opacity: 0,
                    y: 28,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                    rotate: 0,
                  }}
                  onClick={() => setSelected(index)}
                  className={`group relative mb-5 min-w-0 break-inside-avoid cursor-pointer sm:mb-6 lg:mb-7 ${image.rotate}`}
                >
                  {/* Tape */}

                  <div className="pointer-events-none absolute -top-3 left-1/2 z-20 h-6 w-16 -translate-x-1/2 rotate-2 rounded-sm border border-white/70 bg-pink-200/75 shadow-sm backdrop-blur-sm sm:h-7 sm:w-20" />

                  {/* Memory card */}

                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/85 bg-white/75 p-2 shadow-xl transition-all duration-300 hover:shadow-rose-300/50 sm:rounded-[2rem]">
                    <div
                      className={`relative w-full overflow-hidden rounded-[1.1rem] sm:rounded-[1.6rem] ${image.height}`}
                    >
                      <img
                        src={image.src}
                        alt={image.caption}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                      <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/25 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md sm:left-4 sm:top-4 sm:text-xs">
                        #{index + 1} {image.tag}
                      </span>

                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/25 backdrop-blur-md sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                      >
                        <Heart className="h-4 w-4 fill-white text-white sm:h-5 sm:w-5" />
                      </motion.div>

                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                        <p className="text-sm font-bold leading-snug text-white drop-shadow sm:text-base lg:text-lg">
                          {image.caption}
                        </p>

                        <p className="mt-2 translate-y-2 text-[11px] text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs">
                          Tap to open this memory closely ✨
                        </p>
                      </div>
                    </div>

                    <div className="px-3 py-3 text-center">
                      <p className="text-xs font-semibold text-rose-400">
                        Saved memory #{index + 1}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          
        </div>
      </main>

      {/* Lightbox */}

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/85 px-3 py-5 backdrop-blur-sm sm:px-5"
          >
            <motion.div
              initial={{
                scale: 0.85,
                y: 35,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.85,
                y: 35,
              }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 18,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-5xl"
            >
              <div className="relative overflow-hidden rounded-[1.3rem] bg-white p-2 shadow-2xl sm:rounded-[2rem] sm:p-3">
                <img
                  src={images[selected].src}
                  alt={images[selected].caption}
                  className="h-auto max-h-[72dvh] w-full rounded-[1rem] object-contain sm:rounded-[1.5rem]"
                />

                <div className="px-4 py-4 text-center">
                  <p className="text-sm font-bold text-rose-700 sm:text-lg lg:text-xl">
                    {images[selected].caption}
                  </p>

                  <p className="mt-1 text-xs text-rose-400">
                    Saved memory #{selected + 1} of {images.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close image"
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:right-5 sm:top-5"
                >
                  <X className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label="View previous image"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:left-5 sm:h-11 sm:w-11"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="View next image"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:right-5 sm:h-11 sm:w-11"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default MemoryGallery;