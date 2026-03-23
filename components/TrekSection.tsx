import TrekCard from "@/components/TrekCard";
import { TREKS } from "@/constants/treks";

export default function TrekSection() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-[#0B0F19]">
      
      <h2 className="text-white text-3xl font-bold mb-8">
        Explore Treks
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TREKS.map((trek) => (
          <TrekCard key={trek.id} {...trek} />
        ))}
      </div>

    </section>
  );
}