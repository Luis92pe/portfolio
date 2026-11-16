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
        <section id="contact" className="py-16 sm:py-22 bg-transparent relative border-t border-white/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Retro Tracked Header */}
                <div className="text-center max-w-xl mx-auto mb-8">
                    <div className="mx-auto w-20 h-1.5 retro-rainbow-line rounded-full mb-3" />
                    <div className="border-y border-white/40 py-2 px-4 mb-2">
                        <h2 className="font-mono text-xl sm:text-3xl font-black tracking-[0.25em] text-white uppercase vga-glow">
                            {t('contact_section.title')}
                        </h2>
                    </div>
                    <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] text-indigo-300 uppercase">
                        {t('contact_section.subtitle')}
                    </p>
                </div>

                <div className="bg-black/90 border border-white/15 rounded-2xl p-6 sm:p-8">
                    {/* 3 Horizontal Contact Bars */}
                    <div className="space-y-3.5 mb-8">
                        {contactBars.map((bar) => (
                            <a
                                key={bar.id}
                                href={bar.href}
                                target={bar.external ? '_blank' : undefined}
                                rel={bar.external ? 'noopener noreferrer' : undefined}
                                className="group flex items-center justify-between gap-3 px-4 sm:px-5 py-4 rounded-xl bg-black hover:bg-indigo-950/40 border border-white/15 hover:border-indigo-400 transition-all"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <bar.icon className="w-5 h-5 text-violet-400 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-mono text-indigo-300 font-bold hidden sm:inline">
                                        {bar.label}:
                                    </span>
                                    <span className="text-sm sm:text-base font-bold text-white font-mono truncate">
                                        {bar.value}
                                    </span>
                                </div>

                                <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-1.5 rounded flex-shrink-0">
                                    <span>{bar.action}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Bottom Row: Networks + "Mi CV para nuevos empleos" */}
                    <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-11 h-11 rounded-full bg-black hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-white border border-white/20 hover:border-white flex items-center justify-center transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={p.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 rounded-full bg-black hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-white border border-white/20 hover:border-white flex items-center justify-center transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <DownloadCVButton
                            variant="primary"
                            label={t('contact_section.cv_button')}
                            className="!w-full sm:!w-auto !px-6 !py-3.5 !text-sm font-mono font-bold !rounded-xl"
                        />
                    </div>
                </div>

                <div className="mt-7 text-center">
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <ArrowUp className="w-4 h-4 text-violet-400" />
                        {t('contact_section.back_top')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
