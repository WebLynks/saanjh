import headerBgImgSrc from "../assets/images/header_background.png";

function Event() {
  return (
    <>
      <div className="absolute left-0 top-0 h-20 w-full">
        <img
          className="h-full w-full rounded-b-full object-cover"
          src={headerBgImgSrc}
          alt="Header Background"
        />
      </div>
      <div className="flex h-[80dvh] flex-col font-extrabold">
        <div className="flex items-center justify-start bg-gradient-to-b from-mango from-40% via-iris via-80% to-sapphire to-100% bg-clip-text text-transparent">
          <div className="text-[23dvw]">Saanjh</div>
        </div>
        <div className="flex items-center justify-end bg-gradient-to-b from-mango from-40% via-iris via-80% to-sapphire to-100% bg-clip-text text-transparent">
          <div className="text-[23dvw]">Events</div>
        </div>
      </div>
    </>
  );
}

export default Event;
