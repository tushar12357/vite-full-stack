import React, { useEffect, useRef, useState } from "react";

// === GLOBAL CONSTANTS ===
const PHASE_1_PLUG_STICK = 0.28;
const PHASE_2_SOCKET_START = 0.40;
const PHASE_2_SOCKET_END = 0.60;
const PHASE_3_CONNECT = 0.62;
const PHASE_4_RISE_START = 0.85;

const PLUG_STICK_TOP = 15;       // px from viewport top where plug sticks
const PLUG_INITIAL_OFFSET = 200; // plug starting offset
const OVERLAP_FACTOR = 0.15;     // overlap fraction between socket & plug
const AFTER_CONNECT_RISE = 380;

const PlugAndPlay = () => {
  const sectionRef = useRef(null);
  const plugRef = useRef(null);
  const socketRef = useRef(null);
  const rafRef = useRef(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let lastProgress = 0;
    let ticking = false;
    const lastSocketTopRef = { current: undefined };
    const forwardModeRef = { current: true };

    const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const computeProgress = (rect, winH) => {
      if (rect.top > winH) return 0;
      const start = winH;
      const end = -(rect.height * 0.6);
      const total = start - end || 1;
      const current = start - rect.top;
      return clamp(current / total, 0, 1);
    };

    const update = () => {
      const section = sectionRef.current;
      const plug = plugRef.current;
      const socket = socketRef.current;
      if (!section || !plug || !socket) return;

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = computeProgress(rect, winH);

      // Detect scroll direction
      if (progress + 0.002 < lastProgress) forwardModeRef.current = false;
      else if (progress > lastProgress + 0.002) forwardModeRef.current = true;
      lastProgress = progress;

      // === PLUG ===
      if (progress < PHASE_1_PLUG_STICK) {
        const p = progress / PHASE_1_PLUG_STICK;
        const plugY = (1 - p) * PLUG_INITIAL_OFFSET;
        plug.style.position = "absolute";
        plug.style.top = "0px";
        plug.style.left = "50%";
        plug.style.transform = `translate(-50%, ${plugY}px)`;
        plug.style.zIndex = "20";
      } else {
        if (plug.style.position !== "fixed") {
          const bounds = plug.getBoundingClientRect();
          plug.style.width = `${bounds.width}px`;
          plug.style.position = "fixed";
          plug.style.left = "50%";
          plug.style.top = `${PLUG_STICK_TOP}px`;
          plug.style.transform = "translateX(-50%)";
          plug.style.zIndex = "20";
        } else {
          plug.style.top = `${PLUG_STICK_TOP}px`;
        }
      }

      // measure plug and socket heights
      const plugRect = plug.getBoundingClientRect();
      const socketRect = socket.getBoundingClientRect();
      const plugHeight = plugRect.height || 0;
      const socketHeight = socketRect.height || 0;

      const socketTargetTop = PLUG_STICK_TOP + plugHeight - socketHeight * OVERLAP_FACTOR;

      // === SOCKET ===
      let desiredTop;
      if (progress < PHASE_2_SOCKET_START) {
        desiredTop = winH + 300;
        socket.style.position = "absolute";
        socket.style.left = "50%";
        socket.style.transform = "translate(-50%, 0)";
        socket.style.zIndex = "30";
      } else if (progress < PHASE_2_SOCKET_END) {
        const t = clamp((progress - PHASE_2_SOCKET_START) / (PHASE_2_SOCKET_END - PHASE_2_SOCKET_START));
        const eased = easeOutCubic(t);
        const startTop = winH + 220;
        desiredTop = startTop + (socketTargetTop - startTop) * eased;
        socket.style.position = "fixed";
        socket.style.left = "50%";
        socket.style.transform = "translateX(-50%)";
        socket.style.zIndex = "60";
      } else {
        desiredTop = socketTargetTop;
        socket.style.position = "fixed";
        socket.style.left = "50%";
        socket.style.transform = "translateX(-50%)";
        socket.style.zIndex = "60";
      }

      // Prevent downward flicker
      const prev = lastSocketTopRef.current;
      if (prev === undefined) lastSocketTopRef.current = desiredTop;
      else {
        if (forwardModeRef.current) lastSocketTopRef.current = Math.min(prev, desiredTop);
        else lastSocketTopRef.current = desiredTop;
      }
      socket.style.top = `${lastSocketTopRef.current}px`;

      // === CONNECTED ===
      const nowConnected = progress >= PHASE_3_CONNECT;
      if (nowConnected !== connected) setConnected(nowConnected);

      // === RISE ===
      if (progress > PHASE_4_RISE_START) {
        const riseT = clamp((progress - PHASE_4_RISE_START) / (1 - PHASE_4_RISE_START));
        const rise = easeOutCubic(riseT) * AFTER_CONNECT_RISE;
        plug.style.top = `${PLUG_STICK_TOP - rise}px`;
        socket.style.top = `${(lastSocketTopRef.current ?? socketTargetTop) - rise}px`;
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [connected]);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[300vh] flex items-start justify-center transition-colors duration-350 ${
        connected ? "bg-white" : "bg-black"
      }`}
      style={{ overflow: "visible" }}
    >
      <div className="relative w-full max-w-4xl mx-auto px-4 py-10 text-center pointer-events-none">
        <p className={`text-lg lg:text-xl mb-12 ${connected ? "text-gray-800" : "text-gray-400"}`}>
          {connected ? "⚡ Connected!" : "Scroll to connect..."}
        </p>

        <div className="relative h-[1000px] w-full">
          <img
            ref={plugRef}
            src="https://cdn.prod.website-files.com/67a20b0884bf2e938d266594/67a64eeec6882200c1b61f5a_b73f720d176049e2ccb20287b0a6c477_2.png"
            alt="Plug"
            className="absolute left-1/2 -translate-x-1/2 will-change-transform"
            style={{ width: 96, top: 0, zIndex: 20 }}
          />

          <img
            ref={socketRef}
            src="https://cdn.prod.website-files.com/67a20b0884bf2e938d266594/67a64eee30a8150a4643f2b0_80a77fea675bc16d830967a28bb1a935_Frame%201410113073.png"
            alt="Socket"
            className="absolute left-1/2 -translate-x-1/2 will-change-transform"
            style={{ width: 96, top: "1000px", zIndex: 60 }}
          />

          {connected && (
            <div
              style={{
                pointerEvents: "none",
                position: "fixed",
                left: "50%",
                top: `calc(${PLUG_STICK_TOP}px + 20px)`,
                transform: "translateX(-50%)",
                zIndex: 55,
              }}
            >
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlugAndPlay;
