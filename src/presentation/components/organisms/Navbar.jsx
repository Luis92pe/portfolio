import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import DownloadCVButton from '../atoms/DownloadCVButton';

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
        { code: '01', name: t('navbar.projects'), href: isHome ? '#projects' : '/#projects' },
        { code: '02', name: t('navbar.experience'), href: isHome ? '#career' : '/#career' },
        { code: '03', name: t('navbar.mentorship'), href: isHome ? '#mentorship' : '/#mentorship' },
        { code: '04', name: t('navbar.contact'), href: isHome ? '#contact' : '/#contact' },
    ];

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        if (!isHome) {
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
                const id = href.replace('/#', '');
                document.getElementById(id)?.scrollIntoView();
            }, 100);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-[#000000]/95 backdrop-blur-md border-b border-white/15">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-14 items-center">
                    {/* Console Brand */}
                    <a
                        href={isHome ? '#home' : '/#home'}
                        className="flex items-center gap-2 group font-mono"
                    >
                        <Terminal className="w-4 h-4 text-violet-400" />
                        <span className="text-sm sm:text-base font-black tracking-wider text-white">
                            LUIS_PENA<span className="text-indigo-400">•CRT</span>
                        </span>
                    </a>

                    {/* Clean Console Navigation */}
                    <div className="hidden md:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="font-mono text-xs sm:text-sm text-slate-200 hover:text-white transition-colors flex items-center gap-1"
                            >
                                <span className="text-violet-400 font-bold">[{link.code}]</span>
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-2.5">
                        <button
                            onClick={toggleLanguage}
                            className="px-2.5 py-1 rounded bg-[#080814] hover:bg-indigo-950/60 text-white font-mono text-xs font-bold border border-indigo-500/40 transition-colors cursor-pointer"
                        >
                            [{i18n.language === 'es' ? 'ES' : 'EN'}]
                        </button>

                        <DownloadCVButton
                            variant="primary"
                            label={t('navbar.cv_short')}
                            className="!text-xs !px-3.5 !py-1.5 !rounded-lg font-mono font-bold"
                        />
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-1 rounded bg-[#080814] text-white text-xs font-mono font-bold border border-indigo-500/40"
                        >
                            [{i18n.language === 'es' ? 'ES' : 'EN'}]
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-indigo-300 p-1.5"
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#000000] border-b border-indigo-500/40 px-4 pt-2 pb-4 space-y-1.5 font-mono">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block py-2.5 px-3 rounded bg-[#060610] border border-white/10 text-sm font-medium text-white"
                        >
                            <span className="text-violet-400 font-bold mr-2">[{link.code}]</span>
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <DownloadCVButton
                            variant="primary"
                            label={t('hero.download_cv')}
                            className="!w-full !py-2.5 !text-xs font-mono font-bold"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
