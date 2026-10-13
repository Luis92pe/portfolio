import React from 'react';
import Navbar from '../../components/organisms/Navbar';
import Hero from '../../components/organisms/Hero';
import ProjectsSection from '../../components/organisms/ProjectsSection';
import BooksSection from '../../components/organisms/BooksSection';
import TimelineSection from '../../components/organisms/TimelineSection';
import SkillsSection from '../../components/organisms/SkillsSection';
import ContactSection from '../../components/organisms/ContactSection';
import StoryBridge from '../../components/atoms/StoryBridge';
import ArchitectureScrollBg from '../../components/atoms/ArchitectureScrollBg';
import FadeIn from '../../components/atoms/FadeIn';
import { Briefcase, BookOpen, GitBranch, MessageSquareQuote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors selection:bg-blue-500 selection:text-white relative">
            {/* Capas interactivas de Clean Architecture y Engranes animados por Scroll */}
            <ArchitectureScrollBg />

            <Navbar />
            <main>
                {/* 1. Hook Conversacional */}
                <FadeIn>
                    <Hero />
                </FadeIn>

                {/* Puente: El Trabajo Primero */}
                <FadeIn>
                    <StoryBridge
                        title={t('story.bridge_1.title')}
                        quote={t('story.bridge_1.quote')}
                        nextSectionId="#projects"
                        icon={Briefcase}
                    />
                </FadeIn>

                {/* 2. El Trabajo Primero (Proyectos en +12 países) */}
                <FadeIn>
                    <ProjectsSection />
                </FadeIn>

                {/* Puente: Criterio & Filosofía */}
                <FadeIn>
                    <StoryBridge
                        title={t('story.bridge_2.title')}
                        quote={t('story.bridge_2.quote')}
                        nextSectionId="#books"
                        icon={BookOpen}
                    />
                </FadeIn>

                {/* 3. La Filosofía (Club de Lectura / Libros Clave) */}
                <FadeIn>
                    <BooksSection />
                </FadeIn>

                {/* Puente: El Camino Recorrido */}
                <FadeIn>
                    <StoryBridge
                        title={t('story.bridge_3.title')}
                        quote={t('story.bridge_3.quote')}
                        nextSectionId="#career"
                        icon={GitBranch}
                    />
                </FadeIn>

                {/* 4. La Trayectoria (Git Log Timeline) */}
                <FadeIn>
                    <TimelineSection />
                </FadeIn>

                {/* 5. Habilidades Técnicas & Quién Soy a Fondo */}
                <FadeIn>
                    <SkillsSection />
                </FadeIn>

                {/* Puente: Punto de Encuentro */}
                <FadeIn>
                    <StoryBridge
                        title={t('story.bridge_4.title')}
                        quote={t('story.bridge_4.quote')}
                        nextSectionId="#contact"
                        icon={MessageSquareQuote}
                    />
                </FadeIn>

                {/* 6. Punto de Encuentro & Contacto Directo */}
                <FadeIn>
                    <ContactSection />
                </FadeIn>
            </main>
        </div>
    );
};

export default HomePage;
