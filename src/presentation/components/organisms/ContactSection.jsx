import React from 'react';
import { Mail, Github, Linkedin, MessageCircle, ArrowUp, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadCVButton from '../atoms/DownloadCVButton';
import { profileData } from '../../../data/profile';

const ContactSection = () => {
    const { t } = useTranslation();
    const p = profileData.personal;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactBars = [
        {
            id: 'whatsapp',
            icon: MessageCircle,
            label: t('contact_section.bars.whatsapp_label'),
            value: p.phone,
            action: t('contact_section.bars.whatsapp_action'),
            href: 'https://wa.me/584142435600',
            external: true
        },
        {
            id: 'email',
            icon: Mail,
            label: t('contact_section.bars.email_label'),
            value: p.email,
            action: t('contact_section.bars.email_action'),
            href: `mailto:${p.email}`,
            external: false
        },
        {
            id: 'linkedin',
            icon: Linkedin,
            label: t('contact_section.bars.linkedin_label'),
            value: 'linkedin.com/in/lpena92',
            action: t('contact_section.bars.linkedin_action'),
            href: p.linkedin,
            external: true
        }
    ];

    return (
        <section id="contact" className="py-14 sm:py-20 bg-[#05050A] relative border-t border-white/[0.05]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="bg-[#0B0B15] rounded-3xl p-6 sm:p-9 border border-white/10">
                    {/* Compact Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-1">
                            // {t('contact_section.badge')}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                            {t('contact_section.title')}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400">
                            {t('contact_section.subtitle')}
                        </p>
                    </div>

                    {/* 3 Horizontal Contact Bars */}
                    <div className="space-y-3 mb-7">
                        {contactBars.map((bar) => (
                            <a
                                key={bar.id}
                                href={bar.href}
                                target={bar.external ? '_blank' : undefined}
                                rel={bar.external ? 'noopener noreferrer' : undefined}
                                className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/50 transition-all"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <bar.icon className="w-4 h-4 text-violet-400 flex-shrink-0" />
                                    <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                                        {bar.label}:
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold text-white font-mono truncate">
                                        {bar.value}
                                    </span>
                                </div>

                                <div className="inline-flex items-center gap-1 text-xs font-mono text-indigo-300 group-hover:text-white flex-shrink-0">
                                    <span>{bar.action}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Bottom Row: Networks + "Mi CV para nuevos empleos" */}
                    <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 flex items-center justify-center transition-all"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href={p.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 flex items-center justify-center transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>

                        <DownloadCVButton
                            variant="primary"
                            label={t('contact_section.cv_button')}
                            className="!w-full sm:!w-auto !px-5 !py-3 !text-xs sm:!text-sm"
                        />
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-white transition-colors cursor-pointer"
                    >
                        <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
                        {t('contact_section.back_top')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
