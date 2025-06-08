import useImage from "../hooks/useImage";

type EventCardLandscapeProps = {
  name?: string;
  imgName?: string;
  date?: string;
  amount?: string;
  numberOfSlots?: string;
  timing?: string;
  details?: string;
  isRegisterOption?: boolean;
};

// This is the component that renders a single event
function EventCard({
  name = "Euphoria: Exploring Queer Joy",
  imgName = "queer_joy",
  date = "8th June, 2025",
  amount = "₹300 - ₹500",
  numberOfSlots = "6",
  timing = "4.30 pm - 6 pm",
  details = `Queerness is not just about challenging and traumatic experiences. Join us to share your joy, laughter, and community.`,
  isRegisterOption = true,
}: EventCardLandscapeProps) {
  const { loading, image } = useImage(imgName);

  return (
    <div className="flex flex-col gap-8 py-8 md:h-96 md:flex-row lg:gap-12 xl:gap-16">
      <div className={`w-full md:w-5/12 lg:w-4/12`}>
        <div className={`md:h-4/5 xl:h-full`}>
          {loading ? (
            `loading...`
          ) : (
            <img
              className="h-full w-full object-fill"
              src={image}
              alt={imgName}
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col space-y-8 md:col-span-8 md:w-7/12 lg:w-8/12">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="font-sans-black tracking-tighter text-gray-900 opacity-90">
            <div className="text-3xl lg:text-4xl 2xl:text-5xl">{name}</div>
            {numberOfSlots && (
              <div className="text-lg 2xl:text-xl">{`Slots: ${numberOfSlots} Seats`}</div>
            )}
          </div>
          <div className="font-sans-black text-xl tracking-tighter text-gray-900 opacity-90 lg:text-2xl 2xl:text-3xl">
            {amount}
          </div>
        </div>
        <div className="flex break-words">{details}</div>
        <div className="flex flex-wrap items-center justify-between font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 2xl:text-xl">
          <div>{`Time: ${timing}`}</div>
          <div>{date}</div>
        </div>
        {isRegisterOption && (
          <div className="flex items-center justify-end">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="rounded-xl bg-mango px-8 py-2 lg:text-lg 2xl:text-xl"
              >
                Register
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// This wrapper renders multiple events using the EventCard above
export default function EventCardLandscape() {
  const events: EventCardLandscapeProps[] = [
    {
      imgName: "queer_joy",
      name: "Euphoria: Exploring Queer Joy",
      date: "8th June, 2025",
      amount: "₹300 - ₹500",
      numberOfSlots: "6",
      timing: "4.30 pm - 6 pm",
      details: `Queerness is not just about challenging and traumatic experiences. Join us to share your joy, laughter, and community.`,
      isRegisterOption: false,
    },
    {
      imgName: "pyschologists_off_the_clock", // <- fill your own
      name: "Psychologists Off The Clock",
      date: "14th June, 2025",
      amount: "",
      numberOfSlots: "",
      timing: "6.30 pm - 8 pm",
      details: "A place for pyschologists to meet, relax and center play! :). Contact us to know more about how to join.",
      isRegisterOption: false,
    },
    {
      imgName: "exploring_anxiety", // <- fill your own
      name: "Exploring Anxiety",
      date: "21st June, 2025",
      amount: "",
      numberOfSlots: "",
      timing: "5 pm - 7 pm",
      details: "This edition invites you to explore and express your anxiety through creativity. We will use various creative mediums so that you can understand your anxiety better. Additionally we will be working on coming up with tools to navigate the anxiety, all in a supportive community space. ",
      isRegisterOption: false,
    },
  ];

  return (
    <div className="px-6 py-12 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}
