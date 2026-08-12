
// import uem from "../assets/image/uem.jpeg";

// import {
//   FaMapMarkerAlt,
//   FaUniversity,
//   FaTree,
//   FaFlask,
//   FaPlaneArrival,
// } from "react-icons/fa";

// export default function Venue() {
//   return (
//     <section
//       id="venue"
//       className="relative overflow-hidden bg-[#020817] py-28 scroll-mt-24"
//     >
//       {/* Background Glow */}

//       <div className="absolute inset-0">

//         <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

//         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div
//           className="text-center mb-20"
//           data-aos="fade-up"
//         >

//           <span
//             className="
//               inline-block
//               px-5
//               py-2
//               rounded-full
//               border
//               border-cyan-400/30
//               bg-cyan-400/10
//               text-cyan-300
//               uppercase
//               tracking-[3px]
//               text-sm
//               font-semibold
//             "
//           >
//             Conference Venue
//           </span>

//           <h2
//             className="
//               mt-6
//               text-4xl
//               md:text-6xl
//               font-black
//               text-white
//               font-['Orbitron']
//             "
//           >
//             Institute of Engineering and Management
//           </h2>

//           <p className="mt-4 text-xl font-semibold text-cyan-300">
//             University Campus • New Town • Kolkata • India
//           </p>

//           <p
//             className="
//               mt-8
//               max-w-4xl
//               mx-auto
//               text-lg
//               leading-8
//               text-slate-300
//             "
//           >
//             Located in the heart of New Town, Kolkata, the Institute of
//             Engineering and Management (IEM) University Campus offers an
//             inspiring environment for researchers, academicians, industry
//             experts, and students. Equipped with modern infrastructure,
//             advanced laboratories, smart classrooms, and world-class
//             conference facilities, the campus provides an ideal setting for
//             CYCRAI 2027.
//           </p>

//         </div>

//         {/* Main Layout */}

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Image */}

//           <div
//             data-aos="fade-right"
//             className="
//               relative
//               rounded-3xl
//               overflow-hidden
//               border
//               border-cyan-400/20
//               bg-[#071326]/60
//               backdrop-blur-xl
//               p-3
//               shadow-[0_0_40px_rgba(34,211,238,0.12)]
//             "
//           >

//             <img
//               src={uem}
//               alt="Institute of Engineering and Management"
//               className="
//                 w-full
//                 rounded-2xl
//                 transition-all
//                 duration-700
//                 hover:scale-[1.03]
//               "
//             />

//           </div>

//           <div data-aos="fade-left">

//   {/* Location Badge */}

//   <div
//     className="
//       inline-flex
//       items-center
//       gap-3
//       px-5
//       py-3
//       rounded-full
//       border
//       border-cyan-400/20
//       bg-cyan-500/10
//       text-cyan-300
//       font-semibold
//     "
//   >
//     <FaMapMarkerAlt />
//     Kolkata, West Bengal, India
//   </div>

//   {/* Title */}

//   <h3 className="mt-8 text-4xl font-bold text-white">
//     Welcome to the Host Institution
//   </h3>

//   <p className="mt-6 text-slate-300 text-lg leading-8">
//     The Institute of Engineering and Management (IEM), Kolkata,
//     is one of India's leading institutions recognized for excellence
//     in engineering education, cutting-edge research, innovation,
//     entrepreneurship, and strong industry collaborations. The
//     university provides an ideal academic environment for hosting
//     prestigious international conferences such as CYCRAI 2027.
//   </p>

//   <p className="mt-5 text-slate-300 text-lg leading-8">
//     Located in New Town, Kolkata, the campus offers modern lecture
//     halls, advanced laboratories, high-speed connectivity,
//     spacious auditoriums, collaborative research spaces, and
//     convenient access to hotels, the airport, and major city
//     attractions.
//   </p>

//   {/* Feature Cards */}

//   <div className="grid sm:grid-cols-2 gap-5 mt-10">

//     <div
//       className="
//         group
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-[#071326]/70
//         backdrop-blur-xl
//         p-6
//         transition-all
//         duration-500
//         hover:-translate-y-2
//         hover:border-cyan-400/60
//       "
//     >
//       <FaUniversity className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
//       <h4 className="text-white font-semibold">
//         Modern Infrastructure
//       </h4>
//       <p className="text-slate-400 text-sm mt-2">
//         Smart classrooms, auditoriums and conference facilities.
//       </p>
//     </div>

//     <div
//       className="
//         group
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-[#071326]/70
//         backdrop-blur-xl
//         p-6
//         transition-all
//         duration-500
//         hover:-translate-y-2
//         hover:border-cyan-400/60
//       "
//     >
//       <FaTree className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
//       <h4 className="text-white font-semibold">
//         Green Campus
//       </h4>
//       <p className="text-slate-400 text-sm mt-2">
//         Beautiful surroundings providing a vibrant learning atmosphere.
//       </p>
//     </div>

//     <div
//       className="
//         group
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-[#071326]/70
//         backdrop-blur-xl
//         p-6
//         transition-all
//         duration-500
//         hover:-translate-y-2
//         hover:border-cyan-400/60
//       "
//     >
//       <FaFlask className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
//       <h4 className="text-white font-semibold">
//         Research Ecosystem
//       </h4>
//       <p className="text-slate-400 text-sm mt-2">
//         Advanced laboratories supporting interdisciplinary research.
//       </p>
//     </div>

//     <div
//       className="
//         group
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-[#071326]/70
//         backdrop-blur-xl
//         p-6
//         transition-all
//         duration-500
//         hover:-translate-y-2
//         hover:border-cyan-400/60
//       "
//     >
//       <FaPlaneArrival className="text-3xl text-cyan-300 mb-4 group-hover:scale-110 transition" />
//       <h4 className="text-white font-semibold">
//         Easy Airport Access
//       </h4>
//       <p className="text-slate-400 text-sm mt-2">
//         Conveniently located near Netaji Subhas Chandra Bose International Airport.
//       </p>
//     </div>

//   </div>

//   {/* Buttons */}

//   <div className="mt-10 flex flex-wrap gap-5">

//     <a
//       href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         px-8
//         py-4
//         rounded-full
//         bg-gradient-to-r
//         from-cyan-500
//         to-blue-600
//         text-white
//         font-semibold
//         hover:scale-105
//         transition-all
//         duration-300
//         shadow-[0_0_25px_rgba(34,211,238,0.35)]
//       "
//     >
//       View on Google Maps
//     </a>

//     <a
//       href="https://iem.edu.in/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="
//         px-8
//         py-4
//         rounded-full
//         border
//         border-cyan-400
//         text-cyan-300
//         font-semibold
//         hover:bg-cyan-400
//         hover:text-[#020817]
//         transition-all
//         duration-300
//       "
//     >
//       Visit IEM Website
//     </a>

//   </div>

// </div>

// </div>

// </div>

// </section>
//   );
// }

import uem from "../assets/image/uem.jpeg";

import {
  FaMapMarkerAlt,
  FaUniversity,
  FaTree,
  FaFlask,
  FaPlaneArrival,
} from "react-icons/fa";

const venueFeatures = [
  {
    icon: <FaUniversity />,
    title: "Modern Infrastructure",
    desc: "Smart classrooms, auditoriums and conference facilities.",
  },
  {
    icon: <FaTree />,
    title: "Green Campus",
    desc: "Beautiful surroundings providing a vibrant learning atmosphere.",
  },
  {
    icon: <FaFlask />,
    title: "Research Ecosystem",
    desc: "Advanced laboratories supporting interdisciplinary research.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "Easy Airport Access",
    desc: "Conveniently located near Netaji Subhas Chandra Bose International Airport.",
  },
];

export default function Venue() {
  return (
    <section
      id="venue"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-28
        md:py-36
        scroll-mt-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-0
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/5
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/5
            blur-[160px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="mb-20 md:mb-28"
          data-aos="fade-up"
        >

          <div className="flex items-center gap-4 mb-7">

            <span className="h-px w-12 bg-cyan-400" />

            <span
              className="
                text-cyan-300
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
              "
            >
              Conference Venue
            </span>

          </div>


          <h2
            className="
              max-w-5xl
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-black
              tracking-tight
              leading-[0.95]
              text-white
            "
          >
            Institute of Engineering
            <span className="block text-cyan-400">
              and Management
            </span>
          </h2>


          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-lg
              md:text-xl
              font-semibold
              text-slate-300
            "
          >

            <FaMapMarkerAlt className="text-cyan-400" />

            <span>New Town</span>

            <span className="text-cyan-400/50">•</span>

            <span>Kolkata</span>

            <span className="text-cyan-400/50">•</span>

            <span>India</span>

          </div>


          <p
            className="
              mt-8
              max-w-4xl
              text-lg
              md:text-xl
              leading-8
              text-slate-400
            "
          >
            Located in the heart of New Town, Kolkata, the Institute of
            Engineering and Management (IEM) University Campus offers an
            inspiring environment for researchers, academicians, industry
            experts, and students. Equipped with modern infrastructure,
            advanced laboratories, smart classrooms, and conference
            facilities, the campus provides an ideal setting for CYCRAI 2027.
          </p>

        </div>


        {/* =====================================================
            VENUE IMAGE + INTRO
        ====================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-16
            lg:gap-24
            items-center
          "
        >

          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            data-aos="fade-right"
            className="relative"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={uem}
                alt="Institute of Engineering and Management"
                className="
                  w-full
                  aspect-[4/3]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#020817]/60
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

            </div>


            {/* Decorative Lines */}

            <div
              className="
                absolute
                -bottom-4
                -right-4
                w-28
                h-28
                border-r
                border-b
                border-cyan-400/50
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                -top-4
                -left-4
                w-20
                h-20
                border-l
                border-t
                border-cyan-400/30
                pointer-events-none
              "
            />


            {/* Image Label */}

            <div
              className="
                absolute
                bottom-6
                left-6
                flex
                items-center
                gap-3
                text-white
              "
            >

              <span className="h-px w-8 bg-cyan-400" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[3px]
                  font-semibold
                "
              >
                Host Institution
              </span>

            </div>

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div data-aos="fade-left">

            <div className="flex items-center gap-3">

              <FaMapMarkerAlt className="text-cyan-400 text-lg" />

              <span
                className="
                  text-sm
                  uppercase
                  tracking-[3px]
                  text-cyan-300
                  font-semibold
                "
              >
                Kolkata, West Bengal
              </span>

            </div>


            <h3
              className="
                mt-6
                text-3xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Welcome to the
              <span className="block text-cyan-400">
                Host Institution
              </span>
            </h3>


            <p
              className="
                mt-7
                text-slate-400
                text-lg
                leading-8
              "
            >
              The Institute of Engineering and Management (IEM), Kolkata,
              is one of India's leading institutions recognized for
              excellence in engineering education, cutting-edge research,
              innovation, entrepreneurship, and strong industry
              collaborations. The university provides an ideal academic
              environment for hosting prestigious international conferences
              such as CYCRAI 2027.
            </p>


            <p
              className="
                mt-5
                text-slate-500
                text-lg
                leading-8
              "
            >
              Located in New Town, Kolkata, the campus offers modern lecture
              halls, advanced laboratories, high-speed connectivity,
              spacious auditoriums, collaborative research spaces, and
              convenient access to hotels, the airport, and major city
              attractions.
            </p>


            {/* Conference Record */}

            <div
              className="
                mt-8
                pt-7
                border-t
                border-white/10
                flex
                flex-wrap
                gap-x-8
                gap-y-3
              "
            >

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-slate-600
                  "
                >
                  Conference
                </p>

                <p className="mt-1 text-white font-semibold">
                  CYCRAI 2027
                </p>
              </div>


              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-slate-600
                  "
                >
                  Location
                </p>

                <p className="mt-1 text-white font-semibold">
                  New Town, Kolkata
                </p>
              </div>

            </div>


            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-6">

              <a
                href="https://maps.app.goo.gl/VFN2t1qFxYAxbgB57"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-cyan-300
                  font-semibold
                  group
                "
              >

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-full
                    border
                    border-cyan-400/40
                    group-hover:bg-cyan-400
                    group-hover:text-[#020817]
                    transition-all
                  "
                >
                  <FaMapMarkerAlt />
                </span>

                <span className="group-hover:text-white transition-colors">
                  View on Google Maps
                </span>

              </a>


              <a
                href="https://iem.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-slate-400
                  font-semibold
                  group
                "
              >

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-full
                    border
                    border-white/15
                    group-hover:border-cyan-400
                    group-hover:text-cyan-300
                    transition-all
                  "
                >
                  <FaUniversity />
                </span>

                <span className="group-hover:text-white transition-colors">
                  Visit IEM Website
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            VENUE FEATURES
        ====================================================== */}

        <div
          className="mt-32 md:mt-40"
          data-aos="fade-up"
        >

          {/* Heading */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
              mb-12
            "
          >

            <div>

              <div className="flex items-center gap-4">

                <span className="h-px w-12 bg-cyan-400" />

                <span
                  className="
                    text-cyan-300
                    text-sm
                    uppercase
                    tracking-[4px]
                    font-semibold
                  "
                >
                  At the Venue
                </span>

              </div>


              <h3
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                "
              >
                Everything you need
              </h3>

            </div>


            <p
              className="
                max-w-md
                text-slate-500
                leading-7
                md:text-right
              "
            >
              A connected academic environment designed to support
              research, collaboration, learning and innovation.
            </p>

          </div>


          {/* Features */}

          <div className="border-t border-white/10">

            {venueFeatures.map((feature, index) => (

              <div
                key={index}
                className="
                  group
                  grid
                  md:grid-cols-[80px_280px_1fr]
                  gap-6
                  md:gap-10
                  items-center
                  py-9
                  border-b
                  border-white/10
                  transition-all
                  duration-500
                  hover:bg-cyan-400/[0.02]
                "
              >

                {/* Number */}

                <span
                  className="
                    text-cyan-500/40
                    text-sm
                    font-mono
                    tracking-[3px]
                    group-hover:text-cyan-400
                    transition-colors
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* Icon + Title */}

                <div className="flex items-center gap-5">

                  <span
                    className="
                      text-2xl
                      text-cyan-400
                      group-hover:scale-110
                      transition-transform
                    "
                  >
                    {feature.icon}
                  </span>

                  <h4
                    className="
                      text-xl
                      font-bold
                      text-white
                      group-hover:text-cyan-300
                      transition-colors
                    "
                  >
                    {feature.title}
                  </h4>

                </div>


                {/* Description */}

                <p
                  className="
                    text-slate-500
                    leading-7
                    md:max-w-xl
                  "
                >
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            FINAL VENUE STATEMENT
        ====================================================== */}

        <div
          className="
            mt-32
            md:mt-40
            pt-16
            border-t
            border-white/10
          "
          data-aos="fade-up"
        >

          <div className="flex items-start gap-5">

            <span className="mt-3 h-px w-12 bg-cyan-400 shrink-0" />

            <div>

              <p
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-white
                  leading-tight
                  max-w-5xl
                "
              >
                Meet, connect and innovate in
                <span className="text-cyan-400">
                  {" "}Kolkata.
                </span>
              </p>

              <p
                className="
                  mt-6
                  text-slate-500
                  text-lg
                  leading-8
                  max-w-3xl
                "
              >
                CYCRAI 2027 brings the research community together at
                IEM University Campus, New Town, for meaningful
                conversations and collaborations shaping the future of
                secure and intelligent technologies.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}