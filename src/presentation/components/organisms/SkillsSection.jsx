import React from 'react';
import { Award, Code } from 'lucide-react';
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

    const certificates = t('skills_section.certificates', { returnObjects: true }) || [];

    return (
        <section id="skills" className="py-16 sm:py-24 bg-[#06060D] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-14 sm:mb-20">
                    {/* Profile Image Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative mx-auto w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-blue-600/30 rounded-full blur-2xl"></div>
                            <img
                                src={profileImage}
                                alt="Luis Miguel Peña Bastardo"
                                className="relative w-full h-full object-cover rounded-full border-2 border-indigo-500/50 shadow-[0_0_50px_-10px_rgba(99,102,241,0.4)]"
                            />
                            <div className="absolute bottom-0 right-0 bg-[#0B0B16] p-3 sm:p-4 rounded-2xl shadow-xl border border-indigo-500/40 flex items-center gap-2.5">
                                <div className="p-2 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-white">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-indigo-300 font-mono uppercase">{t('skills_section.certified')}</p>
                                    <p className="text-xs sm:text-sm font-bold text-white">UX/UI - Acámica (2019)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
                            <Code className="w-3.5 h-3.5 text-violet-400" />
                            {t('skills_section.about_me')}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                            {t('skills_section.title_part1')}{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                                {t('skills_section.title_part2')}
                            </span>
                        </h3>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                            <Trans i18nKey="skills_section.bio1" components={{ 1: <strong className="text-white font-semibold" /> }} />
                        </p>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                            <Trans i18nKey="skills_section.bio2" components={{ 1: <strong className="text-white font-semibold" />, 3: <strong className="text-white font-semibold" /> }} />
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h4 className="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider mb-3 sm:mb-4">
                                    {t('skills_section.tech_skills')}
                                </h4>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.04] text-white text-xs sm:text-sm font-mono font-medium border border-white/10 hover:border-indigo-400/60 transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificates Marquee */}
                <div className="border-t border-white/10 pt-8 sm:pt-12">
                    <Marquee speed={40}>
                        {certificates.map((cert, index) => (
                            <div key={index} className="mx-4 sm:mx-8 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                                <span className="text-slate-200 font-mono text-xs sm:text-sm whitespace-nowrap">{cert}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
