import React, { useState } from 'react';
import { Download, Loader2, FileText } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { ResumeDocument } from './ResumeDocument';
import { profileData } from '../../../data/profile';
import { careerHistory } from '../../../data/career';
import { projects } from '../../../data/projects';

const DownloadCVButton = ({ className = '', variant = 'primary', label }) => {
    const { t, i18n } = useTranslation();
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async (e) => {
        e.preventDefault();
        if (isGenerating) return;

        try {
            setIsGenerating(true);
            const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

            const doc = (
                <ResumeDocument
                    lang={currentLang}
                    profile={profileData}
                    career={careerHistory}
                    projects={projects}
                />
            );

            const blob = await pdf(doc).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `CV_Luis_Pena_${currentLang.toUpperCase()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating PDF resume:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const variantStyles = {
        primary:
            'flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 border border-white/15 transition-all duration-300 disabled:opacity-75 cursor-pointer text-sm',
        secondary:
            'flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-indigo-400/50 font-medium transition-all duration-300 cursor-pointer text-sm disabled:opacity-75',
        circle:
            'w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.04] hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 text-slate-200 hover:text-white border border-white/15 hover:border-indigo-400/60 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 cursor-pointer disabled:opacity-75'
    };

    const buttonLabel = label || t('hero.download_cv');

    if (variant === 'circle') {
        return (
            <button
                onClick={handleDownload}
                disabled={isGenerating}
                className={`${variantStyles.circle} ${className}`}
                title={buttonLabel}
                aria-label={buttonLabel}
            >
                {isGenerating ? (
                    <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
                ) : (
                    <FileText className="w-5 h-5" />
                )}
            </button>
        );
    }

    return (
        <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`${variantStyles[variant] || variantStyles.primary} ${className}`}
            title={buttonLabel}
        >
            {isGenerating ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>{t('hero.generating_cv')}</span>
                </>
            ) : (
                <>
                    <Download className="w-4 h-4" />
                    <span>{buttonLabel}</span>
                </>
            )}
        </button>
    );
};

export default DownloadCVButton;
