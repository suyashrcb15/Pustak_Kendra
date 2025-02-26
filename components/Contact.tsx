"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formsubmit.co/2k22.cse2213545@gmail.com",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-white drop-shadow-lg"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Contact Us
      </motion.h1>

      {/* Social Media Icons */}
      <motion.div
        className="flex space-x-6 mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://x.com/suyashrcb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-4xl text-blue-400 hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://github.com/suyashrcb15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl text-gray-800 hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/suyash-tiwari-r73833/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl text-blue-700 hover:scale-110 transition-transform duration-200"
          />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition hover:scale-105 border-4 border-gradient-to-r from-blue-400 to-purple-400"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-3">
          <span className="text-gray-700 font-semibold">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform transition hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </motion.form>

      {/* Footer */}
      <motion.footer
        className="mt-6 text-white font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &copy; Pustak Kendra. All rights reserved.
      </motion.footer>
    </motion.div>
  );
}
