"use client";

import { useEffect, useState, useRef } from "react";
import { getBooks } from "@/lib/admin/actions/book";
import { motion } from "framer-motion";

const colors = [
  "from-blue-500 to-indigo-500",
  "from-green-500 to-teal-500",
  "from-purple-500 to-pink-500",
  "from-yellow-500 to-orange-500",
  "from-red-500 to-rose-500",
];

const Library = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const playAudio = async () => {
      if (audioElementRef.current) {
        try {
          await audioElementRef.current.play();
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
        } catch (error) {
          document.addEventListener("click", enableAudio);
        }
      }
    };

    const enableAudio = () => {
      if (audioElementRef.current) {
        audioElementRef.current.play().then(() => {
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
        });
      }
      document.removeEventListener("click", enableAudio);
    };

    playAudio();
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && audioElementRef.current) {
        audioElementRef.current.play();
        setIsAudioPlaying(true);
        setIsIndicatorActive(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const toggleAudioIndicator = () => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.pause();
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      } else {
        audioElementRef.current.play().then(() => {
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
        });
      }
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6"
    >
      <div className="flex justify-center items-center mb-6">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          📚 Welcome to the Library 📚
        </motion.h1>
        <button onClick={toggleAudioIndicator} className="ml-4 flex space-x-1">
          <audio
            ref={audioElementRef}
            className="hidden"
            src="/sounds/m4.mp3"
            loop
          />
          {["#FF9933", "#FFFFFF", "#138808", "#000080"].map((color, index) => (
            <div
              key={index}
              className={`w-1 h-5 mx-0.5 rounded transition-transform duration-300 ${
                isIndicatorActive ? "animate-pulse scale-y-125" : "scale-y-100"
              }`}
              style={{
                backgroundColor: color,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </button>
      </div>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search by Title, Author, or Genre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border rounded-lg shadow-lg p-6 bg-gradient-to-r ${colors[index % colors.length]} text-white flex flex-col items-center text-center`}
            >
              <h2 className="text-2xl font-bold">{book.title}</h2>
              <h3 className="text-lg font-semibold mt-2">
                ✍️ Author: {book.author}
              </h3>
              <p className="text-sm mt-1">📖 Genre: {book.genre}</p>
              <p className="mt-4">{book.description}</p>
              {book.pdfUrl && (
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-white text-gray-800 font-bold py-2 px-4 rounded hover:scale-110 transition"
                >
                  📖 View PDF
                </a>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-3 text-xl">
            No books found.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Library;
