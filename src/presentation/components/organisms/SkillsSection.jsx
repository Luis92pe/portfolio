import React from 'react';
import { Award } from 'lucide-react';
import profileImage from '../../assets/profile-placeholder.png';
import { useTranslation, Trans } from 'react-i18next';
import Marquee from '../atoms/Marquee';

const SkillsSection = () => {
    const { t } = useTranslation();

    const skills = [
        { name: 'React', category: 'Frontend', level: 'Experto' },
        { name: 'Vue.js (2 & 3)', category: 'Frontend', level: 'Experto' },
        { name: 'React Native (Honeywell PDA)', category: 'Mobile', level: 'Avanzado' },
        { name: 'Electron', category: 'Desktop', level: 'Avanzado' },
        { name: 'Clean Architecture', category: 'Architecture', level: 'Experto' },
        { name: 'Atomic Design & FSD', category: 'Architecture', level: 'Avanzado' },
        { name: 'WebSockets & QueBeu', category: 'Hardware/Realtime', level: 'Avanzado' },
        { name: 'Figma (UX/UI)', category: 'Design', level: 'Avanzado' },
        { name: 'Tailwind CSS', category: 'Frontend', level: 'Experto' },
        { name: 'TypeScript', category: 'Frontend', level: 'Avanzado' }
    ];

    const certificates = t('skills_section.certificates', { returnObjects: true });

    return (
        <section id="skills" className="py-16 sm:py-24 bg-white/70 dark:bg-slate-900/70 overflow-hidden transition-colors backdrop-blur-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-14 sm:mb-20">

                    {/* Profile Image Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative mx-auto w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/40 rounded-full transform -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4"></div>
                            <img
                                src={profileImage}
                                alt="Luis Miguel Peña Bastardo"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
                            />
                            <div className="absolute bottom-0 right-0 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 sm:gap-3 animate-bounce-slow">
                                <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/60 rounded-full text-blue-600 dark:text-blue-400">
                                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">{t('skills_section.certified')}</p>
                                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">UX/UI - Acámica (2019)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-xs sm:text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
                            {t('skills_section.about_me')}
                        </h2>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6">
                            {t('skills_section.title_part1')} <span className="text-blue-600 dark:text-blue-400">{t('skills_section.title_part2')}</span>
                        </h3>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                            <Trans i18nKey="skills_section.bio1" components={{ 1: <strong className="text-slate-900 dark:text-white font-semibold" /> }} />
                        </p>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                            <Trans i18nKey="skills_section.bio2" components={{ 1: <strong className="text-slate-900 dark:text-white font-semibold" />, 3: <strong className="text-slate-900 dark:text-white font-semibold" /> }} />
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">
                                    {t('skills_section.tech_skills')}
                                </h4>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificates Marquee */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 sm:pt-12">
                    <Marquee speed={40}>
                        {certificates.map((cert, index) => (
                            <div key={index} className="mx-4 sm:mx-8 flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                                <span className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-base whitespace-nowrap">{cert}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
