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
        <section id="projects" className="py-14 sm:py-20 bg-[#05050A] relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Clean Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-2">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-1">
                            // {t('projects_section.title_small')}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {t('projects_section.title_large')}
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                        {t('projects_section.description')}
                    </p>
                </div>

                {/* Animated Container: 2x2 Grid OR Detail View */}
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
                        /* Animated Detail View matching Sketch Screen 3 */
                        <div className="animate-detail-enter bg-[#0B0B15] rounded-2xl sm:rounded-3xl border border-indigo-500/40 overflow-hidden shadow-2xl">
                            {/* Compact Top Navigation Bar */}
                            <div className="px-5 sm:px-7 py-3.5 bg-white/[0.02] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                                <button
                                    type="button"
                                    onClick={handleBackToGrid}
                                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-semibold cursor-pointer"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5" />
                                    <span>{t('projects_section.back_to_grid')}</span>
                                </button>

                                <div className="flex items-center gap-1.5 overflow-x-auto">
                                    {projects.map((proj, idx) => (
                                        <button
                                            key={proj.id}
                                            type="button"
                                            onClick={() => handleSelectProject(proj.id)}
                                            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                                                proj.id === selectedProject.id
                                                    ? 'bg-white text-slate-950 font-bold'
                                                    : 'text-slate-400 hover:text-white bg-white/[0.04]'
                                            }`}
                                        >
                                            0{idx + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Split Detail Body */}
                            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                                {/* LEFT: Descripción + Stack ("o o o o") */}
                                <div className="lg:col-span-6 flex flex-col justify-between bg-white/[0.02] rounded-2xl p-5 border border-white/[0.07]">
                                    <div>
                                        <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                                            {selectedProject.company} • {selectedProject.date}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                                            {t(`data.projects.${selectedProject.id}.title`)}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                                            {t(`data.projects.${selectedProject.id}.description`)}
                                        </p>

                                        {selectedProject.metrics && (
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-xs font-mono">
                                                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                                                {selectedProject.metrics}
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Left: Stack (o o o o) */}
                                    <div className="pt-5 mt-5 border-t border-white/10">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                                            {t('projects_section.stack_label')}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121224] border border-indigo-500/30 text-white text-xs font-mono"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT: Top = Features & Mi Rol | Bottom = Cómo uso la IA */}
                                <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
                                    {/* Top Box: Features & Rol */}
                                    <div className="bg-white/[0.02] rounded-2xl p-5 border border-white/10 flex-1">
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white uppercase">
                                                <UserCheck className="w-4 h-4 text-violet-400" />
                                                {t('projects_section.features_role_label')}
                                            </span>
                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                                                {t(`data.projects.${selectedProject.id}.role`)}
                                            </span>
                                        </div>

                                        <ul className="space-y-2">
                                            {(t(`data.projects.${selectedProject.id}.features`, { returnObjects: true }) || []).map(
                                                (feat, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    {/* Bottom Box: Cómo uso la IA en desarrollo */}
                                    <div className="rounded-2xl p-5 bg-gradient-to-r from-violet-950/50 via-[#101025] to-blue-950/50 border border-indigo-500/40">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Bot className="w-4 h-4 text-violet-400" />
                                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                                                {t('projects_section.ai_usage_label')}
                                            </h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
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
