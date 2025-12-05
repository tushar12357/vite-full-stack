import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function LiveDemoModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("us");

    const handlePhoneChange = (value: string, countryData: CountryData) => {
        setPhone(value);
        const digits = value.replace(/\D/g, "");
        if (digits.length >= 2 || value.endsWith(" ") || value === "") {
            setCountry(countryData.countryCode);
        }
    };

const handleStartCall = async () => {
    if (!name || !phone || !email) {
        alert("Please enter your name, phone number, and email.");
        return;
    }

    setLoading(true);

    const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;

    const payload = {
        access_key: "testmycall",
        calling_number: "+18582520325",
        email,
        receiver_number: formattedPhone,
        name,
        new_agent: 164
    };

    try {
        const response = await fetch("https://app.closerx.ai/api/testcall/voizerfreeaccount/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log("API Response:", data);

        if (!response.ok) {
            alert("Something went wrong: " + (data?.message || "API error"));
            setLoading(false);
            return;
        }

        setName("");
        setPhone("");
        setEmail("");
        setCountry("us");

        setOpen(false);

    } catch (error) {
        console.error("API Error:", error);
        alert("Error starting call. Try again.");
    }

    setLoading(false);
};



    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25"
            >
                <span>Try Live Demo</span>
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </button>

            {open && (
                <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
                    <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-6 my-10 animate-in fade-in zoom-in-95 duration-200 bg-white">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-2xl font-bold mb-2 text-gray-900">Test Your Call</h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Enter your details to receive a test call from our AI agent.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1.5 block text-gray-700">Name</label>
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-1.5 block text-gray-700">Phone Number</label>
                                <div className="phone-input-container">
                                    <PhoneInput
                                        country={country}
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        inputClass="!w-full !h-10 !text-sm !bg-white !border-gray-200 !text-gray-900 !rounded-md focus:!ring-2 focus:!ring-purple-500 focus:!border-transparent"
                                        containerClass="!w-full"
                                        buttonClass="!bg-white !border-gray-200 !rounded-l-md"
                                        dropdownClass="!bg-white !text-gray-900"
                                        enableSearch
                                        disableSearchIcon
                                    />
                                </div>
                                
                                <div>
                                    <label className="text-sm font-medium mb-1.5 block text-gray-700">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                </div>

                            </div>

                           <Button
                            className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white py-6 text-base font-semibold rounded-lg mt-2"
                            onClick={handleStartCall}
                            disabled={loading}
                        >
                            {loading ? "Starting..." : "Start Call"}
                        </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
