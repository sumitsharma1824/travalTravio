import Image from "next/image";

const Gallery = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-[#111827] text-white">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>

      {/* Grid container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
  <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden">
    <Image src="/Swat_Valley.jpeg" alt="Swat Valley" fill className="object-cover" />
  </div>

  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden">
    <Image src="/Kedarnath.jpeg" alt="Kedarnath" fill className="object-cover" />
  </div>

  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden">
    <Image src="/Chandrashila_Peak.jpeg" alt="Kedarnath" fill className="object-cover" />
  </div>

  <div className="relative col-span-2 row-span-1 rounded-xl overflow-hidden">
    <Image src="/Hampta_Valley.jpeg" alt="Hampta Valley" fill className="object-cover" />
  </div>

  <div className="relative col-span-1 row-span-2 rounded-xl overflow-hidden">
    <Image src="/Triund_Trek.jpeg" alt="Triund Trek" fill className="object-cover" />
  </div>
  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden">
    <Image src="/gallary.jpeg" alt="Kedarnath" fill className="object-cover" />
  </div>
  <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden">
    <Image src="/gallery1.jpeg" alt="Kedarnath" fill className="object-cover" />
  </div>
  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden">
    <Image src="/gallary2.jpeg" alt="Kedarnath" fill className="object-cover" />
  </div>
</div>
    </section>
  );
};

export default Gallery;