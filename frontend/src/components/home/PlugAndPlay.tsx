import { useEffect, useRef } from "react";

const PlugAndPlay = () => {
  const sectionRef = useRef(null);
  const plugRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || !plugRef.current || !socketRef.current) return;

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.min(Math.max(0, (winH - rect.top) / (winH * 1.5)), 1);

      // Phases
      const plugStopY = 40; // px from top
      const socketStart = 0.7; // when socket starts moving
      const connectAt = 0.9; // when plug/socket meet

      // Plug stops near top
      const plugY = progress < connectAt
        ? progress * (plugStopY * 2)
        : plugStopY - (progress - connectAt) * 80;

      plugRef.current.style.transform = `translate(-50%, ${plugY}px)`;

      // Socket moves up from bottom after socketStart
      const socketProgress = Math.max(0, (progress - socketStart) / (1 - socketStart));
      const socketY = (1 - socketProgress) * 300; // adjust start height

      socketRef.current.style.transform = `translate(-50%, -${socketY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[120vh] bg-[#08070E] overflow-hidden">
      {/* Plug */}
      <img
        ref={plugRef}
        src="https://cdn.prod.website-files.com/67a20b0884bf2e938d266594/67a64eeec6882200c1b61f5a_b73f720d176049e2ccb20287b0a6c477_2.png"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] transition-transform duration-100 will-change-transform z-20"
        alt="Plug"
      />

      {/* Socket */}
      <img
        ref={socketRef}
        src="https://cdn.prod.website-files.com/67a20b0884bf2e938d266594/67a64eee30a8150a4643f2b0_80a77fea675bc16d830967a28bb1a935_Frame%201410113073.png"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] transition-transform duration-100 will-change-transform z-10"
        alt="Socket"
      />
    </section>
  );
};

export default PlugAndPlay;
