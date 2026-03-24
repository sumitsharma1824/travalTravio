"use client";

import Image from "next/image";

const Gallery = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-[#111827] text-white">
      
      {/* ✅ Centered Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Gallery
        </h2>

        {/* 🔥 Gradient Underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto mt-3 rounded-full" />
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">

        {/* Reusable Image Wrapper */}
        {[
          { src: "/Swat_Valley.jpeg", alt: "Swat Valley", cls: "col-span-2 row-span-2" },
          { src: "/Kedarnath.jpeg", alt: "Kedarnath", cls: "col-span-1 row-span-1" },
          { src: "/Chandrashila_Peak.jpeg", alt: "Chandrashila Peak", cls: "col-span-1 row-span-1" },
          { src: "/Hampta_Valley.jpeg", alt: "Hampta Valley", cls: "col-span-2 row-span-1" },
          { src: "/Triund_Trek.jpeg", alt: "Triund Trek", cls: "col-span-1 row-span-2" },
          { src: "/gallary.jpeg", alt: "Gallery Image", cls: "col-span-1 row-span-1" },
          { src: "/gallery1.jpeg", alt: "Gallery Image 1", cls: "col-span-2 row-span-2" },
          { src: "/gallary2.jpeg", alt: "Gallery Image 2", cls: "col-span-1 row-span-1" },
        ].map((img, index) => (
          <div
            key={index}
            className={`relative ${img.cls} rounded-xl overflow-hidden group cursor-pointer`}
          >
            {/* Image */}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

            {/* Title */}
            <p className="absolute bottom-3 left-3 text-sm opacity-0 group-hover:opacity-100 transition duration-500">
              {img.alt}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Gallery;