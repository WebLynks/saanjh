import { formatDate } from "../utils/formatDate";
import { Blog, fetchBlogs } from "../services/blogService";
import useImage from "../hooks/useImage";
import BlogCard from "../components/BlogCard";

function BlogPage() {
  const blogs = fetchBlogs();
  const pinnedBlog: Blog =
    blogs.find((blog: Blog) => blog.pinned === true) || blogs[0];
  const { loading, image } = useImage(pinnedBlog.imageName);

  return (
    <div>
      <div className="flex flex-col gap-0 sm:flex-row">
        <div className="w-full bg-pink-50 sm:w-1/2">
          {loading ? (
            `loading...`
          ) : (
            <img
              className="h-[50dvh] w-full object-cover sm:h-[75dvh]"
              src={image}
              alt={pinnedBlog?.title}
            />
          )}
        </div>
        <div className="w-full bg-pink-100 sm:w-1/2">
          <div className="prose prose-h1:mb-2 prose-h4:mb-4 flex flex-col gap-2 p-[10dvw] sm:p-[5dvw]">
            <h3>{pinnedBlog.category}</h3>
            <p className="text-sm">{formatDate(pinnedBlog.date)}</p>
            <h1>{pinnedBlog.title}</h1>
            <h4>{pinnedBlog.summary}</h4>
            <p className="line-clamp-6 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5">
              {pinnedBlog.body}
            </p>
            <p className="text-sm">{`${pinnedBlog.readingTime} read`}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-items-center divide-x-2 divide-y-2">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
