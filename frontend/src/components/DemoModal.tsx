import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DemoModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        Demo
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in duration-200">
            
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-2">Test Your Call</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Enter your details and submit a prompt to experience our system
            </p>

            {/* Prompt Field */}
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
            <label className="text-sm font-medium mb-1 block">Phone Number</label>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium px-3 py-2 border border-border rounded-lg bg-muted">
                +1
              </span>
              <Input type="tel" placeholder="Enter number" className="flex-1" />
            </div>

            {/* Submit */}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
