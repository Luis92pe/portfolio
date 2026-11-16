import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        paddingTop: 28,
        paddingBottom: 28,
        paddingHorizontal: 32,
        fontFamily: 'Helvetica',
        fontSize: 8.5,
        color: '#1e293b'
    },
    header: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#4f46e5',
        paddingBottom: 10,
        marginBottom: 10
    },
    nameWrapper: {
        marginBottom: 5
    },
    name: {
        fontSize: 20,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        lineHeight: 1.2
    },
    roleWrapper: {
        marginBottom: 6
    },
    role: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#4f46e5',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        lineHeight: 1.25
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        fontSize: 8,
        color: '#475569',
        lineHeight: 1.3
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactLink: {
        color: '#4f46e5',
        textDecoration: 'none'
    },
    pageIndicator: {
        position: 'absolute',
        bottom: 12,
        right: 32,
        fontSize: 7.5,
        color: '#94a3b8'
    },
    section: {
        marginBottom: 10
    },
    sectionTitle: {
        fontSize: 9.5,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        textTransform: 'uppercase',
        letterSpacing: 0.7,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingBottom: 3,
        marginBottom: 6,
        lineHeight: 1.2
    },
    summaryText: {
        fontSize: 8,
        lineHeight: 1.4,
        color: '#334155',
        textAlign: 'justify'
    },
    projectItem: {
        marginBottom: 7,
        backgroundColor: '#f8fafc',
        padding: 6,
        borderRadius: 4,
        borderLeftWidth: 2.5,
        borderLeftColor: '#4f46e5'
    },
    projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 2
    },
    projectTitle: {
        fontSize: 8.8,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        lineHeight: 1.25,
        marginBottom: 1
    },
    projectMeta: {
        fontSize: 7.5,
        fontFamily: 'Helvetica-Bold',
        color: '#4f46e5',
        lineHeight: 1.25
    },
    projectDate: {
        fontSize: 7.5,
        color: '#64748b'
    },
    projectDesc: {
        fontSize: 7.8,
        color: '#334155',
        marginTop: 2,
        lineHeight: 1.35
    },
    experienceItem: {
        marginBottom: 7
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 1.5
    },
    jobTitle: {
        fontSize: 8.8,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        lineHeight: 1.25,
        marginBottom: 1
    },
    company: {
        fontSize: 8,
        fontFamily: 'Helvetica-Bold',
        color: '#4f46e5',
        lineHeight: 1.25
    },
    period: {
        fontSize: 7.5,
        color: '#64748b'
    },
    jobDescription: {
        fontSize: 7.8,
        color: '#334155',
        marginTop: 1.5,
        lineHeight: 1.35
    },
    techTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
        marginTop: 3
    },
    techTag: {
        fontSize: 7,
        backgroundColor: '#f1f5f9',
        color: '#334155',
        paddingHorizontal: 4,
        paddingVertical: 1.5,
        borderRadius: 2.5
    },
    twoCol: {
        flexDirection: 'row',
        gap: 12
    },
    col: {
        flex: 1
    },
    bulletItem: {
        flexDirection: 'row',
        marginBottom: 3
    },
    bulletDot: {
        width: 8,
        fontSize: 7.5,
        color: '#4f46e5'
    },
    bulletText: {
        fontSize: 7.8,
        color: '#334155',
        flex: 1,
        lineHeight: 1.3
    },
    eduItem: {
        marginBottom: 4
    },
    eduDegree: {
        fontSize: 8,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        lineHeight: 1.25
    },
    eduInstitution: {
        fontSize: 7.5,
        color: '#475569',
        lineHeight: 1.25
    }
});

export const ResumeDocument = ({ lang = 'es', profile, career, projects }) => {
    const isEs = lang === 'es';
    const p = profile;

    return (
        <Document title={`CV - ${p.personal.fullName}`} author={p.personal.fullName}>
            {/* PAGE 1: Perfil, Proyectos Clave y Stack Tecnológico */}
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.nameWrapper}>
                        <Text style={styles.name}>{p.personal.fullName}</Text>
                    </View>
                    <View style={styles.roleWrapper}>
                        <Text style={styles.role}>{p.personal.title}</Text>
                    </View>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{p.personal.location}</Text>
                        <Text style={styles.contactItem}>•</Text>
                        <Text style={styles.contactItem}>{p.personal.phone}</Text>
                        <Text style={styles.contactItem}>•</Text>
                        <Link src={`mailto:${p.personal.email}`} style={styles.contactLink}>{p.personal.email}</Link>
                        <Text style={styles.contactItem}>•</Text>
                        <Link src={p.personal.github} style={styles.contactLink}>github.com/luis92pe</Link>
                        <Text style={styles.contactItem}>•</Text>
                        <Link src={p.personal.linkedin} style={styles.contactLink}>linkedin.com/in/lpena92</Link>
                    </View>
                </View>

                {/* Resumen Profesional */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {isEs ? 'Perfil Profesional & Liderazgo' : 'Professional Summary & Leadership'}
                    </Text>
                    <Text style={styles.summaryText}>
                        {isEs ? p.summary.es : p.summary.en}
                    </Text>
                </View>

                {/* Competencias Técnicas Centralizadas */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {isEs ? 'Stack Tecnológico Central' : 'Core Technology Stack'}
                    </Text>
                    <View style={styles.twoCol}>
                        <View style={styles.col}>
                            <Text style={{ fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: '#475569', marginBottom: 2 }}>
                                {isEs ? 'Frontend & Mobile:' : 'Frontend & Mobile:'}
                            </Text>
                            <View style={styles.techTags}>
                                {p.skills.frontend.map((s, idx) => (
                                    <Text key={idx} style={styles.techTag}>{s}</Text>
                                ))}
                                {p.skills.desktopAndMobile.map((s, idx) => (
                                    <Text key={idx} style={styles.techTag}>{s}</Text>
                                ))}
                            </View>
                        </View>
                        <View style={styles.col}>
                            <Text style={{ fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: '#475569', marginBottom: 2 }}>
                                {isEs ? 'Arquitectura, Hardware & Real-time:' : 'Architecture, Hardware & Real-time:'}
                            </Text>
                            <View style={styles.techTags}>
                                {p.skills.architectureAndPatterns.map((s, idx) => (
                                    <Text key={idx} style={styles.techTag}>{s}</Text>
                                ))}
                                {p.skills.hardwareAndRealtime.map((s, idx) => (
                                    <Text key={idx} style={styles.techTag}>{s}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>

                {/* Proyectos Insignia / Key Systems */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {isEs ? 'Sistemas Clave en Producción (Logística Internacional & Enterprise)' : 'Key Production Systems (International Logistics & Enterprise)'}
                    </Text>
                    {projects.map((proj) => (
                        <View key={proj.id} style={styles.projectItem}>
                            <View style={styles.projectHeader}>
                                <View>
                                    <Text style={styles.projectTitle}>{proj.title}</Text>
                                    <Text style={styles.projectMeta}>{proj.company} — {proj.role}</Text>
                                </View>
                                <Text style={styles.projectDate}>{proj.date}</Text>
                            </View>
                            <Text style={styles.projectDesc}>{proj.description}</Text>
                            <View style={styles.techTags}>
                                {proj.technologies.map((t, idx) => (
                                    <Text key={idx} style={styles.techTag}>{t}</Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <Text style={styles.pageIndicator}>Página 1 de 2</Text>
            </Page>

            {/* PAGE 2: Experiencia Laboral, Formación, Certificaciones, Lecturas y Liderazgo */}
            <Page size="A4" style={styles.page}>
                {/* Mini Header de Continuación */}
                <View style={[styles.header, { paddingBottom: 6, marginBottom: 8 }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#0f172a' }}>{p.personal.fullName}</Text>
                        <Text style={{ fontSize: 7.5, color: '#64748b' }}>{p.personal.email} • {p.personal.phone}</Text>
                    </View>
                </View>

                {/* Experiencia Laboral */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {isEs ? 'Experiencia Laboral' : 'Work Experience'}
                    </Text>
                    {career.filter(item => item.type === 'work').map((item) => (
                        <View key={item.id} style={styles.experienceItem}>
                            <View style={styles.jobHeader}>
                                <View>
                                    <Text style={styles.jobTitle}>{item.title}</Text>
                                    <Text style={styles.company}>{item.company}</Text>
                                </View>
                                <Text style={styles.period}>{item.period}</Text>
                            </View>
                            <Text style={styles.jobDescription}>{item.description}</Text>
                            {item.technologies.length > 0 && (
                                <View style={styles.techTags}>
                                    {item.technologies.map((tech, idx) => (
                                        <Text key={idx} style={styles.techTag}>{tech}</Text>
                                    ))}
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                {/* Habilidades Blandas, Educación, Certificaciones y Lecturas */}
                <View style={styles.twoCol}>
                    <View style={styles.col}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                {isEs ? 'Liderazgo & Prácticas de Ingeniería' : 'Leadership & Engineering Practices'}
                            </Text>
                            <View>
                                {(isEs ? p.skills.softSkills.es : p.skills.softSkills.en).map((soft, idx) => (
                                    <View key={idx} style={styles.bulletItem}>
                                        <Text style={styles.bulletDot}>›</Text>
                                        <Text style={styles.bulletText}>{soft}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                {isEs ? 'Fundamentos & Libros Clave' : 'Foundations & Core Readings'}
                            </Text>
                            <Text style={{ fontSize: 7.5, color: '#334155', lineHeight: 1.35 }}>
                                • Clean Architecture (R. Martin) — {isEs ? 'Aislamiento de dominio de frameworks/DB' : 'Domain isolated from frameworks/DBs'}
                            </Text>
                            <Text style={{ fontSize: 7.5, color: '#334155', marginTop: 2, lineHeight: 1.35 }}>
                                • The Pragmatic Programmer (D. Thomas & A. Hunt) — {isEs ? 'Mentalidad DRY y código ortogonal' : 'DRY mindset & orthogonal systems'}
                            </Text>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                {isEs ? 'Idiomas' : 'Languages'}
                            </Text>
                            <Text style={{ fontSize: 7.8, color: '#334155', lineHeight: 1.35 }}>
                                • {p.skills.languages.es}
                            </Text>
                            <Text style={{ fontSize: 7.8, color: '#334155', marginTop: 2, lineHeight: 1.35 }}>
                                • {p.skills.languages.en}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.col}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                {isEs ? 'Educación Superior' : 'Higher Education'}
                            </Text>
                            {p.education.map((edu, idx) => (
                                <View key={idx} style={styles.eduItem}>
                                    <Text style={styles.eduDegree}>{edu.degree}</Text>
                                    <Text style={styles.eduInstitution}>{edu.institution} ({edu.period})</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                {isEs ? 'Formación & Certificaciones' : 'Training & Certifications'}
                            </Text>
                            {p.certifications.map((cert, idx) => (
                                <View key={idx} style={[styles.eduItem, { marginBottom: 3 }]}>
                                    <Text style={[styles.eduDegree, { fontSize: 7.8 }]}>{cert.name}</Text>
                                    <Text style={styles.eduInstitution}>{cert.issuer} • {cert.year}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                <Text style={styles.pageIndicator}>Página 2 de 2</Text>
            </Page>
        </Document>
    );
};
