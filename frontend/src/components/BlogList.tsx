export default function BlogList({ blogs, onUpdated }) {
  const deleteBlog = async (id) => {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    onUpdated();
  };

  return (
    <div className="space-y-4">
      {blogs.map((b) => (
        <div key={b._id} className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold">{b.title}</h2>
          <p className="text-gray-700">{b.content}</p>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span>By {b.author}</span>
            <button
              onClick={() => deleteBlog(b._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
