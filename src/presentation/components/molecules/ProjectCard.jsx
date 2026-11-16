import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({
    id,
    title,
    shortDesc,
    technologies,
    date,
    role,
    company,
    onSelect
}) => {
    const { t } = useTranslation();

    return (
        <button
            type="button"
            onClick={() => onSelect(id)}
            className="group w-full text-left vga-panel rounded-xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer relative overflow-hidden"
        >
            {/* Top Thin Retro Rainbow Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 retro-rainbow-line opacity-75 group-hover:opacity-100 transition-opacity" />

            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-indigo-300 font-bold">
                        [0{id}] {role} • {company}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                        {date}
                    </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-violet-300 transition-colors mb-2">
                    {title}
                </h3>

                <p className="text-slate-200 text-sm leading-snug mb-4">
                    {shortDesc}
                </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                    {technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-mono text-white bg-black rounded border border-indigo-500/40"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-1.5 rounded whitespace-nowrap shadow-sm">
                    <span>{t('projects_section.tap_hint')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
            </div>
        </button>
    );
};

export default ProjectCard;
