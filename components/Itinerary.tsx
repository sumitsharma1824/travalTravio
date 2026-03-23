"use client";

import { ITINERARY_DATA } from "@/constants/itinerary";
import { motion } from "framer-motion";

const Itinerary = () => {
  return (
    <section className="relative px-6 lg:px-20 py-20 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
      
      {/* ✅ Background Pattern */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.svg" // 👈 your image name here
          alt="pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* ✅ Content Wrapper */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
          Your Journey Plan
        </h2>

        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-sky-400 to-emerald-400 transform -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {ITINERARY_DATA.map((day, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={day.day}
                  className={`flex items-center w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    className="w-[45%] relative group"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition duration-300" />

                    {/* Card */}
                    <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-gray-200 group-hover:shadow-xl transition duration-300">
                      
                      {/* Top Row */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {day.icon} {day.day}
                        </h3>

                        <span className="text-xs bg-sky-100 text-sky-600 px-3 py-1 rounded-full">
                          {day.title}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-6 h-6 rounded-full bg-sky-500 border-4 border-white shadow-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;