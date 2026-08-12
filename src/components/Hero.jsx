import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import LogoStrip from "./LogoStrip";
import heroBg from "../assets/image/bggg.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#010611]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={heroBg}
          alt="Background"
          className="
            w-full
            h-full
            object-cover
            object-bottom
            pointer-events-none
            select-none
          "
        />
      </div>

      {/* Slight Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-8">

        {/* Logo Strip */}
        <div className="flex justify-center">
          <LogoStrip />
        </div>

        {/* Main Content */}
        <div className="text-center mt-16">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
            CYCRAI  2027
          </h1>

          <p className="mt-1.6 text-white text-lg md:text-1.7xl uppercase tracking-[2px] font-semibold">
            INTERNATIONAL CONFERENCE ON
          </p>

          <p className="mt-1.6 text-white/90 uppercase tracking-[2px] text-sm md:text-lg">
            CYBER SECURITY, CRYPTOGRAPHY AND RESPONSIBLE AI
          </p>

          
        </div>
      </div>
    </section>
  );
}
