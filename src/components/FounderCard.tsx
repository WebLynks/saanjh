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
      <div className="h-[34rem] rounded-b-2xl shadow-lg sm:max-md:h-[44rem] md:max-lg:h-[36rem] lg:h-[38rem] xl:h-[46rem]">
        <div
          className={`relative flex h-[20rem] justify-center rounded-t-2xl sm:max-md:h-[30rem] bg-${bgColor} bg-opacity-75 md:max-lg:h-[18rem] xl:h-[30rem]`}
        >
          {loading ? (
            `loading...`
          ) : (
            <img
              src={image}
              alt={name}
              className="absolute bottom-0 h-[22rem] w-11/12 object-fill sm:max-md:h-[32rem] md:max-lg:h-[20rem] xl:h-[32rem]"
            />
          )}
        </div>
        <div className="flex h-[14rem] flex-col items-center justify-center gap-4 px-2 py-4 text-center md:h-[18rem] xl:h-[16rem]">
          <div className="font-sans-black text-xl tracking-tighter text-gray-900 opacity-90 md:max-lg:text-lg">
            {name}
          </div>
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
