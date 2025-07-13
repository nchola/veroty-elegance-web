
/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`relative inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                animationDuration: animationDuration,
            }}
        >
            <span className="relative z-10">{text}</span>
            {!disabled && (
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 animate-shine-sweep"
                    style={{
                        width: '30%',
                        animationDuration: animationDuration,
                        animationDelay: '0.5s'
                    }}
                />
            )}
        </div>
    );
};

export default ShinyText;
