// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="bg-[#FAF7F2] py-24 px-6 scroll-mt-22"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16" data-aos="fade-up">

//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#051024]">
//             CYCRAI 2027
//           </h2>

//           <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"></div>

//         </div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* Left Side */}
//           <div data-aos="fade-right">

//             <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
//               Theme
//             </div>  <br />
//             <div className="inline-block px-6 py-2 rounded-full bg-[#FFD700]/20 text-[#6D071A] font-semibold mb-6">
//               IEEE Conference Record Number: #72446
//             </div>

//             <h3 className="text-3xl md:text-4xl font-bold text-[#6D071A] leading-snug">
//               Cyber-Physical Intelligence:
//               <span className="block text-[#B8860B] mt-2">
//                 Cyber Security, AI, Sustainable Electronics
//               </span>
//             </h3>

//             {/* Added text-justify here */}
//             <p className="mt-8 text-gray-700 text-lg leading-relaxed text-justify">
//               CYCRAI 2027, the flagship international conference
//               of the IEEE India Council, brings together researchers,
//               academicians, industry experts and innovators to explore
//               the convergence of Cyber Security, Artificial Intelligence.
//             </p>

//             {/* Added text-justify here */}
//             <p className="mt-6 text-gray-700 text-lg leading-relaxed text-justify">
//               The conference focuses on building future-ready smart
//               societies through secure, connected and environmentally
//               responsible technologies aligned with global Net-Zero
//               goals.
//             </p>

//           </div>

//           {/* Right Side Cards */}
//           <div className="grid sm:grid-cols-2 gap-6"   data-aos="fade-left">

//             <div className="
//               bg-white
//               rounded-2xl
//               p-8
//               shadow-lg
//               border
//               border-[#FFD700]/20
//               hover:-translate-y-4
//               hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
//               transition-all
//               duration-500
//             ">
//               <div className="text-4xl mb-4">🌍</div>

//               <h4 className="text-xl font-bold text-[#6D071A]">
//                 Global Knowledge Exchange
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Bringing together researchers and professionals from
//                 academia, industry and government.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFD700]/20 hover:-translate-y-2 transition-all duration-300">
//               <div className="text-4xl mb-4">🤝</div>

//               <h4 className="text-xl font-bold text-[#6D071A]">
//                 Industry Collaboration
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Promoting partnerships among industries, startups,
//                 innovators and IEEE communities.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFD700]/20 hover:-translate-y-2 transition-all duration-300">
//               <div className="text-4xl mb-4">♻️</div>

//               <h4 className="text-xl font-bold text-[#6D071A]">
//                 Sustainable Engineering
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Encouraging green technologies and engineering
//                 solutions aligned with Net-Zero goals.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#FFD700]/20 hover:-translate-y-2 transition-all duration-300">
//               <div className="text-4xl mb-4">🚀</div>

//               <h4 className="text-xl font-bold text-[#6D071A]">
//                 Future-Ready Society
//               </h4>

//               <p className="mt-3 text-gray-600">
//                 Advancing AI, Cyber Security.
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import {
  FaShieldAlt,
  FaBrain,
  FaUsers,
  FaMicrochip,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020817] py-28 scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              text-cyan-300
              text-sm
              tracking-[3px]
              uppercase
              font-semibold
            "
          >
            About CYCRAI
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-black
              text-white
              font-['Orbitron']
            "
          >
            CYCRAI 2027
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-lg
              text-slate-300
              leading-relaxed
            "
          >
            Empowering the future through secure, intelligent and
            sustainable digital technologies by connecting academia,
            industry, innovators and researchers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div data-aos="fade-right">

            {/* Theme Card */}
            <div
              className="
                rounded-2xl
                border
                border-cyan-400/20
                bg-[#071326]/70
                backdrop-blur-xl
                p-6
                shadow-[0_0_30px_rgba(0,212,255,.08)]
              "
            >
              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-cyan-300
                  text-sm
                  font-semibold
                "
              >
                Conference Theme
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                "
              >
                Secure Intelligence
                <span className="block text-cyan-400 mt-2">
                  for a Connected Future
                </span>
              </h3>

              
            </div>

            {/* Description */}
            <div className="mt-10 space-y-6">

              <p className="text-slate-300 text-lg leading-8 text-justify">

                <span className="text-cyan-300 font-semibold">
                  CYCRAI 2027
                </span>{" "}
                is the flagship international conference of the IEEE
                India Council dedicated to advancing research and
                innovation in Cyber Security, Artificial Intelligence,
                Machine Learning, Intelligent Systems and emerging
                digital technologies.

              </p>

              <p className="text-slate-300 text-lg leading-8 text-justify">

                The conference serves as a global platform where
                researchers, academicians, industry leaders,
                entrepreneurs and students exchange ideas, present
                cutting-edge research and build collaborations that
                shape the next generation of secure and intelligent
                digital ecosystems.

              </p>

              <p className="text-slate-300 text-lg leading-8 text-justify">

                Through keynote talks, technical paper presentations,
                workshops, tutorials and industry sessions, CYCRAI
                2027 aims to accelerate innovation while addressing
                real-world challenges in cybersecurity, trustworthy AI,
                cloud computing, IoT, blockchain and smart
                infrastructure.

              </p>

            </div>
          </div>
                    {/* RIGHT SIDE */}
          <div
            className="space-y-6"
            data-aos="fade-left"
          >
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-[#071326]/70
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/60
                  hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
                "
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FaShieldAlt className="text-3xl text-cyan-300 group-hover:scale-110 transition" />
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Cyber Security
                </h4>

                <p className="mt-4 text-slate-300 leading-7">
                  Explore cutting-edge research in cyber defence,
                  digital forensics, privacy, cryptography,
                  zero-trust architecture and resilient digital
                  infrastructure.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-[#071326]/70
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/60
                  hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
                "
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FaBrain className="text-3xl text-cyan-300 group-hover:scale-110 transition" />
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Artificial Intelligence
                </h4>

                <p className="mt-4 text-slate-300 leading-7">
                  Discover advances in machine learning, deep
                  learning, generative AI, computer vision,
                  intelligent automation and trustworthy AI.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-[#071326]/70
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/60
                  hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
                "
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FaUsers className="text-3xl text-cyan-300 group-hover:scale-110 transition" />
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Global Collaboration
                </h4>

                <p className="mt-4 text-slate-300 leading-7">
                  Connect with leading researchers, IEEE volunteers,
                  industry experts, startups and policymakers from
                  around the world.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-[#071326]/70
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/60
                  hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
                "
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FaMicrochip className="text-3xl text-cyan-300 group-hover:scale-110 transition" />
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Emerging Technologies
                </h4>

                <p className="mt-4 text-slate-300 leading-7">
                  From IoT and blockchain to quantum computing,
                  robotics and smart cities, discover technologies
                  shaping tomorrow's digital society.
                </p>
              </div>

            </div>

            {/* Statistics */}

            

          </div>

        </div>

        {/* Bottom CTA */}

        <div
          className="mt-24 text-center"
          data-aos="fade-up"
        >

          <div
            className="
              max-w-4xl
              mx-auto
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-r
              from-cyan-500/10
              via-blue-500/10
              to-cyan-500/10
              backdrop-blur-xl
              px-10
              py-12
            "
          >

            <h3 className="text-3xl md:text-4xl font-bold text-white">

              Join the Future of
              <span className="text-cyan-300">
                {" "}
                Secure Intelligence
              </span>

            </h3>

            <p className="mt-6 text-slate-300 leading-8 max-w-3xl mx-auto">

              CYCRAI 2027 provides a unique opportunity to present
              groundbreaking research, interact with distinguished
              keynote speakers, build global collaborations and
              contribute towards a secure, intelligent and
              sustainable digital future.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}