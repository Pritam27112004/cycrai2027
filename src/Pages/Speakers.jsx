
import { motion } from "framer-motion";
import Footer from "../components/Footer";
export default function Speakers() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-cyan-500/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:45px_45px]" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[160px]" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">
            Conference Program
          </motion.div>

          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}
            className="mt-8 text-5xl md:text-7xl font-black">
            <span className="text-white">Conference </span>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Program
            </span>
          </motion.h1>

          <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-9 text-slate-300">
            Explore keynote talks, technical sessions, workshops, tutorials,
            panel discussions and networking events that will shape CYCRAI 2027.
          </motion.p>

          <div className="mt-10 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"/>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
        <div className="relative max-w-7xl mx-auto px-6 space-y-20">

          {[
            {
              icon:"🎤",
              eyebrow:"KEYNOTE SPEAKERS",
              title:"Invited Speakers",
              heading:"Speaker Announcements Coming Soon",
              text:"Renowned researchers, IEEE Fellows, industry leaders and innovators will be announced soon. Stay tuned for keynote addresses and distinguished invited talks."
            },
            {
              icon:"📅",
              eyebrow:"CONFERENCE SCHEDULE",
              title:"Conference Program",
              heading:"Program Details Coming Soon",
              text:"The complete conference agenda including paper presentations, tutorials, workshops, poster sessions and networking events will be published after final confirmation."
            }
          ].map((item,index)=>(
            <motion.section
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="relative"
            >
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />
              <div className="relative rounded-3xl border border-cyan-400/20 bg-[#071326]/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"/>
                <div className="p-10 md:p-16 text-center">
                  <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-wider text-cyan-300">
                    {item.eyebrow}
                  </span>

                  <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white">
                    {item.title}
                  </h2>

                  <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-6xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-10 text-2xl md:text-4xl font-bold text-cyan-300">
                    {item.heading}
                  </h3>

                  <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}

        </div>
      </section>
      <Footer/>
    </main>
  );
}
