import { Link } from "react-router";
import footerBackgroundImage from "../assets/images/background_slice.png";
import logo from "../assets/images/saanjh_footer_logo_new.png";
import instagramRoundedImage from "../assets/images/instagram_rounded.png";
import linkedinRoundedImage from "../assets/images/linkedin_rounded.png";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import sacredHearts from "../assets/images/sacredhearts.png";

function Footer() {
  return (
    <footer className="text-white">
      <div className="relative bg-gray-900">
        <img
          src={logo}
          alt="Saanjh"
          className="left-[5dvw] ms-[10dvw] h-28 md:absolute md:top-0 md:ms-0"
        />

        <div className="grid grid-cols-12 gap-y-8 py-8 pe-[5dvw] ps-[10dvw] md:divide-x md:ps-0">
          <div className="col-span-12 flex md:col-start-3 md:col-end-7 md:justify-center md:pe-4">
            <div className="space-y-6">
              <div className="font-bold">Services</div>
              <div className="space-y-2 text-gray-400">
                <div>Group Sessions</div>
                <div>Individual Session</div>
                <div>Corporate Workshop</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex md:col-start-7 md:col-end-9 md:justify-center md:border-gray-400">
            <div className="space-y-6">
              <div className="font-bold">Explore</div>
              <div className="space-y-2 text-gray-400">
                <div>
                  <Link to={"/"}>Home</Link>
                </div>
                <div>
                  <Link to={"/about-us"}>About Us</Link>
                </div>
                <div>
                  <Link to={"/events"}>Events</Link>
                </div>
                <div>
                  <Link to={"/blogs"}>Blogs</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex md:col-start-9 md:col-end-13 md:justify-center md:border-gray-400 md:ps-8">
            <div className="space-y-6">
              <div className="font-bold">Follow Us</div>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <div
                    className="size-5 bg-contain"
                    style={{ backgroundImage: `url(${instagramRoundedImage})` }}
                  ></div>
                  <div>Instagram</div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="size-5 bg-contain"
                    style={{ backgroundImage: `url(${linkedinRoundedImage})` }}
                  ></div>
                  <div>Linkedin</div>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="size-5 text-white" />{" "}
                  <div>saanjhwellness@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-around md:justify-center">
          <hr className="w-4/12 border-gray-400" />
          <div className="flex w-2/12 items-center justify-center">
            <img className="h-8 w-auto" src={sacredHearts} alt="Sacred Heart" />
          </div>
          <hr className="w-4/12 border-gray-400" />
        </div>
        <div className="flex w-full items-start justify-around pb-8 text-sm text-gray-400 md:justify-center">
          <div className="w-4/12">We respect for your privacy</div>
          <div className="w-2/12"></div>
          <div className="flex w-4/12 flex-wrap justify-end">
            <div>Give us a call at&nbsp;</div>
            <div className="font-medium italic">+91 93733 24053</div>
          </div>
        </div>
      </div>

      <div
        className="h-auto w-full bg-cover"
        style={{ backgroundImage: `url(${footerBackgroundImage})` }}
      >
        <div className="flex flex-col items-start justify-between gap-4 px-[10dvw] py-2 text-sm font-semibold md:flex-row md:items-center md:justify-between">
          <div>
            Copyright<span className="align-super text-[0.75rem]">&copy;</span>{" "}
            by Saanjh - All rights reserved
          </div>
          <div>
            Designed and Developed by <i>WebLynks</i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
