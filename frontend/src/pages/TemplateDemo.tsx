import { useParams, Link } from "react-router-dom";
import { sampleTemplates, templateHeroData } from "@/data/templatesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageSquare, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const TemplateDemo = () => {
    const { id } = useParams();

    // Find the template in both sampleTemplates and templateHeroData
    const template =
        sampleTemplates.find((t) => t.id === id) ||
        (templateHeroData.featuredTemplate.id === id
            ? templateHeroData.featuredTemplate
            : null);

    if (!template) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Template not found</h1>
                <Link to="/templates" className="text-purple-400 hover:text-purple-300">
                    Return to Templates
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        to="/templates"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Templates
                    </Link>
                </div>

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            {template.category}
                        </span>
                        {template.isFree && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                Free
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{template.name}</h1>
                    <p className="text-xl text-gray-400 max-w-3xl">{template.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: System Prompt */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-lg font-semibold text-white/90">
                            <Terminal className="w-5 h-5 text-purple-400" />
                            <h2>System Prompt</h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-300 leading-relaxed overflow-auto max-h-[600px] whitespace-pre-wrap">
                            {template.systemPrompt || "No system prompt available for this template."}
                        </div>
                    </div>

                    {/* Right Column: Preview / First Message */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-lg font-semibold text-white/90">
                            <MessageSquare className="w-5 h-5 text-purple-400" />
                            <h2>Agent Preview</h2>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-800 min-h-[400px] flex flex-col">
                            {/* Chat Header */}
                            <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                                    AI
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{template.name} Agent</div>
                                    <div className="text-xs text-green-600 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Online
                                    </div>
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 p-6 bg-gray-50/50">
                                {template.firstMessage ? (
                                    <div className="flex gap-4 max-w-[90%]">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 text-xs font-bold mt-1">
                                            AI
                                        </div>
                                        <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm text-gray-800 leading-relaxed">
                                            {template.firstMessage}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-400 mt-20 italic">
                                        No preview message available.
                                    </div>
                                )}
                            </div>

                            {/* Chat Input Placeholder */}
                            <div className="p-4 border-t border-gray-100 bg-white">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        disabled
                                        className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-5 text-sm focus:outline-none cursor-not-allowed opacity-70"
                                    />
                                    <Button
                                        size="icon"
                                        className="absolute right-1 top-1 rounded-full w-8 h-8 bg-purple-600 hover:bg-purple-700"
                                        disabled
                                    >
                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </Button>
                                </div>
                                <p className="text-xs text-center text-gray-400 mt-2">
                                    This is a preview mode. Full chat functionality requires deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TemplateDemo;
