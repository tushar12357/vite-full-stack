import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Eye, ThumbsUp, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function VideoDetail() {
  const { id } = useParams();

  // In a real app, fetch based on ID and embed actual video
  const video = {
    title: "Quick Start: Your First AI Agent in 10 Minutes",
    description: "Complete walkthrough of setting up your first voice agent from scratch. We'll cover everything from initial setup to making your first test call.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
    duration: "10:24",
    category: "Getting Started",
    views: "45K",
    likes: "2.1K",
    publishDate: "October 15, 2025",
    transcript: `
      <h3>Introduction (0:00)</h3>
      <p>Welcome to CloserX! In this tutorial, we'll set up your first AI voice agent in just 10 minutes.</p>

      <h3>Accessing the Dashboard (0:45)</h3>
      <p>First, log into your account and navigate to the Voice Agents section. Click "Create New Agent" to begin.</p>

      <h3>Choosing a Template (2:10)</h3>
      <p>Select from our pre-built templates based on your use case. For this example, we'll use the Appointment Scheduling template.</p>

      <h3>Configuring Settings (3:30)</h3>
      <p>Give your agent a name, select a voice, and choose your preferred language. You can adjust the personality slider to match your brand tone.</p>

      <h3>Building Conversation Flow (5:00)</h3>
      <p>Use the visual flow builder to customize how your agent responds. Drag and drop elements to create your conversation logic.</p>

      <h3>Integration Setup (7:15)</h3>
      <p>Connect your calendar system so the agent can automatically book appointments. We support Google Calendar, Outlook, and more.</p>

      <h3>Testing Your Agent (8:30)</h3>
      <p>Before going live, use our testing tools to make sample calls and refine your agent's responses.</p>

      <h3>Deployment (9:45)</h3>
      <p>Once you're satisfied, click Deploy and your agent will be live and ready to handle calls!</p>
    `,
    relatedVideos: [
      {
        id: "advanced-scripts",
        title: "Advanced Call Script Techniques",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
        duration: "15:37"
      },
      {
        id: "crm-integration",
        title: "Integrating with Popular CRMs",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
        duration: "12:15"
      },
      {
        id: "optimization-tips",
        title: "Optimizing Call Quality",
        thumbnail: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=400&q=80",
        duration: "14:28"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Link */}
              <Link to="/videos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Videos
              </Link>

              {/* Video Player Area */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-6">
                {/* In production, embed actual video player here */}
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Info */}
              <div className="mb-6">
                <Badge className="mb-3">{video.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {video.title}
                </h1>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{video.likes} likes</span>
                  </div>
                  <span className="ml-auto text-sm">{video.publishDate}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pb-6 border-b border-border">
                  <Button className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3">About this video</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Transcript */}
              <div>
                <h2 className="text-xl font-bold mb-4">Video Transcript</h2>
                <div 
                  className="prose prose-sm max-w-none
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
                    prose-p:text-muted-foreground prose-p:my-2"
                  dangerouslySetInnerHTML={{ __html: video.transcript }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-xl font-bold mb-4">Related Videos</h2>
                <div className="space-y-4">
                  {video.relatedVideos.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/videos/${related.id}`}
                      className="group block"
                    >
                      <div className="flex gap-3 bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                        <div className="w-40 aspect-video flex-shrink-0 relative overflow-hidden">
                          <img 
                            src={related.thumbnail} 
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-white text-xs rounded">
                            {related.duration}
                          </div>
                        </div>
                        <div className="p-3 flex-1">
                          <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <h3 className="font-bold mb-2">Ready to get started?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create your AI voice agent today
                  </p>
                  <Link to="/contact">
                    <Button className="w-full font-semibold">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
