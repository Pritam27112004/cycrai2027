
// import {
//   FaCalendarPlus,
//   FaFileUpload,
//   FaCheckCircle,
//   FaUserCheck,
//   FaFileAlt,
//   FaMicrophoneAlt,
// } from "react-icons/fa";

// const dates = [
//   {
//     icon: <FaCalendarPlus />,
//     date: "22 June 2027",
//     title: "Paper Submission Opens",
//     badge: "IMPORTANT",
//   },
//   {
//     icon: <FaFileUpload />,
//     date: "31 August 2027",
//     title: "Paper Submission Deadline",
//     badge: "DEADLINE",
//   },
//   {
//     icon: <FaCheckCircle />,
//     date: "02 November 2027",
//     title: "Acceptance Notification",
//     badge: "RESULT",
//   },
//   {
//     icon: <FaUserCheck />,
//     date: "10 November 2027",
//     title: "Author Registration Deadline",
//     badge: "REGISTRATION",
//   },
//   {
//     icon: <FaFileAlt />,
//     date: "16 November 2027",
//     title: "Camera Ready Submission",
//     badge: "FINAL",
//   },
//   {
//     icon: <FaMicrophoneAlt />,
//     date: "18–20 December 2027",
//     title: "Conference Dates",
//     badge: "EVENT",
//   },
// ];

// export default function ImportantDates() {
//   return (
//     <section
//       id="dates"
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
//             Conference Timeline
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
//             Important Dates
//           </h2>

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
//             Stay informed about the important milestones for paper
//             submission, peer review, registration and conference
//             participation. Authors are requested to follow the
//             schedule below for timely submissions.
//           </p>

//         </div>

//         {/* Date Cards */}

//         <div
//           className="
//             grid
//             md:grid-cols-2
//             xl:grid-cols-3
//             gap-8
//           "
//         >

//           {dates.map((item, index) => (
//             <div
//   key={index}
//   data-aos="zoom-in"
//   data-aos-delay={(index % 3) * 100}
//   className="
//     group
//     relative
//     overflow-hidden
//     rounded-3xl
//     border
//     border-cyan-400/20
//     bg-[#071326]/70
//     backdrop-blur-xl
//     p-8
//     transition-all
//     duration-500
//     hover:-translate-y-3
//     hover:border-cyan-400/60
//     hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]
//   "
// >
//   {/* Hover Glow */}
//   <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

//   {/* Watermark */}
//   <span
//     className="
//       absolute
//       top-4
//       right-5
//       text-7xl
//       font-black
//       text-white/[0.03]
//       select-none
//     "
//   >
//     {String(index + 1).padStart(2, "0")}
//   </span>

//   {/* Status Badge */}
//   <div className="relative z-10 flex justify-between items-center">

//     <div
//       className="
//         w-16
//         h-16
//         rounded-2xl
//         flex
//         items-center
//         justify-center
//         text-3xl
//         text-cyan-300
//         bg-cyan-500/10
//         border
//         border-cyan-400/20
//         transition-all
//         duration-500
//         group-hover:scale-110
//         group-hover:rotate-6
//       "
//     >
//       {item.icon}
//     </div>

//     <span
//       className="
//         px-3
//         py-1
//         rounded-full
//         bg-cyan-500/10
//         border
//         border-cyan-400/20
//         text-cyan-300
//         text-xs
//         tracking-widest
//         font-semibold
//       "
//     >
//       {item.badge}
//     </span>

//   </div>

//   {/* Date */}

//   <h3
//     className="
//       relative
//       z-10
//       mt-8
//       text-2xl
//       font-bold
//       text-cyan-300
//     "
//   >
//     {item.date}
//   </h3>

//   {/* Divider */}

//   <div
//     className="
//       relative
//       z-10
//       mt-5
//       h-[3px]
//       w-16
//       rounded-full
//       bg-gradient-to-r
//       from-cyan-400
//       to-blue-500
//     "
//   />

//   {/* Title */}

//   <p
//     className="
//       relative
//       z-10
//       mt-6
//       text-lg
//       font-semibold
//       text-white
//       leading-8
//     "
//   >
//     {item.title}
//   </p>

//   {/* Bottom Border */}

//   <div
//     className="
//       absolute
//       bottom-0
//       left-0
//       h-1
//       w-0
//       bg-gradient-to-r
//       from-cyan-400
//       via-sky-400
//       to-blue-500
//       transition-all
//       duration-700
//       group-hover:w-full
//     "
//   />

// </div>
// ))}
// </div> 
//         {/* Submission Notice */}

//         <div
//           className="mt-24"
//           data-aos="fade-up"
//         >

//           <div
//             className="
//               rounded-3xl
//               border
//               border-cyan-400/20
//               bg-gradient-to-r
//               from-cyan-500/5
//               via-blue-500/5
//               to-cyan-500/5
//               backdrop-blur-xl
//               p-10
//             "
//           >

//             <div className="grid lg:grid-cols-2 gap-10 items-center">

//               {/* Left */}

//               <div>

//                 <span
//                   className="
//                     inline-block
//                     px-4
//                     py-2
//                     rounded-full
//                     border
//                     border-cyan-400/20
//                     bg-cyan-500/10
//                     text-cyan-300
//                     uppercase
//                     tracking-[3px]
//                     text-xs
//                     font-semibold
//                   "
//                 >
//                   Submission Guidelines
//                 </span>

//                 <h3 className="mt-6 text-3xl font-bold text-white">
//                   Prepare Your Paper for CYCRAI 2027
//                 </h3>

//                 <p className="mt-6 text-slate-300 leading-8">
//                   Authors are invited to submit original, unpublished
//                   research contributions aligned with the conference
//                   themes. All submissions will undergo a rigorous
//                   peer-review process conducted by domain experts.
//                   Accepted and presented papers will be considered for
//                   publication in the IEEE Xplore Digital Library,
//                   subject to IEEE quality standards and compliance
//                   requirements.
//                 </p>

//               </div>

//               {/* Right */}

//               <div className="grid grid-cols-2 gap-5">

//                 <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

//                   <h4 className="text-4xl font-black text-cyan-300">
//                     IEEE
//                   </h4>

//                   <p className="mt-2 text-slate-400">
//                     Xplore Publication*
//                   </p>

//                 </div>

//                 <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

//                   <h4 className="text-4xl font-black text-cyan-300">
//                     100%
//                   </h4>

//                   <p className="mt-2 text-slate-400">
//                     Peer Review
//                   </p>

//                 </div>

//                 <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

//                   <h4 className="text-4xl font-black text-cyan-300">
//                     Oral
//                   </h4>

//                   <p className="mt-2 text-slate-400">
//                     Presentation
//                   </p>

//                 </div>

//                 <div className="rounded-2xl border border-cyan-400/20 bg-[#071326]/60 p-6 text-center">

//                   <h4 className="text-4xl font-black text-cyan-300">
//                     Best
//                   </h4>

//                   <p className="mt-2 text-slate-400">
//                     Paper Awards
//                   </p>

//                 </div>

//               </div>

//             </div>

//             {/* Bottom Note */}

//             <div className="mt-10 pt-8 border-t border-cyan-400/20">

//               <p className="text-center text-slate-400 leading-8">

//                 <span className="text-cyan-300 font-semibold">
//                   Note:
//                 </span>{" "}
//                 Authors should strictly follow the IEEE manuscript
//                 template and submission guidelines. Papers must present
//                 original work that has not been previously published or
//                 simultaneously submitted to another conference or
//                 journal.

//               </p>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
import {
  FaCalendarPlus,
  FaFileUpload,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaMicrophoneAlt,
} from "react-icons/fa";

const dates = [
  {
    icon: <FaCalendarPlus />,
    date: "22 June 2027",
    title: "Paper Submission Opens",
    badge: "IMPORTANT",
  },
  {
    icon: <FaFileUpload />,
    date: "31 August 2027",
    title: "Paper Submission Deadline",
    badge: "DEADLINE",
  },
  {
    icon: <FaCheckCircle />,
    date: "02 November 2027",
    title: "Acceptance Notification",
    badge: "RESULT",
  },
  {
    icon: <FaUserCheck />,
    date: "10 November 2027",
    title: "Author Registration Deadline",
    badge: "REGISTRATION",
  },
  {
    icon: <FaFileAlt />,
    date: "16 November 2027",
    title: "Camera Ready Submission",
    badge: "FINAL",
  },
  {
    icon: <FaMicrophoneAlt />,
    date: "18–20 December 2027",
    title: "Conference Dates",
    badge: "EVENT",
  },
];

export default function ImportantDates() {
  return (
    <section
      id="dates"
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
          CONTENT
      ====================================================== */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="mb-24 md:mb-32"
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
              Conference Timeline
            </span>

          </div>


          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-black
              tracking-tight
              leading-none
              text-white
            "
          >
            Important
            <span className="text-cyan-400"> Dates</span>
          </h2>


          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              leading-8
              text-slate-400
            "
          >
            Follow the key milestones of CYCRAI 2027, from paper
            submission and peer review to author registration and the
            conference itself.
          </p>

        </div>


        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div
          className="
            relative
            max-w-5xl
            mx-auto
          "
          data-aos="fade-up"
        >

          {/* Central Timeline Line */}

          <div
            className="
              absolute
              left-[23px]
              md:left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-cyan-400/0
              via-cyan-400/40
              to-cyan-400/0
              md:-translate-x-1/2
            "
          />


          {dates.map((item, index) => {

            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="
                  relative
                  grid
                  md:grid-cols-2
                  mb-20
                  md:mb-28
                  last:mb-0
                "
                data-aos={isLeft ? "fade-right" : "fade-left"}
              >

                {/* =================================================
                    MOBILE / LEFT TIMELINE NODE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    md:left-1/2
                    md:-translate-x-1/2
                    z-20
                  "
                >

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-full
                      bg-[#020817]
                      border
                      border-cyan-400/60
                      text-cyan-300
                      text-lg
                      shadow-[0_0_25px_rgba(34,211,238,0.18)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    {item.icon}
                  </div>

                </div>


                {/* =================================================
                    LEFT SIDE
                ================================================== */}

                {isLeft ? (

                  <div
                    className="
                      md:pr-20
                      pl-20
                      md:pl-0
                      text-left
                      md:text-right
                    "
                  >

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[3px]
                        text-cyan-400
                        font-semibold
                      "
                    >
                      {item.badge}
                    </span>


                    <h3
                      className="
                        mt-3
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-3
                        text-xl
                        md:text-2xl
                        font-semibold
                        text-cyan-300
                      "
                    >
                      {item.date}
                    </p>


                    <div
                      className="
                        mt-5
                        h-px
                        w-16
                        md:ml-auto
                        bg-cyan-400/50
                      "
                    />

                  </div>

                ) : (

                  <div className="hidden md:block" />

                )}


                {/* =================================================
                    RIGHT SIDE
                ================================================== */}

                {!isLeft ? (

                  <div
                    className="
                      md:pl-20
                      pl-20
                      text-left
                    "
                  >

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[3px]
                        text-cyan-400
                        font-semibold
                      "
                    >
                      {item.badge}
                    </span>


                    <h3
                      className="
                        mt-3
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-3
                        text-xl
                        md:text-2xl
                        font-semibold
                        text-cyan-300
                      "
                    >
                      {item.date}
                    </p>


                    <div
                      className="
                        mt-5
                        h-px
                        w-16
                        bg-cyan-400/50
                      "
                    />

                  </div>

                ) : (

                  <div className="hidden md:block" />

                )}

              </div>
            );
          })}

        </div>


        {/* =====================================================
            SUBMISSION INFORMATION
        ====================================================== */}

        <div
          className="
            mt-32
            md:mt-40
            pt-20
            border-t
            border-white/10
          "
          data-aos="fade-up"
        >

          <div
            className="
              grid
              lg:grid-cols-[1.2fr_0.8fr]
              gap-16
              items-start
            "
          >

            {/* LEFT */}

            <div>

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
                  Submission Guidelines
                </span>

              </div>


              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-white
                  leading-tight
                "
              >
                Prepare Your Paper
                <span className="text-cyan-400">
                  {" "}for CYCRAI 2027
                </span>
              </h3>


              <p
                className="
                  mt-7
                  max-w-3xl
                  text-slate-400
                  text-lg
                  leading-8
                "
              >
                Authors are invited to submit original, unpublished
                research contributions aligned with the conference
                themes. All submissions will undergo a rigorous
                peer-review process conducted by domain experts.
              </p>


              <p
                className="
                  mt-5
                  max-w-3xl
                  text-slate-500
                  text-lg
                  leading-8
                "
              >
                Accepted and presented papers will be considered for
                publication in the IEEE Xplore Digital Library, subject
                to IEEE quality standards and compliance requirements.
              </p>

            </div>


            {/* RIGHT — STATS WITHOUT BOXES */}

            <div
              className="
                grid
                grid-cols-2
                gap-x-10
                gap-y-10
                lg:pt-4
              "
            >

              <div>

                <h4
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-cyan-300
                  "
                >
                  IEEE
                </h4>

                <p className="mt-2 text-slate-500">
                  Xplore Publication*
                </p>

              </div>


              <div>

                <h4
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-cyan-300
                  "
                >
                  100%
                </h4>

                <p className="mt-2 text-slate-500">
                  Peer Review
                </p>

              </div>


              <div>

                <h4
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-cyan-300
                  "
                >
                  Oral
                </h4>

                <p className="mt-2 text-slate-500">
                  Presentation
                </p>

              </div>


              <div>

                <h4
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-cyan-300
                  "
                >
                  Best
                </h4>

                <p className="mt-2 text-slate-500">
                  Paper Awards
                </p>

              </div>

            </div>

          </div>


          {/* NOTE */}

          <div
            className="
              mt-16
              pt-8
              border-t
              border-white/10
            "
          >

            <p
              className="
                text-center
                max-w-5xl
                mx-auto
                text-slate-500
                leading-8
              "
            >
              <span className="text-cyan-300 font-semibold">
                Note:
              </span>{" "}
              Authors should strictly follow the IEEE manuscript
              template and submission guidelines. Papers must present
              original work that has not been previously published or
              simultaneously submitted to another conference or journal.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}