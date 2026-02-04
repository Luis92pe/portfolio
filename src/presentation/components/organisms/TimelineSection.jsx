import React from 'react';
import { GitCommit, GitBranch, GitPullRequest, Circle } from 'lucide-react';
import { careerHistory } from '../../../data/career';
import { useTranslation } from 'react-i18next';

const TimelineSection = () => {
    const { t } = useTranslation();

    return (
        <section id="career" className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-wide text-blue-600 uppercase mb-2">{t('timeline_section.title')}</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        {t('timeline_section.subtitle')} <span className="font-mono text-blue-600 text-2xl">--career</span>
                    </h3>
                    <p className="text-lg text-slate-600">
                        {t('timeline_section.description')}
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Git Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform md:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12">
                        {careerHistory.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Node/Commit Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform -translate-x-2 md:-translate-x-1/2 z-10 shadow-md"></div>

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                                        <div className={`p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative group`}>

                                            {/* Decorative Git Icon */}
                                            <div className={`absolute top-6 ${isEven ? '-left-3 md:-left-3' : '-left-3 md:-right-3'} w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border border-blue-100 z-10`}>
                                                <GitCommit className="w-4 h-4" />
                                            </div>

                                            <div className="flex justify-between items-start mb-2">
                                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-100">
                                                    {item.period}
                                                </span>
                                                {item.type === 'education' && (
                                                    <GitBranch className="w-5 h-5 text-green-500" />
                                                )}
                                            </div>

                                            <h4 className="text-xl font-bold text-slate-900 mb-1">{t(`data.career.${item.id}.title`)}</h4>
                                            <h5 className="text-md font-semibold text-blue-600 mb-3">{item.company}</h5>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {t(`data.career.${item.id}.description`)}
                                            </p>

                                            {item.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-50">
                                                    {item.technologies.map(tech => (
                                                        <span key={tech} className="text-xs font-medium text-slate-500 px-2 py-1 bg-slate-100 rounded">
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
