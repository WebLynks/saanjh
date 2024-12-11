import useImage from "../hooks/useImage";

type ServiceCardProps = {
  name: string;
  imgName: string;
  bgColor: string;
};

function ServiceCard({ name, imgName, bgColor }: ServiceCardProps) {
  const { loading, image } = useImage(imgName);

  return (
    <>
      <div className="col-span-3 md:col-span-1">
        <div className={`rounded-lg shadow-sm shadow-${bgColor}`}>
          <div
            className={`relative rounded-t-lg bg-${bgColor} text-center opacity-50`}
          >
            <div className="space-y-2 py-4 text-lg font-semibold text-white">
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-25">{name}</div>
              <div className="opacity-50">{name}</div>
            </div>
            <div className="absolute start-0 top-0 z-10 flex h-full w-full items-center justify-center">
              {loading ? (
                `loading...`
              ) : (
                <img
                  className="h-5/6 w-5/6 object-contain"
                  src={image}
                  alt={name}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between p-4">
            <div className={`h-10 w-20 rounded-t-full bg-${bgColor}`}></div>
            <div className="flex flex-col items-end justify-end font-semibold">
              {name.split(" ").map((word) => (
                <div key={word} className="">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
