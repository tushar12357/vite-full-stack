import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import BlogHero from "@/components/BlogHero";
import BlogArticleCard from "@/components/BlogArticleCard";
import { blogHeroData, blogCategories } from "@/data/blogData";
import uiScreenshot from "@/assets/image copy.png";
import FinalCTA from "@/components/home/FinalCTA";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: number;
  category: string;
  featured: boolean;
  image: string;
  slug: string;
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 9,
    total: 0,
    pages: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const limit = 9;

  // -----------------------------------------------------------------
  // FETCH LIST
  // -----------------------------------------------------------------
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        });
        if (searchQuery) params.append("q", searchQuery);
        if (selectedCategory !== "All") params.append("category", selectedCategory);

        const res = await fetch(
          `https://vite-full-stack.vercel.app/api/blogs?${params.toString()}`
        );
        if (!res.ok) throw new Error("Failed to load blogs");
        const json = await res.json();

        setBlogs(json.data ?? []);
        setPagination(json.pagination ?? { page: 1, limit: 9, total: 0, pages: 1 });
      } catch (e: any) {
        setError(e.message ?? "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [searchQuery, selectedCategory, page]);

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedCategory]);

  // -----------------------------------------------------------------
  // LATEST POST FOR HERO
  // -----------------------------------------------------------------
  const latestPost = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )[0];

  const heroData = latestPost
    ? {
        tag: latestPost.category || blogHeroData.tag,
        title: latestPost.title,
        description: latestPost.excerpt,
        buttonText: blogHeroData.buttonText,
        author: latestPost.author,
        createdAt: latestPost.createdAt,
        image: latestPost.image,
      }
    : null;

  const postsWithoutHero = latestPost
    ? blogs.filter((post) =>
        post._id && latestPost._id
          ? post._id !== latestPost._id
          : post.slug !== latestPost.slug
      )
    : blogs;
  const normalize = (value: string) => value?.trim().toLowerCase();
  const visiblePosts =
    selectedCategory === "All"
      ? postsWithoutHero
      : postsWithoutHero.filter(
          (post) => normalize(post.category) === normalize(selectedCategory)
        );
  const totalPages = Math.max(pagination.pages ?? 1, 1);

  // -----------------------------------------------------------------
  // RENDER
  // -----------------------------------------------------------------
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* HERO SECTION */}
      {heroData ? (
        <BlogHero
          hero={heroData}
          uiScreenshot={uiScreenshot}
          featuredPostSlug={latestPost?.slug}
        />
      ) : (
        <section className="relative bg-black py-16 md:py-16 overflow-hidden min-h-screen mt-16 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div>
                <Skeleton className="h-6 w-32 mb-4 bg-gray-900" />
                <Skeleton className="h-12 w-3/4 mb-4 bg-gray-900" />
                <Skeleton className="h-24 w-full max-w-md mb-6 bg-gray-900" />
                <Skeleton className="h-11 w-36 bg-gray-900" />
              </div>
              <div className="relative">
                <Skeleton className="w-full h-80 rounded-2xl bg-gray-900" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY SECTION WITH SEARCH */}
      <section className="sticky top-24 z-40 bg-black py-3 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Categories on Left */}
            <div className="flex flex-wrap items-center gap-1.5">
              {blogCategories.map((category) => {
                const isActive = 
                  (selectedCategory === "All" && category.id === "all") ||
                  selectedCategory === category.label;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id === "all" ? "All" : category.label);
                      setPage(1);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-gray-800 hover:bg-gray-700 text-white/80 border border-gray-700"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Search on Right */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                placeholder="Search"
                className="pl-10 h-9 text-xs bg-gray-800 border-gray-700 text-white placeholder:text-white/60 focus:border-purple-600"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALL BLOG POSTS GRID */}
      <section className="pb-12 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          {error && <p className="text-center text-red-500 py-6 text-sm">{error}</p>}

          {loading ? (
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-xl bg-gray-900" />
              ))}
            </div>
          ) : visiblePosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-base text-white/60">
                No articles found. Try a different search.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                {visiblePosts.map((post) => (
                  <BlogArticleCard
                    key={post._id || post.slug}
                    post={post}
                    uiScreenshot={uiScreenshot}
                  />
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-1.5 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-3 py-1.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                      (p) =>
                        p === 1 ||
                        p === totalPages ||
                        Math.abs(p - page) <= 2
                    )
                    .map((p, idx, arr) => (
                      <div key={p}>
                        {idx > 0 && arr[idx - 1] !== p - 1 && (
                          <span className="px-1.5 text-white/60 text-sm">…</span>
                        )}
                        <button
                          onClick={() => setPage(p)}
                          className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
                            page === p
                              ? "bg-purple-600 text-white"
                              : "bg-gray-800 text-white hover:bg-gray-700"
                          }`}
                        >
                          {p}
                        </button>
                      </div>
                    ))}

                  <button
                    onClick={() =>
                      setPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={page === totalPages}
                    className="px-3 py-1.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <FinalCTA />
      <Footer />
    </div>
  );
}