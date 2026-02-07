
import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center gap-2.5">
            {/* Yellow circle with stylized K/bird icon */}
            <div className="w-[42px] h-[42px] bg-yellow rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" style={{ marginLeft: '2px' }}>
                    <path d="M4 12L20 4L12 20L10 14L4 12Z" fill="currentColor" />
                    <path d="M10 14L20 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
            </div>
            <span className="font-extrabold text-[22px] text-dark tracking-tight leading-none">Kofluence</span>
        </div>
    );
};

export default Logo;
