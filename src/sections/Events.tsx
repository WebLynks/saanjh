import pearlBackgroundImgSrc from "../assets/images/pearl-background.png";
import EventCard from "../components/EventCard";

function Events() {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pearlBackgroundImgSrc})`,
        }}
      >
        <div className="px-[5dvw] py-20">
          <div className="text-4xl font-semibold">Events</div>
          <div className="grid grid-cols-3 gap-8 py-10">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
