import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadCVButton from '../atoms/DownloadCVButton';
import { profileData } from '../../../data/profile';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const typingLines = t('hero.typing_lines', { returnObjects: true }) || [
        'Tech Lead Frontend (11+ años de exp.)',
        'React • Vue • React Native • Electron'
    ];
    const quickStats = t('hero.quick_stats', { returnObjects: true }) || [];

    const [lineIndex, setLineIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setLineIndex(0);
        setDisplayedText('');
        setIsDeleting(false);
    }, [i18n.language]);

    useEffect(() => {
        const currentFullLine = typingLines[lineIndex % typingLines.length] || '';
        const typingSpeed = isDeleting ? 25 : 48;

        const timer = setTimeout(() => {
            if (!isDeleting && displayedText.length < currentFullLine.length) {
                setDisplayedText(currentFullLine.slice(0, displayedText.length + 1));
            } else if (!isDeleting && displayedText.length === currentFullLine.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText.length > 0) {
                setDisplayedText(currentFullLine.slice(0, displayedText.length - 1));
            } else if (isDeleting && displayedText.length === 0) {
                setIsDeleting(false);
                setLineIndex((prev) => (prev + 1) % typingLines.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, lineIndex, typingLines]);

    const p = profileData.personal;

    return (
        <section
            id="home"
            className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#05050A]"
        >
            {/* Subtle bluish-purple ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[280px] bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-blue-600/20 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full z-10 text-center">
                {/* Compact Recruiter Availability Badge */}
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-mono mb-6">
                    <span className="w-2 h-2 rounded-full bg-violet-400 mr-2 animate-pulse" />
                    {t('hero.available')}
                </div>

                {/* Minimalist Code Editor Typewriter Box */}
                <div className="max-w-3xl mx-auto rounded-2xl bg-[#0A0A14]/90 border border-white/10 shadow-[0_0_50px_-15px_rgba(99,102,241,0.28)] overflow-hidden text-left mb-8">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                            <span className="ml-2 text-[11px] font-mono text-slate-400">
                                {p.fullName} — {t('hero.editor_file')}
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-indigo-400">TS</span>
                    </div>

                    <div className="p-5 sm:p-8 font-mono">
                        <p className="text-xs text-indigo-400 mb-2">
                            // {t('hero.role_label')}
                        </p>

                        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug min-h-[3.2rem] sm:min-h-[3.8rem] flex items-center">
                            <span className="text-violet-400 mr-2">&gt;</span>
                            <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                                {displayedText}
                            </span>
                            <span
                                className="inline-block w-2.5 sm:w-3 h-6 sm:h-8 ml-1.5 bg-gradient-to-b from-violet-400 to-blue-500 animate-cursor-blink rounded-xs"
                                aria-hidden="true"
                            />
                        </h1>

                        <p className="text-slate-300 font-sans text-xs sm:text-sm mt-3 mb-5 max-w-2xl">
                            {t('hero.description')}
                        </p>

                        {/* 4 Instant Recruiter Highlights */}
                        <div className="flex flex-wrap gap-2">
                            {quickStats.map((stat, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-indigo-200 text-xs font-mono font-medium"
                                >
                                    {stat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5 Circular Social & CV Buttons ("o o o o o") */}
                <div className="flex items-center justify-center gap-3.5 sm:gap-4 mb-8">
                    <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 hover:border-indigo-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <Github className="w-5 h-5" />
                    </a>

                    <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 hover:border-indigo-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>

                    <a
                        href="https://wa.me/584142435600"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 hover:border-indigo-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <MessageCircle className="w-5 h-5" />
                    </a>

                    <a
                        href={`mailto:${p.email}`}
                        aria-label="Email"
                        title={p.email}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 hover:border-indigo-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <Mail className="w-5 h-5" />
                    </a>

                    <DownloadCVButton variant="circle" className="!w-11 !h-11 sm:!w-12 sm:!h-12" />
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                        href="#projects"
                        className="w-full sm:flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/25 border border-white/15 flex items-center justify-center gap-2 text-sm"
                    >
                        <span>{t('hero.work')}</span>
                        <ArrowDown className="w-4 h-4" />
                    </a>

                    <a
                        href="#mentorship"
                        className="w-full sm:flex-1 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 font-semibold transition-all flex items-center justify-center gap-2 text-sm"
                    >
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span>{t('hero.talk')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
