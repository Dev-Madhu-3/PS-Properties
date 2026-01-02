import React from "react";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 group">
        <motion.div
          className="text-4xl mb-4"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 + 0.2 }}
              >
                <span className="text-primary-600 mr-2">•</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
