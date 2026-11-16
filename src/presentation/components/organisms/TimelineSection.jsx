import React from 'react';
import { Shield, Layers, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const pillarIcons = [Shield, Layers, Cpu];

const compactCareer = [
    { id: 1, period: '2021 - HOY', duration: '5+ AÑOS', company: 'THEEGG / Mailamericas' },
    { id: 2, period: '2019 - 2020', duration: '2 AÑOS', company: 'Wapidelo (Panamá)' },
    { id: 3, period: '2018 - 2019', duration: '2 AÑOS', company: 'Bera / Corporativo' },
    { id: 4, period: '2013 - 2018', duration: '5 AÑOS', company: 'Inicios & Ing. Informática' }
];

const TimelineSection = () => {
    const { t } = useTranslation();
    const pillars = t('timeline_section.pillars', { returnObjects: true }) || [];
    const stackCategories = t('timeline_section.stack_categories', { returnObjects: true }) || [];

    return (
        <section id="career" className="py-16 sm:py-20 bg-transparent relative border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Retro Tracked Header */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <div className="mx-auto w-20 h-1.5 retro-rainbow-line rounded-full mb-3" />
                    <div className="border-y border-white/40 py-2 px-4 mb-2">
                        <h2 className="font-mono text-xl sm:text-3xl font-black tracking-[0.22em] text-white uppercase vga-glow">
                            {t('timeline_section.subtitle')}
                        </h2>
                    </div>
                    <p className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-indigo-300 uppercase">
                        {t('timeline_section.career_heading')}
                    </p>
                </div>

                {/* 1. 3 High-Impact Value Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
                    {pillars.map((pillar, idx) => {
                        const IconComp = pillarIcons[idx % pillarIcons.length];
                        return (
                            <div
                                key={idx}
                                className="bg-black/90 border border-white/15 hover:border-indigo-500/60 transition-colors rounded-xl p-5 sm:p-6"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2.5 py-1 rounded bg-gradient-to-r from-violet-600 to-blue-600 text-white font-mono text-xs font-black">
                                        {pillar.metric}
                                    </span>
                                    <IconComp className="w-5 h-5 text-indigo-300" />
                                </div>
                                <h3 className="text-lg font-black text-white mb-1.5">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-slate-200 leading-snug">
                                    {pillar.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* 2. Compact 2x2 Career History (2013 - HOY) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {compactCareer.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black/90 border border-white/15 rounded-xl p-5 flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="text-xs font-mono font-bold text-indigo-300">
                                    {item.company}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[11px] font-mono font-bold">
                                    {item.period} • {item.duration}
                                </span>
                            </div>
                            <h4 className="text-base sm:text-lg font-black text-white mb-1">
                                {t(`data.career.${item.id}.title`)}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                {t(`data.career.${item.id}.description`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. Stack Strip (3 Categories) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stackCategories.map((cat, idx) => (
                        <div key={idx} className="bg-black/90 border border-white/15 rounded-xl p-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-indigo-300 font-bold block mb-2.5">
                                // {cat.label}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {(cat.items || []).map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded bg-black border border-indigo-500/40 text-white text-xs font-mono font-semibold"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
