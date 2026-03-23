import Feature from "@/components/Feature";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import TrekSection from "@/components/TrekSection";
import Description from "@/components/Description";
import Gallery from "@/components/Gallery";
import Itinerary from "@/components/Itinerary";

export default function Home() {
  return (
    <>
      <Hero />
       <TrekSection />   {/* 👈 ADD THIS */}  
       {/* <Description /> */}
      <Gallery />
      <Itinerary />    
      <Guide />
      <Feature />
      <GetApp />
      {/* <div className="h-[2000px] bg-red-500"></div> */}
    </>
  );
}