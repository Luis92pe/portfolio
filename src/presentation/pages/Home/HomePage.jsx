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
        <div className="min-h-screen bg-[#000000] text-white selection:bg-violet-600 selection:text-white relative">
            <ArchitectureScrollBg />

            <Navbar />
            <main className="relative z-10">
                {/* 1. QUIÉN SOY (Hero con emblema retro, typewriter, métricas y redes) */}
                <FadeIn>
                    <Hero />
                </FadeIn>

                {/* 2. PROYECTOS (Grid 2x2 simple -> click para ver detalle completo) */}
                <FadeIn>
                    <ProjectsSection />
                </FadeIn>

                {/* 3. EXPERIENCIA & STACK (Trayectoria 2013-HOY y valor aportado) */}
                <FadeIn>
                    <TimelineSection />
                </FadeIn>

                {/* 4. LO QUE OFREZCO (Trabajar juntos, Mentoría Code Review/Escalabilidad, Atomic Design/FSD) */}
                <FadeIn>
                    <MentorshipSection />
                </FadeIn>

                {/* 5. CONTACTO DIRECTO + MI CV PARA NUEVOS EMPLEOS */}
                <FadeIn>
                    <ContactSection />
                </FadeIn>
            </main>
        </div>
    );
};

export default HomePage;
