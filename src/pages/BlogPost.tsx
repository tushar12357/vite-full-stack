import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: number;
  category: string;
  featured: boolean;
  image: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // -----------------------------------------------------------------
  // FETCH SINGLE POST
  // -----------------------------------------------------------------
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://vite-full-stack.vercel.app/api/blogs/?slug=${id}`
        );
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Failed to load post");
        }
        const data: Blog = await res.json();
        setPost(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // -----------------------------------------------------------------
  // HELPERS
  // -----------------------------------------------------------------
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const formatReadTime = (mins: number) => `${mins} min read`;



  const handleShare = async () => {
    if (!post) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  // -----------------------------------------------------------------
  // RENDER
  // -----------------------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
          <Skeleton className="h-8 w-32 mb-4" />
          <Skeleton className="h-12 w-full mb-6" />
          <div className="flex gap-6 mb-8">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="aspect-video rounded-2xl mb-12" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center">
          <p className="text-xl text-red-500">{error || "Post not found"}</p>
          <Link to="/blog" className="mt-4 inline-block">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* BACK */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <Badge>{post.category}</Badge>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* META */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{formatReadTime(post.readTime)}</span>
            </div>
            <Button
              size="sm"
              className="ml-auto bg-purple-600 hover:bg-purple-700 text-white border-none"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* IMAGE */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT (HTML) */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-t prose-h2:border-gray-800 prose-h2:pt-8
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:border-t prose-h3:border-gray-800 prose-h3:pt-8
              prose-p:text-gray-300 prose-p:leading-loose prose-p:mb-8
              prose-ul:text-gray-300 prose-ul:my-8
              prose-li:my-3
              prose-strong:text-white prose-strong:font-semibold
              prose-img:rounded-2xl prose-img:my-12 prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of companies already using AI voice technology to
              scale their operations and delight customers.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}