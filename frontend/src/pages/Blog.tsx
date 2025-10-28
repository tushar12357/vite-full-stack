import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const CATEGORIES = [
  "All",
  "Industry Insights",
  "Success Stories",
  "Best Practices",
  "Technical",
  "Case Studies",
  "Research",
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
    pages: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const limit = 9;

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

        const res = await fetch(`https://vite-full-stack.vercel.app/api/blogs?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to load blogs");
        const json = await res.json();

        setBlogs(json.data || []);
        setPagination(json.pagination || { page: 1, limit: 9, total: 0, pages: 1 });
      } catch (e: any) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [searchQuery, selectedCategory, page]);

  const featuredPost = blogs.find((p) => p.featured);
  const showFeaturedSection =
    selectedCategory === "All" && !searchQuery && featuredPost;

  const formatReadTime = (readTime: string) => {
    if (!readTime || readTime === "NaN") return "5 min read";
    return readTime;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">Pen</span>
            </div>
            <Badge variant="secondary" className="text-xs font-semibold">
              UPDATED DAILY
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            CloserX Blog
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Insights, tips, and stories from the cutting edge of AI voice technology
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-12 h-14 text-lg bg-card border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-accent text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {showFeaturedSection && (
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h  h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>

            <Link to={`/blog/${featuredPost.slug}`} className="group">
              <div className="grid md:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Read Article{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid + Pagination */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {error && (
            <p className="text-center text-red-500 py-8">{error}</p>
          )}

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-96 rounded-2xl" />
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found. Try a different search.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((post) => (
                  <Link
                    key={post._id}
                    to={`/blog/${post.slug}`}
                    className="group"
                  >
                    <article className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <Badge className="w-fit mb-3">{post.category}</Badge>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <span>{formatReadTime(post.readTime)}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-lg bg-card disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                    .filter(
                      (p) =>
                        p === 1 ||
                        p === pagination.pages ||
                        Math.abs(p - page) <= 2
                    )
                    .map((p, idx, arr) => (
                      <div key={p}>
                        {idx > 0 && arr[idx - 1] !== p - 1 && (
                          <span className="px-2">…</span>
                        )}
                        <button
                          onClick={() => setPage(p)}
                          className={`px-4 py-2 rounded-lg ${
                            page === p
                              ? "bg-primary text-primary-foreground"
                              : "bg-card"
                          }`}
                        >
                          {p}
                        </button>
                      </div>
                    ))}

                  <button
                    onClick={() =>
                      setPage((p) => Math.min(p + 1, pagination.pages))
                    }
                    disabled={page === pagination.pages}
                    className="px-4 py-2 rounded-lg bg-card disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}