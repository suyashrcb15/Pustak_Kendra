"use client";

import { sampleBooks } from "@/constants"; // Ensure the path is correct
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PdfPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-light-200">
        Free PDF to Read
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleBooks.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 border rounded-lg shadow-lg bg-white relative overflow-hidden"
            style={{ borderColor: book.color }}
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 z-0 opacity-0"
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: book.color }}
            />

            <div className="relative z-10">
              <Image
                src={book.cover}
                alt={book.title}
                width={200}
                height={300}
                className="mx-auto rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <p className="mt-2 text-sm text-gray-500">{book.genre}</p>
              <p className="mt-1 text-sm text-gray-700">{book.description}</p>
              <p className="mt-2 font-bold text-gray-800">
                ⭐ {book.rating} | Copies: {book.available_copies}/
                {book.total_copies}
              </p>
              <div className="flex gap-2 mt-4">
                {book.pdf && (
                  <Link
                    href={book.pdf}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Read PDF
                  </Link>
                )}
                {book.video && (
                  <Link
                    href={book.video}
                    target="_blank"
                    className="bg-green-600 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Watch Video
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
