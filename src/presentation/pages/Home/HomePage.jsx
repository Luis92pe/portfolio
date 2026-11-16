import React from 'react';
import Navbar from '../../components/organisms/Navbar';
import Hero from '../../components/organisms/Hero';
import ProjectsSection from '../../components/organisms/ProjectsSection';
import TimelineSection from '../../components/organisms/TimelineSection';
import MentorshipSection from '../../components/organisms/MentorshipSection';
import ContactSection from '../../components/organisms/ContactSection';
import ArchitectureScrollBg from '../../components/atoms/ArchitectureScrollBg';
import FadeIn from '../../components/atoms/FadeIn';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#05050A] text-white selection:bg-violet-600 selection:text-white relative">
            <ArchitectureScrollBg />

            <Navbar />
            <main className="relative z-10">
                {/* 1. Hero: Cargo/Experiencia tipeado + 4 Stats + 5 Redes */}
                <FadeIn>
                    <Hero />
                </FadeIn>

                {/* 2. Proyectos Clave (2x2 Grid -> Transición animada al detalle) */}
                <FadeIn>
                    <ProjectsSection />
                </FadeIn>

                {/* 3. Resumen para Reclutadores: Stack Puntual & Experiencia */}
                <FadeIn>
                    <TimelineSection />
                </FadeIn>

                {/* 4. Packs de Mentorías & Bolsa de Horas */}
                <FadeIn>
                    <MentorshipSection />
                </FadeIn>

                {/* 5. Contacto Directo + Mi CV para nuevos empleos */}
                <FadeIn>
                    <ContactSection />
                </FadeIn>
            </main>
        </div>
    );
};

export default HomePage;
