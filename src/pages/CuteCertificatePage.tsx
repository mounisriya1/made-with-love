import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Sparkles,
  Crown,
  Star,
  Download,
  Cake,
  ShieldCheck,
  Laugh,
  Medal,
  ScrollText,
  CheckCircle2,
  BadgeCheck,
  PartyPopper,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const achievements = [
  {
    icon: <Crown className="h-5 w-5" />,
    title: "Birthday King",
    text: "Allowed to act royal today",
  },
  {
    icon: <Heart className="h-5 w-5 fill-rose-500" />,
    title: "My Favorite Person",
    text: "Permanent role, no transfer allowed",
  },
  {
    icon: <Laugh className="h-5 w-5" />,
    title: "Mood Fixer",
    text: "Can repair my mood with one smile",
  },
  {
    icon: <Cake className="h-5 w-5" />,
    title: "Cake VIP",
    text: "First bite approved, sharing compulsory",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Heart Safe Zone",
    text: "Trusted with unlimited love",
  },
  {
    icon: <Medal className="h-5 w-5" />,
    title: "Best Boy Award",
    text: "Winner because competition is zero",
  },
];

const checklist = [
  "Makes my life happier every day",
  "Gives me reasons to smile randomly",
  "Is officially cute even without trying",
  "Has lifetime access to my heart",
];

const CuteCertificatePage = () => {
  return (
    <PageWrapper className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-28 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-rose-400/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-red-300/25 blur-3xl" />

      {/* Floating items */}
      {["❤️", "🏆", "✨", "🎂", "💖", "⭐", "🎀"].map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0.16 }}
          animate={{
            y: [-8, -30, -8],
            opacity: [0.16, 0.72, 0.16],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 3 + index * 0.45,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className="absolute text-xl sm:text-3xl pointer-events-none"
          style={{
            top: `${8 + index * 12}%`,
            left: `${7 + index * 13}%`,
          }}
        >
          {item}
        </motion.span>
      ))}

      <div className="relative z-10 px-4 pt-20 pb-12 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/60 px-4 py-2 text-xs font-bold text-rose-600 shadow-md backdrop-blur-md">
              <PartyPopper className="h-4 w-4 text-pink-500" />
              Birthday Award Ceremony
              <Sparkles className="h-4 w-4 text-pink-500" />
            </div>

            <h1 className="mt-4 text-4xl font-display font-extrabold leading-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Royal Cute Certificate
              </span>
              <br />
              <span className="text-rose-700">For My Birthday Boy 🎂</span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-rose-700/75 sm:text-lg">
              A highly official, emotionally verified, funny little award made
              only for the person who makes my heart happiest.
            </p>
          </motion.div>

          {/* Certificate Paper */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.8rem] border-[10px] border-white/80 bg-white/60 px-5 py-7 text-center shadow-2xl shadow-rose-300/40 backdrop-blur-xl sm:px-10 sm:py-10"
          >
            {/* Inner glow */}
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-pink-300/35 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-300/35 blur-3xl" />

            {/* Decorative border */}
            <div className="absolute inset-5 rounded-[2.2rem] border-2 border-dashed border-rose-300/50 pointer-events-none" />

            {/* Corners */}
           

            <div className="relative z-10">
              {/* Seal */}
              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 160 }}
                className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 shadow-xl shadow-rose-400/40"
              >
                <Award className="h-11 w-11 text-white" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute inset-[-12px] rounded-full border-2 border-dashed border-rose-300"
                />

                <span className="absolute -bottom-2 rounded-full bg-white px-3 py-1 text-[10px] font-extrabold text-rose-600 shadow-md">
                  VERIFIED
                </span>
              </motion.div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/65 px-4 py-2 text-xs font-bold text-rose-600 shadow-md">
                <BadgeCheck className="h-4 w-4 text-pink-500" />
                Certificate ID: BEST-BOY-FOREVER
              </div>

              <h2 className="mt-5 text-3xl font-display font-extrabold leading-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Certificate of Being
                </span>
                <br />
                <span className="text-rose-700">
                  The Best Birthday Boy
                </span>
              </h2>

              {/* Awarded box */}
              <div className="mx-auto mt-7 max-w-3xl rounded-[2.2rem] border border-rose-200/70 bg-white/75 px-5 py-7 shadow-xl backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-400">
                  Proudly Awarded To
                </p>

                <h3 className="mt-3 text-3xl font-display font-extrabold text-rose-700 sm:text-5xl">
                  My Favorite Person
                </h3>

                <div className="mx-auto my-6 h-[2px] w-56 rounded-full bg-gradient-to-r from-transparent via-rose-400 to-transparent" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-400">
                  For The Special Achievement Of
                </p>

                <p className="mt-3 text-xl font-semibold leading-relaxed text-rose-700 sm:text-2xl">
                  Making my life happier every single day ❤️
                </p>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-rose-100 to-pink-100 px-4 py-4 text-sm font-semibold text-rose-700">
                  This award is valid forever. It cannot be cancelled, returned,
                  exchanged, ignored, or transferred to anyone else.
                </div>
              </div>

              {/* Achievement Stamps */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02, rotate: index % 2 ? 1 : -1 }}
                    className="rounded-2xl border border-white/70 bg-white/60 px-4 py-5 text-rose-700 shadow-md backdrop-blur-md"
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      {item.icon}
                    </div>

                    <p className="mt-3 text-sm font-bold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-rose-600/75">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Checklist + Official Note */}
              <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[2rem] border border-white/70 bg-white/60 px-5 py-6 text-left shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-center gap-2 text-center font-bold text-rose-700">
                    <ScrollText className="h-5 w-5 text-pink-500" />
                    Verification Checklist
                  </div>

                  <div className="mt-5 grid gap-3">
                    {checklist.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-2xl bg-rose-50/80 px-4 py-3 text-sm font-semibold text-rose-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-rose-500 to-pink-500 px-5 py-6 text-white shadow-xl shadow-rose-400/40">
                  <div className="flex items-center justify-center gap-2 font-bold">
                    <Star className="h-5 w-5 fill-white" />
                    Official Love Note
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/90">
                    This certificate proves that the birthday boy is not only
                    cute, special, and loved, but also permanently registered as
                    my favorite person in the universe.
                  </p>

                  <div className="mt-5 rounded-2xl bg-white/20 px-4 py-3 text-sm font-bold">
                    Fine print: Winner must accept hugs, compliments, and extra
                    love without argument.
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-rose-200/70 pt-6 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                    Given With Love By
                  </p>
                  <p className="mt-1 text-2xl font-display italic text-rose-700">
                    Your Favorite Girl ❤️
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                    Official Stamp
                  </p>
                  <p className="mt-1 text-xl font-display font-bold text-rose-700">
                    Approved By My Heart 💘
                  </p>
                </div>

               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CuteCertificatePage;