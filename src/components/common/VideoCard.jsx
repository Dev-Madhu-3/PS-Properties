import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const VideoCard = ({ video, index }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() =>
        window.open(video.link, "_blank", "noopener,noreferrer")
      }
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPlay className="text-white text-xl ml-1" />
          </motion.div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm">{video.description}</p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
