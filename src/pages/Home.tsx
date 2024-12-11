import Events from "../sections/Events";
import HomeHero from "../sections/HomeHero";
import Services from "../sections/Services";
import Story from "../sections/Story";
import Team from "../sections/Team";
import Updates from "../sections/Updates";

function Home() {
  return (
    <>
      <div className="relative md:absolute md:left-0 md:top-0">
        <HomeHero />
        <Story />
        <div className="flex flex-col items-center font-bold text-white md:flex-row">
          <div className="flex h-20 w-full items-center justify-center bg-mango p-4">
            Inclusivity
          </div>
          <div className="flex h-20 w-full items-center justify-center bg-sunset p-4">
            Community
          </div>
          <div className="flex h-20 w-full items-center justify-center bg-iris p-4">
            Intersectional
          </div>
          <div className="bg- flex h-20 w-full items-center justify-center bg-sapphire p-4">
            Compassion
          </div>
        </div>
        <Services />
        <Events />
        <Team />
        <Updates />
      </div>
    </>
  );
}

export default Home;
