"use client";

import { useSeasonalEffects } from './SeasonalEffectsContext';

const snowflakes = ['❅', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❆', '❄'];

export default function SeasonalEffects() {
    const { isEnabled, currentSeason } = useSeasonalEffects();

    // Only show snow effect in winter and if enabled
    if (!isEnabled || currentSeason !== 'winter') {
        return null;
    }

    return (
        <div className="snowflakes" aria-hidden="true">
            {snowflakes.map((flake, index) => (
                <div key={index} className="snowflake">
                    {flake}
                </div>
            ))}
        </div>
    );
}
