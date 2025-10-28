import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-dark pattern-dots-dark text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Construction className="w-24 h-24 text-accent mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            We're working hard to bring you this feature. Check back soon!
          </p>
          <Link to="/" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-glow transition-all">
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
