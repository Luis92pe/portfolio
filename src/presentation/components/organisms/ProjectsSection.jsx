import React from 'react';
import ProjectCard from '../molecules/ProjectCard';
import { projects } from '../../../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = React.useState('Todos');

    // Extract unique technologies (categories)
    const categories = ['Todos', ...new Set(projects.flatMap(p => p.technologies))];

    const filteredProjects = activeCategory === 'Todos'
        ? projects
        : projects.filter(project => project.technologies.includes(activeCategory));

    return (
        <section id="projects" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/50 transition-colors backdrop-blur-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                    <h2 className="text-xs sm:text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-2">
                        {t('projects_section.title_small')}
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">
                        {t('projects_section.title_large')}
                    </h3>
                    <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
                        {t('projects_section.description')}
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700'
                                    }`}
                            >
                                {category === 'Todos' ? t('projects_section.all_filter') : category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="animate-fade-in-up">
                            <ProjectCard
                                {...project}
                                title={t(`data.projects.${project.id}.title`)}
                                description={t(`data.projects.${project.id}.description`)}
                            />
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{t('projects_section.empty')}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
