import React, { useEffect, useRef } from "react";
import { useLuna } from "@/contexts/LunaContext";

export default function LunaWidget() {
  const { isOpen,closeLuna } = useLuna();
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    // When global isOpen turns true → open the widget programmatically
    if (isOpen) {
      // UV widget exposes an .open() method
      widgetRef.current.open?.();
    }
  }, [isOpen]);

   useEffect(() => {
    const handler = () => closeLuna;
    window.addEventListener("widget-closed", handler);
    return () => window.removeEventListener("widget-closed", handler);
  }, []);

  return (
    <react-widget-uv
      ref={widgetRef}
      agent_id="1d892f78-5ff9-4fc7-a8bf-5ba16af344ad"
      schema="c923987c-cd5f-4297-8dd7-791aad4f7511"
      type="autostart"
    ></react-widget-uv>
  );
}
