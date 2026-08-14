
// // import { FaWhatsapp } from "react-icons/fa";
// // import logo from "../assets/image/cycrai_latest_logo.png";

// // export default function Footer() {
// //   return (
// //     <footer className="relative overflow-hidden bg-[#020817] text-white border-t border-cyan-400/20">

// //       {/* Background Glow */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[180px]" />
// //         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[180px]" />
// //       </div>

// //       {/* Main Footer */}
// //       <div className="relative max-w-7xl mx-auto px-6 py-16">

// //         <div className="grid md:grid-cols-3 gap-12">

// //           {/* Logo & About */}
// //           <div>
// //             <img
// //               src={logo}
// //               alt="CYCRAI 2027"
// //               className="h-16 transition-all duration-300 hover:scale-105"
// //             />
// //           </div>

// //                     {/* Quick Links */}
// //           <div>
// //             <h3 className="text-xl font-bold text-cyan-300">
// //               Quick Links
// //             </h3>

// //             <ul className="mt-6 space-y-3">
// //               <li>
// //                 <a
// //                   href="#home"
// //                   className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
// //                 >
// //                   Home
// //                 </a>
// //               </li>

// //               <li>
// //                 <a
// //                   href="#about"
// //                   className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
// //                 >
// //                   About
// //                 </a>
// //               </li>

// //               <li>
// //                 <a
// //                   href="#tracks"
// //                   className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
// //                 >
// //                   Tracks
// //                 </a>
// //               </li>

// //               <li>
// //                 <a
// //                   href="#venue"
// //                   className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
// //                 >
// //                   Venue
// //                 </a>
// //               </li>

// //               <li>
// //                 <a
// //                   href="#contact"
// //                   className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
// //                 >
// //                   Contact
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="text-xl font-bold text-cyan-300">
// //               Contact Information
// //             </h3>

// //             <div className="mt-6 space-y-4 text-gray-300">
// //               <p>
// //                 📍 Institute of Engineering and Management, Kolkata
// //               </p>

// //               <p>
// //                 📧 cycrai@iem.edu.in
// //               </p>

// //               <p>
                
// //               </p>

              
// //             </div>
// //           </div>
// //           </div>
// //           </div>
// //                 {/* Bottom Bar */}
// //       <div className="border-t border-cyan-400/20">
// //         <div
// //           className="
// //             max-w-7xl
// //             mx-auto
// //             px-6
// //             py-5
// //             flex
// //             flex-col
// //             lg:flex-row
// //             items-center
// //             justify-between
// //             gap-4
// //           "
// //         >
// //           <p className="text-gray-400 text-sm">
// //             © CYCRAI 2027. All Rights Reserved.
// //           </p>

// //           <p className="text-gray-400 text-sm">
// //             Hosted by Institute of Engineering and Management, Kolkata
// //           </p>

// //         </div>
// //       </div>

// //     </footer>
// //   );
// // }

// import {
//   FaWhatsapp,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaArrowUp,
//   FaArrowRight,
// } from "react-icons/fa";

// import logo from "../assets/image/cycrai_latest_logo.png";

// export default function Footer() {
//   const quickLinks = [
//     { number: "01", name: "Home", href: "#home" },
//     { number: "02", name: "About", href: "#about" },
//     { number: "03", name: "Technical Tracks", href: "#tracks" },
//     { number: "04", name: "Important Dates", href: "#dates" },
//     { number: "05", name: "Venue", href: "#venue" },
//     { number: "06", name: "Contact", href: "#contact" },
//   ];

//   return (
//     <footer
//       className="
//         relative
//         overflow-hidden
//         bg-[#020817]
//         text-white
//         border-t
//         border-white/10
//       "
//     >

//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="absolute inset-0 pointer-events-none">

//         {/* Cyan Glow */}
//         <div
//           className="
//             absolute
//             top-0
//             left-0
//             w-[500px]
//             h-[500px]
//             rounded-full
//             bg-cyan-500/5
//             blur-[160px]
//           "
//         />

//         {/* Blue Glow */}
//         <div
//           className="
//             absolute
//             bottom-0
//             right-0
//             w-[500px]
//             h-[500px]
//             rounded-full
//             bg-blue-600/5
//             blur-[160px]
//           "
//         />

//         {/* Grid */}
//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.02]
//             bg-[linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)]
//             bg-[size:80px_80px]
//           "
//         />

//         {/* Huge Background Text */}
//         <div
//           className="
//             absolute
//             bottom-[-35px]
//             left-1/2
//             -translate-x-1/2
//             text-[180px]
//             md:text-[280px]
//             font-black
//             text-white/[0.025]
//             leading-none
//             select-none
//             whitespace-nowrap
//           "
//         >
//           2027
//         </div>

//       </div>


//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div className="relative max-w-7xl mx-auto px-6">


//         {/* =====================================================
//             FINAL CTA
//         ====================================================== */}

//         <div
//           className="
//             py-24
//             md:py-32
//             border-b
//             border-white/10
//           "
//         >

//           <div className="max-w-5xl">

//             {/* Label */}

//             <div className="flex items-center gap-4 mb-7">

//               <span className="h-px w-12 bg-cyan-400" />

//               <span
//                 className="
//                   text-cyan-300
//                   text-sm
//                   uppercase
//                   tracking-[4px]
//                   font-semibold
//                 "
//               >
//                 CYCRAI 2027
//               </span>

//             </div>


//             {/* Heading */}

//             <h2
//               className="
//                 text-5xl
//                 sm:text-6xl
//                 md:text-7xl
//                 lg:text-8xl
//                 font-black
//                 tracking-tight
//                 leading-[0.95]
//                 text-white
//               "
//             >
//               Shape the future of
//               <span className="block text-cyan-400">
//                 secure intelligence.
//               </span>
//             </h2>


//             {/* Description */}

//             <p
//               className="
//                 mt-8
//                 max-w-3xl
//                 text-lg
//                 md:text-xl
//                 text-slate-400
//                 leading-8
//               "
//             >
//               Join researchers, academicians, industry leaders and
//               innovators at CYCRAI 2027 and contribute to the next
//               generation of Cyber Security, Cryptography and Responsible AI.
//             </p>


//             {/* Scroll Back */}

//             <a
//               href="#home"
//               className="
//                 mt-10
//                 inline-flex
//                 items-center
//                 gap-3
//                 text-cyan-300
//                 font-semibold
//                 group
//               "
//             >

//               <span
//                 className="
//                   flex
//                   items-center
//                   justify-center
//                   w-11
//                   h-11
//                   rounded-full
//                   border
//                   border-cyan-400/40
//                   group-hover:bg-cyan-400
//                   group-hover:text-[#020817]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <FaArrowUp />
//               </span>

//               <span className="group-hover:text-white transition-colors">
//                 Back to top
//               </span>

//             </a>

//           </div>

//         </div>


//         {/* =====================================================
//             FOOTER INFORMATION
//         ====================================================== */}

//         <div
//           className="
//             grid
//             lg:grid-cols-[1.3fr_0.7fr_1fr]
//             gap-16
//             py-20
//             md:py-24
//           "
//         >

//           {/* =================================================
//               BRAND
//           ================================================== */}

//           <div>

//             <img
//               src={logo}
//               alt="CYCRAI 2027"
//               className="
//                 w-auto
//                 h-20
//                 md:h-24
//                 object-contain
//                 transition-transform
//                 duration-500
//                 hover:scale-105
//               "
//             />


//             <p
//               className="
//                 mt-7
//                 max-w-md
//                 text-slate-500
//                 leading-7
//               "
//             >
//               International Conference on Cyber Security,
//               Cryptography and Responsible AI.
//             </p>


//             {/* Host */}

//             <div className="mt-8">

//               <p
//                 className="
//                   text-xs
//                   uppercase
//                   tracking-[3px]
//                   text-slate-600
//                 "
//               >
//                 Hosted by
//               </p>

//               <p
//                 className="
//                   mt-2
//                   text-white
//                   font-semibold
//                 "
//               >
//                 Institute of Engineering and Management
//               </p>

//               <p className="mt-1 text-slate-500">
//                 New Town, Kolkata, India
//               </p>

//             </div>

//           </div>


//           {/* =================================================
//               QUICK LINKS
//           ================================================== */}

//           <div>

//             <div className="flex items-center gap-4 mb-7">

//               <span className="h-px w-8 bg-cyan-400" />

//               <h3
//                 className="
//                   text-sm
//                   uppercase
//                   tracking-[3px]
//                   text-cyan-300
//                   font-semibold
//                 "
//               >
//                 Explore
//               </h3>

//             </div>


//             <nav className="border-t border-white/10">

//               {quickLinks.map((link) => (

//                 <a
//                   key={link.number}
//                   href={link.href}
//                   className="
//                     group
//                     flex
//                     items-center
//                     justify-between
//                     gap-4
//                     py-4
//                     border-b
//                     border-white/10
//                     text-slate-400
//                     hover:text-white
//                     transition-colors
//                   "
//                 >

//                   <div className="flex items-center gap-4">

//                     <span
//                       className="
//                         text-[10px]
//                         font-mono
//                         tracking-widest
//                         text-slate-600
//                         group-hover:text-cyan-400
//                         transition-colors
//                       "
//                     >
//                       {link.number}
//                     </span>

//                     <span className="text-sm font-medium">
//                       {link.name}
//                     </span>

//                   </div>


//                   <FaArrowRight
//                     className="
//                       text-xs
//                       opacity-0
//                       -translate-x-2
//                       group-hover:opacity-100
//                       group-hover:translate-x-0
//                       text-cyan-400
//                       transition-all
//                     "
//                   />

//                 </a>

//               ))}

//             </nav>

//           </div>


//           {/* =================================================
//               CONTACT
//           ================================================== */}

//           <div>

//             <div className="flex items-center gap-4 mb-7">

//               <span className="h-px w-8 bg-cyan-400" />

//               <h3
//                 className="
//                   text-sm
//                   uppercase
//                   tracking-[3px]
//                   text-cyan-300
//                   font-semibold
//                 "
//               >
//                 Contact
//               </h3>

//             </div>


//             {/* Location */}

//             <div
//               className="
//                 flex
//                 items-start
//                 gap-4
//                 pb-6
//                 border-b
//                 border-white/10
//               "
//             >

//               <FaMapMarkerAlt
//                 className="
//                   mt-1
//                   text-cyan-400
//                   shrink-0
//                 "
//               />

//               <div>

//                 <p className="text-white font-medium">
//                   Institute of Engineering and Management
//                 </p>

//                 <p className="mt-2 text-slate-500 leading-6">
//                   New Town, Kolkata
//                   <br />
//                   West Bengal, India
//                 </p>

//               </div>

//             </div>


//             {/* Email */}

//             <a
//               href="mailto:cycrai@iem.edu.in"
//               className="
//                 flex
//                 items-center
//                 gap-4
//                 py-6
//                 border-b
//                 border-white/10
//                 text-slate-400
//                 hover:text-cyan-300
//                 transition-colors
//               "
//             >

//               <FaEnvelope className="text-cyan-400" />

//               <span>
//                 cycrai@iem.edu.in
//               </span>

//             </a>


            

//           </div>

//         </div>


//         {/* =====================================================
//             FINAL DIVIDER
//         ====================================================== */}

//         <div className="border-t border-white/10" />


//         {/* =====================================================
//             BOTTOM BAR
//         ====================================================== */}

//         <div
//           className="
//             py-7
//             flex
//             flex-col
//             md:flex-row
//             items-start
//             md:items-center
//             justify-between
//             gap-5
//           "
//         >

//           <p
//             className="
//               text-sm
//               text-slate-600
//             "
//           >
//             © 2027 CYCRAI. All Rights Reserved.
//           </p>


//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               gap-4
//               text-sm
//               text-slate-600
//             "
//           >

//             <span>
//               IEEE Conference
//             </span>

//             <span className="text-cyan-400/40">
//               •
//             </span>

//             <span>
//               IEM Kolkata
//             </span>

//             <span className="text-cyan-400/40">
//               •
//             </span>

//             <span>
//               India
//             </span>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }


import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/image/cycrai_latest_logo.png";

export default function Footer() {
  const quickLinks = [
    { number: "01", name: "Home", href: "/" },
    { number: "02", name: "About", href: "/about" },
    { number: "03", name: "Authors", href: "/call-for-papers" },
    { number: "04", name: "Registration", href: "/registration" },
    { number: "05", name: "Committee", href: "/committee" },
    { number: "06", name: "Program", href: "/program" },
    { number: "07", name: "Important Dates", href: "/important-dates" },
    { number: "08", name: "Venue", href: "/venue" },
  ];

  const authorLinks = [
    { number: "01", name: "Call For Papers", href: "/call-for-papers" },
    { number: "02", name: "Guidelines & Policies", href: "/guidelines" },
    { number: "03", name: "Tracks", href: "/tracks" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#020817] text-white border-t border-cyan-400/15">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/7 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-blue-600/7 blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            bg-[linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

      </div>


      {/* =====================================================
          COMPACT CTA
      ====================================================== */}

      <div className="relative border-b border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-6
            py-10
            md:py-12
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-6
          "
        >

          <div>

            <div className="flex items-center gap-3 mb-3">

              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-cyan-300 text-xs uppercase tracking-[3px] font-semibold">
                CYCRAI 2027
              </span>

            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Shape the future of{" "}
              <span className="text-cyan-400">
                secure intelligence.
              </span>
            </h2>

            <p className="mt-3 text-sm text-slate-500 max-w-2xl">
              Join researchers, academicians, industry leaders and innovators
              at CYCRAI 2027.
            </p>

          </div>


          {/* Back To Top */}

          

        </div>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-12">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]
            gap-8
            md:gap-10
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="sm:col-span-2 lg:col-span-1">

            <img
              src={logo}
              alt="CYCRAI 2027"
              className="
                h-14
                sm:h-16
                w-auto
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />

            <p className="mt-4 max-w-sm text-sm text-slate-500 leading-6">
              International Conference on Cyber Security,
              Cryptography and Responsible AI.
            </p>

            <div className="mt-5">

              <p className="text-[10px] uppercase tracking-[3px] text-slate-600">
                Hosted by
              </p>

              <p className="mt-1 text-sm text-white font-medium">
                Institute of Engineering and Management
              </p>

              <p className="mt-1 text-xs text-slate-500">
                New Town, Kolkata, India
              </p>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <span className="h-px w-6 bg-cyan-400" />

              <h3 className="text-xs uppercase tracking-[3px] text-cyan-300 font-semibold">
                Navigation
              </h3>

            </div>

            <nav className="grid grid-cols-1 gap-0">

              {quickLinks.map((link) => (

                <a
                  key={link.number}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-2
                    border-b
                    border-white/5
                    text-slate-500
                    hover:text-white
                    transition-colors
                  "
                >

                  <div className="flex items-center gap-3">

                    <span className="text-[9px] font-mono text-slate-700 group-hover:text-cyan-400">
                      {link.number}
                    </span>

                    <span className="text-xs sm:text-sm">
                      {link.name}
                    </span>

                  </div>

                  <FaArrowRight
                    className="
                      text-[9px]
                      opacity-0
                      -translate-x-2
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      text-cyan-400
                      transition-all
                    "
                  />

                </a>

              ))}

            </nav>

          </div>


          {/* =================================================
              AUTHORS
          ================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <span className="h-px w-6 bg-cyan-400" />

              <h3 className="text-xs uppercase tracking-[3px] text-cyan-300 font-semibold">
                Authors
              </h3>

            </div>

            <nav className="border-t border-white/5">

              {authorLinks.map((link) => (

                <a
                  key={link.number}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-2.5
                    border-b
                    border-white/5
                    text-slate-500
                    hover:text-white
                    transition-colors
                  "
                >

                  <div className="flex items-center gap-3">

                    <span className="text-[9px] font-mono text-slate-700 group-hover:text-cyan-400">
                      {link.number}
                    </span>

                    <span className="text-xs sm:text-sm">
                      {link.name}
                    </span>

                  </div>

                  <FaArrowRight
                    className="
                      text-[9px]
                      opacity-0
                      -translate-x-2
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      text-cyan-400
                      transition-all
                    "
                  />

                </a>

              ))}

            </nav>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <span className="h-px w-6 bg-cyan-400" />

              <h3 className="text-xs uppercase tracking-[3px] text-cyan-300 font-semibold">
                Contact
              </h3>

            </div>


            {/* Location */}

            <div className="flex items-start gap-3 pb-4 border-b border-white/5">

              <FaMapMarkerAlt className="mt-1 text-cyan-400 shrink-0 text-sm" />

              <div>

                <p className="text-xs sm:text-sm text-white font-medium">
                  Institute of Engineering and Management
                </p>

                <p className="mt-1 text-xs text-slate-500 leading-5">
                  New Town, Kolkata
                  <br />
                  West Bengal, India
                </p>

              </div>

            </div>


            {/* Email */}

            <a
              href="mailto:cycrai@iem.edu.in"
              className="
                flex
                items-center
                gap-3
                py-4
                text-xs
                sm:text-sm
                text-slate-500
                hover:text-cyan-300
                transition-colors
              "
            >

              <FaEnvelope className="text-cyan-400 shrink-0" />

              <span>
                cycrai@iem.edu.in
              </span>

            </a>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="mt-8 pt-5 border-t border-white/10">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-3
            "
          >

            <p className="text-[11px] sm:text-xs text-slate-600">
              © 2027 CYCRAI. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-slate-600">

              <span>IEEE Conference</span>

              <span className="text-cyan-400/40">•</span>

              <span>IEM Kolkata</span>

              <span className="text-cyan-400/40">•</span>

              <span>India</span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}