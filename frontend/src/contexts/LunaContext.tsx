import React, { createContext, useContext, useState, ReactNode } from "react";

interface LunaContextType {
    isOpen: boolean;
    openLuna: () => void;
    closeLuna: () => void;
    toggleLuna: () => void;
}

const LunaContext = createContext<LunaContextType | undefined>(undefined);

export const LunaProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openLuna = () => setIsOpen(true);
    const closeLuna = () => setIsOpen(false);
    const toggleLuna = () => setIsOpen((prev) => !prev);

    return (
        <LunaContext.Provider value={{ isOpen, openLuna, closeLuna, toggleLuna }}>
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
