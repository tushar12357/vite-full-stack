import { useState, type FormEvent, type ChangeEvent } from "react";

interface Blog {
  title: string;
  content: string;
  author: string;
}

interface BlogFormProps {
  onBlogAdded: () => void;
}

export default function BlogForm({ onBlogAdded }: BlogFormProps) {
  const [form, setForm] = useState<Blog>({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        name="title"
        placeholder="Title"
        className="border w-full p-2 rounded"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        className="border w-full p-2 rounded"
        rows={4}
        value={form.content}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="border w-full p-2 rounded"
        value={form.author}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Blog
      </button>
    </form>
  );
}
