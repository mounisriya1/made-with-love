import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Brain,
  Crown,
} from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const questions = [
  {
    question:
      "Nenu 'fine' ani cheppina tarvata 5 mins silent ga unte meaning enti?",
    options: [
      "She is fine",
      "Phone battery low",
      "Silent treatment loading",
      "She is watching reels",
    ],
     answer: "Silent treatment loading",
    funnyReply:
    "Correct! 'Fine' + silence ante silent treatment loading... handle with care 😂❤️",
  },
  {
  question: "Nenu 'ok leave it' ante nuvvu really leave cheyyacha?",
  options: [
    "Yes, leave cheyyali",
    "No, topic save chesi apologize cheyyali",
    "Laugh react pettali",
    "Status lo quote pettali",
  ],
  answer: "No, topic save chesi apologize cheyyali",
  funnyReply:
    "Correct! 'Leave it' ante leave cheyyadam kaadu, cute ga solve cheyyadam 😂❤️",
},
  {
  question: "Nenu photo pampithe 'nice' ani reply isthe consequence enti?",
  options: [
    "Thank you antanu",
    "Happy avthanu",
    "Cute anger loading",
    "Screenshot save chestha",
  ],
  answer: "Cute anger loading",
  funnyReply:
    "Correct! Photo ki only 'nice' ante saripodu, full compliments kavali 😂❤️",
},
  {
  question:
    "Nenu 'food vaddu' ani cheppi, nee plate nundi fries tiskunte meaning enti?",
  options: [
    "Just taste chesthunna",
    "Food vaddu but fries okay",
    "Nee fries ippudu naavi",
    "Diet cancel ayyindi",
  ],
  answer: "Nee fries ippudu naavi",
  funnyReply:
    "Correct! Girlfriend 'food vaddu' ante boyfriend plate nundi share allowed 😂🍟",
},
  {
  question:
    "Nenu 'good night' ani cheppi, inka online lo kanipisthe meaning enti?",
  options: [
    "Nijanga sleep ayipoya",
    "Inka konchem matladali",
    "Phone automatic ga online lo undi",
    "Dream lo status post chesthunna",
  ],
  answer: "Inka konchem matladali",
  funnyReply:
    "Correct! Good night ani cheppina kuda, konchem attention kavali 😂🌙❤️",
},
];

const resultMessages = [
  {
    min: 5,
    title: "Boyfriend Genius! ❤️",
    message:
      "Nuvvu girlfriend logic exam full marks tho pass ayyav. Officially certified as my favorite person forever!",
  },
  {
    min: 3,
    title: "Smart But Still Training Needed 😂",
    message:
      "Baane answer chesav, kani konni situations lo inka cute messages and extra attention kavali.",
  },
  {
    min: 0,
    title: "Cute Danger Candidate 😭",
    message:
      "Nuvvu cute, but girlfriend logic update avvali. Version 2.0 training starts with hugs and chocolates.",
  },
];

const MiniLoveQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selected === question.answer;

  const handleOptionClick = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelected(null);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  const finalResult =
    resultMessages.find((result) => score >= result.min) || resultMessages[2];

  return (
    <PageWrapper className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-28 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-rose-400/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-red-300/25 blur-3xl" />

      {/* Floating Decorations */}
      {["❤️", "😂", "💖", "✨", "💕", "😌"].map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0.22 }}
          animate={{
            y: [-8, -30, -8],
            opacity: [0.22, 0.8, 0.22],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 3 + index * 0.45,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className="absolute text-xl sm:text-3xl pointer-events-none"
          style={{
            top: `${10 + index * 13}%`,
            left: `${8 + index * 15}%`,
          }}
        >
          {item}
        </motion.span>
      ))}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-[2.3rem] border border-white/75 bg-white/50 px-5 py-8 text-center shadow-2xl shadow-rose-300/40 backdrop-blur-xl sm:px-8 sm:py-10"
        >
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-pink-300/35 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-300/35 blur-3xl" />

          <div className="relative z-10">
            {!showResult ? (
              <>
                {/* Header */}
                <motion.div
                  initial={{ scale: 0, rotate: -18 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 160 }}
                  className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-xl shadow-rose-400/40"
                >
                  <Brain className="h-10 w-10 text-white" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    }}
                    className="absolute inset-[-10px] rounded-full border-2 border-dashed border-rose-300"
                  />
                </motion.div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/60 px-4 py-2 text-xs font-bold text-rose-600 shadow-md backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-pink-500" />
                  Funny Love Quiz
                  <Sparkles className="h-4 w-4 text-pink-500" />
                </div>

                <h1 className="mt-4 text-3xl font-display font-extrabold leading-tight text-rose-700 sm:text-5xl">
                  Boyfriend Special Exam 😂
                </h1>

                <p className="mx-auto mt-3 max-w-xl text-sm text-rose-700/75 sm:text-base">
                  Warning: Questions are easy, but girlfriend logic is tricky.
                </p>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-600">
                    <span>
                      Question {currentQuestion + 1} / {questions.length}
                    </span>
                    <span>Score: {score}</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/70">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          ((currentQuestion + 1) / questions.length) * 100
                        }%`,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500"
                    />
                  </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                    className="mt-7 rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-xl backdrop-blur-md"
                  >
                    <h2 className="text-xl font-display font-extrabold text-rose-700 sm:text-3xl">
                      {question.question}
                    </h2>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {question.options.map((option) => {
                        const optionIsCorrect = option === question.answer;
                        const optionIsSelected = selected === option;

                        return (
                          <motion.button
                            key={option}
                            whileHover={!selected ? { scale: 1.03, y: -3 } : {}}
                            whileTap={!selected ? { scale: 0.96 } : {}}
                            onClick={() => handleOptionClick(option)}
                            className={`relative overflow-hidden rounded-2xl border px-4 py-4 text-sm font-bold shadow-md transition-all sm:text-base ${
                              !selected
                                ? "border-white/75 bg-white/70 text-rose-700 hover:bg-rose-100/80"
                                : optionIsCorrect
                                ? "border-green-300 bg-green-100 text-green-700"
                                : optionIsSelected
                                ? "border-red-300 bg-red-100 text-red-600"
                                : "border-white/60 bg-white/40 text-rose-400"
                            }`}
                          >
                            <span className="relative z-10">{option}</span>

                            {selected && optionIsCorrect && (
                              <CheckCircle2 className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-green-600" />
                            )}

                            {selected && optionIsSelected && !optionIsCorrect && (
                              <XCircle className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Answer Feedback */}
                    <AnimatePresence>
                      {selected && (
                        <motion.div
                          initial={{ opacity: 0, y: 16, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 130 }}
                          className={`mt-6 rounded-3xl px-5 py-4 shadow-lg ${
                            isCorrect
                              ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                              : "bg-white/75 text-rose-700"
                          }`}
                        >
                          <p className="font-bold">
                            {isCorrect
                              ? question.funnyReply
                              : "Wrong but still cute. Grace marks ivvachu 😂❤️"}
                          </p>

                          {!isCorrect && (
                            <p className="mt-1 text-sm">
                              Correct answer:{" "}
                              <span className="font-bold">{question.answer}</span>
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {selected && (
                      <motion.button
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleNext}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-rose-400/40"
                      >
                        {currentQuestion === questions.length - 1
                          ? "Show My Result"
                          : "Next Question"}
                        <Heart className="h-4 w-4 fill-white" />
                      </motion.button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <>
                {/* Result */}
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-xl shadow-rose-400/40"
                >
                  <Trophy className="h-12 w-12 text-white" />
                </motion.div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/60 px-4 py-2 text-xs font-bold text-rose-600 shadow-md backdrop-blur-md">
                  <Crown className="h-4 w-4 text-pink-500" />
                  Quiz Completed
                  <Sparkles className="h-4 w-4 text-pink-500" />
                </div>

                <h1 className="mt-5 text-3xl font-display font-extrabold text-rose-700 sm:text-5xl">
                  {finalResult.title}
                </h1>

                <div className="mx-auto mt-6 max-w-md rounded-[2rem] border border-white/70 bg-white/60 px-6 py-6 shadow-xl backdrop-blur-md">
                  <p className="text-5xl font-display font-extrabold text-rose-600">
                    {score}/{questions.length}
                  </p>
                  <p className="mt-2 text-sm font-bold text-rose-500">
                    Love Quiz Score
                  </p>
                </div>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-rose-700/80">
                  {finalResult.message}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-7 rounded-[2rem] bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 px-6 py-5 text-white shadow-xl shadow-rose-400/40"
                >
                  <p className="text-xl font-bold">
                    Final Result: You are still my favorite person ❤️
                  </p>
                  <p className="mt-2 text-sm text-white/90">
                    Even if you fail the quiz, you already won my heart.
                  </p>
                </motion.div>

                <button
                  onClick={resetQuiz}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/65 px-6 py-3 text-sm font-bold text-rose-700 shadow-md transition hover:bg-rose-100"
                >
                  <RotateCcw className="h-4 w-4" />
                  Play Again
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default MiniLoveQuizPage;