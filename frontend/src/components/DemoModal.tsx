import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("us");

  const handlePhoneChange = (value: string, countryData: CountryData) => {
    setPhone(value);

    const digits = value.replace(/\D/g, "");

    // Update flag only when user types enough digits or adds a space
    if (digits.length >= 2 || value.endsWith(" ") || value === "") {
      setCountry(countryData.countryCode);
    }
  };

  const modal = (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-6 my-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-2">Test Your Call</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Experience our AI-powered agent with a test call.
        </p>

        {/* Prompt */}
        <label className="text-sm font-medium mb-1 block">Prompt</label>
        <Textarea
          defaultValue="You are a professional real estate agent. Assist the caller by providing information about available properties, scheduling viewings, and answering questions about the buying process."
          className="mb-4 text-sm resize-none"
          rows={4}
        />

        {/* Name */}
        <label className="text-sm font-medium mb-1 block">Your Name</label>
        <Input type="text" placeholder="Enter your full name" className="mb-4" />

        {/* Phone */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-1 block">Phone Number</label>
          <PhoneInput
            country={country}
            value={phone}
            onChange={handlePhoneChange}
            enableSearch={true}
            inputClass="!w-full !py-2 !pl-12 !text-sm !rounded-lg !border !border-border focus:!outline-none focus:!ring-2 focus:!ring-primary/40"
            buttonClass="!border-border !bg-muted"
            containerClass="!w-full"
          />
        </div>

        {/* Submit */}
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Start Call
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Navbar trigger */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 px-4 py-2 bg-white text-[#363062] text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        Demo
      </button>

      {/* Render modal through a portal */}
      {open && createPortal(modal, document.body)}
    </>
  );
}
