import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<{ message?: string; time?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 👇 Call your deployed API route
    fetch("/api/hello")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Vite + Express on Vercel 🚀</h1>

      {loading ? (
        <p>Loading from API...</p>
      ) : (
        <>
          <p>{data?.message}</p>
          <p style={{ opacity: 0.8, fontSize: "0.9rem" }}>{data?.time}</p>
        </>
      )}
    </div>
  );
}

export default App;
