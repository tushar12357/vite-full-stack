import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partnership() {

  useEffect(() => {
    // Load CloserX embed script once
    const script = document.createElement("script");
    script.src = "https://link.closerx.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-28 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex justify-center">Partnership Application</h1>
        <p className="text-gray-400 mb-12 max-w-2xl flex justify-center mx-auto">
          Fill out this form to partner with CloserX. We will reach out to you shortly.
        </p>

        {/* Form Container */}
        <div className="rounded-2xl bg-[#0D0D0D] p-6 md:p-12 border border-gray-800">
          
          <iframe
            src="https://link.closerx.ai/widget/form/KDKD4G8Iaq8DwpJSYAgC"
            style={{ width: "100%", height: "2448px", border: "none", borderRadius: "12px" }}
            id="inline-KDKD4G8Iaq8DwpJSYAgC"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Partnership Form"
            data-form-id="KDKD4G8Iaq8DwpJSYAgC"
            title="Partnership Form"
          ></iframe>

        </div>
      </main>

      <Footer />
    </div>
  );
}
