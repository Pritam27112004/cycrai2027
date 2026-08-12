import React from "react";
import {
  FaShieldAlt,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const tracks = [
  {
    icon: <FaShieldAlt />,
    title: "Track 1: Foundation of Cyber Security",
    desc:
      "Cybersecurity Awareness, Cybersecurity Governance, Risk and Compliance, Digital Forensics and Cybercrime Investigation, Cyberattack Reconstruction and Attribution, Hardware Security and Reliability, IoT-based Data security, Security in the IoT, Cloud and Edge Devices, Database Security and Privacy, Malware Analysis, Federated Learning Security and Privacy Preserving Machine Learning, Digital Twin Security, Cyber Resilience and Cyber Recovery, 5G/6G Network Security, Cyber Threat Intelligence, Cybercrime Investigation, Intrusion Detection and Prevention, Vulnerability Assessment and Prevention, Zero Trust Architecture, Cyber-Physical Systems and Security, Block Chain and Distributed Ledger Security, Security Aspects of Software Development, AI Driven Cyber Defence",
  },
  {
    icon: <FaCode />,
    title: "Track 2: Foundation of Cryptography",
    desc:
      "Cryptography and Cryptoanalysis, Information Theory and Cryptography, Applied Cryptography and Network Security, AIML for Cryptography, Lightweight Cryptography for IoT and Embedded Systems, Applied Cryptography and its Implementation, Quantum Cryptography, Quantum Machine Learning, Quantum Computing, Post Quantum Cryptography",
  },
  {
    icon: <FaBrain />,
    title: "Track 3: Foundation of Responsible AI",
    desc:
      "AI Ethics, AI Fairness, AI Bias Mitigation, Explainable AI, Interpretable AI, Transparency in AI Audit, Privacy Preserving AI Models, Secure AI Systems, Responsible Generative AI, AI for Ransomware Analysis, AI Security in Healthcare, Education, Infrastructure and Finance Framework, Security in Sustainable AI, Societal Impact of Responsible AI Development, Security and Privacy for AI systems, AI-ML for Threat Detection and Prevention",
  },
];

const Tracks = () => {
  return (
    <section id="tracks" className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Technical Tracks</h2>
          <div className="w-20 h-1 bg-[#2563EB] mx-auto mb-4"></div>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            CYCRAI 2027 invites original research contributions in the following core thrust areas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-[#1E293B] rounded-xl p-6 border border-slate-700 hover:border-[#2563EB] hover:-translate-y-2 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-[#38BDF8] group-hover:text-white group-hover:bg-[#2563EB] transition-colors mb-6 text-2xl">
                {track.icon}
              </div>
              <h3 className="text-[#F8FAFC] font-semibold text-lg font-serif mb-4 line-clamp-2">
                {track.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
