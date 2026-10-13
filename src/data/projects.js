import projectImage from '../presentation/assets/project-placeholder.png';

export const projects = [
    {
        id: 1,
        title: 'Fulfillment Warehouse Logistics Suite',
        description: 'Suite de escritorio y web de misión crítica para la gestión integral de almacenes logísticos de Mailamericas en más de 12 países (Argentina, Perú, Jamaica, Seychelles, etc.). Control de paquetería de alto volumen (sacas con hasta 3,000 paquetes), pesaje con balanzas volumétricas, comunicación en tiempo real con WebSockets e impresión industrial de etiquetas térmicas con QueBeu. Liderazgo en la migración a Clean Architecture y Atomic Design modular.',
        image: projectImage,
        technologies: ['Electron', 'Vue.js', 'Clean Architecture', 'Atomic Design', 'WebSockets', 'QueBeu'],
        date: '2021 - Presente',
        link: '#',
        isNDA: true,
        company: 'THEEGG / Mailamericas',
        role: 'Tech Lead Frontend'
    },
    {
        id: 2,
        title: 'Fulfillment PDA & Mobile Logistics',
        description: 'Aplicación móvil de logística industrial desarrollada en React Native para terminales portátiles Honeywell utilizadas por operadores en almacenes. Permite el escaneo láser de códigos de barras/QR en sacas, contenedores y paquetes en tiempo real, sincronizando operaciones logísticas críticas directamente con los servidores centrales.',
        image: projectImage,
        technologies: ['React Native', 'Honeywell PDA', 'Styled Components', 'Sass', 'REST APIs'],
        date: '2022 - Presente',
        link: '#',
        isNDA: true,
        company: 'THEEGG / Mailamericas',
        role: 'Tech Lead Frontend'
    },
    {
        id: 3,
        title: 'Sorting Engine & Rules Automation',
        description: 'Plataforma frontend para la generación de órdenes de trabajo, asignación de reglas de negocio y configuración de plantillas de clasificación para alimentar maquinaria de sorteo industrial automatizado. Construida con React, integrando APIs en Nest.js y diseño de interfaces optimizadas para operadores de planta.',
        image: projectImage,
        technologies: ['React', 'Nest.js APIs', 'CSS3', 'Figma', 'Clean Architecture'],
        date: '2023 - 2024',
        link: '#',
        isNDA: true,
        company: 'THEEGG / Mailamericas',
        role: 'Frontend Lead'
    },
    {
        id: 4,
        title: 'Wapidelo E-Commerce Platform',
        description: 'Plataforma e-commerce personalizada para comercios del mercado panameño. Implementación de un motor reactivo de filtros condicionales avanzados para ofertas masivas y Black Friday, arquitectura de estado global con Vuex y embudo de conversión optimizado que despacha órdenes automatizadas a WhatsApp.',
        image: projectImage,
        technologies: ['Vue.js', 'Vuex', 'JavaScript ES6+', 'REST APIs', 'Sass'],
        date: '2019 - 2020',
        link: '#',
        isNDA: false,
        company: 'Wapidelo (Panamá)',
        role: 'Frontend Developer (Freelance / Contractor)'
    }
];
