import React, { useState } from 'react';
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { booksData } from '../../../data/books';

const BooksSection = () => {
    const { t, i18n } = useTranslation();
    const [filter, setFilter] = useState('all');
    const isEs = !i18n.language?.startsWith('en');

    const filteredBooks = filter === 'all'
        ? booksData
        : booksData.filter(b => b.status === filter);

    return (
        <section id="books" className="py-16 sm:py-24 bg-white/70 dark:bg-slate-900/70 transition-colors relative overflow-hidden backdrop-blur-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        {t('books_section.title_small')}
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">
                        {t('books_section.title_large')}
                    </h2>

                    <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {t('books_section.description')}
                    </p>

                    {/* Filter buttons - touch friendly */}
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                        {[
                            { key: 'all', label: isEs ? 'Todos' : 'All' },
                            { key: 'read', label: isEs ? 'Leídos' : 'Read' },
                            { key: 'reading', label: isEs ? 'En Lectura' : 'Currently Reading' },
                            { key: 'to-read', label: isEs ? 'Por Leer' : 'To Read' }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setFilter(tab.key)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${filter === tab.key
                                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {filteredBooks.map((book) => {
                        const statusText = isEs ? book.statusBadge.es : book.statusBadge.en;
                        const takeaway = isEs ? book.personalTakeaway.es : book.personalTakeaway.en;

                        return (
                            <div
                                key={book.id}
                                className="group bg-slate-50/80 dark:bg-slate-800/85 rounded-2xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row gap-5 sm:gap-6 relative"
                            >
                                {/* Stylized 3D Book Cover */}
                                <div className="sm:w-44 flex-shrink-0 flex sm:flex-col items-center sm:items-start justify-center">
                                    <div className={`w-32 h-44 sm:w-40 sm:h-56 rounded-r-xl rounded-l-sm bg-gradient-to-br ${book.accentColor} p-3.5 sm:p-4 text-white shadow-xl flex flex-col justify-between transform group-hover:rotate-1 group-hover:scale-105 transition-transform duration-300 border-l-4 border-black/30 relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/20 pointer-events-none" />

                                        <div>
                                            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider opacity-80 block truncate">
                                                {book.category}
                                            </span>
                                            <h4 className="text-xs sm:text-base font-bold leading-tight mt-1 line-clamp-3">
                                                {book.shortTitle}
                                            </h4>
                                        </div>

                                        <div className="pt-2 border-t border-white/20">
                                            <p className="text-[10px] sm:text-[11px] font-medium opacity-90 truncate">
                                                {book.author}
                                            </p>
                                            <span className="text-[9px] sm:text-[10px] opacity-75">{book.year}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Book Information & Personal Reflection */}
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                                            <span className={`px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold ${book.badgeColor}`}>
                                                {statusText}
                                            </span>
                                            <span className="text-[11px] sm:text-xs font-medium text-slate-400">
                                                {book.category}
                                            </span>
                                        </div>

                                        <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {book.title}
                                        </h3>

                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 sm:mb-4">
                                            {book.author} • {book.year}
                                        </p>

                                        {/* Personal Takeaway Quote */}
                                        <div className="bg-white dark:bg-slate-900/90 rounded-xl p-3 sm:p-3.5 border-l-3 border-blue-500 shadow-xs mb-3 sm:mb-4">
                                            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                                                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                {isEs ? 'Criterio & Aprendizaje Clave:' : 'Core Engineering Takeaway:'}
                                            </div>
                                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                                "{takeaway}"
                                            </p>
                                        </div>

                                        {/* Concepts tags */}
                                        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                                            {book.keyConcepts.map((concept, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium bg-slate-200/60 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                                                >
                                                    {concept}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Link to Buy/Read */}
                                    <div className="pt-2 border-t border-slate-200/70 dark:border-slate-700/60 flex justify-end">
                                        <a
                                            href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-1 px-2"
                                        >
                                            {isEs ? 'Ver / Conseguir Libro' : 'View / Buy Book'}
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BooksSection;
