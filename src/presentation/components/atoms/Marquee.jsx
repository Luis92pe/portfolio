import React from 'react';

const Marquee = ({ children, direction = 'left', speed = 20, className = '' }) => {
    return (
        <div className={`overflow-hidden flex w-full ${className}`}>
            <div className={`flex whitespace-nowrap animate-marquee-${direction}`} style={{ animationDuration: `${speed}s` }}>
                {children}
                {children}
            </div>
        </div>
    );
};

export default Marquee;
