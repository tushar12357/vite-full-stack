import { useCallback, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

declare global {
  interface Window {
    SnowieWidget?: { open?: () => void; toggle?: () => void; show?: () => void };
    Snowie?: { open?: () => void; toggle?: () => void; show?: () => void };
    SnowWidget?: { open?: () => void; toggle?: () => void; show?: () => void };
    snowie?: { open?: () => void; toggle?: () => void; show?: () => void };
  }
}

export default function DemoModal({
  buttonClassName = "flex items-center gap-1.5 px-4 py-2 bg-white text-[#363062] text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all",
  children = "Demo",
}: {
  buttonClassName?: string;
  children?: React.ReactNode;
}) {
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

  const triggerSnowieWidget = useCallback(() => {
    if (typeof window === "undefined") return false;

    const tryInvoke = (obj?: { open?: () => void; toggle?: () => void; show?: () => void }) => {
      if (!obj) return false;
      if (typeof obj.open === "function") {
        obj.open();
        return true;
      }
      if (typeof obj.toggle === "function") {
        obj.toggle();
        return true;
      }
      if (typeof obj.show === "function") {
        obj.show();
        return true;
      }
      return false;
    };

    return (
      tryInvoke(window.SnowieWidget) ||
      tryInvoke(window.Snowie) ||
      tryInvoke(window.SnowWidget) ||
      tryInvoke(window.snowie)
    );
  }, []);

  const handleDemoClick = useCallback(() => {
    const openedWidget = triggerSnowieWidget();
    if (!openedWidget) {
      setOpen(true);
    }
  }, [triggerSnowieWidget]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.closerx.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const modal = (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden my-10 animate-in fade-in duration-200 bg-white">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-900 bg-white/80 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <iframe
          src="https://link.closerx.ai/widget/booking/CyUUbqPRgIqfUb6HhpCP"
          style={{ width: "100%", border: "none", overflow: "auto", height: "400px" }}
          scrolling="yes"
          id="CyUUbqPRgIqfUb6HhpCP_1764373596691"
        ></iframe>
      </div>
    </div>
  );

  return (
    <>
      {/* Navbar trigger */}
      <button type="button" onClick={handleDemoClick} className={buttonClassName}>
        {children}
      </button>

      {/* Render modal through a portal */}
      {open && createPortal(modal, document.body)}
    </>
  );
}
