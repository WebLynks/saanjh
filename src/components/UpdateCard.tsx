type UpdateCardProps = {
  date: string;
  content: string;
  bgColor: string;
};

function UpdateCard({ date, content, bgColor }: UpdateCardProps) {
  return (
    <>
      <div
        className={`bg-${bgColor} col-span-3 rounded-2xl bg-opacity-75 p-6 md:col-span-1`}
      >
        <div className="flex flex-col items-start justify-between gap-8 font-sans-black tracking-tighter text-gray-900 opacity-90">
          <div className="xl:text-lg 2xl:text-xl">{date}</div>
          <div className="lg:text-lg xl:text-xl 2xl:text-2xl">{content}</div>
          <button className="rounded-lg bg-gray-50 p-2 shadow shadow-gray-500 xl:text-lg 2xl:text-xl">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdateCard;
