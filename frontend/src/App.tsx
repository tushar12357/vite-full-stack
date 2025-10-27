import { useEffect, useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

export default function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:3000/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">My Blog</h1>
      <BlogForm onBlogAdded={fetchBlogs} />
      <BlogList blogs={blogs} onUpdated={fetchBlogs} />
    </div>
  );
}
