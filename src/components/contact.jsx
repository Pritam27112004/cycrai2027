
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020817] py-28 scroll-mt-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

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
              uppercase
              tracking-[3px]
              text-sm
              font-semibold
            "
          >
            Contact & Support
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
            Get in Touch
          </h2>

          <p
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-lg
              leading-8
              text-slate-300
            "
          >
            Have questions regarding paper submission, registration,
            accommodation, or conference participation? Our organizing
            committee is here to assist you throughout your CYCRAI 2027
            journey.
          </p>

        </div>

        {/* Contact Card */}

        <div
          data-aos="zoom-in"
          className="
            rounded-3xl
            border
            border-cyan-400/20
            bg-[#071326]/70
            backdrop-blur-xl
            p-10
            shadow-[0_0_40px_rgba(34,211,238,0.12)]
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}

<div>

  <h3 className="text-3xl font-bold text-white">
    CYCRAI 2027
  </h3>

  <p className="mt-4 text-slate-300 text-lg leading-8">
    Institute of Engineering and Management (IEM), Kolkata proudly
    welcomes delegates, researchers, academicians, industry
    professionals and students from around the world to CYCRAI
    2027.
  </p>

  <div className="mt-10 space-y-6">

    {/* Email */}

    <div
      className="
        flex
        items-start
        gap-5
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#020817]/60
        p-6
      "
    >

      <div
        className="
          h-14
          w-14
          rounded-xl
          bg-cyan-500/15
          flex
          items-center
          justify-center
          text-cyan-300
          text-2xl
        "
      >
        <FaEnvelope />
      </div>

      <div>

        <p className="text-cyan-300 uppercase tracking-wider text-sm">
          Email Support
        </p>

        <p className="mt-2 text-white text-lg break-all">
          cycrai@iem.edu.in
        </p>

      </div>

    </div>

    {/* WhatsApp */}

    {/* Venue */}

    <div
      className="
        flex
        items-start
        gap-5
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#020817]/60
        p-6
      "
    >

      <div
        className="
          h-14
          w-14
          rounded-xl
          bg-cyan-500/15
          flex
          items-center
          justify-center
          text-cyan-300
          text-2xl
        "
      >
        <FaMapMarkerAlt />
      </div>

      <div>

        <p className="text-cyan-300 uppercase tracking-wider text-sm">
          Conference Venue
        </p>

        <p className="mt-2 text-white">
          Institute of Engineering and Management
        </p>

        <p className="text-slate-400">
          University Campus, New Town,
          Kolkata, West Bengal, India
        </p>

      </div>

    </div>

  </div>

</div>

{/* Right Side */}

<div>

  <div
    className="
      rounded-3xl
      border
      border-cyan-400/20
      bg-[#020817]/70
      backdrop-blur-xl
      p-8
      shadow-[0_0_30px_rgba(34,211,238,0.12)]
    "
  >

    <div
      className="
        inline-flex
        items-center
        gap-3
        px-5
        py-2
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-400/30
        text-cyan-300
        font-semibold
      "
    >
        <FaEnvelope/>
      Conference Support
    </div>

    <h3 className="mt-6 text-3xl font-bold text-white">
      Need Immediate Assistance?
    </h3>

    <p className="mt-5 text-slate-300 leading-8 text-lg">
      Our organizing committee is available to assist you with
      paper submission, registration, accommodation, visa invitation
      letters, presentation guidelines, and other conference-related
      queries.
    </p>

    {/* Quick Support Features */}

    <div className="mt-8 space-y-4">

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Paper Submission Assistance
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Registration Support
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Presentation & Schedule Queries
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        Accommodation & Travel Information
      </div>

    </div>

    {/* CTA Buttons */}

    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="mailto:paulpritam417@gmail.com"
        className="
          px-8
          py-4
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          font-semibold
          hover:scale-105
          transition-all
          duration-300
          shadow-[0_0_25px_rgba(34,211,238,0.35)]
        "
      >
        Email Us
      </a>

    </div>

    {/* Support Badge */}

    <div
      className="
        mt-10
        rounded-2xl
        border
        border-cyan-400/20
        bg-cyan-500/10
        p-5
      "
    >
      <p className="text-cyan-300 font-semibold">
        Support Availability
      </p>

      <p className="mt-2 text-slate-300">
        We aim to respond to all conference-related queries within
        <span className="font-semibold text-white"> 24–48 hours.</span>
      </p>
    </div>

  </div>

</div>

</div>
</div>.
{/* Bottom Note */}

<div
  data-aos="fade-up"
  className="
    mt-16
    text-center
    rounded-3xl
    border
    border-cyan-400/20
    bg-[#071326]/50
    backdrop-blur-xl
    p-8
  "
>

  <h3 className="text-2xl font-bold text-white">
    We Look Forward to Welcoming You to CYCRAI 2027
  </h3>

  <p className="mt-4 text-slate-300 max-w-3xl mx-auto leading-8">
    Join researchers, academicians, industry experts, and innovators
    from across the globe to exchange ideas, present groundbreaking
    research, and shape the future of Cyber Security, Artificial
    Intelligence, and Responsible Innovation.
  </p>

</div>

</div>

</section>
  );
}