import React from "react";
import { X, Send } from "lucide-react";
import { useLuna } from "@/contexts/LunaContext";

export default function LunaWidget() {

  return (
      <react-widget-uv
          agent_id="1d892f78-5ff9-4fc7-a8bf-5ba16af344ad"
          schema="c923987c-cd5f-4297-8dd7-791aad4f7511"
          type="autostart"
       ></react-widget-uv>
  );
}
