import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Eye, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HelpArticle() {
  const { id } = useParams();
  const [helpful, setHelpful] = useState<boolean | null>(null);

  // In a real app, fetch based on ID
  const article = {
    title: "How to Set Up Your First AI Voice Agent",
    category: "Getting Started",
    readTime: "5 min read",
    views: "12.5K",
    lastUpdated: "October 20, 2025",
    content: `
      <p>Setting up your first AI voice agent with CloserX is quick and straightforward. This guide will walk you through every step of the process.</p>

      <h2>Step 1: Access the Dashboard</h2>
      <p>Log into your CloserX account and navigate to the "Voice Agents" section from the main dashboard. Click the "Create New Agent" button to begin.</p>

      <h2>Step 2: Choose Your Use Case</h2>
      <p>Select from our pre-built templates or start from scratch:</p>
      <ul>
        <li><strong>Appointment Scheduling:</strong> Perfect for booking meetings and managing calendars</li>
        <li><strong>Lead Qualification:</strong> Screen and qualify potential customers automatically</li>
        <li><strong>Customer Support:</strong> Handle common inquiries and route complex issues</li>
        <li><strong>Custom:</strong> Build your own conversation flow from the ground up</li>
      </ul>

      <h2>Step 3: Configure Basic Settings</h2>
      <p>Set up the fundamentals of your voice agent:</p>
      <ul>
        <li><strong>Agent Name:</strong> Give your agent a memorable name</li>
        <li><strong>Voice Selection:</strong> Choose from 50+ natural-sounding voices</li>
        <li><strong>Language:</strong> Select primary language and enable multilingual support</li>
        <li><strong>Personality:</strong> Adjust tone from professional to friendly</li>
      </ul>

      <h2>Step 4: Design Your Conversation Flow</h2>
      <p>Use our visual flow builder to create your conversation logic. You can:</p>
      <ul>
        <li>Add greeting messages and opening questions</li>
        <li>Create decision branches based on customer responses</li>
        <li>Integrate with your calendar or CRM</li>
        <li>Set up fallback responses for edge cases</li>
      </ul>

      <h2>Step 5: Test Your Agent</h2>
      <p>Before going live, thoroughly test your agent using our built-in testing tools. Make a few test calls to ensure:</p>
      <ul>
        <li>The conversation flows naturally</li>
        <li>Integrations are working correctly</li>
        <li>Voice quality meets your standards</li>
        <li>Edge cases are handled properly</li>
      </ul>

      <h2>Step 6: Deploy and Monitor</h2>
      <p>Once you're satisfied with testing, deploy your agent with a single click. Monitor performance through the analytics dashboard and make adjustments as needed.</p>

      <h2>Pro Tips for Success</h2>
      <ul>
        <li>Start simple and add complexity gradually</li>
        <li>Use real customer conversations to refine your scripts</li>
        <li>Enable call recording for quality assurance</li>
        <li>Set up alerts for unusual patterns or errors</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Now that your first agent is live, explore these advanced features:</p>
      <ul>
        <li>A/B testing different conversation flows</li>
        <li>Setting up proactive outbound calling campaigns</li>
        <li>Integrating with additional tools in your tech stack</li>
        <li>Creating custom reports and analytics dashboards</li>
      </ul>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link to="/help" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Help Center
          </Link>

          {/* Category Badge */}
          <Badge className="mb-4">{article.category}</Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{article.views} views</span>
            </div>
            <div className="text-sm">
              Last updated: {article.lastUpdated}
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-muted-foreground prose-ul:my-4
              prose-li:my-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Was This Helpful */}
          <div className="mt-16 p-6 rounded-2xl bg-card border border-border">
            <p className="font-semibold mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <Button
                variant={helpful === true ? "default" : "outline"}
                onClick={() => setHelpful(true)}
                className="gap-2"
              >
                <ThumbsUp className="h-4 w-4" />
                Yes
              </Button>
              <Button
                variant={helpful === false ? "default" : "outline"}
                onClick={() => setHelpful(false)}
                className="gap-2"
              >
                <ThumbsDown className="h-4 w-4" />
                No
              </Button>
            </div>
            {helpful !== null && (
              <p className="text-sm text-muted-foreground mt-4">
                Thank you for your feedback!
              </p>
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Still need help?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is available 24/7 to assist you.
            </p>
            <Link to="/contact">
              <Button className="font-semibold">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
