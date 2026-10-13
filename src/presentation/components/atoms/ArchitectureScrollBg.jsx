import React, { useEffect, useState } from 'react';

const ArchitectureScrollBg = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate smooth rotations & parallax offsets
    const gear1Rotation = (scrollY * 0.12) % 360;
    const gear2Rotation = -(scrollY * 0.12) % 360;
    const archLayerScale = 1 + Math.sin(scrollY * 0.0015) * 0.04;
    const ringRotate = (scrollY * 0.05) % 360;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors" aria-hidden="true">
            {/* Subtle Blueprint Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* TOP-RIGHT: Clean Architecture Concentric Onion Layers */}
            <div
                className="absolute -top-16 -right-16 sm:top-12 sm:right-6 w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] opacity-25 dark:opacity-20 transition-transform duration-300 ease-out"
                style={{
                    transform: `translateY(${scrollY * 0.04}px) rotate(${ringRotate}deg) scale(${archLayerScale})`
                }}
            >
                <svg viewBox="0 0 400 400" className="w-full h-full fill-none stroke-current text-blue-600 dark:text-blue-400">
                    {/* Outer Ring: Frameworks & UI */}
                    <circle cx="200" cy="200" r="185" strokeWidth="1.5" strokeDasharray="6 6" />
                    <text x="200" y="24" textAnchor="middle" className="text-[9px] font-mono fill-blue-600 dark:fill-blue-400 tracking-widest font-bold">
                        FRAMEWORKS • HARDWARE • QUEBEU
                    </text>

                    {/* Ring 2: Controllers & Presenters */}
                    <circle cx="200" cy="200" r="140" strokeWidth="2" strokeDasharray="4 4" className="text-indigo-500 dark:text-indigo-400" />
                    <text x="200" y="69" textAnchor="middle" className="text-[8px] font-mono fill-indigo-600 dark:fill-indigo-400 tracking-wider">
                        CONTROLLERS • PRESENTERS • ADAPTERS
                    </text>

                    {/* Ring 3: Use Cases */}
                    <circle cx="200" cy="200" r="95" strokeWidth="2.5" className="text-blue-500 dark:text-cyan-400" />
                    <text x="200" y="114" textAnchor="middle" className="text-[8px] font-mono fill-blue-700 dark:fill-cyan-300 font-bold">
                        USE CASES • APPLICATION
                    </text>

                    {/* Core: Domain & Entities */}
                    <circle cx="200" cy="200" r="50" fill="currentColor" fillOpacity="0.08" strokeWidth="3" className="text-blue-600 dark:text-blue-400" />
                    <text x="200" y="196" textAnchor="middle" className="text-[10px] font-mono font-extrabold fill-blue-700 dark:fill-blue-300">
                        DOMAIN
                    </text>
                    <text x="200" y="210" textAnchor="middle" className="text-[8px] font-mono fill-blue-600 dark:fill-blue-400">
                        ENTITIES
                    </text>

                    {/* Orbital Crosshairs */}
                    <line x1="200" y1="5" x2="200" y2="395" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                    <line x1="5" y1="200" x2="395" y2="200" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                </svg>
            </div>

            {/* BOTTOM-LEFT: Industrial Gears (Engranes de Logística y Hardware) */}
            <div
                className="absolute -bottom-12 -left-12 sm:bottom-20 sm:left-4 w-56 h-56 sm:w-72 sm:h-72 opacity-20 dark:opacity-15 transition-transform duration-300 ease-out"
                style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
            >
                {/* Big Gear */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-36 h-36 sm:w-48 sm:h-48 text-indigo-600 dark:text-indigo-400 fill-current"
                    style={{ transform: `rotate(${gear1Rotation}deg)` }}
                >
                    <path d="M50 35c-8.28 0-15 6.72-15 15s6.72 15 15 15 15-6.72 15-15-6.72-15-15-15zm0 24c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
                    <path d="M93.5 45.5l-6.8-1.2c-.6-2.1-1.4-4.1-2.5-6l4-5.6c1-1.4.8-3.3-.4-4.5l-6.5-6.5c-1.2-1.2-3.1-1.4-4.5-.4l-5.6 4c-1.9-1.1-3.9-1.9-6-2.5l-1.2-6.8c-.3-1.7-1.8-2.9-3.5-2.9h-9.2c-1.7 0-3.2 1.2-3.5 2.9l-1.2 6.8c-2.1.6-4.1 1.4-6 2.5l-5.6-4c-1.4-1-3.3-.8-4.5.4l-6.5 6.5c-1.2 1.2-1.4 3.1-.4 4.5l4 5.6c-1.1 1.9-1.9 3.9-2.5 6l-6.8 1.2c-1.7.3-2.9 1.8-2.9 3.5v9.2c0 1.7 1.2 3.2 2.9 3.5l6.8 1.2c.6 2.1 1.4 4.1 2.5 6l-4 5.6c-1 1.4-.8 3.3.4 4.5l6.5 6.5c1.2 1.2 3.1 1.4 4.5.4l5.6-4c1.9 1.1 3.9 1.9 6 2.5l1.2 6.8c.3 1.7 1.8 2.9 3.5 2.9h9.2c1.7 0 3.2-1.2 3.5-2.9l1.2-6.8c2.1-.6 4.1-1.4 6-2.5l5.6 4c1.4 1 3.3.8 4.5-.4l6.5-6.5c1.2-1.2 1.4-3.1.4-4.5l-4-5.6c1.1-1.9 1.9-3.9 2.5-6l6.8-1.2c1.7-.3 2.9-1.8 2.9-3.5v-9.2c0-1.7-1.2-3.2-2.9-3.5z" opacity="0.6" />
                </svg>

                {/* Small Interlocking Gear */}
                <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 sm:w-32 sm:h-32 text-blue-500 dark:text-cyan-400 fill-current absolute -top-8 left-24 sm:left-32"
                    style={{ transform: `rotate(${gear2Rotation}deg)` }}
                >
                    <path d="M50 38c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    <path d="M92 46l-5.5-1c-.5-1.7-1.2-3.4-2.1-4.9l3.3-4.5c.8-1.1.7-2.6-.3-3.6l-5.3-5.3c-1-1-2.5-1.1-3.6-.3l-4.5 3.3c-1.5-.9-3.2-1.6-4.9-2.1L68 22c-.3-1.4-1.5-2.3-2.9-2.3h-7.5c-1.4 0-2.6.9-2.9 2.3l-1 5.5c-1.7.5-3.4 1.2-4.9 2.1l-4.5-3.3c-1.1-.8-2.6-.7-3.6.3l-5.3 5.3c-1 1-1.1 2.5-.3 3.6l3.3 4.5c-.9 1.5-1.6 3.2-2.1 4.9L31 46c-1.4.3-2.3 1.5-2.3 2.9v7.5c0 1.4.9 2.6 2.3 2.9l5.5 1c.5 1.7 1.2 3.4 2.1 4.9l-3.3 4.5c-.8 1.1-.7 2.6.3 3.6l5.3 5.3c1 1 2.5 1.1 3.6.3l4.5-3.3c1.5.9 3.2 1.6 4.9 2.1l1 5.5c.3 1.4 1.5 2.3 2.9 2.3h7.5c1.4 0 2.6-.9 2.9-2.3l1-5.5c1.7-.5 3.4-1.2 4.9-2.1l4.5 3.3c1.1.8 2.6.7 3.6-.3l5.3-5.3c1-1 1.1-2.5.3-3.6l-3.3-4.5c.9-1.5 1.6-3.2 2.1-4.9l5.5-1c1.4-.3 2.3-1.5 2.3-2.9v-7.5c0-1.4-.9-2.6-2.3-2.9z" opacity="0.5" />
                </svg>
            </div>

            {/* FLOATING CODE SNIPPETS & SCHEMATICS */}
            <div
                className="hidden md:block absolute top-1/3 left-8 font-mono text-[11px] text-blue-600/30 dark:text-blue-400/20 leading-relaxed transition-transform duration-500 ease-out"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
                <p>const domain = isolate(businessLogic);</p>
                <p className="pl-3">useCase.execute({'{'} payload {'}'});</p>
                <p className="pl-6 text-indigo-500/30 dark:text-indigo-400/20">{'// 0 regressions in production'}</p>
            </div>

            <div
                className="hidden lg:block absolute top-2/3 right-12 font-mono text-[11px] text-cyan-600/30 dark:text-cyan-400/20 leading-relaxed transition-transform duration-500 ease-out"
                style={{ transform: `translateY(${-scrollY * 0.06}px)` }}
            >
                <p>hardware.connect({'{'} type: 'Honeywell_PDA' {'}'});</p>
                <p className="pl-3">thermalPrinter.queueLabel(sacks[3000]);</p>
                <p className="pl-6 text-emerald-500/30 dark:text-emerald-400/20">{'// WebSocket: SYNC_COMPLETED'}</p>
            </div>
        </div>
    );
};

export default ArchitectureScrollBg;
