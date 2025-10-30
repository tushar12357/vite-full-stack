import React, { useState } from "react";
import { X, Send } from "lucide-react";

export default function LunaWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[10000] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 border border-white"
          aria-label="Open Luna Assistant"
        >
          <img
            src="https://storage.googleapis.com/msgsndr/3Mh94ewIWZaOQuAxTDt4/media/6903148c4f4aad24be14c53f.jpeg"
            alt="Luna Assistant"
            className="w-14 h-14 rounded-full object-cover"
          />
        </button>
      )}

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[10001] w-80 sm:w-96 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in duration-200">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary/90 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/msgsndr/3Mh94ewIWZaOQuAxTDt4/media/6903148c4f4aad24be14c53f.jpeg"
                alt="CloserX.ai Assistant"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Luna from CloserX.ai</h3>
                <p className="text-xs opacity-80">Typically replies within a few minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-base font-medium text-foreground">Hi Prio 👋🏻</p>
            <p className="text-sm text-muted-foreground -mt-2">
              How can we help you today?
            </p>

            {/* Recent Message */}
            <div className="mt-3 border border-border rounded-lg p-3 bg-muted/40">
              <div className="flex items-start gap-3">
                <img
                  src="https://storage.googleapis.com/msgsndr/3Mh94ewIWZaOQuAxTDt4/media/6903148c4f4aad24be14c53f.jpeg"
                  alt="CloserX.ai"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm leading-relaxed">
                    Hi Prio, could you please share your email so we can assist you
                    more effectively.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">CloserX.ai • 2d ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="border-t border-border p-3 bg-muted/60 flex flex-col items-stretch">
            <button className="flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg py-2 hover:opacity-90 transition">
              <Send className="w-4 h-4" />
              Send us a message
            </button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Powered by <span className="font-medium text-foreground">CloserX.ai</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
