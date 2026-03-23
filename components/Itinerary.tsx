"use client";
import { ITINERARY_DATA } from "@/constants/itinerary";
import { motion } from "framer-motion";

const Itinerary = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-[#0B0F19] text-white">
      <h2 className="text-3xl font-bold mb-8">Itinerary</h2>

      <div className="flex flex-col gap-6">
        {ITINERARY_DATA.map((day) => (
          <motion.div
            key={day.day}
            whileHover={{ x: 10 }}
            className="p-4 bg-[#1F2937] rounded-xl border border-cyan-500/20"
          >
            <h3 className="text-lg font-semibold text-cyan-400">
              Day {day.day}: {day.title}
            </h3>
            <p className="text-gray-300 mt-1 text-sm">{day.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;