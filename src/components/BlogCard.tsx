import useImage from "../hooks/useImage";
import { Blog } from "../services/blogService";
import { formatDate } from "../utils/formatDate";

function BlogCard({
  title,
  category,
  date,
  summary,
  readingTime,
  imageName = "",
}: Blog) {
  const { loading, image } = useImage(imageName);

  return (
    <div className="col-span-3 p-8 hover:bg-pink-100 sm:col-span-1">
      <div className="flex flex-col items-start justify-around gap-4">
        {loading ? (
          `loading...`
        ) : (
          <img
            className="aspect-square w-full rounded-t-lg object-fill"
            src={image}
            alt={title}
          />
        )}
        <div className="flex w-full flex-wrap items-center justify-between sm:max-md:h-16 md:max-lg:h-12">
          <div className="font-semibold">{category}</div>
          <div className="text-xs">{formatDate(date)}</div>
        </div>
        <div className="font-semibold sm:max-md:h-24 md:max-lg:h-16 lg:h-12">
          {title}
        </div>
        <div className="line-clamp-4 h-16 text-sm">{summary}</div>
        <div className="w-32 cursor-pointer rounded-full bg-mango bg-opacity-50 p-2 text-center font-medium shadow-md">
          Read More
        </div>
        <div className="text-xs">{`${readingTime} read`}</div>
      </div>
    </div>
  );
}

export default BlogCard;
