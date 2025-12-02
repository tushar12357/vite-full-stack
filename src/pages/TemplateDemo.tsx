import { useParams, Link } from "react-router-dom";
import { sampleTemplates, templateHeroData } from "@/data/templatesData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Copy, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useLuna } from "@/contexts/LunaContext";

const TemplateDemo = () => {
    const { id } = useParams();
    const [copied, setCopied] = useState(false);
    const { openLuna, setTemplate } = useLuna();

    // Find the template
    const template = sampleTemplates.find((t) => t.id === id) ||
        (templateHeroData.featuredTemplate.id === id ? templateHeroData.featuredTemplate : undefined);

    if (!template) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Template not found</h1>
                    <Link to="/templates">
                        <Button variant="outline">Back to Templates</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const handleCopyPrompt = () => {
        if (template.systemPrompt) {
            navigator.clipboard.writeText(template.systemPrompt);
            setCopied(true);
            toast.success("System prompt copied to clipboard");
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleUseTemplate = () => {
        setTemplate(template);
        openLuna();
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans">
            <Header />

            <main className="flex-1 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
                <Link to="/templates" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Templates
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Template Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <img
                                src={template.image}
                                alt={template.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 space-y-4">
                                <div>
                                    <div className="text-sm text-purple-400 font-medium mb-1">{template.category}</div>
                                    <h1 className="text-3xl font-bold">{template.name}</h1>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {template.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm text-gray-400">
                                    <span>{template.usersCount || "0 users"}</span>
                                    <span>{template.downloads || "0 downloads"}</span>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        onClick={handleUseTemplate}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white gap-2"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        Use This Template
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: System Prompt & Preview */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* System Prompt Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">System Prompt</h2>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-white/20 hover:bg-white/10 text-black"
                                    onClick={handleCopyPrompt}
                                    disabled={!template.systemPrompt}
                                >
                                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                                    {copied ? "Copied" : "Copy Prompt"}
                                </Button>
                            </div>

                            <div className="bg-gray-900 rounded-xl border border-white/10 p-6 overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar">
                                {template.systemPrompt ? (
                                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                                        {template.systemPrompt}
                                    </pre>
                                ) : (
                                    <div className="text-gray-500 italic text-center py-8">
                                        System prompt not available for this template yet.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* First Message Preview */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Agent Preview</h2>
                            <div className="bg-gray-900 rounded-xl border border-white/10 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                        <span className="font-bold text-white">AI</span>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                                        <p className="text-gray-200">
                                            {template.firstMessage || "Hello! How can I help you today?"}
                                        </p>
                                    </div>
                                </div>
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
