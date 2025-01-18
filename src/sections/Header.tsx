import { Link, useNavigate } from "react-router";
import logo from "../assets/images/saanjh_new_logo_header.png";
import headerBackgroundImage from "../assets/images/background_slice.png";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 600); // Match the duration of the opacity transition
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 100); // Small delay to trigger the transition
    }
  };

  return (
    <header className="sticky top-0 z-10">
      <div
        className="flex h-20 w-full items-center justify-between bg-cover px-[5vw]"
        style={{ backgroundImage: `url(${headerBackgroundImage})` }}
      >
        <img
          onClick={handleLogoClick}
          className="h-16 w-auto"
          src={logo}
          alt="Saanjh"
        />
        <div className="hidden md:block">
          <nav className="space-x-4 rounded-full bg-pink-50 px-4 py-1 text-sunset lg:space-x-8 lg:px-8">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/events" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/blogs" onClick={toggleMenu}>
              Blogs
            </Link>
            {/* <Link to="/about-us" onClick={toggleMenu}>
              About Us
            </Link> */}
            <div className="group relative inline-block">
              <button className="focus:outline-none">Services</button>
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-pink-50 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/services/individual-therapy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Individual Therapy
                  </Link>
                  <Link
                    to="/services/individual-therapy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Individual Therapy
                  </Link>
                </div>
                <div className="absolute -top-2 right-0 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pink-50"></div>
              </div>
            </div>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden rounded-full bg-pink-50 px-2 py-1 text-sunset md:block">
          <Link to="/" onClick={toggleMenu}>
            Resources
          </Link>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <XMarkIcon
              className="size-10 cursor-pointer text-white"
              onClick={toggleMenu}
            />
          ) : (
            <Bars3Icon
              className="size-10 cursor-pointer text-white"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <nav
          className={`flex flex-col gap-4 bg-pink-50 px-[10dvw] py-4 font-medium text-sunset transition-all duration-500 md:hidden ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/events" onClick={toggleMenu}>
            Events
          </Link>
          <Link to="/blogs" onClick={toggleMenu}>
            Blogs
          </Link>
          {/* <Link to="/about-us" onClick={toggleMenu}>
            About Us
          </Link> */}
          <div className="relative">
            <button
              onClick={toggleMobileDropdown}
              className="focus:outline-none"
            >
              Services
            </button>
            {isMobileDropdownOpen && (
              <div className="flex flex-col pl-4">
                <Link
                  to="/services/individual-therapy"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Individual Therapy
                </Link>
                <Link
                  to="/services/individual-therapy"
                  className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Individual Therapy
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/" onClick={toggleMenu}>
            Resources
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
