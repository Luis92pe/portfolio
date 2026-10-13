import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadCVButton from '../atoms/DownloadCVButton';
import { profileData } from '../../../data/profile';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative pt-20 pb-12 sm:pt-32 sm:pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-indigo-50/70 via-white/80 to-blue-50/70 dark:from-slate-900/80 dark:via-slate-900/90 dark:to-slate-800/80 min-h-[90vh] flex items-center">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12">
                <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 z-10 w-full">
                    <div className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium animate-fade-in-up">
                        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-blue-500"></span>
                        </span>
                        {t('hero.available')}
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                        <p className="text-base sm:text-xl font-bold text-blue-600 dark:text-blue-400 font-mono tracking-tight">
                            {t('hero.greeting')}
                        </p>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                            {t('hero.building')} <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                {t('hero.experiences')}
                            </span> {t('hero.digital')}
                        </h1>
                    </div>

                    <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200/50 dark:shadow-none hover:shadow-blue-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                        >
                            <span>{t('hero.work')}</span>
                            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                        >
                            {t('hero.talk')}
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
                        <a
                            href={profileData.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-2.5 sm:p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:shadow-md transition-all duration-300"
                        >
                            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a
                            href={profileData.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-2.5 sm:p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>

                        {/* Auto-generated PDF download button */}
                        <div className="pl-1 sm:pl-2 border-l border-slate-200 dark:border-slate-700">
                            <DownloadCVButton variant="secondary" className="!text-xs sm:!text-sm" />
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-30 -z-10 animate-pulse delay-700"></div>
            </div>
        </section>
    );
};

export default Hero;
