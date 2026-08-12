
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/image/cycrai_latest_logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020817] text-white border-t border-cyan-400/20">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[180px]" />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="CYCRAI 2027"
              className="h-16 transition-all duration-300 hover:scale-105"
            />

            {/* <p className="mt-6 text-gray-300 leading-relaxed">
              CYCRAI 2027 is the flagship conference of the
              IEEE India Council, bringing together researchers,
              academicians, industry experts and innovators from
              across the globe.
            </p> */}
          </div>

                    {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#tracks"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Tracks
                </a>
              </li>

              <li>
                <a
                  href="#venue"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Venue
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-cyan-300">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                📍 Institute of Engineering and Management, Kolkata
              </p>

              <p>
                📧 cycrai@iem.edu.in
              </p>

              <p>
                
              </p>

              
            </div>
          </div>
          </div>
          </div>
                {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20">
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-5
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-gray-400 text-sm">
            © CYCRAI 2027. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Hosted by Institute of Engineering and Management, Kolkata
          </p>

        </div>
      </div>

    </footer>
  );
}