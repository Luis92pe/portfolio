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
    metrics,
    onSelect
}) => {
    const { t } = useTranslation();

    return (
        <button
            type="button"
            onClick={() => onSelect(id)}
            className="group w-full text-left bg-[#0B0B15] hover:bg-[#101020] rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-indigo-500/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer"
        >
            <div>
                {/* Top Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-indigo-400 font-semibold">
                        {role} • {company}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                        {date}
                    </span>
                </div>

                {/* Title + Arrow */}
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                        {title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 text-slate-300 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Concise 1-2 line description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {shortDesc}
                </p>
            </div>

            <div>
                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[11px] font-mono text-indigo-200 bg-white/[0.04] rounded-md border border-white/[0.08]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer Metric + CTA */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 truncate pr-2">
                        {metrics}
                    </span>
                    <span className="font-bold text-indigo-400 group-hover:text-white whitespace-nowrap">
                        {t('projects_section.tap_hint')}
                    </span>
                </div>
            </div>
        </button>
    );
};

export default ProjectCard;
