
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

const reasons = [
  "You always support me no matter what",
  "Your smile makes my whole day",
  "You understand me like no one else",
  "You care so deeply about everything",
  "You listen when I need to talk",
  "You make my life so much better",
  "Your laugh is the best sound",
  "You believe in me always",
  "You make me want to be better",
  "You're my safe place",
  "Your kindness inspires me",
  "You never give up on us",
  "You remember the little things",
  "Your hugs feel like home",
  "You make ordinary moments special",
  "You're my best friend",
  "You always know what to say",
  "You handle everything with grace",
  "Your strength amazes me",
  "You make me laugh every day",
  "You're incredibly thoughtful",
  "You love wholeheartedly",
  "You make me feel safe",
  "Your patience is beautiful",
  "You inspire me daily",
  "You're always there for me",
  "Your cooking warms my soul",
  "You make sacrifices for us",
  "You're the most genuine person",
  "Your determination is admirable",
  "You make everything more fun",
  "You're incredibly creative",
  "You make hard days easier",
  "Your voice calms me",
  "You accept me as I am",
  "You're my biggest cheerleader",
  "You make me feel loved",
  "Your intelligence amazes me",
  "You make the world brighter",
  "You're my adventure partner",
  "You challenge me to grow",
  "Your compassion knows no bounds",
  "You make coming home the best part",
  "You're endlessly surprising",
  "You make every moment count",
  "You're my person",
  "You love my quirks",
  "Your honesty I treasure",
  "You make me feel special",
  "You're my greatest blessing",
  "You celebrate my wins",
  "You comfort me in storms",
  "Your eyes tell stories",
  "You make me believe in magic",
  "You're incredibly brave",
  "You make love look easy",
  "Your warmth radiates",
  "You fight for us",
  "You're my forever choice",
  "You make me feel alive",
  "Your touch heals everything",
  "You remember our stories",
  "You're my midnight comfort",
  "You make mornings beautiful",
  "Your faith in us is unshakeable",
  "You make me dream bigger",
  "You're impossibly sweet",
  "You love without conditions",
  "Your presence is my peace",
  "You make apologies feel real",
  "You're my favorite notification",
  "You make distance feel small",
  "Your wisdom guides me",
  "You make food taste better",
  "You're my answered prayer",
  "You make silence comfortable",
  "Your passion is contagious",
  "You remember what matters",
  "You're my home wherever we are",
  "You make even waiting worthwhile",
  "Your smile is my sunrise",
  "You make life an adventure",
  "You're my calm in chaos",
  "You love my family like yours",
  "Your gentleness is powerful",
  "You make rainy days beautiful",
  "You're the reason I smile",
  "You make everything better",
  "Your loyalty is unmatched",
  "You make me feel complete",
  "You're my favorite hello",
  "You make goodbye the hardest word",
  "Your love letter is my life",
  "You make me proud every day",
  "You're my soulmate",
  "You make each year sweeter",
  "Your forgiveness heals me",
  "You make me feel enough",
  "You're everything to me",
  "You're the love of my life",
];

const ReasonsILoveYou = () => {

  const [openEnvelope, setOpenEnvelope] = useState(false);

  return (
    <PageWrapper className="gradient-hero min-h-screen">

      <div className="container mx-auto px-6 py-16 max-w-6xl">

        <h1 className="text-5xl font-display font-bold text-center text-gradient-love mb-6">
          100 Reasons I Love You ❤️
        </h1>

        <p className="text-center text-muted-foreground font-body mb-14 text-lg">
          Every reason comes straight from my heart 💌
        </p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
              className="bg-secondary border border-border rounded-3xl shadow-romantic p-8 min-h-[170px] flex items-center justify-center text-center"
            >
              <span className="text-lg font-body text-foreground">
                ❤️ {i + 1}. {reason}
              </span>
            </motion.div>
          ))}

        </div>

        {/* Special Message Button */}
        <div className="flex justify-center mt-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpenEnvelope(true)}
            className="cursor-pointer bg-primary text-primary-foreground rounded-3xl shadow-romantic px-16 py-10 text-center"
          >
            <span className="text-xl font-body font-semibold">
              💌 Click for the most special message
            </span>
          </motion.div>
        </div>

      </div>

      {/* LOVE LETTER POPUP */}
      <AnimatePresence>
        {openEnvelope && (

          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="bg-background rounded-3xl shadow-romantic p-10 max-w-xl text-center relative"
            >

              <h2 className="text-3xl font-display font-bold text-gradient-love mb-6">
                My Love 💖
              </h2>

              <p className="text-foreground/80 font-body leading-relaxed mb-6">
                These are just <b>100 reasons</b> why I love you…
                but the truth is my love for you cannot be counted.
              </p>

              <p className="text-foreground/80 font-body leading-relaxed mb-6">
                There are thousands of little moments,
                millions of beautiful memories,
                and an infinite number of reasons
                that make you the most special person in my life.
              </p>

              <p className="text-foreground/80 font-body leading-relaxed mb-6">
                Every smile of yours, every laugh,
                every moment we spend together
                becomes another reason why my heart
                chooses you again and again.
              </p>

              <p className="text-primary text-xl font-body font-semibold mb-8">
                So these are not just 100 reasons…
                they are only the beginning of my infinite love for you ❤️
              </p>

              <button
                onClick={() => setOpenEnvelope(false)}
                className="bg-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-full font-body text-lg"
              >
                Close 💕
              </button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </PageWrapper>
  );
};

export default ReasonsILoveYou;