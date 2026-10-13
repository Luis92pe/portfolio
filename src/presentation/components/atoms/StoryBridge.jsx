import React from 'react';
import { ArrowDown, MessageSquareQuote } from 'lucide-react';

const StoryBridge = ({ title, quote, nextSectionId, icon: Icon = MessageSquareQuote }) => {
    return (
        <div className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="flex flex-col items-center">
                <div className="h-8 sm:h-10 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500 rounded-full mb-3" />

                {/* Conversational speech card */}
                <div className="w-full bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 dark:from-slate-800/95 dark:via-slate-800/80 dark:to-slate-900/95 border border-blue-100/90 dark:border-slate-700/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 relative backdrop-blur-md group">
                    <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide">
                            <Icon className="w-3.5 h-3.5" />
                            <span>{title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                            Luis Peña
                        </span>
                    </div>

                    <blockquote className="text-sm sm:text-base lg:text-lg text-slate-800 dark:text-slate-100 font-medium leading-relaxed italic border-l-3 border-blue-600 dark:border-blue-400 pl-3.5 my-2">
                        "{quote}"
                    </blockquote>

                    {nextSectionId && (
                        <div className="flex justify-end pt-2">
                            <a
                                href={nextSectionId}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-y-0.5"
                            >
                                <span>Continuar leyendo</span>
                                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                            </a>
                        </div>
                    )}
                </div>

                <div className="h-8 sm:h-10 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/0 rounded-full mt-3" />
            </div>
        </div>
    );
};

export default StoryBridge;
