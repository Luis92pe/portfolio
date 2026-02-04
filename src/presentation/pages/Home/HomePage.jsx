import React from 'react';
import Navbar from '../../components/organisms/Navbar';
import Hero from '../../components/organisms/Hero';
import ProjectsSection from '../../components/organisms/ProjectsSection';
import SkillsSection from '../../components/organisms/SkillsSection';
import TimelineSection from '../../components/organisms/TimelineSection';
import FadeIn from '../../components/atoms/FadeIn';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <FadeIn>
                    <Hero />
                </FadeIn>
                <FadeIn>
                    <SkillsSection />
                </FadeIn>
                <FadeIn>
                    <TimelineSection />
                </FadeIn>
                <FadeIn>
                    <ProjectsSection />
                </FadeIn>

                {/* Placeholder for future sections */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
                        <p>Más secciones próximamente...</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
