import React from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaYoutube,
  FaInstagram,
  FaStar,
  FaHeart,
  FaArrowRight,
  FaComment,
} from "react-icons/fa";

const SocialTestimonial = ({ testimonial, onVideoClick }) => {
  if (testimonial.type === "youtube") {
    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
        whileHover={{ y: -10 }}
      >
        <div className="relative">
          <img
            src={testimonial.thumbnail}
            alt={testimonial.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              onClick={() => onVideoClick(testimonial.id)}
              className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlay className="text-2xl" />
            </motion.button>
          </div>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {testimonial.duration}
          </div>
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
            <FaYoutube className="mr-1" />
            YouTube
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            {testimonial.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            {testimonial.description}
          </p>
          <div className="flex items-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
            <span className="text-gray-500 text-sm ml-2">
              ({testimonial.rating}.0)
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -10 }}
    >
      <div className="relative">
        <img
          src={testimonial.image}
          alt={testimonial.username}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
          <FaInstagram className="mr-1" />
          Instagram
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex items-center justify-center text-white font-semibold">
            {testimonial.username.charAt(1).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              {testimonial.username}
            </p>
            <p className="text-xs text-gray-500">{testimonial.timestamp}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {testimonial.caption}
        </p>
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center hover:text-red-500 cursor-pointer transition-colors">
              <FaHeart className="mr-1" /> {testimonial.likes}
            </span>
            <span className="flex items-center hover:text-blue-500 cursor-pointer transition-colors">
              <FaComment className="mr-1" />{" "}
              {Math.floor(Math.random() * 50) + 10}
            </span>
          </div>
          <a
            href={`https://instagram.com/${testimonial.username.replace(
              "@",
              ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 flex items-center"
          >
            View <FaArrowRight className="ml-1 text-xs" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialTestimonial;
