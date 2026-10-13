# AGENT.md - Guía del Proyecto & Instrucciones para Agentes

Bienvenido a la documentación para agentes de IA y desarrolladores que interactúen con el repositorio **Portfolio** de **Luis Miguel Peña Bastardo**. Este documento describe el propósito del proyecto, perfil profesional validado, stack tecnológico, arquitectura del código, la experiencia de scroll conversacional (storytelling) con animaciones de Clean Architecture, biblioteca de lecturas, generador de CV en PDF y convenciones mobile-first.

---

## 1. Perfil Profesional Validado (Luis Miguel Peña Bastardo)

- **Título**: Tech Lead Frontend & Senior Frontend Engineer
- **Años de Trayectoria**: 11+ años de experiencia continua en desarrollo de software (inicios a finales de 2013).
- **Ubicación & Contacto**: Venezuela (Disponible Remoto Global) | `luis92pe@gmail.com` | `+58 414 243 5600`
- **Perfiles**: [GitHub (luis92pe)](https://github.com/luis92pe) | [LinkedIn (luis92pe)](https://linkedin.com/in/luis92pe)
- **Empresa Actual**: **THEEGG BITS & BYTES LLC** (Cliente principal: **Mailamericas**).
- **Core de Especialización**:
  1. **Frontend Industrial de Misión Crítica**: Integración de interfaces web, desktop y mobile con hardware en planta (terminales industriales Honeywell PDA, balanzas volumétricas, impresoras térmicas con QueBeu, WebSockets en tiempo real).
  2. **Escala Internacional**: Sistemas operando activamente en almacenes logísticos de más de 12 países (Argentina, Perú, Jamaica, Seychelles, etc.), gestionando alto volumen de paquetería (sacas de hasta 3,000 paquetes).
  3. **Clean Architecture & Resiliencia**: Liderazgo en la adopción de Clean Architecture y Atomic Design tras resolver cuellos de botella e incidentes críticos en producción, erradicando regresiones técnicas y modularizando el dominio.
  4. **Diseño UX/UI a Código Pixel-Perfect**: Certificación profesional en UX/UI (Acámica, 2019), dominio avanzado de Figma, alineación con Product Managers y mentoría técnica con rigurosos code reviews.
  5. **Fundamentos sobre Sintaxis**: Filosofía de aprendizaje continuo y biblioteca técnica personal (Clean Architecture, The Pragmatic Programmer, Clean Code, Evolutionary Architectures).

---

## 2. Experiencia Narrativa: Scroll Conversacional & Animaciones de Fondo

La landing page está orquestada como una **conversación continua y natural**, sin etiquetas artificiales (sin "Acto 1" o "Acto 2"), acompañada por una capa de fondo interactiva que reacciona al scroll:

1. **Fondo Interactivo de Clean Architecture & Hardware** (`ArchitectureScrollBg.jsx`):
   - **Capas concéntricas SVG de Clean Architecture**: Rótulos dinámicos (*Domain / Entities / Use Cases / Controllers / Frameworks & Hardware*) que giran y escalan suavemente al scrollear.
   - **Engranes industriales SVG interactivos**: Dos engranajes mecánicos engranados que rotan en sentidos opuestos al ritmo del scroll, simbolizando la integración con maquinaria de almacenes e impresoras térmicas.
   - **Código y esquemáticos flotantes**: Fragmentos sutiles de dominio desacoplado y WebSockets.
2. **Puentes Conversacionales** (`StoryBridge.jsx`):
   - Burbujas de diálogo estilizadas con citas en primera persona de Luis Peña que conectan una sección con la siguiente:
     - *"El trabajo habla primero"* ➔ Casos de Estudio en 12 países.
     - *"Criterio sobre sintaxis"* ➔ Biblioteca Personal de Lecturas.
     - *"El camino recorrido"* ➔ Git Log Timeline y Skills.
     - *"¿Hablamos de tu proyecto?"* ➔ Punto de Encuentro & Contacto.
3. **Optimización Mobile First**:
   - Tipografía adaptada para no desbordar en pantallas pequeñas (`text-3xl sm:text-5xl lg:text-7xl`).
   - Botones de acción táctiles, amplios y cómodos para compartir por WhatsApp o LinkedIn en smartphones.
   - Cuadrícula compacta de 2x2 para tarjetas de contacto en móvil.
   - Timeline con márgenes optimizados para evitar espacio en blanco en pantallas estrechas.

---

## 3. Los 4 Sistemas Insignia (Key Production Systems)

1. **Fulfillment Warehouse Logistics Suite** (*THEEGG / Mailamericas* | 2021 - Presente):
   - Suite desktop y web (Electron, Vue.js 2, Clean Architecture, Atomic Design, WebSockets, QueBeu).
   - Control de paquetes, sacas y contenedores en almacenes de +12 países con balanzas físicas e impresoras térmicas.
2. **Fulfillment PDA & Mobile Logistics** (*THEEGG / Mailamericas* | 2022 - Presente):
   - Aplicación React Native desplegada en terminales industriales **Honeywell** con escáner láser de código de barras/QR integrado.
3. **Sorting Engine & Rules Automation** (*THEEGG / Mailamericas* | 2023 - 2024):
   - Plataforma frontend en React con APIs Nest.js para la creación de órdenes de trabajo, asignación de reglas de negocio y configuración de plantillas que alimentan maquinaria industrial de clasificación automatizada.
4. **Wapidelo E-Commerce Platform** (*Wapidelo Panamá - Contractor* | 2019 - 2020):
   - Plataforma e-commerce multi-tienda con motor reactivo de filtros condicionales avanzados para campañas masivas (Black Friday), estado global en Vuex y checkout automatizado a WhatsApp.

---

## 4. Stack Tecnológico del Proyecto

| Capa / Herramienta | Tecnología / Versión | Propósito |
| :--- | :--- | :--- |
| **Runtime & Node** | Node.js `20.20.0` (gestionado con [Volta](https://volta.sh/)) | Entorno de ejecución estándar y reproducible |
| **Biblioteca UI** | React `19.0.0` / React DOM `19.0.0` | Interfaces reactivas y componentes modernos |
| **Generación de PDF** | `@react-pdf/renderer` | Generación de CV vectorial nativo de 2 páginas ATS-friendly |
| **Empaquetador (Bundler)** | Vite `^5.2.0` (`@vitejs/plugin-react` `^4.2.1`) | Servidor de desarrollo ultra rápido y compilación de producción |
| **Enrutamiento** | React Router DOM `^7.13.1` | Gestión de rutas SPA (`/`, `/blog/fsd`) |
| **Estilos CSS** | Tailwind CSS `^3.4.1` + PostCSS + Autoprefixer | Diseño responsivo basado en utilidades y dark mode por clase |
| **Iconografía** | Lucide React `^0.344.0` | Conjunto de iconos vectoriales |
| **Internacionalización** | `i18next`, `react-i18next`, detector de idioma | Traducciones dinámicas ES/EN centralizadas |
| **Linter & Calidad** | ESLint `^8.57.0` con plugins de React | Análisis estático y estándares de código |

---

## 5. Arquitectura del Proyecto & Componentes

```text
portfolio/
├── src/
│   ├── data/
│   │   ├── profile.js      # Datos validados: contacto, bio, stack, certificaciones reales, idiomas
│   │   ├── career.js       # Historial profesional completo (7 hitos con roles claros)
│   │   ├── projects.js     # Metadatos de los 4 sistemas reales de alto impacto
│   │   └── books.js        # Libros clave: status (leído, leyendo, por leer), takeaways y links
│   ├── locales/
│   │   ├── es.json         # Traducciones profesionales al Español
│   │   └── en.json         # Traducciones profesionales al Inglés técnico
│   └── presentation/
│       ├── components/
│       │   ├── atoms/
│       │   │   ├── ArchitectureScrollBg.jsx # Fondo animado: capas Clean Architecture y engranes con scroll
│       │   │   ├── StoryBridge.jsx          # Puentes conversacionales sutiles y naturales
│       │   │   ├── ResumeDocument.jsx       # PDF vectorial de 2 páginas con lecturas y certificaciones reales
│       │   │   └── DownloadCVButton.jsx     # Botón con descarga instantánea en el cliente (ES/EN)
│       │   ├── molecules/
│       │   │   └── ProjectCard.jsx          # Tarjetas mobile-first con badge Enterprise NDA y dark mode
│       │   └── organisms/
│       │       ├── Hero.jsx                 # Hero interactivo y mobile-first con saludo conversacional
│       │       ├── Navbar.jsx               # Barra superior con enlaces alineados a la narrativa
│       │       ├── ProjectsSection.jsx      # Grid de proyectos destacados (El Trabajo Primero)
│       │       ├── BooksSection.jsx         # Biblioteca personal con portadas 3D (La Filosofía)
│       │       ├── TimelineSection.jsx      # Historial estilo Git Log mobile-first (La Trayectoria)
│       │       ├── SkillsSection.jsx        # Stack industrial y estudios reales (Habilidades)
│       │       └── ContactSection.jsx       # Punto de encuentro optimizado para smartphones (Contacto)
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 6. Scripts Disponibles

- **Iniciar servidor de desarrollo**:
  ```bash
  npm run dev
  ```
- **Construir para producción**:
  ```bash
  npm run build
  ```
- **Previsualizar compilación localmente**:
  ```bash
  npm run preview
  ```
- **Validación de linter**:
  ```bash
  npm run lint
  ```
