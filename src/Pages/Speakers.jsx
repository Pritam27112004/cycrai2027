
// import { motion } from "framer-motion";
// import Footer from "../components/Footer";
// export default function Speakers() {
//   return (
//     <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-cyan-500/10">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:45px_45px]" />
//         <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[160px]" />
//         <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[150px]" />

//         <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28">
//           <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
//             className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">
//             Conference Program
//           </motion.div>

//           <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}
//             className="mt-8 text-5xl md:text-7xl font-black">
//             <span className="text-white">Conference </span>
//             <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
//               Program
//             </span>
//           </motion.h1>

//           <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}}
//             className="mt-8 max-w-3xl text-lg md:text-xl leading-9 text-slate-300">
//             Explore keynote talks, technical sessions, workshops, tutorials,
//             panel discussions and networking events that will shape CYCRAI 2027.
//           </motion.p>

//           <div className="mt-10 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"/>
//         </div>
//       </section>

//       <section className="relative py-24">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
//         <div className="relative max-w-7xl mx-auto px-6 space-y-20">

//           {[
//             {
//               icon:"🎤",
//               eyebrow:"KEYNOTE SPEAKERS",
//               title:"Invited Speakers",
//               heading:"Speaker Announcements Coming Soon",
//               text:"Renowned researchers, IEEE Fellows, industry leaders and innovators will be announced soon. Stay tuned for keynote addresses and distinguished invited talks."
//             },
//             {
//               icon:"📅",
//               eyebrow:"CONFERENCE SCHEDULE",
//               title:"Conference Program",
//               heading:"Program Details Coming Soon",
//               text:"The complete conference agenda including paper presentations, tutorials, workshops, poster sessions and networking events will be published after final confirmation."
//             }
//           ].map((item,index)=>(
//             <motion.section
//               key={index}
//               initial={{opacity:0,y:40}}
//               whileInView={{opacity:1,y:0}}
//               viewport={{once:true}}
//               className="relative"
//             >
//               <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />
//               <div className="relative rounded-3xl border border-cyan-400/20 bg-[#071326]/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_35px_rgba(34,211,238,0.08)]">
//                 <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"/>
//                 <div className="p-10 md:p-16 text-center">
//                   <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-wider text-cyan-300">
//                     {item.eyebrow}
//                   </span>

//                   <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white">
//                     {item.title}
//                   </h2>

//                   <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-6xl">
//                     {item.icon}
//                   </div>

//                   <h3 className="mt-10 text-2xl md:text-4xl font-bold text-cyan-300">
//                     {item.heading}
//                   </h3>

//                   <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             </motion.section>
//           ))}

//         </div>
//       </section>
//       <Footer/>
//     </main>
//   );
// }

import { motion } from "framer-motion";
import {
  Mic2,
  CalendarDays,
  Sparkles,
  Users,
  Presentation,
  Clock3,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Speakers() {
  const sections = [
    {
      icon: Mic2,
      eyebrow: "KEYNOTE SPEAKERS",
      title: "Invited Speakers",
      heading: "Speaker Announcements",
      gradient: "Coming Soon",
      text:
        "Renowned researchers, IEEE Fellows, industry leaders and innovators will be announced soon. Stay tuned for keynote addresses and distinguished invited talks at CYCRAI 2027.",
    },
    {
      icon: CalendarDays,
      eyebrow: "CONFERENCE PROGRAM",
      title: "Conference Program",
      heading: "Program Details",
      gradient: "Coming Soon",
      text:
        "The complete conference agenda including paper presentations, tutorials, workshops, poster sessions and networking events will be published after final confirmation.",
    },
  ];

  const highlights = [
    {
      icon: Presentation,
      title: "Keynote Addresses",
      desc:
        "Thought-provoking keynote sessions from leading researchers and experts working across Cyber Security, Responsible AI and Emerging Technologies.",
    },
    {
      icon: Users,
      title: "Expert Interaction",
      desc:
        "Engage with distinguished speakers, researchers, industry professionals and innovators from academia and industry.",
    },
    {
      icon: Clock3,
      title: "Technical Sessions",
      desc:
        "Explore a carefully curated conference program featuring technical presentations, workshops, tutorials and panel discussions.",
    },
    {
      icon: Sparkles,
      title: "Emerging Ideas",
      desc:
        "Discover new perspectives, breakthrough research and emerging directions shaping the future of secure and responsible technology.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#020817] min-h-[85vh] pt-32 pb-24">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Cyan Glow */}
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

        {/* Blue Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[170px] rounded-full" />

        {/* Center Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sky-500/10 blur-[180px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm tracking-[3px] uppercase backdrop-blur-xl">
              <Sparkles size={16} />
              Speakers & Program
            </span>

            {/* Heading */}
            <h1
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                leading-[1.15]
                text-white
              "
            >
              Meet Our

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
                Speakers
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl leading-9 text-slate-300">
              Discover keynote speakers, distinguished researchers, industry
              leaders and innovators who will share their insights and shape
              the conversations at CYCRAI 2027.
            </p>

            {/* Accent Line */}
            <div className="mx-auto mt-10 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                value: "Keynote",
                label: "Distinguished Talks",
              },
              {
                value: "Expert",
                label: "Industry & Academia",
              },
              {
                value: "Global",
                label: "Research Community",
              },
              {
                value: "Hybrid",
                label: "Conference Experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-cyan-400/15
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
                "
              >
                <h2 className="text-2xl md:text-3xl font-black text-cyan-300">
                  {item.value}
                </h2>

                <p className="mt-3 text-sm md:text-base text-slate-400 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SPEAKERS / PROGRAM SECTIONS
      ========================================================= */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817]">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glows */}
        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">
              Conference Experience
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">
              Connect With

              <span className="block mt-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-9">
              CYCRAI 2027 brings together experts from research, academia and
              industry to exchange knowledge, discuss emerging challenges and
              explore the future of Cyber Security and Responsible AI.
            </p>
          </motion.div>

          {/* Main Cards */}
          <div className="space-y-12">
            {sections.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-cyan-400/20
                    bg-white/5
                    backdrop-blur-2xl
                    p-10
                    md:p-14
                    transition-all
                    duration-500
                    hover:border-cyan-400/40
                    hover:-translate-y-2
                    hover:shadow-[0_0_45px_rgba(34,211,238,.12)]
                  "
                >
                  {/* Top Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

                  {/* Hover Glow */}
                  <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative z-10 grid lg:grid-cols-[auto_1fr] gap-10 items-center">
                    {/* Icon */}
                    <div className="mx-auto lg:mx-0 w-28 h-28 rounded-[30px] bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/15 transition-all duration-500">
                      <Icon
                        size={52}
                        strokeWidth={1.5}
                        className="text-cyan-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left">
                      <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-xs md:text-sm">
                        {item.eyebrow}
                      </span>

                      <h3 className="mt-7 text-3xl md:text-4xl font-bold text-white">
                        {item.title}
                      </h3>

                      <h4 className="mt-5 text-2xl md:text-3xl font-bold text-cyan-300">
                        {item.heading}
                      </h4>

                      <div className="mt-2 text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                        {item.gradient}
                      </div>

                      <p className="mt-6 max-w-3xl text-slate-400 text-lg leading-8">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT TO EXPECT
      ========================================================= */}
      <section className="relative py-28 bg-[#020817] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute -left-20 top-40 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute right-0 bottom-20 w-[350px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">
              Program Highlights
            </span>

            <h2 className="mt-7 text-5xl md:text-6xl font-black text-white">
              More Than

              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                A Conference
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
              Experience a dynamic program designed to encourage knowledge
              exchange, technical discussion, collaboration and innovation.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-cyan-400/15
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
                  "
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:bg-cyan-400/15 transition-all">
                      <Icon
                        size={30}
                        strokeWidth={1.7}
                        className="text-cyan-300"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-slate-400 leading-8">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mt-20
              rounded-[35px]
              border
              border-cyan-400/20
              bg-cyan-500/5
              backdrop-blur-xl
              p-10
              text-center
            "
          >
            <Sparkles className="mx-auto text-cyan-300" size={38} />

            <h3 className="mt-6 text-3xl md:text-4xl font-bold text-white">
              Stay Tuned for Speaker Announcements
            </h3>

            <p className="mt-5 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
              Distinguished speakers and the complete conference program will
              be announced soon. Follow CYCRAI 2027 for the latest updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
