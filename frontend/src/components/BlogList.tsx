import { useState } from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

interface BlogListProps {
  blogs: Blog[];
  onUpdated: () => void;
}

export default function BlogList({ blogs, onUpdated }: BlogListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: "", content: "", author: "" });

  const startEdit = (blog: Blog) => {
    setEditingId(blog._id);
    setEditForm({ title: blog.title, content: blog.content, author: blog.author });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: "", content: "", author: "" });
  };

  const saveEdit = async (id: string) => {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    setEditingId(null);
    onUpdated();
  };

  const deleteBlog = async (id: string) => {
    await fetch(`http://localhost:3000/api/blogs/${id}`, { method: "DELETE" });
    onUpdated();
  };

  return (
    <div className="space-y-4">
      {blogs.map((b) => (
        <div key={b._id} className="p-4 border rounded shadow-sm">
          {editingId === b._id ? (
            <div className="space-y-2">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="border w-full p-2 rounded"
              />
              <textarea
                value={editForm.content}
                onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                className="border w-full p-2 rounded"
                rows={3}
              />
              <input
                type="text"
                value={editForm.author}
                onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                className="border w-full p-2 rounded"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => saveEdit(b._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{b.title}</h2>
              <p className="text-gray-700">{b.content}</p>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>By {b.author}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => startEdit(b)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBlog(b._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
