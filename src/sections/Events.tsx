import pearlBackgroundImgSrc from "../assets/images/pearl_background.png";
import EventCard from "../components/EventCard";

function Events({ heading = "Events" }) {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${pearlBackgroundImgSrc})`,
      }}
    >
      <div className="px-[10dvw] py-16">
        <div className="text-4xl font-semibold">{heading}</div>
        <div className="grid grid-cols-3 gap-8 pt-10">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default Events;
