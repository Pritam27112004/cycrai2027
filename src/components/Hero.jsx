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
      <div className="relative z-10 w-full">

  {/* Logo Strip at Top */}
  <div className="w-full">
    <LogoStrip />
  </div>

  {/* Hero Text */}
  <div className="text-center mt-6">

          <h1
  className="
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl

    font-black

    tracking-[0.04em]

    leading-none

    text-white

    drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
  "
>
  CYCRAI{" "}
  <span
    className="
      bg-gradient-to-r
      from-[#20E0FF]
      via-[#19BDF2]
      to-[#315CFF]

      bg-clip-text
      text-transparent

      drop-shadow-[0_0_25px_rgba(20,190,255,0.35)]
    "
  >
    2027
  </span>
</h1>

          <p
  className="
    mt-3

    text-white

    text-lg
    sm:text-xl
    md:text-2xl

    font-medium

    tracking-[0.18em]

    uppercase

    drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]
  "
>
  International Conference on
</p>

          <p
  className="
    mt-3

    text-[#27D9F7]

    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl

    font-semibold

    tracking-[0.12em]

    uppercase

    drop-shadow-[0_0_15px_rgba(20,210,245,0.35)]
  "
>
  Cyber Security, Cryptography and Responsible AI
</p>
<div
  className="
    mt-5

    flex
    flex-col
    sm:flex-row

    items-center
    justify-center

    gap-4
    sm:gap-8

    text-white
  "
>
  <div className="flex items-center gap-3">
    <FaCalendarAlt
      className="
        text-[#16D8F5]
        text-lg

        drop-shadow-[0_0_8px_rgba(22,216,245,0.8)]
      "
    />

    <span
      className="
        text-sm
        md:text-base

        font-medium

        tracking-wide
      "
    >
      24 – 26 SEPTEMBER 2027
    </span>
  </div>

  <div
    className="
      hidden
      sm:block

      h-6
      w-px

      bg-cyan-400/40
    "
  />

  <div className="flex items-center gap-3">
    <FaLocationDot
      className="
        text-[#16D8F5]
        text-lg

        drop-shadow-[0_0_8px_rgba(22,216,245,0.8)]
      "
    />

    <span
      className="
        text-sm
        md:text-base

        font-medium

        tracking-wide
      "
    >
      NEW TOWN, KOLKATA, INDIA
    </span>
  </div>
</div>
<div
  className="
    mt-5

    flex
    flex-col
    sm:flex-row

    justify-center
    items-center

    gap-4
    sm:gap-7
  "
>
  {/* Explore */}

  <button
    onClick={() => navigate("/about")}
    className="
      w-[190px]
      h-[50px]

      rounded-lg

      border
      border-cyan-400

      bg-[#021426]/70

      text-[#29D8F5]

      font-semibold

      tracking-wide

      transition-all
      duration-300

      hover:bg-cyan-400/10

      hover:shadow-[0_0_25px_rgba(20,210,245,0.3)]

      hover:-translate-y-1
    "
  >
    EXPLORE MORE
  </button>

  {/* Register */}

  <button
    onClick={() => navigate("/registration")}
    className="
      w-[190px]
      h-[50px]

      rounded-lg

      bg-gradient-to-r
      from-[#16CFF2]
      to-[#3158F5]

      text-white

      font-bold

      tracking-wide

      shadow-[0_8px_25px_rgba(30,100,245,0.3)]

      transition-all
      duration-300

      hover:-translate-y-1

      hover:shadow-[0_10px_35px_rgba(30,120,245,0.5)]
    "
  >
    REGISTER NOW
  </button>
</div>
          
        </div>
      </div>
    </section>
  );
}
