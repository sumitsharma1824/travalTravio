"use client";
import { DESCRIPTION_DATA } from "@/constants/description";

const Description = () => {
  const { intro, highlights } = DESCRIPTION_DATA;

  return (
    <section className="px-6 lg:px-20 py-16 bg-[#0B0F19] text-white">
      <h2 className="text-3xl font-bold mb-4">About the Trek</h2>
      <p className="text-gray-300 mb-6">{intro}</p>

      <ul className="flex flex-col gap-2">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-200 text-sm">
            {/* Keep the first emoji or icon in cyan */}
            <span className="text-cyan-400">{highlight.split(" ")[0]}</span>
            {highlight.replace(highlight.split(" ")[0], "")}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Description;