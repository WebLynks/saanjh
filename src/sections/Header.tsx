import { Link, Outlet } from "react-router";
import logoImgSrc from "/sannjh-logo-normal.png";

function Header() {
  return (
    <>
      <header className="relative z-20 flex flex-col items-start justify-between bg-pink-50/50 px-[5dvw] py-4 md:flex-row md:flex-wrap md:items-center md:bg-transparent">
        <div className="flex items-center">
          <img className="h-12 w-auto" src={logoImgSrc} alt="Saanjh Logo" />
          <div className="text-2xl font-bold text-gray-600 md:text-white">
            Saanjh
          </div>
        </div>
        <nav className="flex flex-col px-2 py-4 font-semibold uppercase text-orange-500 md:flex-row md:flex-wrap md:rounded-full md:bg-pink-50/80 md:py-0">
          <Link to={"/"} className="p-2">
            Home
          </Link>
          <Link to={"/event"} className="p-2">
            Events
          </Link>
          <div className="p-2">Services</div>
          <div className="p-2">About Us</div>
          <div className="p-2">Contact</div>
        </nav>
        <div className="px-4 py-2 font-semibold uppercase text-orange-500 md:rounded-full md:bg-pink-50/80">
          Resources
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
