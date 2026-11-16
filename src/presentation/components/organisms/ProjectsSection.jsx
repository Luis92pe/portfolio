import React, { useState } from 'react';
import ProjectCard from '../molecules/ProjectCard';
import { projects } from '../../../data/projects';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Bot, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';

const ProjectsSection = () => {
    const { t } = useTranslation();
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

    const handleSelectProject = (id) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedProjectId(id);
            setIsTransitioning(false);
        }, 140);
    };

    const handleBackToGrid = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedProjectId(null);
            setIsTransitioning(false);
        }, 140);
    };

    return (
        <section id="projects" className="py-16 sm:py-20 bg-transparent relative border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Simple Retro Header */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <div className="mx-auto w-20 h-1.5 retro-rainbow-line rounded-full mb-3" />
                    <div className="border-y border-white/40 py-2 px-4 mb-2">
                        <h2 className="font-mono text-xl sm:text-3xl font-black tracking-[0.22em] text-white uppercase vga-glow">
                            {t('projects_section.title_large')}
                        </h2>
                    </div>
                    <p className="font-mono text-[11px] sm:text-xs tracking-[0.16em] text-indigo-300 uppercase">
                        {t('projects_section.title_small')}
                    </p>
                </div>

                {/* Animated 2x2 Grid OR Clean Split Detail View */}
                <div
                    className={`transition-all duration-250 ${
                        isTransitioning ? 'opacity-0 scale-98 translate-y-2' : 'opacity-100 scale-100 translate-y-0'
                    }`}
                >
                    {!selectedProject ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    {...project}
                                    title={t(`data.projects.${project.id}.title`)}
                                    shortDesc={t(`data.projects.${project.id}.short_desc`)}
                                    role={t(`data.projects.${project.id}.role`)}
                                    onSelect={handleSelectProject}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="animate-detail-enter bg-black/95 rounded-2xl border border-indigo-500/50 overflow-hidden shadow-2xl">
                            {/* Top Bar */}
                            <div className="px-5 sm:px-7 py-3.5 border-b border-white/15 flex flex-wrap items-center justify-between gap-3 font-mono">
                                <button
                                    type="button"
                                    onClick={handleBackToGrid}
                                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold cursor-pointer"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5" />
                                    <span>{t('projects_section.back_to_grid')}</span>
                                </button>

                                <div className="flex items-center gap-1.5">
                                    {projects.map((proj, idx) => (
                                        <button
                                            key={proj.id}
                                            type="button"
                                            onClick={() => handleSelectProject(proj.id)}
                                            className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                                                proj.id === selectedProject.id
                                                    ? 'bg-white text-black'
                                                    : 'text-slate-400 hover:text-white bg-white/[0.05]'
                                            }`}
                                        >
                                            0{idx + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Split Detail Body (Sketch Layout: Left = Descripción + Stack | Right = Features/Rol + IA) */}
                            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5">
                                {/* LEFT: Descripción + Stack ("o o o o") */}
                                <div className="lg:col-span-6 flex flex-col justify-between bg-[#070710] rounded-xl p-5 border border-white/15">
                                    <div>
                                        <span className="text-xs font-mono text-indigo-300 font-bold block mb-1">
                                            {selectedProject.company} • {selectedProject.date}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                                            {t(`data.projects.${selectedProject.id}.title`)}
                                        </h3>

                                        <p className="text-sm sm:text-base text-slate-100 leading-relaxed mb-4">
                                            {t(`data.projects.${selectedProject.id}.description`)}
                                        </p>

                                        {selectedProject.metrics && (
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-400/40 text-white text-xs font-mono font-bold">
                                                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                                                {selectedProject.metrics}
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Left: Stack (o o o o) */}
                                    <div className="pt-5 mt-5 border-t border-white/10">
                                        <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold block mb-2.5">
                                            // STACK
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-indigo-400/50 text-white text-xs font-mono font-bold"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT: Top = Features & Mi Rol | Bottom = Cómo uso la IA */}
                                <div className="lg:col-span-6 flex flex-col gap-4">
                                    <div className="bg-[#070710] rounded-xl p-5 border border-white/15 flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase">
                                                <UserCheck className="w-4 h-4 text-violet-400" />
                                                Features &amp; Mi Rol
                                            </span>
                                            <span className="px-2.5 py-0.5 rounded bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-bold">
                                                {t(`data.projects.${selectedProject.id}.role`)}
                                            </span>
                                        </div>

                                        <ul className="space-y-2.5">
                                            {(t(`data.projects.${selectedProject.id}.features`, { returnObjects: true }) || []).map(
                                                (feat, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-100 leading-relaxed">
                                                        <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div className="rounded-xl p-5 bg-gradient-to-r from-violet-950/70 via-[#0C0C22] to-blue-950/70 border border-indigo-400/50">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Bot className="w-4 h-4 text-violet-300" />
                                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                                                Cómo uso la IA en desarrollo
                                            </h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-white leading-relaxed">
                                            {t(`data.projects.${selectedProject.id}.ai_workflow`)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
