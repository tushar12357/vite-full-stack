import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const countries = [
  { "name": "United States", "dial_code": "+1", "code": "US" },
  { "name": "Afghanistan", "dial_code": "+93", "code": "AF" },
  { "name": "Albania", "dial_code": "+355", "code": "AL" },
  { "name": "Algeria", "dial_code": "+213", "code": "DZ" },
  { "name": "Andorra", "dial_code": "+376", "code": "AD" },
  { "name": "Angola", "dial_code": "+244", "code": "AO" },
  { "name": "Argentina", "dial_code": "+54", "code": "AR" },
  { "name": "Armenia", "dial_code": "+374", "code": "AM" },
  { "name": "Australia", "dial_code": "+61", "code": "AU" },
  { "name": "Austria", "dial_code": "+43", "code": "AT" },
  { "name": "Azerbaijan", "dial_code": "+994", "code": "AZ" },
  { "name": "Bahamas", "dial_code": "+1", "code": "BS" },
  { "name": "Bahrain", "dial_code": "+973", "code": "BH" },
  { "name": "Bangladesh", "dial_code": "+880", "code": "BD" },
  { "name": "Belarus", "dial_code": "+375", "code": "BY" },
  { "name": "Belgium", "dial_code": "+32", "code": "BE" },
  { "name": "Belize", "dial_code": "+501", "code": "BZ" },
  { "name": "Benin", "dial_code": "+229", "code": "BJ" },
  { "name": "Bhutan", "dial_code": "+975", "code": "BT" },
  { "name": "Bolivia", "dial_code": "+591", "code": "BO" },
  { "name": "Bosnia and Herzegovina", "dial_code": "+387", "code": "BA" },
  { "name": "Botswana", "dial_code": "+267", "code": "BW" },
  { "name": "Brazil", "dial_code": "+55", "code": "BR" },
  { "name": "Bulgaria", "dial_code": "+359", "code": "BG" },
  { "name": "Canada", "dial_code": "+1", "code": "CA" },
  { "name": "China", "dial_code": "+86", "code": "CN" },
  { "name": "Denmark", "dial_code": "+45", "code": "DK" },
  { "name": "Egypt", "dial_code": "+20", "code": "EG" },
  { "name": "France", "dial_code": "+33", "code": "FR" },
  { "name": "Germany", "dial_code": "+49", "code": "DE" },
  { "name": "India", "dial_code": "+91", "code": "IN" },
  { "name": "Indonesia", "dial_code": "+62", "code": "ID" },
  { "name": "Ireland", "dial_code": "+353", "code": "IE" },
  { "name": "Italy", "dial_code": "+39", "code": "IT" },
  { "name": "Japan", "dial_code": "+81", "code": "JP" },
  { "name": "Kenya", "dial_code": "+254", "code": "KE" },
  { "name": "Mexico", "dial_code": "+52", "code": "MX" },
  { "name": "Nepal", "dial_code": "+977", "code": "NP" },
  { "name": "Netherlands", "dial_code": "+31", "code": "NL" },
  { "name": "New Zealand", "dial_code": "+64", "code": "NZ" },
  { "name": "Nigeria", "dial_code": "+234", "code": "NG" },
  { "name": "Pakistan", "dial_code": "+92", "code": "PK" },
  { "name": "Russia", "dial_code": "+7", "code": "RU" },
  { "name": "Saudi Arabia", "dial_code": "+966", "code": "SA" },
  { "name": "Singapore", "dial_code": "+65", "code": "SG" },
  { "name": "South Africa", "dial_code": "+27", "code": "ZA" },
  { "name": "South Korea", "dial_code": "+82", "code": "KR" },
  { "name": "Spain", "dial_code": "+34", "code": "ES" },
  { "name": "Sri Lanka", "dial_code": "+94", "code": "LK" },
  { "name": "Sweden", "dial_code": "+46", "code": "SE" },
  { "name": "Switzerland", "dial_code": "+41", "code": "CH" },
  { "name": "Turkey", "dial_code": "+90", "code": "TR" },
  { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" },
  { "name": "United Kingdom", "dial_code": "+44", "code": "GB" }
];



export default function LiveDemoModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("us");
    const [countryCode, setCountryCode] = useState("+1");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [search, setSearch] = useState("");


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

    const formattedPhone = `${countryCode}${phone}`;

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
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                        {/* Top Gradient Header */}
                           <div className="w-full h-32 bg-gradient-to-b from-purple-600 to-purple-500 flex flex-col items-center justify-center">
                            <div className="w-14 h-14 mt-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-purple-200">
                                <img src="favicon.png" alt="CloserX Logo" className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="p-6 relative">

                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Title & Subtitle */}
                            <h2 className="text-2xl font-bold text-center text-gray-900">
                                Welcome to <span className="text-purple-600">CloserX</span>
                            </h2>
                            <p className="text-gray-500 text-center text-sm mt-1 mb-6">
                                Please fill in your details to start the demo
                            </p>

                            {/* Form Fields */}
                            <div className="space-y-4">

                                {/* Name */}
                                <div>
                                    <label className="text-sm font-medium mb-1.5 block text-gray-700">
                                        Full Name *
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Enter full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                </div>

                                {/* Phone Number */}
                          
                                    <div>
                                    <label className="text-sm font-medium mb-1.5 block text-gray-700">
                                        Phone Number *
                                    </label>

                                    <div className="flex gap-3 mt-1">
                                        {/* COUNTRY CODE DROPDOWN */}
                                        <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-20 px-3 py-2.5 rounded-xl border bg-gray-50 flex items-center justify-between text-sm"
                                        >
                                            <span>{countryCode}</span>
                                            <svg
                                            className="w-4 h-4 opacity-50"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                            </svg>
                                        </button>

                                        {/* DROPDOWN */}
                                        {dropdownOpen && (
                                            <div className="absolute z-50 mt-2 w-64 bg-white shadow-lg rounded-xl border p-2">
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                className="w-full px-3 py-2 text-sm border rounded-lg mb-2"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />

                                            <div className="max-h-60 overflow-y-auto">
                                                {countries
                                                .filter(
                                                    (c) =>
                                                    c.name.toLowerCase().includes(search.toLowerCase()) ||
                                                    c.dial_code.includes(search)
                                                )
                                                .map((c) => (
                                                    <div
                                                    key={c.code}
                                                    onClick={() => {
                                                        setCountryCode(c.dial_code);
                                                        setDropdownOpen(false);
                                                    }}
                                                    className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                                                    >
                                                    <span>{c.name}</span>
                                                    <span className="font-medium">{c.dial_code}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            </div>
                                        )}
                                        </div>

                                        {/* PHONE NUMBER INPUT */}
                                        <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="flex-1 h-11 px-4 bg-gray-50 border rounded-xl text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition border-gray-200"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    </div>


                                {/* Email */}
                                <div>
                                    <label className="text-sm font-medium mb-1.5 block text-gray-700">
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-base font-semibold rounded-lg mt-2"
                                    onClick={handleStartCall}
                                    disabled={loading}
                                >
                                    {loading ? "Starting..." : "Continue to Demo →"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
