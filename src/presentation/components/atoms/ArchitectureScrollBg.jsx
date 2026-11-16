import React from 'react';

const ArchitectureScrollBg = () => {
    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#000000] crt-starfield"
            aria-hidden="true"
        >
            <div className="absolute inset-0 vga-scanlines opacity-30" />
        </div>
    );
};

export default ArchitectureScrollBg;
