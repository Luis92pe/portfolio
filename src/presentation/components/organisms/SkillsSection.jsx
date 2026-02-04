import React from 'react';
import { Award, Code, Layout, Terminal } from 'lucide-react';
import profileImage from '../../assets/profile-placeholder.png';
import { useTranslation, Trans } from 'react-i18next';

import Marquee from '../atoms/Marquee';

const SkillsSection = () => {
    const { t } = useTranslation();

    const skills = [
        { name: 'React', category: 'Frontend', level: 'Experto' },
        { name: 'React Native', category: 'Mobile', level: 'Avanzado' },
        { name: 'Vue.js', category: 'Frontend', level: 'Avanzado' },
        { name: 'Electron', category: 'Desktop', level: 'Intermedio' },
        { name: 'Figma', category: 'Design', level: 'Avanzado' },
        { name: 'Tailwind CSS', category: 'Frontend', level: 'Experto' },
    ];

    const certificates = t('skills_section.certificates', { returnObjects: true });

    return (
        <section id="skills" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

                    {/* Profile Image Column */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-blue-100 rounded-full transform -translate-x-4 translate-y-4"></div>
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                            />
                            <div className="absolute bottom-0 right-0 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase">{t('skills_section.certified')}</p>
                                    <p className="text-sm font-bold text-slate-900">UX/UI Design (2019)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-sm font-bold tracking-wide text-blue-600 uppercase mb-2">{t('skills_section.about_me')}</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                            {t('skills_section.title_part1')} <span className="text-blue-600">{t('skills_section.title_part2')}</span>
                        </h3>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            <Trans i18nKey="skills_section.bio1" components={{ 1: <strong className="text-slate-900" /> }} />
                        </p>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            <Trans i18nKey="skills_section.bio2" components={{ 1: <strong className="text-slate-900" />, 3: <strong className="text-slate-900" /> }} />
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{t('skills_section.tech_skills')}</h4>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-50 text-slate-700 font-medium border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
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
                <div className="border-t border-slate-100 pt-12">
                    <Marquee speed={40}>
                        {certificates.map((cert, index) => (
                            <div key={index} className="mx-8 flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                                <Award className="w-5 h-5 text-blue-500" />
                                <span className="text-slate-600 font-medium text-lg whitespace-nowrap">{cert}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
