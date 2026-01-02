import React from "react";
import { BUSINESS_INFO } from "../utils/constants";
import ContactForm from "../components/common/ContactForm";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone />,
      title: "Phone",
      details: BUSINESS_INFO.phone,
      action: `tel:${BUSINESS_INFO.phone}`,
      color: "text-green-600",
    },
    {
      icon: <FiMail />,
      title: "Email",
      details: BUSINESS_INFO.email,
      action: `mailto:${BUSINESS_INFO.email}`,
      color: "text-blue-600",
    },
    {
      icon: <FiMapPin />,
      title: "Office Address",
      details: BUSINESS_INFO.address,
      action: `https://maps.google.com/?q=${encodeURIComponent(
        BUSINESS_INFO.address
      )}`,
      color: "text-red-600",
    },
    {
      icon: <FiClock />,
      title: "Business Hours",
      details: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
      action: null,
      color: "text-purple-600",
    },
  ];

  const faqs = [
    {
      question: "Do you charge for initial consultation?",
      answer:
        "No, we offer free initial consultation to understand your requirements.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Nellore and surrounding areas in Andhra Pradesh.",
    },
    {
      question: "How long does a typical property transaction take?",
      answer:
        "It varies, but typically takes 30-45 days from agreement to registration.",
    },
    {
      question: "Do you provide after-sales support?",
      answer:
        "Yes, we provide complete support even after the transaction is completed.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Bounce triggerOnce>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-primary-100">
                Get in touch with our expert team for all your real estate
                needs. We're here to help you every step of the way.
              </p>
            </Fade>
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`text-3xl ${info.color} mb-4 flex justify-center`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                {info.action ? (
                  <a
                    href={info.action}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                    target={
                      info.title === "Office Address" ? "_blank" : "_self"
                    }
                    rel={
                      info.title === "Office Address"
                        ? "noopener noreferrer"
                        : ""
                    }
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Slide triggerOnce direction="left">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
              </Slide>
              <Fade triggerOnce direction="left" delay={200}>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </Fade>
              <ContactForm />
            </div>

            {/* Map & Quick Contact */}
            <div>
              <Slide triggerOnce direction="right">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Visit Our Office
                </h2>
              </Slide>
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <FiMapPin className="text-4xl text-primary-600 mx-auto mb-2" />
                    </motion.div>
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Nellore, India</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Quick Contact Options
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: <FiPhone />,
                        text: "Call us directly",
                        href: `tel:${BUSINESS_INFO.phone}`,
                      },
                      {
                        icon: <FaWhatsapp />,
                        text: "Chat on WhatsApp",
                        href: `https://wa.me/918340859443`,
                      },
                      {
                        icon: <FiMail />,
                        text: "Send us an email",
                        href: `mailto:${BUSINESS_INFO.email}`,
                      },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={
                          item.text.includes("WhatsApp") ? "_blank" : "_self"
                        }
                        rel={
                          item.text.includes("WhatsApp")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div
                className="bg-red-50 border border-red-200 rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-red-800 mb-2">
                  Need Urgent Assistance?
                </h3>
                <p className="text-red-700 mb-3">
                  For urgent real estate matters, call us directly at:
                </p>
                <motion.a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-2xl font-bold text-red-600 hover:text-red-700 inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {BUSINESS_INFO.phone}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding overflow-hidden">
        <div className="container-custom text-center relative">
          <Bounce triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Real Estate Journey?
            </h2>
          </Bounce>
          <Fade triggerOnce direction="up" delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team guide you through every step of your property
              transaction.
            </p>
          </Fade>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Slide triggerOnce direction="left" delay={400}>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary">
                Call Now
              </a>
            </Slide>
            <Slide triggerOnce direction="right" delay={600}>
              <a
                href={`https://wa.me/918340859443`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                Chat on WhatsApp
              </a>
            </Slide>
          </div>

          {/* Animated background elements */}
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
