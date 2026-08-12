import { useEffect, useState } from "react";
import logo from "../assets/image/cycrai_latest_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Router hooks
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle cross-page scrolling
  const scrollToSection = (id) => {
  setMenuOpen(false);

  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); 
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  //Navigation items
  const navItems = [
  { name: "Home", id: "home", isPage: false },
  { name: "About", id: "about", isPage: false },
  { name: "Committee", id: "committee", isPage: true },
  { name: "Program", id: "speakers", isPage: true },
  { name: "Call For Papers", id: "call-for-papers", isPage: true },
  { name: "Guidelines & Policies", id: "guidelines", isPage: true },
];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`
          mx-auto
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${scrolled ? "max-w-[1280px]" : "max-w-[1500px]"}
          px-4 md:px-8 lg:px-12 
        `}
      >
        {/* Navbar */}
        <div
          className={`
            mt-3 md:mt-7
            flex items-center justify-between
            rounded-2xl
            border border-[#F4D03F]/20
            transition-all duration-500
            ${
              scrolled
             ? "bg-[#051024]/70 backdrop-blur-xl px-4 md:px-8 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-cyan-400/20"
             : "bg-[#051024]/85 backdrop-blur-md px-4 md:px-8 py-3 md:py-4 shadow-2xl border border-cyan-400/20"
            }
          `}
        >
          {/* Logos */}
          {/* <div className="flex items-center gap-2 md:gap-4 xl:gap-6 flex-shrink min-w-0 pr-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo}
                alt="CYCRAI 2027"
                className={`
                  w-auto
                  object-contain
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${scrolled ? "h-8 md:h-9" : "h-10 md:h-11"}
                `}
              />
            </Link>
          </div>
           */}
           <div className="relative flex items-center">
  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
    <img
      src={logo}
      alt="CYCRAI 2027"
      className={`
        w-auto
        object-contain
        transition-all duration-700
        ${
          scrolled
            ? "h-14 md:h-16 -my-3"
            : "h-16 md:h-20 -my-4"
        }
      `}
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={`/${item.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="
                    relative
                    text-[15px] xl:text-[16px] 2xl:text-[17px]
                    font-medium
                    tracking-wide
                    whitespace-nowrap
                    text-white
                    transition-all
                    duration-300
                    hover:text-[#F4D03F]
                  "
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    relative
                    text-[15px] xl:text-[16px] 2xl:text-[17px]
                    font-medium
                    tracking-wide
                    whitespace-nowrap
                    text-white
                    transition-all
                    duration-300
                    hover:text-[#F4D03F]
                  "
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Desktop CONTACT US Button */}
          {/* Desktop CONTACT US Button */}
<button
  onClick={() => scrollToSection("contact")}
  className={`
    hidden lg:flex
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
    text-[12px] xl:text-[14px]
    shadow-[0_8px_25px_rgba(37,108,242,0.35)]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_12px_35px_rgba(37,108,242,0.55)]
    hover:brightness-110
    flex-shrink-0
    ${scrolled ? "px-7 py-3" : "px-8 py-3.5"}
  `}
>
  CONTACT US
</button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              text-white
              flex
              items-center
              justify-center
              min-w-[40px]
              flex-shrink-0
            "
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

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className="
              lg:hidden
              mt-2
              rounded-2xl
              bg-[#051024]/95
              backdrop-blur-xl
              border border-[#F4D03F]/20
              shadow-2xl
              overflow-hidden
            "
          >
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={`/${item.id}`}
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo(0, 0); 
                  }}
                  className="
                    block
                    w-full
                    text-left
                    px-6
                    py-4
                    text-white
                    border-b
                    border-white/10
                    hover:text-[#F4D03F]
                  "
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    block
                    w-full
                    text-left
                    px-6
                    py-4
                    text-white
                    border-b
                    border-white/10
                    hover:text-[#F4D03F]
                  "
                >
                  {item.name}
                </button>
              )
            )}

            {/* Mobile CONTACT US Button */}
            {/* Mobile CONTACT US Button */}
<button
  onClick={() => scrollToSection("contact")}
  className="
    w-full
    py-4
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
</button>
          </div>
        )}
      </div>
    </header>
  );
}
