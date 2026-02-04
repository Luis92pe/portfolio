import React from 'react';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen flex items-center">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left space-y-8 z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium animate-fade-in-up">
                        <span className="relative flex h-3 w-3 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        {t('hero.available')}
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        {t('hero.building')} <br className="hidden lg:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {t('hero.experiences')}
                        </span> {t('hero.digital')}
                    </h1>

                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                        <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            {t('hero.talk')} <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                            {t('hero.work')}
                        </a>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                        <a href="#" className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-md transition-all duration-300">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md transition-all duration-300">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
                            <Download className="w-5 h-5" /> {t('hero.download_cv')}
                        </a>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse delay-700"></div>
            </div>
        </section>
    );
};

export default Hero;
