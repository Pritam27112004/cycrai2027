
import { motion } from "framer-motion";

export default function CommitteeTabs({
  activeCommittee,
  setActiveCommittee,
}) {
  const tabs = [
    {
      key: "organizing",
      label: "Organizing Committee",
    },
    {
      key: "ieeeKolkata",
      label: "IEEE Kolkata Section Steering Committee",
    },
    {
      key: "ieeeCS",
      label: "IEEE CS Kolkata Section Steering Committee",
    },
    {
      key: "student",
      label: "IEEE CS UEMK SB Committee",
    },
  ];

  return (
    <section className="relative w-full mb-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[180px]" />
      </div>

      <div className="relative">

                {/* Desktop */}
        <div
          className="
            hidden
            md:flex

            p-2

            rounded-2xl

            bg-[#071326]/80
            backdrop-blur-xl

            border
            border-cyan-400/20

            shadow-[0_0_35px_rgba(34,211,238,0.12)]
          "
        >
          {tabs.map((tab) => {
            const active = activeCommittee === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveCommittee(tab.key)}
                className="
                  relative
                  flex-1

                  py-4
                  px-6

                  rounded-xl

                  font-semibold

                  overflow-hidden

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >
                {active && (
                  <motion.div
                    layoutId="committeeTab"
                    className="
                      absolute
                      inset-0

                      rounded-xl

                      bg-gradient-to-r
                      from-cyan-500
                      via-sky-500
                      to-blue-600

                      shadow-[0_0_25px_rgba(34,211,238,0.45)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`
                    relative
                    z-10

                    text-sm
                    lg:text-base

                    transition-all
                    duration-300

                    ${
                      active
                        ? "text-white"
                        : "text-gray-300 hover:text-cyan-300"
                    }
                  `}
                >
                  {tab.label}
                </span>

                {!active && (
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      bg-cyan-400

                      transition-all
                      duration-300

                      group-hover:w-3/4
                    "
                  />
                )}
              </button>
            );
          })}
        </div>

                {/* Mobile */}

        <div className="md:hidden space-y-4">
          {tabs.map((tab) => {
            const active = activeCommittee === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveCommittee(tab.key)}
                className={`
                  relative
                  w-full

                  overflow-hidden

                  rounded-2xl

                  px-5
                  py-4

                  text-left

                  font-semibold

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        bg-gradient-to-r
                        from-cyan-500
                        via-sky-500
                        to-blue-600

                        text-white

                        shadow-[0_0_20px_rgba(34,211,238,0.45)]
                      `
                      : `
                        bg-[#071326]/80

                        border
                        border-cyan-400/20

                        text-gray-300

                        hover:border-cyan-400/60
                        hover:text-cyan-300
                        hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
                      `
                  }
                `}
              >
                <div className="flex items-center justify-between">

                  <span>{tab.label}</span>

                  <span
                    className={`
                      text-lg
                      transition-transform
                      duration-300

                      ${active ? "rotate-90" : ""}
                    `}
                  >
                    ›
                  </span>

                </div>

                {!active && (
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0

                      h-[2px]
                      w-0

                      bg-cyan-400

                      transition-all
                      duration-300

                      hover:w-full
                    "
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>

    </section>
  );
}