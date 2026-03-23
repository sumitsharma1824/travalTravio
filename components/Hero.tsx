"use client";

import { Globe3DDemo } from "@/components/ui/3d-globe";

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10 gap-10">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Discover Amazing Treks Around 
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
          Explore breathtaking destinations, plan your next adventure, and
          connect with fellow travelers using Trovia.
        </p>

        <div className="flex justify-center lg:justify-start ">
          <input
            type="text"
            placeholder="Search treks (Kedarkantha, Manali...)"
            className="w-full max-w-md px-4 py-3 border rounded-full outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Explore Treks
          </button>

          <button className="border px-6 py-3 rounded-full hover:bg-gray-50 hover:text-black transition">
            Join Now
          </button>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-gray-500">
          <span>🌍 50+ Treks</span>
          <span>👥 10K+ Travelers</span>
          <span>⭐ 4.8 Rating</span>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center overflow-visible">
        <div className="w-full max-w-[600px] h-[300px] sm:h-[400px] lg:h-[500px]">
          <Globe3DDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
