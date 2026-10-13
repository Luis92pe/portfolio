export const booksData = [
    {
        id: 1,
        title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
        shortTitle: 'Clean Architecture',
        author: 'Robert C. Martin (Uncle Bob)',
        year: '2017',
        status: 'read',
        category: 'Arquitectura & Dominio',
        accentColor: 'from-blue-600 to-indigo-700',
        badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
        statusBadge: {
            es: 'Leído • Aplicado en Producción',
            en: 'Read • Applied in Production'
        },
        personalTakeaway: {
            es: 'Un libro que te abre el pensamiento a no acoplar sistemas y mantener todo el dominio aislado de las implementaciones, garantizando así que el modelo de negocio no se vea afectado por temas de bases de datos o frameworks de frontend.',
            en: 'A book that opens your mindset to decoupling systems and keeping the core domain completely isolated from implementations, ensuring the business model remains untouched by databases or frontend frameworks.'
        },
        keyConcepts: ['Inversión de Dependencias', 'Aislamiento de Dominio', 'Límites Arquitectónicos', 'Fácil Testabilidad'],
        link: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164'
    },
    {
        id: 2,
        title: 'The Pragmatic Programmer: Your Journey to Mastery (20th Anniversary Edition)',
        shortTitle: 'The Pragmatic Programmer',
        author: 'David Thomas & Andrew Hunt',
        year: '2019',
        status: 'reading',
        category: 'Filosofía & Artesanía de Software',
        accentColor: 'from-emerald-600 to-teal-700',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
        statusBadge: {
            es: 'Leyendo Actualmente',
            en: 'Currently Reading'
        },
        personalTakeaway: {
            es: 'Lectura activa centrada en la mentalidad de ingeniería: no duplicar conocimiento (principio DRY), diseñar código ortogonal, programar deliberadamente y cultivar la adaptabilidad continua ante la evolución tecnológica.',
            en: 'Active reading focused on the engineering mindset: eliminating duplicate knowledge (DRY), designing orthogonal systems, programming deliberately, and cultivating continuous adaptability.'
        },
        keyConcepts: ['Principio DRY', 'Ortogonalidad', 'Pragmatismo vs Dogma', 'Programación Deliberada'],
        link: 'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052'
    },
    {
        id: 3,
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        shortTitle: 'Clean Code',
        author: 'Robert C. Martin',
        year: '2008',
        status: 'to-read',
        category: 'Buenas Prácticas & Refactor',
        accentColor: 'from-amber-600 to-orange-700',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
        statusBadge: {
            es: 'Por Leer (Next up)',
            en: 'Up Next'
        },
        personalTakeaway: {
            es: 'En lista de lectura para profundizar en los fundamentos universales de legibilidad, nomenclatura expresiva, funciones con responsabilidad única y hábitos para reducir la deuda técnica en equipos.',
            en: 'On my reading list to deepen universal principles of readability, expressive naming, single-responsibility functions, and habits for reducing technical debt across teams.'
        },
        keyConcepts: ['Regla del Boy Scout', 'Funciones Pequeñas', 'Nombres Intencionales', 'Mantenibilidad'],
        link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
    },
    {
        id: 4,
        title: 'Building Evolutionary Architectures: Support Constant Change',
        shortTitle: 'Código Sostenible / Evolutionary Arch.',
        author: 'Neal Ford, Rebecca Parsons & Patrick Kua',
        year: '2017',
        status: 'to-read',
        category: 'Sostenibilidad & Evolución',
        accentColor: 'from-purple-600 to-indigo-800',
        badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
        statusBadge: {
            es: 'Por Leer',
            en: 'To Read'
        },
        personalTakeaway: {
            es: 'Próxima lectura sobre cómo diseñar arquitecturas que soporten cambios incrementales y continuos a lo largo de los años sin degradar la estructura del software ni frenar la innovación.',
            en: 'Upcoming reading on designing software architectures capable of supporting continuous, incremental change over years without degrading system structure.'
        },
        keyConcepts: ['Funciones de Fitness', 'Arquitecturas Evolutivas', 'Cambio Incremental', 'Sostenibilidad'],
        link: 'https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360'
    }
];
