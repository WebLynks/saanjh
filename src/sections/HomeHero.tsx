import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import videoSrc from "../assets/videos/saanjh-herosection.mp4";

function HomeHero() {
  return (
    <div
      data-aos="slide-up"
      className="w-full font-sans-black tracking-tighter text-gray-900 opacity-90"
    >
      <div className="relative flex h-[90dvh] items-center justify-center bg-gray-400">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
        <div className="relative z-20 text-4xl tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
          Welcome to Saanjh!
        </div>
        <ArrowDownCircleIcon className="absolute bottom-8 size-20 animate-bounce text-white" />
      </div>
    </div>
  );
}

export default HomeHero;
