import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../utils/constants";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../assets/icons/logo.jpg";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="bg-white shadow-md sticky top-0 z-50 p-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Icon */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 rounded-3xl overflow-hidden border border-solid border-primary-600 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767375736/logo_wzdplv.jpg"
                className="scale-[1.1] "
                alt="logo"
              />
            </div>

            <motion.span
              className="font-bold text-xl text-primary-900"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              PS Properties
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-gray-600 hover:text-primary-600 transition-colors font-medium relative group ${
                    location.pathname === link.path ? "text-primary-600" : ""
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link to="/contact">
                <button className="btn-primary">Contact Us</button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-600 hover:text-primary-600"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <Fade duration={300}>
            <div className="md:hidden text m-auto px-4 py-2 border-t">
              <Fade cascade delay={10} damping={0.05} direction="left">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-gray-600 hover:text-primary-600 transition-colors font-medium ${
                      location.pathname === link.path ? "text-primary-600" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </Fade>
              <div className="mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="btn-primary w-full">Contact Us</button>
                </Link>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
