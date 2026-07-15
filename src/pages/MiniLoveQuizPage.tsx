import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Crown,
  Heart,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  funnyReply: string;
}

interface ResultMessage {
  min: number;
  title: string;
  message: string;
}

const questions: QuizQuestion[] = [
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

const resultMessages: ResultMessage[] = [
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

const floatingDecorations = [
  {
    icon: "❤️",
    top: "9%",
    left: "4%",
    className: "hidden sm:block",
  },
  {
    icon: "😂",
    top: "22%",
    right: "6%",
    className: "hidden md:block",
  },
  {
    icon: "💖",
    top: "43%",
    left: "5%",
    className: "hidden lg:block",
  },
  {
    icon: "✨",
    top: "60%",
    right: "5%",
    className: "hidden xl:block",
  },
  {
    icon: "💕",
    bottom: "12%",
    left: "8%",
    className: "hidden lg:block",
  },
  {
    icon: "😌",
    bottom: "18%",
    right: "9%",
    className: "hidden md:block",
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
    if (selected !== null) return;

    setSelected(option);

    if (option === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (selected === null) return;

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    setSelected(null);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  const finalResult =
    resultMessages.find((result) => score >= result.min) ??
    resultMessages[resultMessages.length - 1];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <PageWrapper className="bg-gradient-to-br from-rose-50 via-pink-100 to-red-100">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(251,113,133,0.2),transparent_42%)]" />

      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-pink-300/35 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-rose-400/25 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-red-300/20 blur-3xl sm:h-80 sm:w-80" />

      {/* Floating decorations */}
      {floatingDecorations.map((item, index) => (
        <motion.span
          key={`${item.icon}-${index}`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [-6, -20, -6],
            opacity: [0.18, 0.7, 0.18],
            rotate: [-8, 8, -8],
            scale: [0.92, 1.08, 0.92],
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

      {/* Page content */}
      <main className="relative z-10 w-full min-w-0 px-3 pb-12 pt-24 sm:px-5 sm:pb-16 sm:pt-28 lg:px-8">
        <motion.section
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-4xl
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/75
            bg-white/50
            px-4
            py-6
            text-center
            shadow-2xl
            shadow-rose-300/35
            backdrop-blur-xl
            sm:rounded-[2rem]
            sm:px-7
            sm:py-8
            lg:px-9
          "
        >
          {/* Inner glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-pink-300/35 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-300/35 blur-3xl" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={`question-${currentQuestion}`}
                  initial={{
                    opacity: 0,
                    x: 32,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -32,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  

                  <div className="mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-rose-200/70 bg-white/65 px-3 py-2 text-[11px] font-bold text-rose-600 shadow-md backdrop-blur-md sm:mt-6 sm:px-4 sm:text-xs">
                    <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />

                    <span className="truncate">Funny Love Quiz</span>

                    <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
                  </div>

                  <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] text-rose-700">
                    Boyfriend Special Exam 😂
                  </h1>

                  <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-rose-700/75 sm:text-base">
                    Warning: Questions are easy, but girlfriend logic is tricky.
                  </p>

                  {/* Progress */}
                  <div className="mx-auto mt-5 max-w-2xl sm:mt-6">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-bold text-rose-600 sm:text-xs">
                      <span>
                        Question {currentQuestion + 1}/{questions.length}
                      </span>

                      <span>Score: {score}</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/75">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${progress}%`,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500"
                      />
                    </div>
                  </div>

                  {/* Question card */}
                  <div className="mt-5 rounded-[1.4rem] border border-white/70 bg-white/60 p-4 shadow-xl backdrop-blur-md sm:mt-6 sm:rounded-[2rem] sm:p-6">
                    <h2 className="font-display text-lg font-extrabold leading-7 text-rose-700 sm:text-2xl sm:leading-9 lg:text-3xl">
                      {question.question}
                    </h2>

                    {/* Options */}
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:mt-6">
                      {question.options.map((option) => {
                        const optionIsCorrect =
                          option === question.answer;
                        const optionIsSelected =
                          selected === option;

                        let optionClass =
                          "border-white/75 bg-white/75 text-rose-700 hover:bg-rose-100/80";

                        if (selected !== null) {
                          if (optionIsCorrect) {
                            optionClass =
                              "border-green-300 bg-green-100 text-green-700";
                          } else if (optionIsSelected) {
                            optionClass =
                              "border-red-300 bg-red-100 text-red-600";
                          } else {
                            optionClass =
                              "border-white/60 bg-white/40 text-rose-400";
                          }
                        }

                        return (
                          <motion.button
                            key={option}
                            type="button"
                            disabled={selected !== null}
                            whileHover={
                              selected === null
                                ? {
                                    scale: 1.02,
                                    y: -2,
                                  }
                                : {}
                            }
                            whileTap={
                              selected === null
                                ? {
                                    scale: 0.98,
                                  }
                                : {}
                            }
                            onClick={() =>
                              handleOptionClick(option)
                            }
                            className={`
                              relative
                              min-h-[58px]
                              min-w-0
                              overflow-hidden
                              rounded-2xl
                              border
                              px-10
                              py-3.5
                              text-sm
                              font-bold
                              leading-5
                              shadow-md
                              transition-all
                              sm:min-h-[64px]
                              sm:px-11
                              sm:py-4
                              sm:text-base
                              ${optionClass}
                            `}
                          >
                            <span className="relative z-10 break-words">
                              {option}
                            </span>

                            {selected !== null &&
                              optionIsCorrect && (
                                <CheckCircle2 className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-green-600 sm:right-4" />
                              )}

                            {selected !== null &&
                              optionIsSelected &&
                              !optionIsCorrect && (
                                <XCircle className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-red-500 sm:right-4" />
                              )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Answer feedback */}
                    <AnimatePresence>
                      {selected !== null && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 14,
                            scale: 0.97,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 130,
                          }}
                          className={`
                            mt-5
                            rounded-2xl
                            px-4
                            py-4
                            shadow-lg
                            sm:rounded-3xl
                            sm:px-5
                            ${
                              isCorrect
                                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                                : "bg-white/80 text-rose-700"
                            }
                          `}
                        >
                          <p className="text-sm font-bold leading-6 sm:text-base">
                            {isCorrect
                              ? question.funnyReply
                              : "Wrong but still cute. Grace marks ivvachu 😂❤️"}
                          </p>

                          {!isCorrect && (
                            <p className="mt-2 text-xs leading-5 sm:text-sm">
                              Correct answer:{" "}
                              <span className="font-bold">
                                {question.answer}
                              </span>
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {selected !== null && (
                      <motion.button
                        type="button"
                        initial={{
                          opacity: 0,
                          y: 14,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        whileHover={{
                          scale: 1.03,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={handleNext}
                        className="
                          group
                          mt-5
                          inline-flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-gradient-to-r
                          from-rose-500
                          to-pink-500
                          px-6
                          py-3
                          text-sm
                          font-bold
                          text-white
                          shadow-lg
                          shadow-rose-400/40
                          sm:w-auto
                          sm:px-7
                        "
                      >
                        {currentQuestion === questions.length - 1
                          ? "Show My Result"
                          : "Next Question"}

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="quiz-result"
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  {/* Result icon */}
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -12,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                    }}
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-rose-500
                      to-pink-500
                      shadow-xl
                      shadow-rose-400/40
                      sm:h-24
                      sm:w-24
                    "
                  >
                    <Trophy className="h-10 w-10 text-white sm:h-12 sm:w-12" />
                  </motion.div>

                  <div className="mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-rose-200/70 bg-white/65 px-3 py-2 text-[11px] font-bold text-rose-600 shadow-md backdrop-blur-md sm:mt-6 sm:px-4 sm:text-xs">
                    <Crown className="h-4 w-4 shrink-0 text-pink-500" />

                    <span className="truncate">Quiz Completed</span>

                    <Sparkles className="h-4 w-4 shrink-0 text-pink-500" />
                  </div>

                  <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] text-rose-700 sm:mt-5">
                    {finalResult.title}
                  </h1>

                  {/* Score */}
                  <div className="mx-auto mt-5 w-full max-w-sm rounded-[1.4rem] border border-white/70 bg-white/65 px-5 py-5 shadow-xl backdrop-blur-md sm:mt-6 sm:rounded-[2rem] sm:px-6 sm:py-6">
                    <p className="font-display text-4xl font-extrabold text-rose-600 sm:text-5xl">
                      {score}/{questions.length}
                    </p>

                    <p className="mt-2 text-xs font-bold text-rose-500 sm:text-sm">
                      Love Quiz Score
                    </p>
                  </div>

                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-rose-700/80 sm:text-base sm:leading-7">
                    {finalResult.message}
                  </p>

                  {/* Final message */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                    className="
                      mt-5
                      rounded-[1.4rem]
                      bg-gradient-to-r
                      from-rose-500
                      via-pink-500
                      to-red-500
                      px-4
                      py-4
                      text-white
                      shadow-xl
                      shadow-rose-400/40
                      sm:mt-6
                      sm:rounded-[2rem]
                      sm:px-6
                      sm:py-5
                    "
                  >
                    <p className="text-base font-bold leading-6 sm:text-xl">
                      Final Result: You are still my favorite person ❤️
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/90 sm:text-sm">
                      Even if you fail the quiz, you already won my heart.
                    </p>
                  </motion.div>

                  {/* Result buttons */}
                  <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row">
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-white/75
                        px-6
                        py-3
                        text-sm
                        font-bold
                        text-rose-700
                        shadow-md
                        transition
                        hover:bg-rose-100
                        sm:w-auto
                      "
                    >
                      <RotateCcw className="h-4 w-4" />
                      Play Again
                    </button>

                    <Link
                      to="/certificate"
                      className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-rose-500
                        to-pink-500
                        px-6
                        py-3
                        text-sm
                        font-bold
                        text-white
                        shadow-lg
                        shadow-rose-400/35
                        transition-all
                        hover:-translate-y-0.5
                        hover:scale-[1.02]
                        sm:w-auto
                      "
                    >
                      Unlock Your Certificate

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </main>
    </PageWrapper>
  );
};

export default MiniLoveQuizPage;