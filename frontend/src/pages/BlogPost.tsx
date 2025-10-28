import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { id } = useParams();

  // In a real app, fetch based on ID
  const post = {
    title: "The AI Calling Revolution: What's Coming in 2025",
    author: "Sarah Chen",
    date: "2025-10-24",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    content: `
      <p>The landscape of business communication is undergoing a seismic shift. As we move into 2025, AI-powered voice technology is no longer a futuristic concept—it's becoming the standard for forward-thinking companies.</p>

      <h2>The Current State of AI Voice Technology</h2>
      <p>Today's AI voice agents can handle complex conversations, understand context, and respond with human-like naturalness. They're not just answering FAQs; they're qualifying leads, scheduling appointments, and even handling sensitive customer service issues with empathy and precision.</p>

      <h2>What's Changing in 2025</h2>
      <p>Several key developments are set to revolutionize the industry:</p>
      <ul>
        <li><strong>Multimodal Integration:</strong> AI agents will seamlessly blend voice, text, and visual data to provide richer interactions.</li>
        <li><strong>Emotional Intelligence:</strong> Advanced sentiment analysis will allow AI to detect and respond to customer emotions in real-time.</li>
        <li><strong>Hyper-Personalization:</strong> Every conversation will be tailored based on customer history, preferences, and context.</li>
        <li><strong>Zero-Latency Conversations:</strong> Response times will be imperceptible, creating truly natural dialogue flow.</li>
      </ul>

      <h2>The Business Impact</h2>
      <p>Companies adopting AI voice technology are seeing remarkable results. Customer satisfaction scores are up by an average of 35%, while operational costs have decreased by up to 60%. More importantly, human agents are being freed from repetitive tasks to focus on high-value interactions that require human creativity and problem-solving.</p>

      <h2>Getting Started</h2>
      <p>The best time to implement AI voice solutions is now. Start with a specific use case—whether it's appointment scheduling, lead qualification, or customer support—and expand from there. The technology is mature, affordable, and proven to deliver ROI within months.</p>

      <h2>Looking Ahead</h2>
      <p>As we look toward the rest of 2025 and beyond, one thing is clear: AI voice technology isn't replacing human connection—it's enhancing it. By handling routine interactions efficiently, AI allows businesses to scale their customer engagement while maintaining the personal touch that builds loyalty.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <Badge className="mb-4">{post.category}</Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:my-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of companies already using AI voice technology to scale their operations and delight customers.
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
