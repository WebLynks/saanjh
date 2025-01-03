import useImage from "../hooks/useImage";

type ServiceCardProps = {
  name: string;
  imgName: string;
  bgColor: string;
};

function ServiceCard({ name, imgName, bgColor }: ServiceCardProps) {
  const { loading, image } = useImage(imgName);

  return (
    <div className="col-span-3 md:col-span-1">
      <div className={`rounded-lg shadow-sm shadow-${bgColor}`}>
        <div
          className={`relative rounded-t-lg bg-${bgColor} h-72 text-center opacity-75`}
        >
          <div className="h-full space-y-2 overflow-hidden py-4 text-xl font-semibold text-white">
            <div className="opacity-50">{name}</div>
            <div className="opacity-25">{name}</div>
            <div className="opacity-50">{name}</div>
            <div className="opacity-25">{name}</div>
            <div className="opacity-50">{name}</div>
            <div className="opacity-25">{name}</div>
            <div className="opacity-50">{name}</div>
          </div>
          <div className="absolute start-0 top-0 z-20 flex size-full items-center justify-center">
            {loading ? (
              `loading...`
            ) : (
              <img
                className="aspect-square size-[90%] object-fill"
                src={image}
                alt={name}
              />
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:max-lg:flex-col md:max-lg:items-start">
          <div className={`h-10 w-20 rounded-t-full bg-${bgColor}`}></div>
          <div className="flex flex-col items-end justify-end font-semibold md:max-lg:items-start">
            {name.split(" ").map((word) => (
              <div key={word} className="">
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
