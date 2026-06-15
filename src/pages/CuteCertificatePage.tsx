import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Image, X, Heart } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const CuteCertificatePage = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <PageWrapper className="min-h-screen overflow-x-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 px-4 pt-32 pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-extrabold text-rose-700 sm:text-5xl"
        >
          Cute Birthday Certificate 🎂
        </motion.h1>

        <p className="mt-3 text-sm font-medium text-rose-500 sm:text-base">
          A small special award for my favorite person ❤️
        </p>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-8 max-w-2xl overflow-hidden rounded-[2rem] border border-rose-100 bg-white/90 px-6 py-8 shadow-xl shadow-rose-200/50"
        >
          <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-pink-200/60 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-rose-200/60 blur-2xl" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 shadow-lg">
              <Crown className="h-8 w-8 text-white" />
            </div>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.35em] text-rose-400">
              Awarded To
            </p>

            <h2 className="mt-2 font-display text-3xl font-extrabold text-rose-700 sm:text-4xl">
              My Birthday Boy
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm font-semibold leading-7 text-rose-600 sm:text-base">
              For being the cutest, sweetest, and my favorite person forever.
            </p>

            <div className="mx-auto mt-5 max-w-md rounded-2xl bg-rose-50 px-4 py-3 text-sm font-bold text-rose-500">
              Valid forever. No expiry. Only love.
            </div>

            <button
              onClick={() => setShowImage(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-300/60 transition hover:bg-rose-600"
            >
              <Image className="h-5 w-5" />
              See Cute Moment
            </button>
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-rose-500">
          <Heart className="h-4 w-4 fill-rose-500" />
          You are my gift every day
        </div>
      </div>

      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImage(false)}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/55 px-4 py-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl bg-white p-3 shadow-2xl"
            >
              <button
                onClick={() => setShowImage(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-rose-600 shadow-md"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src="/images/certificate-gift.png"
                alt="Certificate moment"
                className="max-h-[78vh] w-full rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default CuteCertificatePage;