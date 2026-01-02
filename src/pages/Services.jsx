import React from "react";
import { SERVICES, APPROVALS } from "../utils/constants";
import Button from "../components/ui/Button";
import FeatureCard from "../components/common/FeatureCard";
import { Link } from "react-router-dom";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import {
  FaFileContract,
  FaHome,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaCertificate,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const additionalServices = [
    {
      icon: <FaFileContract />,
      title: "Documentation Support",
      description:
        "Complete assistance with all legal paperwork and documentation required for property transactions.",
      features: [
        "Title verification",
        "Registration support",
        "Legal compliance",
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Market Analysis",
      description:
        "In-depth analysis of property market trends and valuations to help you make informed decisions.",
      features: ["Price trends", "ROI calculations", "Market forecasts"],
    },
    {
      icon: <FaShieldAlt />,
      title: "Property Verification",
      description:
        "Thorough verification of property documents and legal status to ensure safe transactions.",
      features: [
        "Document verification",
        "Encumbrance check",
        "Legal clearance",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understanding your requirements and preferences",
    },
    {
      step: 2,
      title: "Property Search",
      description: "Finding properties that match your criteria",
    },
    {
      step: 3,
      title: "Site Visits",
      description: "Arranging visits to shortlisted properties",
    },
    {
      step: 4,
      title: "Negotiation",
      description: "Getting the best deal for you",
    },
    {
      step: 5,
      title: "Documentation",
      description: "Handling all legal paperwork",
    },
    {
      step: 6,
      title: "Closing",
      description: "Successful completion of the transaction",
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
                Our Services
              </h1>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-primary-100">
                Comprehensive real estate solutions tailored to meet all your
                property needs in Nellore and beyond.
              </p>
            </Fade>

            {/* Approvals Badge */}
            <motion.div
              className="mt-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <FaCertificate className="text-xl" />
                <span className="font-semibold">
                  All Services Comply with NUDA, RERA & DTCP Norms
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-white opacity-10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </section>

      {/* Government Compliance Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <Bounce triggerOnce>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Government Compliant Services
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our services strictly adhere to government regulations and
                approvals
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROVALS.map((approval, index) => (
              <motion.div
                key={approval.name}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{approval.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {approval.name} Compliant
                    </h3>
                    <p className="text-sm text-gray-600">{approval.fullName}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Core Services
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our primary services designed to facilitate smooth real estate
                transactions
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <FeatureCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Additional Services
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Supporting services to ensure a complete real estate experience
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-3xl text-primary-600 mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + idx * 0.1 + index * 0.1,
                      }}
                    >
                      <span className="text-primary-600 mr-2">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Process
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to ensure smooth and successful property
                transactions
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.step}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                {item.step < process.length && (
                  <div className="hidden lg:block absolute top-12 left-6 w-0.5 h-16 bg-primary-200 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Assurance Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Complete Legal Assurance
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure 100% legal compliance for all our services
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCheckCircle />,
                title: "RERA Registered Projects",
                description:
                  "All our projects are registered under RERA Act for complete transparency",
              },
              {
                icon: <FaBuilding />,
                title: "DTCP Approved Layouts",
                description:
                  "Layouts approved by DTCP ensuring proper planning and development",
              },
              {
                icon: <FaCertificate />,
                title: "NUDA Compliant",
                description:
                  "Fully compliant with Nellore Urban Development Authority guidelines",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Slide triggerOnce direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Our Services Stand Out
                </h2>
              </Slide>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaHandshake />,
                    title: "Personalized Approach",
                    desc: "Every client receives customized solutions based on their unique requirements.",
                  },
                  {
                    icon: <FaClock />,
                    title: "Time-Efficient",
                    desc: "We value your time and ensure quick turnaround for all services.",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Risk-Free",
                    desc: "Our thorough verification process ensures safe and secure transactions.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="text-primary-600 text-xl mt-1 flex-shrink-0"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="bg-primary-100 rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards your real estate goals with our
                expert team by your side.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Free initial consultation",
                  "No obligation quotes",
                  "Expert guidance guaranteed",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-primary-600">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="w-full">Schedule a Consultation</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding overflow-hidden">
        <div className="container-custom text-center relative">
          <Bounce triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with Your Property?
            </h2>
          </Bounce>
          <Fade triggerOnce direction="up" delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you navigate the complex world of
              real estate with ease.
            </p>
          </Fade>
          <Slide triggerOnce direction="up" delay={400}>
            <Link to="/contact">
              <Button variant="secondary">Contact Us Today</Button>
            </Link>
          </Slide>

          {/* Animated background elements */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full"
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
        </div>
      </section>
    </div>
  );
};

export default Services;