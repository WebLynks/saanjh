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
      <div className="grid grid-cols-12 text-xl font-semibold text-white lg:text-2xl">
        <div className="col-span-12 flex h-24 items-center justify-center bg-mango p-4 md:col-span-3">
          Inclusivity
        </div>
        <div className="col-span-12 flex h-24 items-center justify-center bg-sunset p-4 md:col-span-3">
          Community
        </div>
        <div className="col-span-12 flex h-24 items-center justify-center bg-iris p-4 md:col-span-3">
          Intersectional
        </div>
        <div className="col-span-12 flex h-24 items-center justify-center bg-sapphire p-4 md:col-span-3">
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
            <div className="text-4xl font-semibold">Upcoming Event</div>
            <EventCardLandscape isRegisterOption={false} />
          </div>
        </div>
      </div>
      <Team />
      <Updates />
    </>
  );
}

export default Home;
