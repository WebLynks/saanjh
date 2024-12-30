import useImage from "../hooks/useImage";

export type Founder = {
  name: string;
  detail: string;
  imageName: string;
  bgColor: string;
};

function FounderCard({ name, detail, imageName, bgColor }: Founder) {
  const { loading, image } = useImage(imageName);

  return (
    <div className="col-span-3 md:col-span-1">
      <div className="relative h-[33rem] rounded-b-2xl shadow-lg">
        <div
          className={`flex h-[17rem] justify-center rounded-t-2xl bg-${bgColor} bg-opacity-75`}
        >
          {loading ? (
            `loading...`
          ) : (
            <img
              src={image}
              alt={name}
              className="absolute -top-[2rem] h-[19rem] w-full object-fill"
            />
          )}
        </div>
        <div className="flex h-[16rem] flex-col items-center justify-center gap-4 px-2 py-4 text-center">
          <div className="text-xl font-semibold md:max-lg:text-lg">{name}</div>
          <hr className={`w-2/5 border-2 border-${bgColor}`} />
          <div className="text-center md:max-lg:text-sm">{detail}</div>
          <div
            className={`rounded-xl bg-${bgColor} px-4 py-2 text-white shadow-lg`}
          >
            Know More
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderCard;
