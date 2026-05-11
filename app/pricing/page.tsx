'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pricingPackages = [
  {
    title: "Starter Website",
    description: "Ideal for personal brands or small businesses starting online.",
    price: "₹15,000",
    color: "bg-orange-500",
    features: [
      "Up to 5-7 Pages",
      "Responsive (Mobile-Friendly) Design",
      "Basic UI/UX Layout",
      "Contact Form",
      "Basic SEO Setup",
      "Delivery: 7-10 working Days"
    ]
  },
  {
    title: "Business Website",
    description: "Perfect for growing businesses that need a strong online presence.",
    price: "₹25,000",
    color: "bg-green-500",
    features: [
      "Up to 7-12 Pages",
      "Custom UI/UX Design",
      "Fully Responsive Design",
      "CMS Integration",
      "On-page SEO Optimization",
      "Contact & Inquiry Forms",
      "Delivery: 14-18 Working Days"
    ]
  },
  {
    title: "Custom Website",
    description: "Advanced solution for brands that want impact and performance.",
    price: "Depends on Complexity",
    color: "bg-orange-600",
    features: [
      "Pages According to Need / Admin Dashboard",
      "Custom Premium Design",
      "Advanced UI/UX & Animations",
      "E-commerce or Booking Integration",
      "Speed & Performance Optimization",
      "SEO & Analytics Setup",
      "Priority Support",
      "Delivery: According to Project"
    ]
  }
];

export default function PricingPage() {
  return (
    <main className="bg-[#E5E5E5] min-h-screen font-sans">

      <section className="max-w-6xl mx-auto px-4 py-20">

        {/* 🔥 Styled Heading */}
        <div className="text-center mb-20">

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1f2937] leading-tight font-[Caveat]">
            
            You are not{" "}
            
            <span className="relative inline-block">
              <span className="relative z-10">dreaming!</span>

              {/* Yellow highlight */}
              <span className="absolute left-0 bottom-2 w-full h-6 bg-[#2f4f3f] -z-0 rotate-[-2deg] rounded-md"></span>
            </span>
          </h1>

          {/* Optional Subtext */}
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 font-[Caveat]">
            Build your website simple, fast & affordable.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-6">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-[#fdfcf7] rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between text-stone-900 overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Accent Bar */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-24 rounded-r-full ${pkg.color}`} />

              {/* Title */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">{pkg.title}</h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="md:w-1/4 mb-6 md:mb-0 text-left md:text-center">
                <span className="text-3xl font-black tracking-tighter">
                  {pkg.price}
                </span>
              </div>

              {/* Features */}
              <div className="md:w-1/3">
                <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="leading-tight">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </main>
  );
}