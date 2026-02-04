import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, date, link }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white text-sm font-medium flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {date}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <a
                    href={link}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                    Ver Proyecto
                    <ExternalLink className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
