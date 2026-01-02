
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, NAVIGATION_LINKS } from '../../utils/constants';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-xl">PS</span>
                </motion.div>
                <span className="font-bold text-xl">{BUSINESS_INFO.name}</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                {BUSINESS_INFO.description}
              </p>

              {/* Government Approvals */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FaCertificate className="text-primary-400" />
                  <span className="font-semibold">Government Approved:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS_INFO.approvals.map((approval, index) => (
                    <span
                      key={index}
                      className="bg-primary-600 bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {approval}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <motion.div
                  className="flex items-center space-x-2 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiMapPin className="text-primary-400" />
                  <span>{BUSINESS_INFO.address}</span>
                </motion.div>
                <motion.a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiPhone className="text-primary-400" />
                  <span>{BUSINESS_INFO.phone}</span>
                </motion.a>
                <motion.a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiMail className="text-primary-400" />
                  <span>{BUSINESS_INFO.email}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <motion.div
                className="space-y-2 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-2">
                  <FiClock className="text-primary-400" />
                  <div>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} {BUSINESS_INFO.name} Pvt Ltd. All rights reserved.
            </p>
            <motion.p
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Designed by Madhu
              <span className="text-red-500 mx-1">❤️</span> for real estate
              excellence
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;