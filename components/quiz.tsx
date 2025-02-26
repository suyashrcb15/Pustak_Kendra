"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { sampleQuestions } from "@/constants/index";
import { Howl } from "howler";

// Sound effects
const correctSound = new Howl({ src: ["/sounds/correct.mp3"] });
const wrongSound = new Howl({ src: ["/sounds/wrong.mp3"] });

// Background music (looping)
const backgroundMusic = new Howl({
  src: ["/sounds/m3 (5).mp3"],
  loop: true,
  volume: 0.5, // Adjust volume as needed
});

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [timer, setTimer] = useState(10);
  const [questionCount, setQuestionCount] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      backgroundMusic.play();
    }

    return () => {
      backgroundMusic.stop();
    };
  }, [showModal]);

  useEffect(() => {
    if (!showModal) {
      backgroundMusic.fade(0.5, 0, 2000); // Fade out over 2 seconds
      setTimeout(() => backgroundMusic.stop(), 2000);
    }
  }, [showModal]);

  useEffect(() => {
    if (questionCount) {
      setQuizQuestions(
        [...sampleQuestions]
          .sort(() => 0.5 - Math.random())
          .slice(0, questionCount),
      );
    }
  }, [questionCount]);

  useEffect(() => {
    if (timer > 0 && currentQuestion < quizQuestions.length) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      setCurrentQuestion((prev) => prev + 1);
      setTimer(10);
    }
  }, [timer, currentQuestion, quizQuestions.length]);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    if (option === quizQuestions[currentQuestion]?.answer) {
      setScore((prev) => prev + 1);
      correctSound.play();
    } else {
      wrongSound.play();
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev + 1);
      setTimer(10);
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowModal(true);
    setTimer(10);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4 text-center">
              Select Number of Questions
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[5, 10, 15].map((num) => (
                <Button
                  key={num}
                  onClick={() => {
                    setQuestionCount(num);
                    setShowModal(false);
                  }}
                  className="bg-blue-500 text-white p-3 rounded-md shadow-md hover:bg-blue-700"
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {!showModal && (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-6 animate-bounce"
          >
            📖 Quiz Time!
          </motion.h1>

          {currentQuestion < quizQuestions.length ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 border rounded-lg shadow-lg bg-white text-black w-full max-w-md z-10"
            >
              <h3 className="text-lg font-semibold mb-4">
                {quizQuestions[currentQuestion]?.question}
              </h3>
              <p className="text-red-600 font-bold">Time Left: {timer}s</p>
              <div className="mt-4 space-y-3">
                {quizQuestions[currentQuestion]?.options.map((option) => (
                  <motion.button
                    key={option}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full p-3 rounded-lg text-left border transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md font-medium text-lg ${
                      selectedAnswer === option
                        ? option === quizQuestions[currentQuestion]?.answer
                          ? "bg-green-400 border-green-700 text-white"
                          : "bg-red-400 border-red-700 text-white"
                        : "border-gray-300 hover:bg-gray-200"
                    }`}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-6 bg-white text-black p-6 rounded-lg shadow-2xl z-10"
            >
              <h3 className="text-2xl font-bold mb-3">🎉 Quiz Completed!</h3>
              <p className="text-lg mb-4">
                Your Score:{" "}
                <span className="text-blue-600 font-extrabold">
                  {score} / {quizQuestions.length}
                </span>
              </p>
              <Button
                onClick={restartQuiz}
                className="bg-blue-500 text-white hover:bg-blue-700 transition-all px-5 py-2 rounded-md shadow-md"
              >
                Restart Quiz
              </Button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
