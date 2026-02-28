import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-slate-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label="Alternar tema oscuro"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 absolute transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            ) : null}
            {theme === 'light' ? (
                <Sun className="w-5 h-5 absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            ) : null}

            {/* Real rendering */}
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
    );
};

export default ThemeToggle;
