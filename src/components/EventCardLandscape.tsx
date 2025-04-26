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

function EventCardLandscape({
  name = "Embracing Life Through Poetry",
  imgName = "embracing_life_through_poetry",
  date = "27th April, 2025",
  amount = "₹400",
  numberOfSlots = "6",
  timing = "5 pm - 7 pm",
  details = `The theme for this edition is 'Embracing Life through Poetry'. This event focuses on exploring significant life experiences through poetry, guided by counseling psychologists Batul and Ruchi. Participants can expect poetry reading, creative expression, and exciting goodie bags.`,
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
              href="https://corridorsevencoffee.myinstamojo.com/product/corridor-seven-journaling-club-edition-5th/"
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

export default EventCardLandscape;
