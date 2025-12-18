import React, { useEffect, useRef, useState } from "react";

// === GLOBAL CONSTANTS ===
const PHASE_1_PLUG_STICK = 0.37;
const PHASE_2_SOCKET_START = 0.40;
const PHASE_2_SOCKET_END = 0.9;
const PHASE_3_CONNECT = 0.78;
const PHASE_4_RISE_START = 0.9;

const PLUG_STICK_TOP = 12;       // px from viewport top where plug sticks
const PLUG_INITIAL_OFFSET = 200; // plug starting offset
const OVERLAP_FACTOR = 0.12;     // overlap fraction between socket & plug
const AFTER_CONNECT_RISE = 700;
const NAVBAR_HEIGHT = 80;        // px - navigation bar height to prevent socket from going above

const PlugAndPlay = () => {
  const sectionRef = useRef(null);
  const plugRef = useRef(null);
  const socketRef = useRef(null);
  const rafRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [showTitle, setShowTitle] = useState(false);


  useEffect(() => {
    let lastProgress = 0;
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
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
      setShowTitle(progress >= PHASE_1_PLUG_STICK && progress < PHASE_3_CONNECT);
      // Detect scroll direction
      if (progress + 0.002 < lastProgress) forwardModeRef.current = false;
      else if (progress > lastProgress + 0.002) forwardModeRef.current = true;
      lastProgress = progress;

      // === PLUG ===
      let currentPlugTop;
      if (progress < PHASE_1_PLUG_STICK) {
        const p = progress / PHASE_1_PLUG_STICK;
        const plugY = (1 - p) * PLUG_INITIAL_OFFSET;
        currentPlugTop = plugY;
        plug.style.position = "absolute";
        plug.style.top = "0px";
        plug.style.left = "50%";
        plug.style.transform = `translate(-50%, ${plugY}px)`;
        plug.style.zIndex = "10"; // Lower z-index so socket appears on top
      } else {
        currentPlugTop = PLUG_STICK_TOP;
        if (plug.style.position !== "fixed") {
          const bounds = plug.getBoundingClientRect();
          plug.style.width = `${bounds.width}px`;
          plug.style.position = "fixed";
          plug.style.left = "50%";
          plug.style.top = `${PLUG_STICK_TOP}px`;
          plug.style.transform = "translateX(-50%)";
          plug.style.zIndex = "10"; // Lower z-index so socket appears on top
        } else {
          plug.style.top = `${PLUG_STICK_TOP}px`;
        }
      }

      // measure plug and socket heights and positions
      const plugRect = plug.getBoundingClientRect();
      const socketRect = socket.getBoundingClientRect();
      const plugHeight = plugRect.height || 0;
      const socketHeight = socketRect.height || 0;

      // Calculate socket position relative to plug's current position
      const socketTargetTop = currentPlugTop + plugHeight - socketHeight * OVERLAP_FACTOR;

      // === SOCKET ===
      let desiredTop;
      if (progress < PHASE_2_SOCKET_START) {
        desiredTop = winH + 300;
        socket.style.position = "absolute";
        socket.style.left = "50%";
        socket.style.transform = "translate(-50%, 0)";
        socket.style.zIndex = "20"; // Higher than plug (10) so socket appears on top
      } else if (progress < PHASE_2_SOCKET_END) {
        const t = clamp((progress - PHASE_2_SOCKET_START) / (PHASE_2_SOCKET_END - PHASE_2_SOCKET_START));
        const eased = easeOutCubic(t);
        const startTop = winH + 220;
        desiredTop = startTop + (socketTargetTop - startTop) * eased;
        socket.style.position = "fixed";
        socket.style.left = "50%";
        socket.style.transform = "translateX(-50%)";
        socket.style.transition = "top 0.3s ease-out, transform 0.3s ease-out";
        socket.style.zIndex = "20"; // Higher than plug (10) so socket appears on top
      } else {
        desiredTop = socketTargetTop;
        socket.style.position = "fixed";
        socket.style.left = "50%";
        socket.style.transform = "translateX(-50%)";
        socket.style.transition = "top 0.3s ease-out, transform 0.3s ease-out";
        socket.style.zIndex = "20"; // Higher than plug (10) so socket appears on top
      }

      // Prevent downward flicker
      const prev = lastSocketTopRef.current;
      let finalTop;
      if (prev === undefined) {
        finalTop = desiredTop;
      } else {
        if (forwardModeRef.current) {
          finalTop = Math.min(prev, desiredTop);
        } else {
          finalTop = desiredTop;
        }
      }
      // Always sync socket with plug position when connected
      if (progress >= PHASE_2_SOCKET_END) {
        // After connection, socket should always follow plug's position
        // Get plug's actual current position from DOM (after all updates)
        const currentPlugRect = plug.getBoundingClientRect();
        const plugCurrentTop = currentPlugRect.top;
        // Calculate socket position relative to plug's current position
        finalTop = plugCurrentTop + plugHeight - socketHeight * OVERLAP_FACTOR;
        // Socket will move with plug and div - no clamping, always synced
        // Match socket's position type with plug's position type
        socket.style.position = plug.style.position;
      }
      
      // Set z-index: socket should be above plug but behind navigation
      if (finalTop < NAVBAR_HEIGHT + 50) {
        // Near navigation: both plug and socket go behind navigation
        // But socket should still be above plug
        plug.style.zIndex = "5"; // Lower than navigation
        socket.style.zIndex = "6"; // Above plug but still behind navigation
      } else {
        // Normal: socket above plug
        plug.style.zIndex = "10";
        socket.style.zIndex = "20"; // Socket appears on top of plug
      }
      
      // Add smooth transition for socket movement
      socket.style.transition = "top 0.3s ease-out, transform 0.3s ease-out";
      
      lastSocketTopRef.current = finalTop;
      socket.style.top = `${finalTop}px`;
      
      // Hide plug and socket when they scroll out of viewport
      const viewportHeight = winH;
      
      // Check if plug and socket are out of viewport
      const plugBottom = plugRect.bottom;
      const plugTop = plugRect.top;
      const socketBottom = socketRect.bottom;
      const socketTop = socketRect.top;
      
      // Calculate opacity based on viewport position
      let plugOpacity = 1;
      let socketOpacity = 1;
      
      // Fade out when scrolling up and going out of top of viewport
      if (plugBottom < 0) {
        // Plug has scrolled past top - completely hide
        plugOpacity = 0;
      } else if (plugTop < 0 && plugBottom > 0) {
        // Plug is partially out of top - fade out gradually
        const fadeProgress = Math.abs(plugTop) / plugRect.height;
        plugOpacity = Math.max(0, 1 - fadeProgress);
      }
      
      if (socketBottom < 0) {
        // Socket has scrolled past top - completely hide
        socketOpacity = 0;
      } else if (socketTop < 0 && socketBottom > 0) {
        // Socket is partially out of top - fade out gradually
        const fadeProgress = Math.abs(socketTop) / socketRect.height;
        socketOpacity = Math.max(0, 1 - fadeProgress);
      }
      
      // Fade out when scrolling down and going out of bottom of viewport
      if (plugTop > viewportHeight) {
        // Plug is below viewport - completely hide
        plugOpacity = 0;
      } else if (plugTop > viewportHeight * 0.8 && plugBottom > viewportHeight) {
        // Plug is moving out of bottom - fade out gradually
        const fadeProgress = (plugTop - viewportHeight * 0.8) / (viewportHeight * 0.2);
        plugOpacity = Math.max(0, 1 - fadeProgress);
      }
      
      if (socketTop > viewportHeight) {
        // Socket is below viewport - completely hide
        socketOpacity = 0;
      } else if (socketTop > viewportHeight * 0.8 && socketBottom > viewportHeight) {
        // Socket is moving out of bottom - fade out gradually
        const fadeProgress = (socketTop - viewportHeight * 0.8) / (viewportHeight * 0.2);
        socketOpacity = Math.max(0, 1 - fadeProgress);
      }
      
      // Apply opacity with smooth transition
      plug.style.transition = "opacity 0.4s ease-out";
      socket.style.transition = "opacity 0.4s ease-out";
      plug.style.opacity = plugOpacity.toString();
      socket.style.opacity = socketOpacity.toString();
      
      // Disable pointer events when hidden
      if (plugOpacity === 0) {
        plug.style.pointerEvents = "none";
      } else {
        plug.style.pointerEvents = "auto";
      }
      
      if (socketOpacity === 0) {
        socket.style.pointerEvents = "none";
      } else {
        socket.style.pointerEvents = "auto";
      }

      // === CONNECTED ===
      const nowConnected = progress >= PHASE_3_CONNECT;
      if (nowConnected !== connected) setConnected(nowConnected);

      // === RISE ===
      if (progress > PHASE_4_RISE_START) {
        const riseT = clamp((progress - PHASE_4_RISE_START) / (1 - PHASE_4_RISE_START));
        // Use smoother easing for slower, more gradual movement
        const easedRise = easeOutCubic(riseT) * AFTER_CONNECT_RISE;
        const rise = easedRise * 0.8; // Slow down the movement (80% speed)
        
        // Both plug and socket move up together smoothly - synchronized
        const newPlugTop = currentPlugTop - rise;
        plug.style.transition = "top 0.4s ease-out";
        plug.style.top = `${newPlugTop}px`;
        
        // Socket moves up with plug, maintaining relative position to plug
        // Calculate socket position based on new plug position to keep them synced
        const newSocketTop = newPlugTop + plugHeight - socketHeight * OVERLAP_FACTOR;
        socket.style.transition = "top 0.4s ease-out, transform 0.4s ease-out";
        socket.style.top = `${newSocketTop}px`;
        
        // Set z-index: socket should be above plug but behind navigation
        if (newSocketTop < NAVBAR_HEIGHT + 50) {
          // Near navigation: both go behind navigation
          plug.style.zIndex = "5"; // Lower than navigation
          socket.style.zIndex = "6"; // Above plug but still behind navigation
        } else {
          // Normal: socket above plug
          plug.style.zIndex = "10";
          socket.style.zIndex = "20"; // Socket appears on top of plug
        }
        
        // Update stored position
        lastSocketTopRef.current = newSocketTop;
      }
    };

    // Throttle scroll events for better performance
    const onScroll = () => {
      if (scrollTimeout) return; // Skip if already scheduled
      scrollTimeout = setTimeout(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(update);
        scrollTimeout = null;
      }, 8); // ~120fps throttling
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (scrollTimeout) clearTimeout(scrollTimeout);
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
     {showTitle && (
        <div
          className="fixed left-1/2 transform -translate-x-1/2 transition-colors duration-300 pointer-events-none"
          style={{
            top: PLUG_STICK_TOP + 120,
            zIndex: 80,
          }}
        >
          <p
            className={`text-3xl font-bold ${
              connected ? "text-black" : "text-white"
            }`}
          >
            {connected ? "⚡ Connected!" : "Plug and Play"}
          </p>x
        </div>
      )}
        <div className="relative h-[1000px] w-full">
          <img
            ref={plugRef}
            src={"https://res.cloudinary.com/dlk9jjdvo/image/upload/v1762871393/blacklogo_enqkfl.png"
            }
            alt="Plug"
            className="absolute left-1/2 -translate-x-1/2 will-change-transform transition-opacity duration-300"
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
