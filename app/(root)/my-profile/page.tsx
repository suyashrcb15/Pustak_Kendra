import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

const Page = () => {
  return (
    <>
      {/* Logout Button - Centered & Styled */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mb-10 flex justify-center items-center"
      >
        <Button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all">
          🔐 Logout
        </Button>
      </form>

      {/* Pustak Kendra Section */}
      <section className="mb-10 text-center text-light-200">
        <h1 className="text-4xl font-bold text-light-200">📚 Pustak Kendra</h1>

        <p className="text-lg text-gray-200 mt-6">
          <strong>📖 Free PDFs of popular books:</strong>
          Access a vast collection of books in PDF format without any cost.
          Whether you're into fiction, self-help, or academic resources, we've
          got you covered.
        </p>

        <p className="text-gray-300 mt-6">
          <strong>📚 Explore books across multiple genres:</strong>
          Our digital library includes literature, science, history, philosophy,
          and more. Discover books that match your interests and expand your
          knowledge effortlessly.
        </p>

        <p className="text-gray-300 mt-6">
          <strong>📝 Detailed descriptions for better selection:</strong>
          Each book comes with a comprehensive summary, author details, and key
          highlights. This helps you make an informed decision before diving
          into a book.
        </p>

        <p className="text-gray-300 mt-6">
          <strong>🔄 Multiple copies available for easy access:</strong>
          Never worry about book availability. Our platform ensures that users
          can access and download books instantly without restrictions.
        </p>

        <p className="text-gray-300 mt-6">
          <strong>📥 Instant downloads & offline reading:</strong>
          Download books with a single click and read them anytime, anywhere.
          Enjoy an uninterrupted reading experience without needing an internet
          connection.
        </p>

        <p className="text-gray-300 mt-6">
          <strong>🔍 Smart search & category filters:</strong>
          Find your favorite books quickly using our intelligent search feature.
          Browse books by genre, author, or popularity to discover hidden gems.
        </p>

        <p className="text-gray-300 font-semibold text-red-500 animate-pulse mt-6">
          🚀 <strong>Coming Soon:</strong>
          Get ready for personalized recommendations, user reviews, and an
          interactive reading community to make book discovery even more
          exciting!
        </p>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-center py-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Pustak Kendra. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Page;
