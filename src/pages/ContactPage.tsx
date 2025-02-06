import backgroundImgSrc from "../assets/images/background_vertical.png";
import logo from "../assets/images/saanjh_logo.png";
import instagramSquareIcon from "../assets/images/instagram_squared.png";
import facebookSquareIcon from "../assets/images/facebook_squared.png";
import twitterSquareIcon from "../assets/images/twitter_squared.png";

function ContactPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 space-y-8 px-[10dvw] pb-24 pt-36 md:col-span-7">
        <div className="flex flex-col space-y-4">
          <div className="font-sans-black text-2xl tracking-tighter text-sunset opacity-90 2xl:text-3xl">
            Contact Information
          </div>
          <div className="text-sm">
            At Saanjh, we believe in building meaningful connections and
            creating a safe space for mental well-being. Whether you have
            questions, need support, or simply want to learn more about our
            services, we're here to listen. Reach out to us—we'd love to hear
            from you. You're not alone!
          </div>
        </div>
        <div className="grid grid-cols-12 space-x-8">
          <div className="col-span-5 space-y-4">
            <div className="font-sans-black text-2xl tracking-tighter text-sunset opacity-90 2xl:text-3xl">
              Phone
            </div>
            <div className="text-sm">9899654321</div>
          </div>
          <div className="col-span-7 space-y-4">
            <div className="font-sans-black text-2xl tracking-tighter text-sunset opacity-90 2xl:text-3xl">
              Location
            </div>
            <div className="text-sm">FF Main Street, 22nd Avenue</div>
          </div>
        </div>
        <div className="grid grid-cols-12 space-x-8">
          <div className="col-span-5 space-y-4">
            <div className="font-sans-black text-2xl tracking-tighter text-sunset opacity-90 2xl:text-3xl">
              Email
            </div>
            <div className="text-sm">saanjh@gmail.com</div>
          </div>
          <div className="col-span-7 space-y-4">
            <div className="font-sans-black text-2xl tracking-tighter text-sunset opacity-90 2xl:text-3xl">
              Follow Us
            </div>
            <div className="flex space-x-4">
              <img
                className="size-8 rounded-md bg-orange-400 p-1"
                src={instagramSquareIcon}
                alt="Instagram Icon"
              />
              <img
                className="size-8 rounded-md bg-orange-400 p-1"
                src={facebookSquareIcon}
                alt="Facebook Icon"
              />
              <img
                className="size-8 rounded-md bg-orange-400 p-1"
                src={twitterSquareIcon}
                alt="Twitter Icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 flex h-96 items-center justify-center bg-cover bg-no-repeat md:col-span-5 md:h-auto"
        style={{
          backgroundImage: `url(${backgroundImgSrc})`,
        }}
      >
        <div className="size-40 bg-white opacity-75">
          <img className="h-full w-auto object-contain" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
