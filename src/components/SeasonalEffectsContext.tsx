"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SeasonalEffectsContextType {
    isEnabled: boolean;
    toggle: () => void;
    currentSeason: 'winter' | 'spring' | 'summer' | 'fall';
}

const SeasonalEffectsContext = createContext<SeasonalEffectsContextType | undefined>(undefined);

function getCurrentSeason(): 'winter' | 'spring' | 'summer' | 'fall' {
    const month = new Date().getMonth(); // 0-11
    if (month >= 11 || month <= 1) return 'winter';  // Dec, Jan, Feb
    if (month >= 2 && month <= 4) return 'spring';   // Mar, Apr, May
    if (month >= 5 && month <= 7) return 'summer';   // Jun, Jul, Aug
    return 'fall';                                    // Sep, Oct, Nov
}

export function SeasonalEffectsProvider({ children }: { children: ReactNode }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const [mounted, setMounted] = useState(false);
    const currentSeason = getCurrentSeason();

    useEffect(() => {
        setMounted(true);
        // Load preference from localStorage
        const saved = localStorage.getItem('seasonalEffectsEnabled');
        if (saved !== null) {
            setIsEnabled(saved === 'true');
        }
    }, []);

    const toggle = () => {
        setIsEnabled(prev => {
            const newValue = !prev;
            localStorage.setItem('seasonalEffectsEnabled', String(newValue));
            return newValue;
        });
    };

    // Always provide context, but with safe defaults during SSR
    const value = {
        isEnabled: mounted ? isEnabled : false, // Don't show snow during SSR
        toggle,
        currentSeason
    };

    return (
        <SeasonalEffectsContext.Provider value={value}>
            {children}
        </SeasonalEffectsContext.Provider>
    );
}

export function useSeasonalEffects() {
    const context = useContext(SeasonalEffectsContext);
    if (context === undefined) {
        throw new Error('useSeasonalEffects must be used within a SeasonalEffectsProvider');
    }
    return context;
}
