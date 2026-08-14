// import { useState } from "react";
// import { motion } from "framer-motion";
// import CommitteeTabs from "../components/CommitteeTabs";
// import MemberCard from "../components/MemberCard";
// import { committeeData } from "../data/committeeData";
// import Footer from "../components/Footer";
// export default function Committee() {
//   const [activeCommittee, setActiveCommittee] = useState("organizing");
//   const currentCommittee = committeeData[activeCommittee];

//   return (
//     <div className="min-h-screen bg-[#020817] text-white">
//       {/* Use the redesigned Hero from earlier phases */}
//       <section className="relative overflow-hidden bg-[#020817] text-white">

//         {/* Grid Background */}
//         <div
//           className="
//             absolute
//             inset-0

//             bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)]
//             bg-[size:45px_45px]
//           "
//         />

//         {/* Glowing Orbs */}

//         <div className="absolute inset-0 overflow-hidden pointer-events-none">

//           <div
//             className="
//               absolute
//               -top-36
//               -left-32

//               w-[420px]
//               h-[420px]

//               rounded-full

//               bg-cyan-500/15

//               blur-[170px]
//             "
//           />

//           <div
//             className="
//               absolute
//               top-16
//               right-0

//               w-[320px]
//               h-[320px]

//               rounded-full

//               bg-blue-600/15

//               blur-[150px]
//             "
//           />

//           <div
//             className="
//               absolute
//               bottom-0
//               left-1/3

//               w-[260px]
//               h-[260px]

//               rounded-full

//               bg-sky-500/10

//               blur-[130px]
//             "
//           />

//         </div>

//         {/* Hero Content */}

//         <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-36">

//           {/* Badge */}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="
//               inline-flex
//               items-center

//               px-5
//               py-2

//               rounded-full

//               bg-cyan-500/10

//               border
//               border-cyan-400/30

//               backdrop-blur-xl

//               text-cyan-300

//               font-medium
//               tracking-wide
//             "
//           >
//             Conference Committee
//           </motion.div>

//           {/* Title */}

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="
//               mt-8

//               text-5xl
//               md:text-7xl

//               font-black

//               leading-tight
//             "
//           >
//             <span className="text-white">
//               Conference
//             </span>

//             <br />

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-300
//                 via-sky-400
//                 to-blue-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Committee
//             </span>
//           </motion.h1>

//           {/* Subtitle */}

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="
//               mt-8

//               max-w-3xl

//               text-lg
//               md:text-xl

//               leading-9

//               text-slate-300
//             "
//           >
//             Meet the distinguished researchers, academicians, IEEE leaders,
//             and industry experts driving CYCRAI 2027 towards becoming a
//             globally recognized conference in Responsible Artificial Intelligence, Cryptography, Cyber Security and Emerging Technologies.
//           </motion.p>

//           {/* Decorative Line */}

//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: 160 }}
//             transition={{
//               delay: 0.4,
//               duration: 0.8,
//             }}
//             className="
//               mt-10

//               h-[4px]

//               rounded-full

//               bg-gradient-to-r
//               from-cyan-400
//               via-sky-500
//               to-blue-600
//             "
//           />

//         </div>
//         </section>
//       <section className="relative overflow-hidden py-24">
//         <div className="relative max-w-7xl mx-auto px-6">
//           <CommitteeTabs
//             activeCommittee={activeCommittee}
//             setActiveCommittee={setActiveCommittee}
//           />

//           <motion.div
//             key={activeCommittee}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.35 }}
//             className="mt-16"
//           >
//             <div className="relative mb-20 text-center">
//               <h2 className="text-5xl font-black text-white">
//                 {currentCommittee.title}
//               </h2>
//             </div>

//             {currentCommittee.sections.map((section, index) => (
//               <div key={index} className="mb-20">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="mb-12 rounded-3xl border border-cyan-400/20 bg-[#071326]/80 p-8 backdrop-blur-2xl"
//                 >
//                   <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//                     <div>
//                       <p className="text-xs uppercase tracking-[4px] text-cyan-300">
//                         Committee Section
//                       </p>
//                       <h3 className="mt-3 text-3xl font-bold text-white">
//                         {section.title}
//                       </h3>
//                     </div>

//                     <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">
//                       {section.members.length} {section.members.length === 1 ? "Member" : "Members"}
//                     </div>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   layout
//                   className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10"
//                 >
//                   {section.members.map((member, memberIndex) => (
//                     <motion.div
//                       key={memberIndex}
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: memberIndex * 0.08 }}
//                     >
//                       <MemberCard member={member} />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import CommitteeTabs from "../components/CommitteeTabs";
import MemberCard from "../components/MemberCard";
import { committeeData } from "../data/committeeData";
import Footer from "../components/Footer";

export default function Committee() {
  const [activeCommittee, setActiveCommittee] = useState("organizing");
  const currentCommittee = committeeData[activeCommittee];

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#020817]">

        {/* CFP STYLE GRID */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* CYAN GLOW */}
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

        {/* BLUE GLOW */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-28">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm tracking-[3px] uppercase backdrop-blur-xl">
              Conference Committee
            </span>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                leading-[1.15]
                text-white
              "
            >
              Conference

              <span
                className="
                  block
                  pb-3
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Committee
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="
                mt-8
                max-w-4xl
                mx-auto
                text-lg
                md:text-xl
                leading-9
                text-slate-300
              "
            >
              Meet the distinguished researchers, academicians, IEEE leaders,
              and industry experts driving CYCRAI 2027 towards becoming a
              globally recognized conference in Responsible Artificial
              Intelligence, Cryptography, Cyber Security and Emerging
              Technologies.
            </motion.p>

            {/* ACCENT LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                mx-auto
                mt-10
                h-1
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-sky-500
                to-blue-600
              "
            />
          </motion.div>

        </div>
      </section>


      {/* =========================================================
          COMMITTEE CONTENT
      ========================================================= */}
      <section
        className="
          relative
          py-28
          overflow-hidden
          bg-gradient-to-b
          from-[#020817]
          via-[#071326]
          to-[#020817]
        "
      >

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* GLOWS */}
        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* TABS */}
          <div
            className="
              rounded-[30px]
              border
              border-cyan-400/15
              bg-white/5
              backdrop-blur-2xl
              p-4
            "
          >
            <CommitteeTabs
              activeCommittee={activeCommittee}
              setActiveCommittee={setActiveCommittee}
            />
          </div>


          {/* ACTIVE COMMITTEE */}
          <motion.div
            key={activeCommittee}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mt-20"
          >

            {/* CURRENT COMMITTEE TITLE */}
            <div className="relative mb-20 text-center">

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  text-white
                "
              >
                {currentCommittee.title}
              </h2>

              <div className="mx-auto mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

            </div>


            {/* COMMITTEE SECTIONS */}
            {currentCommittee.sections.map((section, index) => (

              <div
                key={index}
                className="mb-20"
              >

                {/* SECTION HEADER */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="
                    relative
                    overflow-hidden
                    mb-12
                    rounded-[30px]
                    border
                    border-cyan-400/20
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                    md:p-10
                    transition-all
                    duration-500
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_40px_rgba(34,211,238,.10)]
                  "
                >

                  {/* TOP GRADIENT */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[4px] text-cyan-300">
                        Committee Section
                      </p>

                      <h3 className="mt-3 text-3xl font-bold text-white">
                        {section.title}
                      </h3>

                    </div>

                    <div
                      className="
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-cyan-500/10
                        px-5
                        py-2
                        text-cyan-300
                        backdrop-blur-xl
                      "
                    >
                      {section.members.length}{" "}
                      {section.members.length === 1
                        ? "Member"
                        : "Members"}
                    </div>

                  </div>

                </motion.div>


                {/* MEMBER CARDS */}
                <motion.div
                  layout
                  className="
                    grid
                    grid-cols-1
                    xl:grid-cols-2
                    gap-8
                    lg:gap-10
                  "
                >

                  {section.members.map((member, memberIndex) => (

                    <motion.div
                      key={memberIndex}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: memberIndex * 0.08,
                      }}
                      className="group"
                    >
                      <MemberCard member={member} />
                    </motion.div>

                  ))}

                </motion.div>

              </div>

            ))}

          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}