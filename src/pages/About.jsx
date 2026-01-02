import React from "react";
import { BUSINESS_INFO, FEATURES, APPROVALS } from "../utils/constants";
import Button from "../components/ui/Button";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import {
  FaAward,
  FaHandshake,
  FaRocket,
  FaUsers,
  FaCertificate,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description:
        "We conduct business with honesty and transparency in all our dealings.",
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      description:
        "We strive for excellence in every service we provide to our clients.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Our clients' needs are at the center of everything we do.",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "We embrace modern solutions to provide the best real estate experience.",
    },
  ];

  const team = [
    {
      name: "Srinivas Rao",
      position: "Founder & CEO",
      experience: "15+ years in real estate",
    },
    {
      name: "Priya Sharma",
      position: "Senior Consultant",
      experience: "10+ years in property management",
    },
    {
      name: "Rajesh Kumar",
      position: "Legal Advisor",
      experience: "12+ years in real estate law",
    },
    {
      name: "Anjali Reddy",
      position: "Customer Relations",
      experience: "8+ years in client services",
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
                About {BUSINESS_INFO.name}
              </h1>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-primary-100">
                Your trusted real estate partner in Nellore, dedicated to
                providing exceptional property solutions with integrity and
                professionalism.
              </p>
            </Fade>

            {/* Approvals Badge */}
            <motion.div
              className="mt-6 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {BUSINESS_INFO.approvals.map((approval, index) => (
                <motion.span
                  key={approval}
                  className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {approval} Approved
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-white opacity-10 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </section>

      {/* Government Approvals Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Government Approvals
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are fully certified and approved by all major government
                authorities
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROVALS.map((approval, index) => (
              <motion.div
                key={approval.name}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {approval.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {approval.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {approval.fullName}
                </p>
                <p className="text-gray-600">{approval.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    ✓ Approved
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Slide triggerOnce direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
              </Slide>
              <Fade triggerOnce direction="left" delay={200}>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to revolutionize the real estate
                  experience in Nellore, {BUSINESS_INFO.name} has been serving
                  the community with dedication and expertise since our
                  inception.
                </p>
                <p className="text-gray-600 mb-4">
                  We understand that buying, selling, or renting property is one
                  of the most significant decisions in a person's life. That's
                  why we've built our business on the pillars of trust,
                  transparency, and customer satisfaction.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experienced professionals works tirelessly to
                  ensure that every client receives personalized attention and
                  the best possible outcome for their real estate needs.
                </p>
              </Fade>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Properties Handled" },
                  { number: "300+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary-50 p-4 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-primary-600 mb-1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.6 + index * 0.1,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="bg-gray-100 rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To bridge the gap between property buyers and sellers by
                providing transparent, reliable, and efficient real estate
                services that exceed client expectations.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted real estate agency in Nellore, known
                for our integrity, expertise, and unwavering commitment to
                client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our every action and decision
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="text-4xl text-primary-600 mb-4 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-4xl text-primary-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
            </Bounce>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <motion.span
                  className="text-primary-600 text-2xl mt-1"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Slide triggerOnce direction="up" delay={500}>
              <Button>
                <Link to="/contact">Get Started With Us</Link>
              </Button>
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;