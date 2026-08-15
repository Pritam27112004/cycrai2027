
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Globe,
  Clock3,
  FileText,
  Users,
  Plane,
  Sparkles,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Contact() {
  const supportItems = [
    {
      icon: FileText,
      title: "Paper Submission",
      description:
        "Get assistance with manuscript preparation, submission procedures and paper-related queries.",
    },
    {
      icon: Users,
      title: "Registration Support",
      description:
        "Get guidance regarding author registration, participation and conference formalities.",
    },
    {
      icon: Globe,
      title: "Conference Information",
      description:
        "Find information about the conference program, participation and international delegates.",
    },
    {
      icon: Plane,
      title: "Travel & Accommodation",
      description:
        "Get assistance with travel planning, accommodation and other participation-related information.",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO / CONTACT HEADER
      ========================================================== */}

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================== */}

      <section className="relative pt-6 pb-24 overflow-hidden bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817]">
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
          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">
              Conference Secretariat
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">
              Contact
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Information
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
              Reach out to the CYCRAI 2027 organizing committee for conference
              related assistance and information.
            </p>
          </motion.div>

          {/* Main Contact Grid */}

          <div className="grid lg:grid-cols-2 gap-10">
            {/* =================================================
                LEFT — CONTACT DETAILS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-2xl
                p-10
              "
            >
              {/* Glow */}

              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                  <MessageCircle
                    size={30}
                    className="text-cyan-300"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  CYCRAI 2027
                </h3>

                <p className="mt-5 text-slate-400 text-lg leading-8">
                  Institute of Engineering & Management, Kolkata
                  welcomes researchers, academicians, industry professionals,
                  students and innovators from around the world to CYCRAI 2027.
                </p>

                {/* Email */}

                <div className="mt-10">
                  <div
                    className="
                      group
                      flex
                      items-start
                      gap-5
                      rounded-3xl
                      border
                      border-cyan-400/15
                      bg-black/20
                      p-6
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-500/5
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={25} className="text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[3px] text-cyan-300 font-semibold">
                        Email Support
                      </p>

                      <a
                        href="mailto:cycrai@iem.edu.in"
                        className="mt-2 block text-lg text-white hover:text-cyan-300 transition-colors break-all"
                      >
                        cycrai@iem.edu.in
                      </a>

                      <p className="mt-2 text-sm text-slate-500">
                        Conference correspondence
                      </p>
                    </div>
                  </div>
                </div>

                {/* Venue */}

                <div className="mt-5">
                  <div
                    className="
                      group
                      flex
                      items-start
                      gap-5
                      rounded-3xl
                      border
                      border-cyan-400/15
                      bg-black/20
                      p-6
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-500/5
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={25} className="text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[3px] text-cyan-300 font-semibold">
                        Conference Venue
                      </p>

                      <p className="mt-2 text-lg text-white">
                        Institute of Engineering & Management, Kolkata
                      </p>

                      <p className="mt-1 text-slate-400 leading-7">
                        University Campus, Newtown,
                        <br />
                        Kolkata, West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT — SUPPORT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/10
                via-[#071326]
                to-[#020817]
                p-10
              "
            >
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

              <div className="relative z-10">
                {/* Badge */}

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                  <ShieldCheck size={18} />
                  Conference Support
                </div>

                <h3 className="mt-8 text-3xl md:text-4xl font-bold text-white">
                  Need Assistance?
                </h3>

                <p className="mt-5 text-slate-400 leading-8 text-lg">
                  Our organizing committee is available to assist with paper
                  submission, registration, accommodation, presentation
                  guidelines and other conference-related queries.
                </p>

                {/* Support Items */}

                <div className="mt-10 space-y-4">
                  {[
                    "Paper Submission Assistance",
                    "Registration Support",
                    "Presentation & Schedule Queries",
                    "Accommodation & Travel Information",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.6)]" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Email CTA */}

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="mailto:cycrai@iem.edu.in"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-cyan-400
                      px-8
                      py-4
                      font-bold
                      text-slate-900
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
                    "
                  >
                    Email Us

                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>

                {/* Availability */}

                <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-black/20 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                      <Clock3
                        size={22}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>
                      <p className="text-cyan-300 font-semibold">
                        Support Availability
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        We aim to respond within{" "}
                        <span className="text-white font-semibold">
                          24–48 hours
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE CAN HELP
      ========================================================== */}

      <section className="relative py-28 bg-[#020817] overflow-hidden">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-20 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[3px] text-sm">
              Support Areas
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-white">
              How We Can
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Help You
              </span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
              Whether you are submitting your first paper or joining CYCRAI
              2027 as an international delegate, our team is ready to help.
            </p>
          </motion.div>

          {/* Support Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {supportItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
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
                    hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
                  "
                >
                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300">
                      <Icon
                        size={28}
                        className="text-cyan-300"
                      />
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-slate-400 leading-8">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#020817] via-[#071326] to-[#020817]">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-cyan-400/20
              bg-white/5
              backdrop-blur-2xl
              p-10
              md:p-14
              text-center
            "
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                <MessageCircle
                  size={30}
                  className="text-cyan-300"
                />
              </div>

              <h2 className="mt-8 text-4xl md:text-5xl font-black text-white">
                We Look Forward to
                <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Welcoming You
                </span>
              </h2>

              <p className="mt-7 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
                Join researchers, academicians, industry experts and innovators
                from across the globe to exchange ideas, present impactful
                research and shape the future of Cyber Security, Artificial
                Intelligence and Responsible Innovation.
              </p>

              <a
                href="mailto:cycrai@iem.edu.in"
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-cyan-400
                  px-9
                  py-4
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
                "
              >
                Contact Conference Team

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <Footer />
    </>
  );
}