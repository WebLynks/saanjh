import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import videoSrc from "../assets/videos/saanjh-herosection.mp4";

function HomeHero() {
  return (
    <div className="w-full">
      <div className="relative flex h-[90dvh] items-center justify-center bg-gray-400">
        <video
          className="absolute inset-0 h-full w-full object-fill"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
        <div className="relative z-20 text-4xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Welcome to Saanjh!
        </div>
        <ArrowDownCircleIcon className="absolute bottom-8 size-20 animate-bounce text-white" />
      </div>
    </div>
  );
}

export default HomeHero;
