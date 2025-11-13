import { Link } from "react-router-dom";
import { User } from "lucide-react";

interface BlogArticleCardProps {
  post: {
    _id?: string;
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    createdAt: string;
  };
  uiScreenshot: string;
}

const BlogArticleCard = ({ post, uiScreenshot }: BlogArticleCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="bg-black border border-gray-900 rounded-2xl overflow-hidden hover:border-gray-800 transition-all h-full flex flex-col">
        {/* Tag */}
        <div className="p-4 pb-3">
          <span className="inline-block px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-white font-medium">
            {post.category}
          </span>
        </div>

        {/* UI Screenshot */}
        <div className="px-4 pb-3">
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300 max-h-96">
            <img
              src={uiScreenshot}
              alt={post.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/80 mb-4 flex-1 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author & Date */}
          <div className="flex items-center gap-2 text-xs text-white/60">
            <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="w-2.5 h-2.5 text-white" />
            </div>
            <span>{post.author}</span>
            <span className="text-white/40">•</span>
            <span>{formatDate(post.createdAt)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogArticleCard;

