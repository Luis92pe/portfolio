import React from 'react';
import { GitCommit, GitBranch } from 'lucide-react';
import { careerHistory } from '../../../data/career';
import { useTranslation } from 'react-i18next';

const TimelineSection = () => {
    const { t } = useTranslation();

    return (
        <section id="career" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/60 overflow-hidden relative transition-colors backdrop-blur-xs">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-xs sm:text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
                        {t('timeline_section.title')}
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">
                        {t('timeline_section.subtitle')} <span className="font-mono text-blue-600 dark:text-blue-400 text-xl sm:text-2xl">--career</span>
                    </h3>
                    <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300">
                        {t('timeline_section.description')}
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Git Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-500 dark:to-blue-900 transform md:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-8 sm:space-y-12">
                        {careerHistory.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Node/Commit Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white dark:bg-slate-900 border-4 border-blue-600 dark:border-blue-400 rounded-full transform -translate-x-[5px] md:-translate-x-1/2 z-10 shadow-md"></div>

                                    {/* Content Card */}
                                    <div className={`ml-10 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                                        <div className="p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/80 hover:shadow-md transition-all duration-300 relative group">

                                            {/* Decorative Git Icon */}
                                            <div className={`absolute top-5 ${isEven ? '-left-3 md:-left-3' : '-left-3 md:-right-3'} w-6 h-6 bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center border border-blue-100 dark:border-slate-700 z-10`}>
                                                <GitCommit className="w-3.5 h-3.5" />
                                            </div>

                                            <div className="flex justify-between items-start mb-2">
                                                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] sm:text-xs font-bold font-mono border border-blue-100 dark:border-blue-900">
                                                    {item.period}
                                                </span>
                                                {item.type === 'education' && (
                                                    <GitBranch className="w-4 h-4 text-green-500" />
                                                )}
                                            </div>

                                            <h4 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                                                {t(`data.career.${item.id}.title`)}
                                            </h4>
                                            <h5 className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                                                {item.company}
                                            </h5>

                                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                                                {t(`data.career.${item.id}.description`)}
                                            </p>

                                            {item.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2.5 border-t border-slate-50 dark:border-slate-700/60">
                                                    {item.technologies.map(tech => (
                                                        <span key={tech} className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 px-2 py-0.5 bg-slate-100 dark:bg-slate-700/70 rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
