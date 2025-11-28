import React, { createContext, useContext, useState, ReactNode } from "react";
import { Template } from "@/data/templatesData";

interface LunaContextType {
    isOpen: boolean;
    openLuna: () => void;
    closeLuna: () => void;
    toggleLuna: () => void;
    selectedTemplate: Template | null;
    setTemplate: (template: Template | null) => void;
}

const LunaContext = createContext<LunaContextType | undefined>(undefined);

export const LunaProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    const openLuna = () => setIsOpen(true);
    const closeLuna = () => setIsOpen(false);
    const toggleLuna = () => setIsOpen((prev) => !prev);
    const setTemplate = (template: Template | null) => setSelectedTemplate(template);

    return (
        <LunaContext.Provider value={{ isOpen, openLuna, closeLuna, toggleLuna, selectedTemplate, setTemplate }}>
            {children}
        </LunaContext.Provider>
    );
};

export const useLuna = () => {
    const context = useContext(LunaContext);
    if (!context) {
        throw new Error("useLuna must be used within a LunaProvider");
    }
    return context;
};
