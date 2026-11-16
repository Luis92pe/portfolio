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
        <section id="books" className="py-16 sm:py-24 bg-[#06060D] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                        {t('books_section.title_small')}
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
                        {t('books_section.title_large')}
                    </h2>

                    <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
                        {t('books_section.description')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-8">
                        {[
                            { key: 'all', label: isEs ? 'Todos' : 'All' },
                            { key: 'read', label: isEs ? 'Leídos' : 'Read' },
                            { key: 'reading', label: isEs ? 'En Lectura' : 'Currently Reading' },
                            { key: 'to-read', label: isEs ? 'Por Leer' : 'To Read' }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setFilter(tab.key)}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-semibold transition-all duration-300 cursor-pointer ${
                                    filter === tab.key
                                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.09] border border-white/10'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {filteredBooks.map((book) => {
                        const statusText = isEs ? book.statusBadge.es : book.statusBadge.en;
                        const takeaway = isEs ? book.personalTakeaway.es : book.personalTakeaway.en;

                        return (
                            <div
                                key={book.id}
                                className="group bg-[#0B0B16]/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 hover:border-indigo-500/50 shadow-lg hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row gap-5 sm:gap-6 relative"
                            >
                                <div className="sm:w-44 flex-shrink-0 flex sm:flex-col items-center sm:items-start justify-center">
                                    <div className={`w-32 h-44 sm:w-40 sm:h-56 rounded-r-xl rounded-l-sm bg-gradient-to-br ${book.accentColor} p-3.5 sm:p-4 text-white shadow-xl flex flex-col justify-between transform group-hover:rotate-1 group-hover:scale-105 transition-transform duration-300 border-l-4 border-black/40 relative overflow-hidden`}>
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

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                                                {statusText}
                                            </span>
                                            <span className="text-[11px] font-mono text-slate-400">
                                                {book.category}
                                            </span>
                                        </div>

                                        <h3 className="text-base sm:text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                            {book.title}
                                        </h3>

                                        <p className="text-xs font-mono text-slate-400 mb-3 sm:mb-4">
                                            {book.author} • {book.year}
                                        </p>

                                        <div className="bg-white/[0.03] rounded-xl p-3.5 border-l-2 border-violet-500 mb-4">
                                            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-indigo-300 uppercase tracking-wide mb-1">
                                                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                                                {isEs ? 'Criterio & Aprendizaje Clave:' : 'Core Engineering Takeaway:'}
                                            </div>
                                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                                                &ldquo;{takeaway}&rdquo;
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {book.keyConcepts.map((concept, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-white/[0.05] text-slate-300 border border-white/10"
                                                >
                                                    {concept}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-white/10 flex justify-end">
                                        <a
                                            href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-300 hover:text-white transition-colors py-1 px-2"
                                        >
                                            {isEs ? 'Ver / Conseguir Libro' : 'View / Buy Book'}
                                            <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
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
