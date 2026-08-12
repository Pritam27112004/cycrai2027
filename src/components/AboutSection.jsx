import {
  FaShieldAlt,
  FaBrain,
  FaUsers,
  FaMicrochip,
} from "react-icons/fa";

export default function AboutSection() {
  const researchAreas = [
    {
      number: "01",
      icon: FaShieldAlt,
      title: "Cyber Security",
      description:
        "Explore cutting-edge research in cyber defence, digital forensics, privacy, cryptography, zero-trust architecture and resilient digital infrastructure.",
    },
    {
      number: "02",
      icon: FaBrain,
      title: "Artificial Intelligence",
      description:
        "Discover advances in machine learning, deep learning, generative AI, computer vision, intelligent automation and trustworthy AI.",
    },
    {
      number: "03",
      icon: FaUsers,
      title: "Global Collaboration",
      description:
        "Connect with leading researchers, IEEE volunteers, industry experts, startups and policymakers from around the world.",
    },
    {
      number: "04",
      icon: FaMicrochip,
      title: "Emerging Technologies",
      description:
        "From IoT and blockchain to quantum computing, robotics and smart cities, discover technologies shaping tomorrow's digital society.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-28
        md:py-36
        scroll-mt-24
      "
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            -top-40
            left-1/4
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/5
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            top-1/2
            -right-40
            w-[450px]
            h-[450px]
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

      <div className="relative max-w-7xl mx-auto px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="mb-24 md:mb-32"
          data-aos="fade-up"
        >
          {/* Small Label */}
          <div className="flex items-center gap-4 mb-8">
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
              About the Conference
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-black
              tracking-tight
              leading-none
              text-white
            "
          >
            CYCRAI
            <span className="text-cyan-400"> 2027</span>
          </h2>

          {/* Subtitle */}
          <div
            className="
              mt-8
              max-w-4xl
              text-xl
              md:text-2xl
              leading-relaxed
              text-slate-300
            "
          >
            Empowering the future through{" "}
            <span className="text-white font-semibold">
              secure, intelligent
            </span>{" "}
            and{" "}
            <span className="text-cyan-300 font-semibold">
              sustainable digital technologies.
            </span>
          </div>
        </div>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[0.8fr_1.2fr]
            gap-14
            lg:gap-24
            items-start
            mb-32
          "
        >

          {/* Left */}
          <div data-aos="fade-right">

            <p
              className="
                text-sm
                uppercase
                tracking-[4px]
                text-cyan-400
                font-semibold
              "
            >
              Conference Theme
            </p>

            <h3
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Secure Intelligence
              <span className="block text-cyan-400 mt-2">
                for a Connected Future
              </span>
            </h3>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-cyan-400" />

              <span className="text-slate-500 text-sm tracking-[2px]">
                IEEE CONFERENCE RECORD #72446
              </span>
            </div>

          </div>


          {/* Right */}
          <div
            className="space-y-6"
            data-aos="fade-left"
          >

            <p className="text-slate-300 text-lg md:text-xl leading-8">
              <span className="text-cyan-300 font-semibold">
                CYCRAI 2027
              </span>{" "}
              is the flagship international conference of the IEEE India
              Council dedicated to advancing research and innovation in
              Cyber Security, Artificial Intelligence, Machine Learning,
              Intelligent Systems and emerging digital technologies.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              The conference serves as a global platform where researchers,
              academicians, industry leaders, entrepreneurs and students
              exchange ideas, present cutting-edge research and build
              collaborations that shape the next generation of secure and
              intelligent digital ecosystems.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              Through keynote talks, technical paper presentations,
              workshops, tutorials and industry sessions, CYCRAI 2027 aims
              to accelerate innovation while addressing real-world
              challenges in cybersecurity, trustworthy AI, cloud computing,
              IoT, blockchain and smart infrastructure.
            </p>

          </div>

        </div>


        {/* =====================================================
            RESEARCH AREAS
        ====================================================== */}

        <div data-aos="fade-up">

          {/* Section Heading */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
              mb-14
            "
          >

            <div>
              <p
                className="
                  text-cyan-400
                  text-sm
                  uppercase
                  tracking-[4px]
                  font-semibold
                "
              >
                Areas of Focus
              </p>

              <h3
                className="
                  mt-4
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                "
              >
                Research at CYCRAI
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
              Four interconnected domains driving the future of secure
              and intelligent digital societies.
            </p>

          </div>


          {/* Research List */}
          <div className="border-t border-white/10">

            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="
                    group
                    grid
                    md:grid-cols-[90px_80px_1fr]
                    gap-6
                    md:gap-10
                    items-start
                    py-10
                    md:py-12
                    border-b
                    border-white/10
                    transition-all
                    duration-500
                    hover:bg-cyan-400/[0.025]
                  "
                >

                  {/* Number */}
                  <div
                    className="
                      text-cyan-500/50
                      text-lg
                      font-mono
                      tracking-widest
                      group-hover:text-cyan-400
                      transition-colors
                    "
                  >
                    {area.number}
                  </div>


                  {/* Icon */}
                  <div
                    className="
                      text-3xl
                      text-cyan-400/70
                      group-hover:text-cyan-300
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Icon />
                  </div>


                  {/* Content */}
                  <div>

                    <h4
                      className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-white
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {area.title}
                    </h4>

                    <p
                      className="
                        mt-4
                        max-w-3xl
                        text-slate-400
                        text-base
                        md:text-lg
                        leading-8
                      "
                    >
                      {area.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div
          className="
            mt-32
            md:mt-40
            grid
            lg:grid-cols-[1fr_auto]
            gap-10
            items-end
          "
          data-aos="fade-up"
        >

          <div>

            <div className="flex items-center gap-4 mb-7">
              <span className="h-px w-16 bg-cyan-400" />

              <span
                className="
                  text-cyan-400
                  text-sm
                  uppercase
                  tracking-[4px]
                  font-semibold
                "
              >
                The Vision
              </span>
            </div>

            <h3
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
                max-w-4xl
              "
            >
              Building a secure,
              <span className="text-cyan-400">
                {" "}intelligent
              </span>{" "}
              and sustainable digital future.
            </h3>

          </div>


          {/* Conference Number */}
          <div
            className="
              text-right
              lg:pb-2
            "
          >

            <div
              className="
                text-6xl
                md:text-8xl
                font-black
                text-white/[0.04]
                leading-none
              "
            >
              2027
            </div>

            <p
              className="
                text-cyan-400
                text-xs
                tracking-[4px]
                uppercase
                mt-2
              "
            >
              International Conference
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}