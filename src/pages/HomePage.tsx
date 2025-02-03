import EventCardLandscape from "../components/EventCardLandscape";
import pearlBackgroundImgSrc from "../assets/images/pearl_background.png";
import HomeHero from "../sections/HomeHero";
import Services from "../sections/Services";
import Story from "../sections/Story";
import Team from "../sections/Team";
import Updates from "../sections/Updates";

function Home() {
  return (
    <>
      <HomeHero />
      <Story />
      <div className="font-sans-black grid grid-cols-12 text-2xl tracking-tighter text-white opacity-90">
        <div className="col-span-12 flex h-28 items-center justify-center bg-mango p-4 md:col-span-3">
          Inclusivity
        </div>
        <div className="col-span-12 flex h-28 items-center justify-center bg-sunset p-4 md:col-span-3">
          Community
        </div>
        <div className="col-span-12 flex h-28 items-center justify-center bg-iris p-4 md:col-span-3">
          Intersectional
        </div>
        <div className="col-span-12 flex h-28 items-center justify-center bg-sapphire p-4 md:col-span-3">
          Compassion
        </div>
      </div>
      <Services />
      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${pearlBackgroundImgSrc})`,
          }}
        >
          <div className="px-[10dvw] pb-8 pt-16">
            <div className="font-sans-black text-4xl tracking-tighter text-gray-900 opacity-90">
              Upcoming Event
            </div>
            <EventCardLandscape isRegisterOption={true} />
          </div>
        </div>
      </div>
      <Team />
      <Updates />
    </>
  );
}

export default Home;
