import HomeHero from "../sections/HomeHero";
import Story from "../sections/Story";

function Home() {
  return (
    <>
      <div className="relative md:absolute md:left-0 md:top-0">
        <HomeHero />
        <Story />
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex h-20 w-full items-center justify-center bg-yellow-400 p-4">
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
      </div>
    </>
  );
}

export default Home;
