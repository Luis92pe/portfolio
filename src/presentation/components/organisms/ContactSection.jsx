import React from 'react';
import { Mail, Github, Linkedin, MessageCircle, Send, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadCVButton from '../atoms/DownloadCVButton';
import { profileData } from '../../../data/profile';

const ContactSection = () => {
    const { t } = useTranslation();
    const p = profileData.personal;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white/70 via-slate-50/80 to-blue-50/40 dark:from-slate-900/80 dark:via-slate-900/90 dark:to-slate-950 transition-colors relative overflow-hidden backdrop-blur-xs">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/90 dark:bg-slate-800/95 rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-slate-200/90 dark:border-slate-700 shadow-xl relative overflow-hidden text-center backdrop-blur-sm">
                    {/* Background glow */}
                    <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                        <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        Punto de Encuentro
                    </span>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-6 tracking-tight">
                        ¿Conversamos sobre tu próximo reto técnico?
                    </h2>

                    <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                        Si tu empresa necesita liderazgo técnico en frontend, arquitecturas limpias preparadas para la escala o alguien que traduzca la visión de producto y diseño en sistemas de misión crítica... conversemos.
                    </p>

                    {/* Contact cards - 2 columns on mobile, 4 on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10">
                        <a
                            href={`mailto:${p.email}`}
                            className="flex flex-col items-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
                        >
                            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Email</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 truncate w-full mt-1">
                                {p.email}
                            </span>
                        </a>

                        <a
                            href={`https://wa.me/584142435600`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-md transition-all group"
                        >
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">WhatsApp</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 truncate w-full mt-1">
                                {p.phone}
                            </span>
                        </a>

                        <a
                            href={p.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all group"
                        >
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">LinkedIn</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 truncate w-full mt-1">
                                /in/luis92pe
                            </span>
                        </a>

                        <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-400 hover:shadow-md transition-all group"
                        >
                            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">GitHub</span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200 truncate w-full mt-1">
                                @luis92pe
                            </span>
                        </a>
                    </div>

                    {/* Resume CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-700">
                        <DownloadCVButton variant="primary" className="!w-full sm:!w-auto !px-6 !py-3 !text-sm sm:!text-base justify-center" />
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer py-2"
                        >
                            <ArrowUp className="w-3.5 h-3.5" />
                            Volver al inicio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
