import videoSrc from "../assets/videos/saanjh-herosection.mp4";

function HomeHero() {
  return (
    <>
      <div className="relative left-0 top-0 w-full">
        <div className="relative flex h-[100dvh] items-center justify-center bg-gray-400">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
          />
          <div className="relative z-10 text-center">
            <div className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Welcome to Saanjh!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
