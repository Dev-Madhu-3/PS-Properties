import React from "react";
import { Link } from "react-router-dom";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import Button from "../components/ui/Button";
import FeatureCard from "../components/common/FeatureCard";
import VideoCard from "../components/common/VideoCard";
import InstagramPost from "../components/common/InstagramPost";
import {
  BUSINESS_INFO,
  SERVICES,
  FEATURES,
  APPROVALS,
} from "../utils/constants";
import {
  FaCheckCircle,
  FaHome,
  FaUsers,
  FaShieldAlt,
  FaYoutube,
  FaInstagram,
  FaCertificate,
  FaBuilding,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const stats = [
    { icon: <FaHome />, number: "120+", label: "Properties Listed" },
    { icon: <FaUsers />, number: "80+", label: "Happy Clients" },
    { icon: <FaShieldAlt />, number: "100%", label: "Trust & Safety" },
    { icon: <FaCheckCircle />, number: "4+", label: "Years Experience" },
  ];

  // YouTube video data - replace with actual video IDs
  const youtubeVideos = [
    {
      id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      title: "How to Choose Your Dream Property",
      link: "https://youtu.be/tF1kURY-Wtk?si=BGCiCbzygXPtfqhk",
      thumbnail:
        "https://i.ytimg.com/an_webp/tF1kURY-Wtk/mqdefault_6s.webp?du=3000&sqp=CPSJ38oG&rs=AOn4CLBTVFGsRfJGdXlRKMtUi_oHub6Wgw",
      description: "Expert tips on finding the perfect property in Nellore",
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      title: "Real Estate Investment Guide",
      link: "https://youtu.be/YnzrRK0iGfU?si=h--BwtyPdsHMzCeZ",
      thumbnail:
        "https://i.ytimg.com/an_webp/YnzrRK0iGfU/mqdefault_6s.webp?du=3000&sqp=CPv13soG&rs=AOn4CLAAGC8TU5N5x4ZuQtZMDTXa9ZXGRQ",
      description: "Learn about profitable real estate investment strategies",
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      title: "Client Success Stories",
      link: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/BHOmqM9oYr0/mqdefault_6s.webp?du=3000&sqp=COuL38oG&rs=AOn4CLBhQUBhvS25z2Ml5GXDzgKSFYR0jw",
      description: "Hear from our satisfied clients about their experience",
    },
  ];

  // Instagram posts data - replace with actual post URLs
  const instagramPosts = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767366543/25405_jtz6ef.jpg",
      caption:
        "A bit far from the city? No problem at all! If it's coming at a low budget price – grab it immediately and invest!Do invest in lands for the next generation 🙂Secure your family's future with smart, affordable land investments today!",
      link: "https://www.instagram.com/reel/DOsoR8rjbag", // Replace with actual Instagram post URL
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767366542/25406_sjhazh.jpg",
      caption:
        "a beautiful 2BHK independent house deal in Nellore on Podalakuru Road! erfect location, spacious layout, and an amazing value for money📍",
      link: "https://www.instagram.com/reel/DSytYg8E0o7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Replace with actual Instagram post URL
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767366542/25407_jdmflc.jpg",
      caption:
        "Exciting Real Estate Opportunities on Jonnawada Road, Nellore! 🌟🏞️",
      likes: 312,
      link: "https://www.instagram.com/reel/DSkdMpRk5YB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Replace with actual Instagram post URL
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1767366541/25408_ytksxm.jpg",
      caption: "Best Investment Plot for Sale on Muttukuru Road 🤝",
      likes: 156,
      link: "https://www.instagram.com/reel/DSWrNtCDqdi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Replace with actual Instagram post URL
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Fade triggerOnce direction="up" duration={1000}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Find Your Dream Property with {BUSINESS_INFO.name}
                </h1>
              </Fade>
              <Fade triggerOnce direction="up" duration={1000} delay={200}>
                <p className="text-xl mb-8 text-primary-100">
                  Your trusted partner in real estate. We bridge the gap between
                  clients and customers with transparent and reliable property
                  solutions.
                </p>
              </Fade>

              {/* Government Approvals Badge */}
              <motion.div
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-4">
                  <FaCertificate className="text-2xl" />
                  <span className="text-lg font-semibold">
                    Government Approved Layouts
                  </span>
                </div>
                <div className="flex justify-center space-x-6 mt-2">
                  {BUSINESS_INFO.approvals.map((approval, index) => (
                    <span key={index} className="text-sm font-medium">
                      {approval}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Slide triggerOnce direction="left" duration={800} delay={400}>
                  <Link to="/contact">
                    <Button className="w-full sm:w-auto">Get Started</Button>
                  </Link>
                </Slide>
                <Slide triggerOnce direction="right" duration={800} delay={600}>
                  <Link to="/services">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      Our Services
                    </Button>
                  </Link>
                </Slide>
              </div>
            </div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <img
                  src="/src/assets/images/hero-bg.jpg"
                  alt="Real Estate"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </section>

      {/* Government Approvals Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <Bounce triggerOnce>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Government Approved & Certified
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our properties are fully approved by government authorities
                ensuring complete legal compliance and peace of mind
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROVALS.map((approval, index) => (
              <motion.div
                key={approval.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {approval.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {approval.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {approval.fullName}
                  </p>
                  <p className="text-gray-600">{approval.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-3xl text-primary-600 mb-2 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-800 mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Services
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive real estate solutions tailored to your
                needs
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

      {/* YouTube Videos Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Video Resources
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our expert videos to learn more about real estate in
                Nellore
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <VideoCard key={index} video={video} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://www.youtube.com/@PS_Properties01" // Replace with actual YouTube channel URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <FaYoutube className="mr-2" />
                Visit Our YouTube Channel
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Posts Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Follow Us on Instagram
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with our latest properties and success stories
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post, index) => (
              <InstagramPost key={post.id} post={post} index={index} />
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://www.instagram.com/ps_properties01" // Replace with actual Instagram profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <FaInstagram className="mr-2" />
                Follow @ps_properties01
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Fade triggerOnce direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose {BUSINESS_INFO.name}?
                </h2>
              </Fade>
              <div className="space-y-4">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.span
                      className="text-primary-600 text-xl mt-1"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Slide triggerOnce direction="left" delay={500}>
                  <Link to="/about">
                    <Button>Learn More About Us</Button>
                  </Link>
                </Slide>
              </div>
            </div>
            <motion.div
              className="bg-primary-100 rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Find Your Perfect Property?
              </h3>
              <p className="text-gray-600 mb-6">
                Let our expert team help you navigate the real estate market
                with confidence.
              </p>
              <div className="space-y-3">
                {[
                  "Free property consultation",
                  "No hidden charges",
                  "Expert guidance throughout",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-primary-600">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                100% Legal Compliance Guaranteed
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure all our properties meet the highest legal standards
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCertificate />,
                title: "RERA Registered",
                description:
                  "All projects are registered under RERA ensuring complete transparency and accountability",
              },
              {
                icon: <FaBuilding />,
                title: "DTCP Approved",
                description:
                  "Layouts approved by Directorate of Town and Country Planning following all norms",
              },
              {
                icon: <FaShieldAlt />,
                title: "NUDA Compliant",
                description:
                  "Fully compliant with Nellore Urban Development Authority guidelines",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 text-3xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Bounce triggerOnce>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
            </Bounce>
            <Fade triggerOnce direction="up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                clients
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Kumar",
                role: "Property Buyer",
                content:
                  "PS-Properties made my home buying experience seamless. Their expertise in the Nellore market is unmatched.",
                rating: 5,
              },
              {
                name: "Sita Reddy",
                role: "Property Seller",
                content:
                  "I sold my property through PS-Properties and got the best price. Their mediation skills are excellent.",
                rating: 5,
              },
              {
                name: "Anand Patel",
                role: "Investor",
                content:
                  "The property consultation services helped me make a wise investment decision. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
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
              Invest in Government Approved Properties
            </h2>
          </Bounce>
          <Fade triggerOnce direction="up" delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and take the first step
              towards owning your dream property with complete legal assurance.
            </p>
          </Fade>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Slide triggerOnce direction="left" delay={400}>
              <a
                href={`https://wa.me/918340859443`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                Join Community
              </a>
            </Slide>
            <Slide triggerOnce direction="right" delay={600}>
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto hover:bg-primary-500 text-white border-white"
                >
                  Call {BUSINESS_INFO.phone}
                </Button>
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
            className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
