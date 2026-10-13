import React from 'react';
import { Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, date, link, isNDA, role, company }) => {
    return (
        <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent opacity-95 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-4">
                    <span className="text-white text-[11px] sm:text-xs font-medium flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" /> {date}
                    </span>
                    {isNDA && (
                        <span className="text-amber-300 text-[10px] sm:text-xs font-semibold flex items-center gap-1 bg-amber-950/80 border border-amber-800/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Enterprise NDA
                        </span>
                    )}
                </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
                {company && (
                    <span className="text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                        {company} {role && `• ${role}`}
                    </span>
                )}

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 text-xs sm:text-sm leading-relaxed flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] sm:text-xs font-semibold bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 rounded-md border border-blue-100 dark:border-slate-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    {isNDA ? (
                        <span className="text-[11px] sm:text-xs font-medium text-slate-400 dark:text-slate-500 italic">
                            Sistema en producción confidencial
                        </span>
                    ) : (
                        <a
                            href={link}
                            className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group/link py-1"
                        >
                            Ver Detalles
                            <ExternalLink className="w-3.5 h-3.5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
