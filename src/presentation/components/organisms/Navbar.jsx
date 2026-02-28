import React, { useState } from 'react';
import { Menu, X, Code, Briefcase, User, Mail, Globe, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../atoms/ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('navbar.home'), href: isHome ? '#home' : '/#home', icon: User },
        { name: t('navbar.projects'), href: isHome ? '#projects' : '/#projects', icon: Briefcase },
        { name: t('navbar.skills'), href: isHome ? '#skills' : '/#skills', icon: Code },
        { name: t('navbar.contact'), href: isHome ? '#contact' : '/#contact', icon: Mail },
        { name: 'Blog FSD', href: '/blog/fsd', icon: BookOpen, isRouterLink: true },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.isRouterLink ? (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="flex items-center space-x-1 text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-indigo-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    <link.icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                </Link>
                            ) : (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        if (!isHome) {
                                            e.preventDefault();
                                            navigate('/');
                                            setTimeout(() => {
                                                const id = link.href.replace('/#', '');
                                                document.getElementById(id)?.scrollIntoView();
                                            }, 100);
                                        }
                                    }}
                                    className="flex items-center space-x-1 text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-indigo-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    <link.icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                </a>
                            )
                        ))}

                        {/* Theme and Language Switcher Desktop */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors border border-slate-200 dark:border-slate-700"
                            >
                                <Globe className="w-4 h-4" />
                                <span>{i18n.language === 'es' ? 'ES' : 'EN'}</span>
                            </button>
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        {/* Theme and Language Switcher Mobile */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-2 py-1.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold border border-slate-200 dark:border-slate-700"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{i18n.language === 'es' ? 'ES' : 'EN'}</span>
                        </button>

                        <ThemeToggle />

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-indigo-400 focus:outline-none p-2 ml-1"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            link.isRouterLink ? (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-4 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <link.icon className="w-5 h-5" />
                                    <span>{link.name}</span>
                                </Link>
                            ) : (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-4 rounded-md text-base font-medium transition-colors"
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        if (!isHome) {
                                            e.preventDefault();
                                            navigate('/');
                                            setTimeout(() => {
                                                const id = link.href.replace('/#', '');
                                                document.getElementById(id)?.scrollIntoView();
                                            }, 100);
                                        }
                                    }}
                                >
                                    <link.icon className="w-5 h-5" />
                                    <span>{link.name}</span>
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
