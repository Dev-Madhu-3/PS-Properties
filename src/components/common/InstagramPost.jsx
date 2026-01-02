import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaHeart } from "react-icons/fa";

const InstagramPost = ({ post, index }) => {
  return (
    <motion.div
      key={post.id}
      className="group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => window.open(post.link, "_blank")}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-sm line-clamp-2">{post.caption}</p>
            <div className="flex items-center mt-2">
              <FaHeart className="mr-2" />
              <span className="text-xs">Few Days Ago</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InstagramPost;
