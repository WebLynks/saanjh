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
        <div className="font-sans-black text-5xl tracking-tighter text-gray-900 opacity-90 2xl:text-6xl">
          {heading}
        </div>
        <div className="grid grid-cols-3 gap-8 pt-10">
          <EventCard
            imgName="raahat"
            name="Raahat"
            date="29th March, 2025"
            amount="₹600"
            numberOfSlots="10 - Online"
            key="Raahat"
            timing="4:30 - 6:30 pm"
          />
          <EventCard
            imgName="event1"
            name="Building Connection"
            date="24th November, 2024"
            amount="₹300 - ₹500"
            numberOfSlots="10"
            key="Building Connection"
            timing="4 - 6 pm"
          />
          <EventCard
            imgName="event2"
            name="A Storytelling Event"
            key="A Storytelling Event"
            date="8th February, 2025"
            timing="11 am - 1 pm"
            amount="₹300 - ₹500"
            numberOfSlots="6"
          />
        </div>
      </div>
    </div>
  );
}

export default Events;
