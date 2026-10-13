import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { ResumeDocument } from './ResumeDocument';
import { profileData } from '../../../data/profile';
import { careerHistory } from '../../../data/career';
import { projects } from '../../../data/projects';

const DownloadCVButton = ({ className = '', variant = 'primary' }) => {
    const { t, i18n } = useTranslation();
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async (e) => {
        e.preventDefault();
        if (isGenerating) return;

        try {
            setIsGenerating(true);
            const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

            // Generate blob dynamically using @react-pdf/renderer
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

    const baseStyles = variant === 'primary'
        ? "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-75 cursor-pointer text-sm"
        : "flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer text-sm disabled:opacity-75";

    return (
        <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`${baseStyles} ${className}`}
            title={t('hero.download_cv')}
        >
            {isGenerating ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                    <span>{t('hero.generating_cv')}</span>
                </>
            ) : (
                <>
                    <Download className="w-4 h-4" />
                    <span>{t('hero.download_cv')}</span>
                </>
            )}
        </button>
    );
};

export default DownloadCVButton;
