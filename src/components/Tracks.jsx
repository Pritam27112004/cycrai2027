import React from "react";
import {
  FaShieldAlt,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const tracks = [
  {
    number: "01",
    icon: <FaShieldAlt />,
    title: "Foundation of Cyber Security",
    desc:
      "Cybersecurity Awareness, Cybersecurity Governance, Risk and Compliance, Digital Forensics and Cybercrime Investigation, Cyberattack Reconstruction and Attribution, Hardware Security and Reliability, IoT-based Data security, Security in the IoT, Cloud and Edge Devices, Database Security and Privacy, Malware Analysis, Federated Learning Security and Privacy Preserving Machine Learning, Digital Twin Security, Cyber Resilience and Cyber Recovery, 5G/6G Network Security, Cyber Threat Intelligence, Cybercrime Investigation, Intrusion Detection and Prevention, Vulnerability Assessment and Prevention, Zero Trust Architecture, Cyber-Physical Systems and Security, Block Chain and Distributed Ledger Security, Security Aspects of Software Development, AI Driven Cyber Defence",
  },
  {
    number: "02",
    icon: <FaCode />,
    title: "Foundation of Cryptography",
    desc:
      "Cryptography and Cryptoanalysis, Information Theory and Cryptography, Applied Cryptography and Network Security, AIML for Cryptography, Lightweight Cryptography for IoT and Embedded Systems, Applied Cryptography and its Implementation, Quantum Cryptography, Quantum Machine Learning, Quantum Computing, Post Quantum Cryptography",
  },
  {
    number: "03",
    icon: <FaBrain />,
    title: "Foundation of Responsible AI",
    desc:
      "AI Ethics, AI Fairness, AI Bias Mitigation, Explainable AI, Interpretable AI, Transparency in AI Audit, Privacy Preserving AI Models, Secure AI Systems, Responsible Generative AI, AI for Ransomware Analysis, AI Security in Healthcare, Education, Infrastructure and Finance Framework, Security in Sustainable AI, Societal Impact of Responsible AI Development, Security and Privacy for AI systems, AI-ML for Threat Detection and Prevention",
  },
];

const Tracks = () => {
  return (
    <section
      id="tracks"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        text-white
        py-28
        md:py-36
        scroll-mt-24
      "
    >

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Cyan Glow */}
        <div
          className="
            absolute
            top-20
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/5
            blur-[150px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            bottom-0
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/5
            blur-[150px]
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

          {/* Label */}
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
              Call for Papers
            </span>

          </div>


          {/* Heading */}
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
            Technical
            <span className="text-cyan-400"> Tracks</span>
          </h2>


          {/* Description */}
          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              md:text-xl
              text-slate-400
              leading-8
            "
          >
            CYCRAI 2027 invites original research contributions addressing
            emerging challenges and innovations across Cyber Security,
            Cryptography and Responsible Artificial Intelligence.
          </p>

        </div>


        {/* =====================================================
            TRACKS
        ====================================================== */}

        <div className="border-t border-white/10">

          {tracks.map((track, index) => (

            <div
              key={index}
              className="
                group
                py-12
                md:py-16
                border-b
                border-white/10
                transition-all
                duration-500
                hover:bg-cyan-400/[0.02]
              "
              data-aos="fade-up"
            >

              <div
                className="
                  grid
                  lg:grid-cols-[100px_70px_1fr]
                  gap-6
                  md:gap-10
                  items-start
                "
              >

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div
                  className="
                    text-cyan-500/50
                    text-xl
                    font-mono
                    tracking-[3px]
                    pt-2
                    group-hover:text-cyan-400
                    transition-colors
                  "
                >
                  {track.number}
                </div>


                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    text-3xl
                    text-cyan-400/70
                    pt-1
                    group-hover:text-cyan-300
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  {track.icon}
                </div>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div>

                  {/* Track Title */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-4
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        md:text-4xl
                        font-bold
                        text-white
                        leading-tight
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {track.title}
                    </h3>

                  </div>


                  {/* Small Accent */}

                  <div className="flex items-center gap-3 mt-5">

                    <span className="h-px w-10 bg-cyan-400/70" />

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[3px]
                        text-slate-600
                      "
                    >
                      Research Areas
                    </span>

                  </div>


                  {/* Description */}

                  <p
                    className="
                      mt-7
                      max-w-5xl
                      text-slate-400
                      text-base
                      md:text-lg
                      leading-8
                    "
                  >
                    {track.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          className="
            mt-24
            md:mt-32
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-8
          "
          data-aos="fade-up"
        >

          <div>

            <div className="flex items-center gap-4">

              <span className="h-px w-14 bg-cyan-400" />

              <span
                className="
                  text-cyan-400
                  text-sm
                  uppercase
                  tracking-[4px]
                  font-semibold
                "
              >
                Research & Innovation
              </span>

            </div>

            <p
              className="
                mt-5
                text-slate-500
                max-w-2xl
                leading-7
              "
            >
              Researchers, academicians, industry professionals and
              innovators are invited to contribute original work across
              these multidisciplinary thrust areas.
            </p>

          </div>


          {/* Decorative Number */}

          <div
            className="
              text-7xl
              md:text-8xl
              font-black
              text-white/[0.035]
              leading-none
              select-none
            "
          >
            03
          </div>

        </div>

      </div>

    </section>
  );
};

export default Tracks;