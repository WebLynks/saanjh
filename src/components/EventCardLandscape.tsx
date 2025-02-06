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
  name = "Loneliness",
  imgName = "poster_25_aug",
  date = "25th August, 2024",
  amount = "₹400",
  numberOfSlots = "6",
  timing = "4 - 6 pm",
  details = `Loneliness is a mental health program tackling social isolation. It offers support, counseling, and activities to help build connections. The program aims to reduce loneliness and improve emotional well-being.`,
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
            <div className="text-sm lg:text-base 2xl:text-lg">{`Slots: ${numberOfSlots} Seats`}</div>
          </div>
          <div className="font-sans-black text-xl tracking-tighter text-gray-900 opacity-90 lg:text-2xl 2xl:text-3xl">
            {amount}
          </div>
        </div>
        <div className="flex break-words">{details}</div>
        <div className="flex flex-wrap items-center justify-between font-sans-black text-lg tracking-tighter text-gray-900 opacity-90 lg:text-xl 2xl:text-2xl">
          <div>{`Time: ${timing}`}</div>
          <div>{date}</div>
        </div>
        {isRegisterOption && (
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="rounded-xl bg-mango px-8 py-2 lg:text-lg 2xl:text-xl"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCardLandscape;
