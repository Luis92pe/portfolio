import React from 'react';
import { useTranslation } from 'react-i18next';

const compactCareer = [
    {
        id: 1,
        period: '2021 - Presente',
        company: 'THEEGG / Mailamericas',
        tags: ['React', 'Vue', 'React Native', 'Electron', 'Clean Architecture']
    },
    {
        id: 2,
        period: '2019 - 2020',
        company: 'Wapidelo (Panamá)',
        tags: ['Vue.js', 'Vuex', 'REST APIs', 'E-Commerce']
    },
    {
        id: 3,
        period: '2018 - 2019',
        company: 'Bera / Soluciones Corporativas',
        tags: ['Python / Django', 'AngularJS', 'Java', 'Real-Time Print']
    },
    {
        id: 4,
        period: '2013 - 2018',
        company: 'Inicios & Ingeniería en Informática',
        tags: ['Angular', 'Laravel', 'PHP', 'Ing. Informática (IUT)']
    }
];

const TimelineSection = () => {
    const { t } = useTranslation();
    const stackCategories = t('timeline_section.stack_categories', { returnObjects: true }) || [];

    return (
        <section id="career" className="py-14 sm:py-20 bg-[#05050A] relative border-t border-white/[0.05]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="mb-8 sm:mb-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-1">
                        // {t('timeline_section.title')}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {t('timeline_section.subtitle')}
                    </h2>
                </div>

                {/* 1. Scannable Stack Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {stackCategories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0B0B15] rounded-2xl p-5 border border-white/10"
                        >
                            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {(cat.items || []).map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-xs font-mono"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. Compact Career List (Scannable in 5 seconds) */}
                <div className="space-y-3">
                    {compactCareer.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#0B0B15]/80 hover:bg-[#0F0F1E] rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-indigo-500/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6"
                        >
                            <div className="md:w-48 flex-shrink-0">
                                <span className="text-xs font-mono text-indigo-400 font-bold block">
                                    {item.period}
                                </span>
                                <span className="text-xs font-mono text-slate-400">
                                    {item.company}
                                </span>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                                    {t(`data.career.${item.id}.title`)}
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {t(`data.career.${item.id}.description`)}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 md:w-56 md:justify-end flex-shrink-0">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-indigo-200 border border-white/[0.08]"
                                    >
                                        {tag}
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
