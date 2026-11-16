import React from 'react';
import { Clock, CheckCircle2, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MentorshipSection = () => {
    const { t } = useTranslation();
    const packs = t('mentorship_section.packs', { returnObjects: true }) || [];

    return (
        <section id="mentorship" className="py-16 sm:py-22 bg-transparent relative border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Retro Tracked Header */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <div className="mx-auto w-20 h-1.5 retro-rainbow-line rounded-full mb-3" />
                    <div className="border-y border-white/40 py-2 px-4 mb-2">
                        <h2 className="font-mono text-xl sm:text-3xl font-black tracking-[0.22em] text-white uppercase vga-glow">
                            {t('mentorship_section.title')}
                        </h2>
                    </div>
                    <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] text-indigo-300 uppercase">
                        {t('mentorship_section.subtitle')}
                    </p>
                </div>

                {/* 3 Minimalist Packs */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
                    {packs.map((pack, idx) => {
                        const isFeatured = idx === 1;
                        const waUrl = `https://wa.me/584142435600?text=${encodeURIComponent(pack.whatsappMsg)}`;

                        return (
                            <div
                                key={pack.id || idx}
                                className={`relative rounded-xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden bg-black/90 ${
                                    isFeatured
                                        ? 'border-2 border-rose-500/80 shadow-[0_0_30px_rgba(244,63,94,0.25)]'
                                        : 'border border-white/15 hover:border-indigo-500/50'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-mono text-indigo-300 font-bold uppercase">
                                            {pack.target}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gradient-to-r from-violet-600/40 to-blue-600/40 border border-indigo-400/50 text-white text-xs font-mono font-bold">
                                            <Clock className="w-3.5 h-3.5 text-violet-300" />
                                            {pack.hours}
                                        </span>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-black text-white mb-4">
                                        {pack.name}
                                    </h3>

                                    <ul className="space-y-2 border-t border-white/10 pt-4 mb-6">
                                        {(pack.features || []).map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-100">
                                                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md border border-white/20"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{pack.ctaText}</span>
                                    <ArrowUpRight className="w-4 h-4" />
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
