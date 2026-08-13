import { useEffect, useRef, useState } from "react";
import logo from "../assets/image/cycrai_latest_logo.png";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);

  const location = useLocation();

  const authorsRef = useRef(null);

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
  // CLOSE MENUS WHEN ROUTE CHANGES
  // =========================================================

  useEffect(() => {
    setMenuOpen(false);
    setAuthorsOpen(false);
    setMobileAuthorsOpen(false);

    window.scrollTo(0, 0);
  }, [location.pathname]);

  // =========================================================
  // CLOSE DESKTOP DROPDOWN WHEN CLICKING OUTSIDE
  // =========================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        authorsRef.current &&
        !authorsRef.current.contains(event.target)
      ) {
        setAuthorsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =========================================================
  // CLOSE DROPDOWN WITH ESCAPE KEY
  // =========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setAuthorsOpen(false);
        setMobileAuthorsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =========================================================
  // MAIN NAVIGATION ITEMS
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
      name: "Important Dates",
      path: "/important-dates",
    },
    {
      name: "Venue",
      path: "/venue",
    },
  ];

  // =========================================================
  // AUTHORS DROPDOWN ITEMS
  // =========================================================

  const authorItems = [
    {
      name: "Call For Papers",
      path: "/call-for-papers",
    },
    {
      name: "Guidelines & Policies",
      path: "/guidelines",
    },
    {
      name: "Tracks",
      path: "/tracks",
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

  // =========================================================
  // AUTHORS ACTIVE STATE
  // =========================================================

  const isAuthorsActive = authorItems.some(
    (item) => location.pathname === item.path
  );

  // =========================================================
  // NAVIGATION HANDLER
  // =========================================================

  const handleNavigation = () => {
    setMenuOpen(false);
    setAuthorsOpen(false);
    setMobileAuthorsOpen(false);

    window.scrollTo(0, 0);
  };

  // =========================================================
  // RENDER
  // =========================================================

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
        ====================================================== */}

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
              onClick={handleNavigation}
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

            {/* =================================================
                HOME
            ================================================= */}

            <Link
              to="/"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              Home

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
                    isActive("/")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>


            {/* =================================================
                ABOUT
            ================================================= */}

            <Link
              to="/about"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/about")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              About

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
                    isActive("/about")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>


            {/* =================================================
                AUTHORS DROPDOWN
            ================================================= */}

            <div
              ref={authorsRef}
              className="relative"
            >

              <button
                type="button"
                onClick={() => setAuthorsOpen(!authorsOpen)}
                aria-expanded={authorsOpen}
                aria-haspopup="true"
                className={`
                  relative
                  flex
                  items-center
                  gap-1.5
                  text-[13px]
                  xl:text-[14px]
                  2xl:text-[15px]
                  font-medium
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  group

                  ${
                    isAuthorsActive || authorsOpen
                      ? "text-[#12B8E8]"
                      : "text-white hover:text-[#12B8E8]"
                  }
                `}
              >

                <span>Authors</span>

                <ChevronDown
                  size={17}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      authorsOpen
                        ? "rotate-180"
                        : "rotate-0"
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#12B8E8]
                    to-[#2D6CF2]
                    transition-all
                    duration-300

                    ${
                      isAuthorsActive || authorsOpen
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

              </button>


              {/* Authors Dropdown */}

              {authorsOpen && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    mt-5
                    w-[270px]
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-[#051024]/95
                    backdrop-blur-2xl
                    shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                    overflow-hidden
                    z-[100]
                  "
                >

                  <div className="relative py-2">

                    {authorItems.map((item, index) => (

                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={handleNavigation}
                        className={`
                          group
                          flex
                          items-center
                          gap-3
                          px-5
                          py-4
                          text-[15px]
                          font-medium
                          transition-all
                          duration-300

                          ${
                            isActive(item.path)
                              ? "text-[#12B8E8] bg-cyan-400/10"
                              : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                          }

                          ${
                            index !== authorItems.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }
                        `}
                      >

                        <span
                          className="
                            flex
                            items-center
                            justify-center
                            w-7
                            h-7
                            rounded-lg
                            text-xs
                            font-bold
                            bg-cyan-500/10
                            border
                            border-cyan-400/20
                            text-cyan-300
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>
                          {item.name}
                        </span>

                      </Link>

                    ))}

                  </div>

                </div>
              )}

            </div>


            {/* =================================================
                REGISTRATION
            ================================================= */}

            <Link
              to="/registration"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/registration")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              Registration

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
                    isActive("/registration")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>


            {/* =================================================
                COMMITTEE
            ================================================= */}

            <Link
              to="/committee"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/committee")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              Committee

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
                    isActive("/committee")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>


            {/* =================================================
                PROGRAM
            ================================================= */}

            <Link
              to="/speakers"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/speakers")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              Program

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
                    isActive("/speakers")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>


            {/* =================================================
                IMPORTANT DATES
            ================================================= */}

            <Link
              to="/important-dates"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/important-dates")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              Important Dates

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
                    isActive("/important-dates")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>


            {/* =================================================
                VENUE
            ================================================= */}

            <Link
              to="/venue"
              onClick={handleNavigation}
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
                group

                ${
                  isActive("/venue")
                    ? "text-[#12B8E8]"
                    : "text-white hover:text-[#12B8E8]"
                }
              `}
            >
              Venue

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
                    isActive("/venue")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>

          </nav>


          {/* ===================================================
              DESKTOP CONTACT BUTTON
          =================================================== */}

          <Link
            to="/contact"
            onClick={handleNavigation}
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
            onClick={() => {
              setMenuOpen(!menuOpen);
              setAuthorsOpen(false);
            }}
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
        ====================================================== */}

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

            {/* =================================================
                HOME
            ================================================= */}

            <Link
              to="/"
              onClick={handleNavigation}
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
                  isActive("/")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              Home
            </Link>


            {/* =================================================
                ABOUT
            ================================================= */}

            <Link
              to="/about"
              onClick={handleNavigation}
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
                  isActive("/about")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              About
            </Link>


            {/* =================================================
                MOBILE AUTHORS DROPDOWN
            ================================================= */}

            <div className="border-b border-white/10">

              <button
                type="button"
                onClick={() =>
                  setMobileAuthorsOpen(!mobileAuthorsOpen)
                }
                className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-4
                  text-left
                  transition-all
                  duration-300

                  ${
                    isAuthorsActive
                      ? "text-[#12B8E8] bg-cyan-400/5"
                      : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                  }
                `}
              >

                <span className="font-medium">
                  Authors
                </span>

                <ChevronDown
                  size={20}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      mobileAuthorsOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* Authors Submenu */}

              {mobileAuthorsOpen && (

                <div
                  className="
                    bg-[#020817]/70
                    border-t
                    border-cyan-400/10
                  "
                >

                  {authorItems.map((item, index) => (

                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={handleNavigation}
                      className={`
                        flex
                        items-center
                        gap-3
                        px-8
                        py-4
                        text-sm
                        border-b
                        border-white/5
                        transition-all
                        duration-300

                        ${
                          isActive(item.path)
                            ? "text-[#12B8E8] bg-cyan-400/5"
                            : "text-slate-300 hover:text-[#12B8E8] hover:bg-white/5"
                        }
                      `}
                    >

                      <span
                        className="
                          flex
                          items-center
                          justify-center
                          w-7
                          h-7
                          rounded-lg
                          bg-cyan-500/10
                          border
                          border-cyan-400/20
                          text-xs
                          font-bold
                          text-cyan-300
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        {item.name}
                      </span>

                    </Link>

                  ))}

                </div>

              )}

            </div>


            {/* =================================================
                REGISTRATION
            ================================================= */}

            <Link
              to="/registration"
              onClick={handleNavigation}
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
                  isActive("/registration")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              Registration
            </Link>


            {/* =================================================
                COMMITTEE
            ================================================= */}

            <Link
              to="/committee"
              onClick={handleNavigation}
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
                  isActive("/committee")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              Committee
            </Link>


            {/* =================================================
                PROGRAM
            ================================================= */}

            <Link
              to="/speakers"
              onClick={handleNavigation}
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
                  isActive("/speakers")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              Program
            </Link>


            {/* =================================================
                IMPORTANT DATES
            ================================================= */}

            <Link
              to="/important-dates"
              onClick={handleNavigation}
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
                  isActive("/important-dates")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              Important Dates
            </Link>


            {/* =================================================
                VENUE
            ================================================= */}

            <Link
              to="/venue"
              onClick={handleNavigation}
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
                  isActive("/venue")
                    ? "text-[#12B8E8] bg-cyan-400/5"
                    : "text-white hover:text-[#12B8E8] hover:bg-white/5"
                }
              `}
            >
              Venue
            </Link>


            {/* =================================================
                MOBILE CONTACT
            ================================================= */}

            <Link
              to="/contact"
              onClick={handleNavigation}
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