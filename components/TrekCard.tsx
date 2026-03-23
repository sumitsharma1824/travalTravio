"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type TrekCardProps = {
  title: string;
  location: string;
  duration: string;
  difficulty: string;
  price: number;
  rating: number;
  image: string;
};

const TrekCard = ({
  title,
  location,
  duration,
  difficulty,
  price,
  rating,
  image,
}: TrekCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0B0F19] border border-[#1F2937] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-126 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md border border-cyan-400/30">
          ⭐ {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold">{title}</h3>

        <p className="text-gray-400 text-sm">{location}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-400 text-sm">
            {duration} • {difficulty}
          </span>

          <span className="text-cyan-400 font-bold text-lg">
            ₹{price}
          </span>
        </div>
       <div className="grid grid-cols-4 gap-2">
<button className="mt-3 px-1.5 col-span-3 bg-cyan-500/10 border border-cyan-400 text-cyan-400 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300">
          View Details
        </button>
        <button className="mt-3 px-1.5 bg-cyan-500/10 border border-cyan-400 text-cyan-400 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300">
          Book Now
        </button>
       </div>
        
      </div>
    </motion.div>
  );
};

export default TrekCard;