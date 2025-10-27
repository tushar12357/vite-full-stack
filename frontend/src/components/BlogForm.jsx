import { useState } from "react";

export default function BlogForm({ onBlogAdded }) {
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", content: "", author: "" });
    onBlogAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        type="text"
        placeholder="Title"
        className="border w-full p-2 rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        className="border w-full p-2 rounded"
        rows="4"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Author"
        className="border w-full p-2 rounded"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Blog
      </button>
    </form>
  );
}
