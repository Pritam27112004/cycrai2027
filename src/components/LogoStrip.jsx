
import uem from "../assets/image/UEM_White.png";
import iem from "../assets/image/IEM_White.png";
import ieee_kol from "../assets/image/ieeek_logo_white.png";
import ieee_cs from "../assets/image/ieee_cs_kolkata_sec.png";
import ieee_sb from "../assets/image/IEEE_SB_logo_white.png";
import iedc from "../assets/image/IEDC_White_Logo.png";
import ieee_cs_sb from "../assets/image/ieee_cs_uem_white (1).png";
import cycrai_logo from "../assets/image/cycrai_latest_logo.png";
export default function LogoStrip() {
  return (
    <div className="w-full px-4 mt-11 md:mt-16">
      <div
        className="
          w-full
          max-w-[1000px]
          mx-auto

          
          backdrop-blur-xl

          border border-[#D4AF37]/40
          rounded-2xl

          px-6 md:px-6
          py-0.1

          shadow-[0_8px_30px_rgba(212,175,55,0.2)]
        "
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-2 md:gap-6
          "
        >
          {/* Logo 1 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={uem}
              alt="University Of Engineering and Management Kolkata"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 2 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_kol}
              alt="IEEE Kolkata Section"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo (IEEE CS KOLKATA SECTION) */}
          {/* <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_cs}
              alt="IEEE Computer Society Kolkata Section"
              className="max-h-full max-w-full object-contain"
            />
          </div> */}

          {/* Divider */}
          {/* <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" /> */}

          {/* Logo 3*/}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_sb}
              alt="IEEE Student Branch"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 4 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={cycrai_logo}
              alt="CYCRAI 2027"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

           {/* Logo 5 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={ieee_cs_sb}
              alt="IEEE Computer Society Kolkata Section"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />
          {/* Logo 6 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={iedc}
              alt="IEDC"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          {/* Divider */}
          <div className="h-8 md:h-12 w-px bg-[#D4AF37]/40 shrink-0" />

          {/* Logo 7 */}
          <div className="flex flex-1 items-center justify-center h-12 md:h-20 lg:h-24">
            <img
              src={iem}
              alt="Institute Of Engineering and Management Kolkata"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
