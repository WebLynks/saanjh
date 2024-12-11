type UpdateCardProps = {
  date: string;
  content: string;
  bgColor: string;
};

function UpdateCard({ date, content, bgColor }: UpdateCardProps) {
  return (
    <>
      <div className={`bg-${bgColor} col-span-3 rounded-2xl p-6 md:col-span-1`}>
        <div className="flex flex-col items-start justify-between gap-8 font-semibold">
          <div className="text-xs">{date}</div>
          <div>{content}</div>
          <button className="rounded-lg bg-gray-50 p-2 text-xs shadow shadow-gray-500">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdateCard;
