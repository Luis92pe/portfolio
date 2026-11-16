import React from 'react';
import { ArrowDown, MessageSquareQuote } from 'lucide-react';

const StoryBridge = ({ title, quote, nextSectionId, icon: Icon = MessageSquareQuote }) => {
    return (
        <div className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-7 sm:h-9 w-0.5 bg-gradient-to-b from-violet-500/0 via-indigo-500/50 to-blue-500 rounded-full mb-3" />

                <div className="w-full bg-[#0B0B16]/90 border border-white/10 hover:border-indigo-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg transition-all duration-300 relative backdrop-blur-md group">
                    <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-indigo-500/30 text-indigo-200 text-xs font-mono font-bold tracking-wide">
                            <Icon className="w-3.5 h-3.5 text-violet-400" />
                            <span>{title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                            // Luis Peña
                        </span>
                    </div>

                    <blockquote className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed italic border-l-2 border-indigo-500 pl-3.5 my-2">
                        &ldquo;{quote}&rdquo;
                    </blockquote>

                    {nextSectionId && (
                        <div className="flex justify-end pt-2">
                            <a
                                href={nextSectionId}
                                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-300 hover:text-white transition-colors group-hover:translate-y-0.5"
                            >
                                <span>Continuar</span>
                                <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
                            </a>
                        </div>
                    )}
                </div>

                <div className="h-7 sm:h-9 w-0.5 bg-gradient-to-b from-blue-500 to-violet-500/0 rounded-full mt-3" />
            </div>
        </div>
    );
};

export default StoryBridge;
