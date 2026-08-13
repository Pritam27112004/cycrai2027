
// import { motion } from "framer-motion";
// import { User } from "lucide-react";

// export default function MemberCard({ member }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{
//         y: -10,
//         scale: 1.01,
//       }}
//       transition={{ duration: 0.45 }}
//       className="
//         group
//         relative

//         overflow-hidden

//         rounded-3xl

//         bg-[#071326]/80
//         backdrop-blur-2xl

//         border
//         border-cyan-400/20

//         shadow-[0_0_35px_rgba(34,211,238,0.08)]

//         hover:border-cyan-400/50
//         hover:shadow-[0_0_60px_rgba(34,211,238,0.30)]

//         transition-all
//         duration-500
//       "
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">

//         <div
//           className="
//             absolute
//             -top-24
//             -right-24

//             w-72
//             h-72

//             rounded-full

//             bg-cyan-500/10

//             blur-[150px]
//           "
//         />

//         <div
//           className="
//             absolute
//             -bottom-20
//             -left-20

//             w-72
//             h-72

//             rounded-full

//             bg-blue-600/10

//             blur-[150px]
//           "
//         />

//       </div>
//       {/* Animated Light Sweep */}
// <motion.div
//   initial={{ x: "-150%" }}
//   whileHover={{ x: "250%" }}
//   transition={{ duration: 1.2, ease: "easeInOut" }}
//   className="
//     absolute
//     inset-y-0
//     left-0

//     w-24

//     bg-gradient-to-r
//     from-transparent
//     via-cyan-300/20
//     to-transparent

//     rotate-12

//     pointer-events-none
//   "
// />

//       {/* Left Accent */}
//       <motion.div
//   animate={{
//     opacity: [0.6, 1, 0.6],
//   }}
//   transition={{
//     duration: 2,
//     repeat: Infinity,
//   }}
//   className="
//     absolute
//     left-0
//     top-0

//     h-full
//     w-1

//     bg-gradient-to-b
//     from-cyan-400
//     via-sky-500
//     to-blue-600
//   "
// />

//       {/* Content */}
//       <div className="relative flex flex-col md:flex-row items-center gap-8 p-8">

//                 {/* Image */}
//         <div className="relative flex-shrink-0">

//           {/* Outer Glow */}
//           <div
//             className="
//               absolute
//               inset-0

//               rounded-3xl

//               bg-gradient-to-br
//               from-cyan-400/30
//               via-sky-500/20
//               to-blue-600/30

//               blur-xl

//               opacity-0
//               group-hover:opacity-100

//               transition-all
//               duration-500
//             "
//           />

//           {/* Glass Frame */}
//           <div
//             className="
//               relative

//               p-2

//               rounded-3xl

//               bg-white/5
//               backdrop-blur-xl

//               border
//               border-cyan-400/20

//               transition-all
//               duration-500

//               group-hover:border-cyan-400/50
//             "
//           >
//             {member.image ? (
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="
//                   w-36
//                   h-40

//                   object-cover

//                   rounded-2xl

//                   transition-all
//                   duration-500

//                   group-hover:scale-105
//                 "
//               />
//             ) : (
//               <div
//                 className="
//                   w-36
//                   h-40

//                   rounded-2xl

//                   bg-gradient-to-br
//                   from-[#071326]
//                   to-[#0b1f3a]

//                   flex
//                   items-center
//                   justify-center

//                   border
//                   border-cyan-400/20
//                 "
//               >
//                 <User
//                   size={56}
//                   className="
//                     text-cyan-300
//                   "
//                 />
//               </div>
//             )}

//             {/* Corner Accent */}
//             <div
//               className="
//                 absolute
//                 -top-1
//                 -right-1

//                 w-4
//                 h-4

//                 rounded-full

//                 bg-cyan-400

//                 shadow-[0_0_12px_rgba(34,211,238,0.9)]
//               "
//             />
//           </div>

//         </div>

//         {/* Details */}
//                 {/* Details */}
//         <div className="flex-1 text-center md:text-left">

//           {/* Name */}
//           <h3
//             className="
//               text-3xl
//               lg:text-4xl

//               font-bold

//               text-white

//               transition-all
//               duration-500

//               group-hover:text-cyan-300
//             "
//           >
//             {member.name}
//           </h3>

//           {/* Position Badge */}
//           <div className="mt-5">

//             <span
//               className="
//                 inline-flex
//                 items-center

//                 px-5
//                 py-2.5

//                 rounded-full

//                 bg-cyan-500/10

//                 border
//                 border-cyan-400/30

//                 text-cyan-300

//                 text-sm
//                 font-semibold

//                 tracking-wide

//                 transition-all
//                 duration-300

//                 group-hover:border-cyan-300/60
//                 group-hover:bg-cyan-500/20
//               "
//             >
//               {member.position}
//             </span>

//           </div>

//           {/* Divider */}
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 80 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="
//               h-[3px]

//               my-6

//               mx-auto
//               md:mx-0

//               rounded-full

//               bg-gradient-to-r
//               from-cyan-400
//               via-sky-500
//               to-blue-600
//             "
//           />

//           {/* Conference Label */}
//           <p
//             className="
//               uppercase

//               tracking-[6px]

//               text-xs
//               lg:text-sm

//               text-slate-400

//               font-medium
//             "
//           >
//             CYCRAI 2027
//           </p>

//           {/* Decorative Accent */}
//           <div
//             className="
//               mt-6

//               flex

//               justify-center
//               md:justify-start

//               gap-2
//             "
//           >
//             <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
//             <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
//             <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
//           </div>

//         </div>

//       </div>
//       {/* Floating Particles */}
// <div className="pointer-events-none absolute inset-0 overflow-hidden">

//   <motion.div
//     animate={{
//       y: [-8, 8, -8],
//     }}
//     transition={{
//       repeat: Infinity,
//       duration: 5,
//     }}
//     className="
//       absolute
//       top-10
//       right-16

//       w-2
//       h-2

//       rounded-full

//       bg-cyan-400/70

//       blur-[1px]
//     "
//   />

//   <motion.div
//     animate={{
//       y: [8, -8, 8],
//     }}
//     transition={{
//       repeat: Infinity,
//       duration: 6,
//     }}
//     className="
//       absolute
//       bottom-12
//       left-20

//       w-3
//       h-3

//       rounded-full

//       bg-sky-400/40

//       blur-[2px]
//     "
//   />

// </div>
//     </motion.div>
    
//   );
// }

import { motion } from "framer-motion";

export default function MemberCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -3,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        bg-[#071326]/80
        backdrop-blur-xl
        border
        border-cyan-400/20
        shadow-[0_0_20px_rgba(34,211,238,0.05)]
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        transition-all
        duration-300
        px-5
        py-4
      "
    >
      {/* Subtle Left Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[2px]
          bg-gradient-to-b
          from-cyan-400
          to-blue-600
          opacity-70
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      {/* Name + Designation */}
      <div className="flex items-center gap-3">

        {/* Name */}
        <h3
          className="
            text-base
            md:text-lg
            font-semibold
            text-white
            whitespace-nowrap
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {member.name}
        </h3>

        {/* Separator */}
        <span className="text-cyan-400/50">
          •
        </span>

        {/* Designation */}
        <p
          className="
            text-sm
            md:text-base
            text-slate-400
            font-medium
            whitespace-nowrap
          "
        >
          {member.position}
        </p>

      </div>
    </motion.div>
  );
}