import React from 'react';
import { Clock, CheckCircle2, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MentorshipSection = () => {
    const { t } = useTranslation();
    const packs = t('mentorship_section.packs', { returnObjects: true }) || [];

    return (
        <section id="mentorship" className="py-14 sm:py-20 bg-[#05050A] relative border-t border-white/[0.05]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Compact Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-2">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-1">
                            // {t('mentorship_section.badge')}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {t('mentorship_section.title')}
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                        {t('mentorship_section.subtitle')}
                    </p>
                </div>

                {/* 3 Clean Packs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
                    {packs.map((pack, idx) => {
                        const isFeatured = idx === 1;
                        const waUrl = `https://wa.me/584142435600?text=${encodeURIComponent(pack.whatsappMsg)}`;

                        return (
                            <div
                                key={pack.id || idx}
                                className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 ${
                                    isFeatured
                                        ? 'bg-gradient-to-b from-[#131129] to-[#0B0B15] border border-indigo-500/70 shadow-[0_0_40px_-15px_rgba(124,58,237,0.4)]'
                                        : 'bg-[#0B0B15] border border-white/10 hover:border-indigo-500/40'
                                }`}
                            >
                                <div>
                                    {/* Top Row: Tag & Hours Pill */}
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <span className="text-xs font-mono text-indigo-400 font-semibold">
                                            {pack.target}
                                        </span>

                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white text-xs font-mono font-bold">
                                            <Clock className="w-3 h-3 text-violet-400" />
                                            {pack.hours}
                                        </span>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                                        {pack.name}
                                    </h3>

                                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                        {pack.description}
                                    </p>

                                    <ul className="space-y-2 border-t border-white/10 pt-4 mb-6">
                                        {(pack.features || []).map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Single Direct CTA */}
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                                        isFeatured
                                            ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-md shadow-indigo-600/25'
                                            : 'bg-white/[0.06] hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-600 text-white border border-white/10'
                                    }`}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{pack.ctaText}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
