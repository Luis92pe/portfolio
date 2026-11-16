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
        { name: t('navbar.projects'), href: isHome ? '#projects' : '/#projects' },
        { name: t('navbar.experience'), href: isHome ? '#career' : '/#career' },
        { name: t('navbar.mentorship'), href: isHome ? '#mentorship' : '/#mentorship' },
        { name: t('navbar.contact'), href: isHome ? '#contact' : '/#contact' },
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
        <nav className="fixed w-full z-50 bg-[#05050A]/80 backdrop-blur-xl border-b border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-14 items-center">
                    {/* Minimalist Brand */}
                    <a
                        href={isHome ? '#home' : '/#home'}
                        className="flex items-center gap-2 group"
                    >
                        <Terminal className="w-4 h-4 text-violet-400" />
                        <span className="text-sm sm:text-base font-bold font-mono tracking-tight text-white">
                            luis<span className="text-indigo-400">.pena</span>
                        </span>
                    </a>

                    {/* Clean 4-item Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-slate-300 hover:text-white transition-colors text-xs font-medium tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions: Language + Compact CV */}
                    <div className="hidden md:flex items-center gap-2.5">
                        <button
                            onClick={toggleLanguage}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white font-mono text-xs border border-white/10 transition-colors cursor-pointer"
                        >
                            {i18n.language === 'es' ? 'ES' : 'EN'}
                        </button>

                        <DownloadCVButton
                            variant="primary"
                            label={t('navbar.cv_short')}
                            className="!text-xs !px-3.5 !py-1.5 !rounded-lg"
                        />
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-1 rounded-md bg-white/[0.05] text-slate-300 text-xs font-mono border border-white/10"
                        >
                            {i18n.language === 'es' ? 'ES' : 'EN'}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-1.5"
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Clean Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#080811]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05]"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <DownloadCVButton
                            variant="primary"
                            label={t('hero.download_cv')}
                            className="!w-full !py-2.5 !text-xs"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
