
// import { useEffect, useState } from "react";
// import logo from "../assets/image/cycrai_latest_logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Router hooks
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Scroll to a section on the Home page
//   const scrollToSection = (id) => {
//     setMenuOpen(false);

//     if (location.pathname !== "/") {
//       // Go to Home first
//       navigate("/");

//       // Wait for Home to render, then scroll
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 300);
//     } else {
//       // Already on Home
//       document.getElementById(id)?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   // Navigation items
//   const navItems = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About",
//       path: "/about",
//     },
//     {
//       name: "Committee",
//       path: "/committee",
//     },
//     {
//       name: "Program",
//       path: "/speakers",
//     },
//     {
//       name: "Call For Papers",
//       path: "/call-for-papers",
//     },
//     {
//       name: "Guidelines & Policies",
//       path: "/guidelines",
//     },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <div
//         className={`
//           mx-auto
//           transition-all
//           duration-700
//           ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${scrolled ? "max-w-[1280px]" : "max-w-[1500px]"}
//           px-4 md:px-8 lg:px-12
//         `}
//       >
//         {/* Navbar */}
//         <div
//           className={`
//             mt-3 md:mt-7
//             flex
//             items-center
//             justify-between
//             rounded-2xl
//             transition-all
//             duration-500
//             ${
//               scrolled
//                 ? `
//                   bg-[#051024]/70
//                   backdrop-blur-xl
//                   px-4 md:px-8
//                   py-3
//                   shadow-[0_15px_40px_rgba(0,0,0,0.25)]
//                   border
//                   border-cyan-400/20
//                 `
//                 : `
//                   bg-[#051024]/85
//                   backdrop-blur-md
//                   px-4 md:px-8
//                   py-3 md:py-4
//                   shadow-2xl
//                   border
//                   border-cyan-400/20
//                 `
//             }
//           `}
//         >
//           {/* Logo */}
//           <div className="relative flex items-center">
//             <Link
//               to="/"
//               onClick={() => {
//                 setMenuOpen(false);
//                 window.scrollTo(0, 0);
//               }}
//             >
//               <img
//                 src={logo}
//                 alt="CYCRAI 2027"
//                 className={`
//                   w-auto
//                   object-contain
//                   transition-all
//                   duration-700
//                   ${
//                     scrolled
//                       ? "h-14 md:h-16 -my-3"
//                       : "h-16 md:h-20 -my-4"
//                   }
//                 `}
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => {
//                   setMenuOpen(false);
//                   window.scrollTo(0, 0);
//                 }}
//                 className="
//                   relative
//                   text-[15px]
//                   xl:text-[16px]
//                   2xl:text-[17px]
//                   font-medium
//                   tracking-wide
//                   whitespace-nowrap
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:text-[#12B8E8]
//                 "
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Contact Us Button */}
//           <button
//             onClick={() => scrollToSection("contact")}
//             className={`
//               hidden
//               lg:flex
//               items-center
//               justify-center
//               rounded-full
//               bg-gradient-to-r
//               from-[#12B8E8]
//               via-[#18AEEF]
//               to-[#2D6CF2]
//               text-white
//               font-semibold
//               tracking-wide
//               text-[12px]
//               xl:text-[14px]
//               shadow-[0_8px_25px_rgba(37,108,242,0.35)]
//               transition-all
//               duration-300
//               hover:scale-105
//               hover:shadow-[0_12px_35px_rgba(37,108,242,0.55)]
//               hover:brightness-110
//               flex-shrink-0
//               ${scrolled ? "px-7 py-3" : "px-8 py-3.5"}
//             `}
//           >
//             CONTACT US
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="
//               lg:hidden
//               text-white
//               flex
//               items-center
//               justify-center
//               min-w-[40px]
//               flex-shrink-0
//             "
//             aria-label="Toggle navigation menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   menuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         {menuOpen && (
//           <div
//             className="
//               lg:hidden
//               mt-2
//               rounded-2xl
//               bg-[#051024]/95
//               backdrop-blur-xl
//               border
//               border-cyan-400/20
//               shadow-2xl
//               overflow-hidden
//             "
//           >
//             {/* Mobile Navigation */}
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => {
//                   setMenuOpen(false);
//                   window.scrollTo(0, 0);
//                 }}
//                 className="
//                   block
//                   w-full
//                   text-left
//                   px-6
//                   py-4
//                   text-white
//                   border-b
//                   border-white/10
//                   hover:text-[#12B8E8]
//                   transition-colors
//                   duration-300
//                 "
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Mobile Contact Us Button */}
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="
//                 w-full
//                 py-4
//                 font-semibold
//                 text-white
//                 bg-gradient-to-r
//                 from-[#12B8E8]
//                 via-[#18AEEF]
//                 to-[#2D6CF2]
//                 hover:brightness-110
//                 transition-all
//                 duration-300
//               "
//             >
//               CONTACT US
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
import { useEffect, useState } from "react";
import logo from "../assets/image/cycrai_latest_logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // =========================================================
  // NAVBAR SCROLL EFFECT
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // =========================================================

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // =========================================================
  // NAVIGATION ITEMS
  // =========================================================

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Committee",
      path: "/committee",
    },
    {
      name: "Program",
      path: "/speakers",
    },
    {
      name: "Tracks",
      path: "/tracks",
    },
    {
      name: "Important Dates",
      path: "/important-dates",
    },
    {
      name: "Venue",
      path: "/venue",
    },
    {
      name: "Call For Papers",
      path: "/call-for-papers",
    },
    {
      name: "Guidelines & Policies",
      path: "/guidelines",
    },
  ];

  // =========================================================
  // ACTIVE ROUTE
  // =========================================================

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div
        className={`
          mx-auto
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${scrolled ? "max-w-[1280px]" : "max-w-[1500px]"}
          px-4 md:px-8 lg:px-12
        `}
      >

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <div
          className={`
            mt-3 md:mt-7
            flex
            items-center
            justify-between
            rounded-2xl
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  bg-[#051024]/70
                  backdrop-blur-xl
                  px-4 md:px-8
                  py-3
                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                  border
                  border-cyan-400/20
                `
                : `
                  bg-[#051024]/85
                  backdrop-blur-md
                  px-4 md:px-8
                  py-3 md:py-4
                  shadow-2xl
                  border
                  border-cyan-400/20
                `
            }
          `}
        >

          {/* ===================================================
              LOGO
          =================================================== */}

          <div className="relative flex items-center flex-shrink-0">

            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="CYCRAI 2027"
                className={`
                  w-auto
                  object-contain
                  transition-all
                  duration-700

                  ${
                    scrolled
                      ? "h-14 md:h-16 -my-3"
                      : "h-16 md:h-20 -my-4"
                  }
                `}
              />
            </Link>

          </div>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-8">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`
                  relative
                  text-[13px]
                  xl:text-[14px]
                  2xl:text-[15px]
                  font-medium
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300

                  ${
                    isActive(item.path)
                      ? "text-[#12B8E8]"
                      : "text-white hover:text-[#12B8E8]"
                  }

                  group
                `}
              >
                {item.name}

                {/* Active / Hover Line */}

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    bg-gradient-to-r
                    from-[#12B8E8]
                    to-[#2D6CF2]
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      isActive(item.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            ))}

          </nav>

          {/* ===================================================
              DESKTOP CONTACT BUTTON
          =================================================== */}

          <Link
            to="/contact"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className={`
              hidden
              lg:flex
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#12B8E8]
              via-[#18AEEF]
              to-[#2D6CF2]
              text-white
              font-semibold
              tracking-wide
              text-[12px]
              xl:text-[13px]
              2xl:text-[14px]
              shadow-[0_8px_25px_rgba(37,108,242,0.35)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_12px_35px_rgba(37,108,242,0.55)]
              hover:brightness-110
              flex-shrink-0

              ${scrolled ? "px-6 py-3" : "px-7 py-3.5"}
            `}
          >
            CONTACT US
          </Link>

          {/* ===================================================
              MOBILE MENU BUTTON
          =================================================== */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              text-white
              flex
              items-center
              justify-center
              min-w-[40px]
              min-h-[40px]
              flex-shrink-0
              rounded-xl
              hover:bg-white/5
              transition-all
            "
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

        </div>

        {/* =====================================================
            MOBILE DROPDOWN
        ===================================================== */}

        {menuOpen && (
          <div
            className="
              lg:hidden
              mt-2
              rounded-2xl
              bg-[#051024]/95
              backdrop-blur-xl
              border
              border-cyan-400/20
              shadow-2xl
              overflow-hidden
            "
          >

            {/* Mobile Navigation */}

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`
                  block
                  w-full
                  text-left
                  px-6
                  py-4
                  border-b
                  border-white/10
                  transition-all
                  duration-300

                  ${
                    isActive(item.path)
                      ? "text-[#12B8E8] bg-cyan-400/5"
                      : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}

            <Link
              to="/contact"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className="
                block
                w-full
                py-4
                text-center
                font-semibold
                text-white
                bg-gradient-to-r
                from-[#12B8E8]
                via-[#18AEEF]
                to-[#2D6CF2]
                hover:brightness-110
                transition-all
                duration-300
              "
            >
              CONTACT US
            </Link>

          </div>
        )}

      </div>

    </header>
  );
}