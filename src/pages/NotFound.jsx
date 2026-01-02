import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaSearch,
  FaArrowLeft,
  FaExclamationTriangle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { BUSINESS_INFO } from "../utils/constants";
import AnimatedBackground from "../components/common/AnimatedBackground";

const NotFound = () => {
  const quickLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About Us", path: "/about", icon: <FaHome /> },
    { name: "Services", path: "/services", icon: <FaHome /> },
    { name: "Contact", path: "/contact", icon: <FaHome /> },
  ];

  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="text-9xl font-bold text-primary-200 select-none"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  404
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <FaExclamationTriangle className="text-6xl text-primary-600" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Oops! Page Not Found
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The page you're looking for seems to have vanished into the
              digital void. Don't worry, even the best properties sometimes need
              to be rediscovered!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <FaHome className="mr-2" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => window.history.back()}
                  className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FaArrowLeft className="mr-2" />
                  Go Back
                </button>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <FaSearch className="mr-3 text-primary-600" />
                Looking for Something?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link
                      to={link.path}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all duration-300 text-center group"
                    >
                      <span className="text-gray-700 group-hover:text-primary-600 font-medium transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-primary-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-center">
                  <FaPhone className="mr-2 text-primary-600" />
                  Call Us
                </h3>
                <p className="text-gray-600 mb-3">
                  Need immediate assistance? Give us a call!
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="bg-primary-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-center">
                  <FaEnvelope className="mr-2 text-primary-600" />
                  Email Support
                </h3>
                <p className="text-gray-600 mb-3">
                  Send us your queries and we'll respond promptly.
                </p>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* Fun Message */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-sm text-gray-500 italic">
                "In real estate, as in life, sometimes the best opportunities
                are found when you're lost."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default NotFound;
