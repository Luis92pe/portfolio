import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadCVButton from '../atoms/DownloadCVButton';
import { profileData } from '../../../data/profile';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const typingLines = t('hero.typing_lines', { returnObjects: true }) || [
        'Tech Lead Frontend con 11+ años de experiencia.',
        'Sistemas críticos de alto rendimiento sin caídas.'
    ];
    const kpis = t('hero.kpis', { returnObjects: true }) || [];

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
        const typingSpeed = isDeleting ? 24 : 44;

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
            className="relative pt-14 pb-16 sm:pb-24 min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-transparent"
        >
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full z-10 text-center">
                {/* 1. VERTICAL RETRO RAINBOW BARS DESCENDING FROM TOP */}
                <div className="mx-auto w-28 sm:w-36 h-16 sm:h-24 retro-rainbow-bars shadow-[0_0_35px_rgba(139,92,246,0.45)]" />

                {/* 2. RETRO ARCADE EMBLEM ("LUIS PEÑA // FRONTEND ARCHITECTURE SYSTEM") */}
                <div className="relative inline-block -mt-2 mb-6">
                    <div className="px-7 sm:px-12 py-3 sm:py-4 rounded-2xl bg-[#07070F] border-2 border-rose-500/90 shadow-[0_0_35px_rgba(244,63,94,0.35),inset_0_0_18px_rgba(139,92,246,0.3)] transform -skew-x-6">
                        <h1 className="block text-3xl sm:text-6xl md:text-7xl font-black italic tracking-wider text-white vga-glow">
                            {t('hero.brand_badge')}
                        </h1>
                        <span className="block text-[10px] sm:text-xs font-mono font-bold tracking-[0.28em] text-indigo-300 uppercase mt-1">
                            {t('hero.brand_sub')}
                        </span>
                    </div>
                </div>

                {/* 3. TRACKED SUBTITLE WITH HORIZONTAL RULES */}
                <div className="max-w-lg mx-auto mb-7">
                    <div className="border-y border-white/40 py-2 px-4">
                        <span className="font-mono text-base sm:text-xl font-bold tracking-[0.28em] text-white uppercase">
                            {t('hero.model_tag')}
                        </span>
                    </div>
                    <p className="font-mono text-[11px] sm:text-xs tracking-[0.22em] text-slate-300 uppercase mt-2.5">
                        {t('hero.tagline')}
                    </p>
                </div>

                {/* 4. LIVE CODE TYPEWRITER PROMPT */}
                <div className="max-w-2xl mx-auto bg-black/90 border border-indigo-500/40 rounded-xl px-5 py-4 sm:px-7 sm:py-5 mb-6 font-mono text-left shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                    <div className="text-base sm:text-2xl md:text-[26px] font-bold text-white min-h-[2.5rem] flex items-center">
                        <span className="text-violet-400 mr-3 font-black">&gt;</span>
                        <span>{displayedText}</span>
                        <span
                            className="inline-block w-2.5 h-6 sm:h-7 ml-1.5 bg-gradient-to-b from-violet-400 to-blue-500 animate-cursor-blink"
                            aria-hidden="true"
                        />
                    </div>
                </div>

                {/* 5. 4-KPI STRIP */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-9">
                    {kpis.map((kpi, idx) => (
                        <div
                            key={idx}
                            className="bg-black/90 border border-white/15 hover:border-indigo-500/50 transition-colors rounded-xl py-3.5 px-3 text-center"
                        >
                            <span className="text-2xl sm:text-3xl font-black font-mono text-white block vga-glow">
                                {kpi.value}
                            </span>
                            <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-widest mt-1 block">
                                {kpi.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 6. 5 CIRCULAR SOCIALS ("o o o o o") + 2 GRADIENT CTAS */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 max-w-2xl mx-auto">
                    <div className="flex items-center gap-3">
                        <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            className="w-11 h-11 rounded-full bg-black/90 hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-white border border-white/20 hover:border-white flex items-center justify-center transition-all"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={p.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                            className="w-11 h-11 rounded-full bg-black/90 hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-white border border-white/20 hover:border-white flex items-center justify-center transition-all"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://wa.me/584142435600"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                            className="w-11 h-11 rounded-full bg-black/90 hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-white border border-white/20 hover:border-white flex items-center justify-center transition-all"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
                        <a
                            href={`mailto:${p.email}`}
                            aria-label="Email"
                            title={p.email}
                            className="w-11 h-11 rounded-full bg-black/90 hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-white border border-white/20 hover:border-white flex items-center justify-center transition-all"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                        <DownloadCVButton variant="circle" className="!w-11 !h-11 !bg-black/90 !border-white/20" />
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-white/20"
                        >
                            <span>{t('hero.work')}</span>
                            <ArrowDown className="w-4 h-4" />
                        </a>
                        <a
                            href="#mentorship"
                            className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-black/90 hover:bg-indigo-950/60 text-white border border-indigo-500/50 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                        >
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span>{t('hero.talk')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
