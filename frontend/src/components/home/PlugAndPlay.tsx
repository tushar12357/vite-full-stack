import React, { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven Plug & Socket sequence:
 * - Phase A: plug rises and becomes fixed (stuck to top)
 * - Phase B: socket rises to meet the plug
 * - Phase C: connected -> bg turns white; further scroll moves both up together
 *
 * Usage: place this section in your page, then scroll through it.
 */
const PlugAndPlay = () => {
  const sectionRef = useRef(null);
  const plugRef = useRef(null);
  const socketRef = useRef(null);
  const rafRef = useRef(null);

  // Minimal React state — only connection status which affects rendering
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Tuning constants (change to taste)
    const PLUG_STICK_PROGRESS = 0.55;    // progress when plug becomes fixed at top
    const SOCKET_START_PROGRESS = 2.85;  // when socket starts moving up
    const CONNECT_PROGRESS = 3;       // when they connect
    const PLUG_STICK_TOP = 10;           // px from top when plug sticks (fixed top)
    const PLUG_INITIAL_OFFSET = 400;     // initial plug offset downward (px)
    const SOCKET_MOVE_DISTANCE = 360;    // how far socket travels upward to meet plug (px)
    const AFTER_CONNECT_RISE = 800;      // how much the connected pair rise when you keep scrolling (px)

    let lastProgress = -1;
    let ticking = false;

    const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));

    const computeProgress = (rect, winH) => {
      // Normalized 0..1: 0 when the section's top is below the viewport bottom (not yet visible)
      // 1 when we've scrolled well past the section. This gives a wide usable range.
      const start = winH;                // when bottom of viewport hits section top -> progress 0 -> start moving
      const end = -(rect.height * 0.6);  // when we've scrolled past a bit -> progress 1
      const total = start - end;
      const current = start - rect.top;
      return clamp(current / total, 0, 1);
    };

    const updateTransforms = () => {
      const section = sectionRef.current;
      const plug = plugRef.current;
      const socket = socketRef.current;
      if (!section || !plug || !socket) return;

      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = computeProgress(rect, winH);

      // Avoid tiny updates
      if (Math.abs(progress - lastProgress) < 0.001) return;
      lastProgress = progress;

      // PHASE A: Plug rises from initial offset to stick position
      // plugProgress 0..1 maps the movement before sticking
      const plugProgress = clamp(progress / PLUG_STICK_PROGRESS, 0, 1);
      // Plug translateY (positive down). We want it to move up, so negative translate.
      const plugY = (1 - plugProgress) * PLUG_INITIAL_OFFSET; // from +PLUG_INITIAL_OFFSET -> 0

      // When we cross PLUG_STICK_PROGRESS, switch the plug to fixed at the top of viewport.
      if (progress >= PLUG_STICK_PROGRESS) {
        // Fix to viewport top: apply fixed positioning via style changes
        if (plug.style.position !== "fixed") {
          // compute current screen center X so snapping to fixed won't jump abruptly
          const bounds = plug.getBoundingClientRect();
          // set width to current width to avoid layout shift
          plug.style.width = `${bounds.width}px`;
          plug.style.position = "fixed";
          plug.style.left = `50%`; // keep centered
          plug.style.top = `${PLUG_STICK_TOP}px`;
          plug.style.transform = `translateX(-50%)`; // keep centered horizontally
          plug.style.zIndex = 9999;
        } else {
          // If already fixed we may want to allow small final nudge if connecting
          plug.style.top = `${PLUG_STICK_TOP}px`;
          plug.style.transform = `translateX(-50%)`;
        }
      } else {
        // unplug fixed state: put it back into the flow inside the section
        if (plug.style.position === "fixed") {
          // reset styles to match absolute inside container
          plug.style.position = "absolute";
          plug.style.top = `0px`;
          plug.style.left = `50%`;
          plug.style.transform = `translate(-50%, ${plugY}px)`;
          plug.style.width = ""; // clear fixed width
          plug.style.zIndex = 30;
        } else {
          // still inside section, translate it upward
          plug.style.position = "absolute";
          plug.style.top = `0px`;
          plug.style.left = `50%`;
          plug.style.transform = `translate(-50%, ${plugY}px)`;
          plug.style.zIndex = 30;
        }
      }

      // PHASE B: Socket moves up when progress passes SOCKET_START_PROGRESS, until CONNECT_PROGRESS
      let socketY = 0;
      if (progress <= SOCKET_START_PROGRESS) {
        // socket at bottom of container
        socket.style.position = "absolute";
        socket.style.bottom = "0px";
        socket.style.left = "50%";
        socket.style.transform = `translate(-50%, 0px)`;
        socket.style.zIndex = 20;
      } else if (progress > SOCKET_START_PROGRESS && progress < CONNECT_PROGRESS) {
        // socket moves up toward plug
        const denom = CONNECT_PROGRESS - SOCKET_START_PROGRESS;
        const socketProg = clamp((progress - SOCKET_START_PROGRESS) / denom, 0, 1);
        socketY = socketProg * SOCKET_MOVE_DISTANCE; // 0 -> SOCKET_MOVE_DISTANCE px
        // while moving, keep it fixed relative to viewport for smooth meet-up
        socket.style.position = "fixed";
        // compute a top value so it moves from bottom toward plug: start from (viewportBottom - socketHeight - offset)
        // simpler: set top = window.innerHeight - (socket height + socketY) to push it up visually
        const socketBounds = socket.getBoundingClientRect();
        const startTop = winH - socketBounds.height - 16; // start slightly above bottom
        const desiredTop = startTop - socketY;
        socket.style.top = `${desiredTop}px`;
        socket.style.left = "50%";
        socket.style.transform = "translateX(-50%)";
        socket.style.zIndex = 9000;
      } else {
        // progress >= CONNECT_PROGRESS -> they are connected
        // ensure socket is fixed and placed at the plug's fixed position
        // plug is at PLUG_STICK_TOP (fixed) — place socket slightly below plug (visual overlap depends on image sizes)
        socket.style.position = "fixed";
        // small offset to visually align plug+socket — tune if images differ
        const connectionOffset = 40; // px below plug where socket should be when connected
        socket.style.top = `${PLUG_STICK_TOP + connectionOffset}px`;
        socket.style.left = "50%";
        socket.style.transform = "translateX(-50%)";
        socket.style.zIndex = 8999;
      }

      // PHASE C: on connect change background and allow pair to rise together
      const nowConnected = progress >= CONNECT_PROGRESS;
      if (nowConnected !== connected) {
        setConnected(nowConnected);
      }

      // AFTER CONNECT: both rise together as the progress goes from CONNECT_PROGRESS -> 1
      if (progress > CONNECT_PROGRESS) {
        const afterProg = clamp((progress - CONNECT_PROGRESS) / (1 - CONNECT_PROGRESS), 0, 1);
        const rise = afterProg * AFTER_CONNECT_RISE; // how much they rise off the top
        // Move plug and socket upward by adjusting their 'top' when fixed.
        if (plug.style.position === "fixed") {
          // top reduces as we rise (move upward)
          const newTop = PLUG_STICK_TOP - rise;
          plug.style.top = `${newTop}px`;
        }
        if (socket.style.position === "fixed") {
          const connectionOffset = 40;
          socket.style.top = `${PLUG_STICK_TOP + connectionOffset - rise}px`;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          updateTransforms();
          ticking = false;
        });
      }
    };

    // Initial run
    updateTransforms();

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
      className={`relative min-h-[260vh] overflow-hidden flex items-start justify-center transition-colors duration-500 ${
        connected ? "bg-white" : "bg-gradient-to-b from-black via-purple-950/20 to-black"
      }`}
    >
      {/* subtle decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-4xl mx-auto px-4 py-8 text-center pointer-events-none">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${connected ? "text-black" : "text-white"}`}>
          Plug & Play Solution
        </h2>
        <p className={`text-lg lg:text-xl mb-12 ${connected ? "text-gray-800" : "text-gray-400"}`}>
          {connected ? "⚡ Connected!" : "Scroll to connect..."}
        </p>

        <div className="relative h-[520px] w-full">
          {/* Plug - initially absolutely positioned at top of the container */}
          <img
            ref={plugRef}
            src="https://cdn.prod.website-files.com/67a20b0884bf2e938d266594/67a64eeec6882200c1b61f5a_b73f720d176049e2ccb20287b0a6c477_2.png"
            alt="Plug"
            className="absolute left-1/2 -translate-x-1/2 w-[80px] lg:w-[100px] will-change-transform z-20"
            style={{
              // initial position is inside the section; JS will override transforms/position
              top: 0,
            }}
          />

          {/* Socket - initially at bottom */}
          <img
            ref={socketRef}
            src="https://cdn.prod.website-files.com/67a20b0884bf2e938d266594/67a64eee30a8150a4643f2b0_80a77fea675bc16d830967a28bb1a935_Frame%201410113073.png"
            alt="Socket"
            className="absolute left-1/2 -translate-x-1/2 w-[80px] lg:w-[100px] will-change-transform z-10"
            style={{
              bottom: 0,
            }}
          />

          {/* connection glow */}
          {connected && (
            <div
              style={{
                pointerEvents: "none",
                position: "fixed",
                left: "50%",
                top: 100, // placed roughly behind the connected pair; final top will be overridden when they rise
                transform: "translateX(-50%)",
                zIndex: 8000,
              }}
            >
              <div className="w-40 h-40 bg-purple-400 rounded-full blur-2xl opacity-60 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlugAndPlay;
