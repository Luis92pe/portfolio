import React from 'react';

export const Input = ({ icon, className = '', ...props }) => {
    return (
        <div className={`relative flex items-center ${className}`}>
            {icon && (
                <span className="absolute left-3 text-slate-400">
                    {icon}
                </span>
            )}
            <input
                className={`w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block ${icon ? 'pl-10' : 'pl-3'
                    } p-2.5 transition-colors placeholder-slate-400`}
                {...props}
            />
        </div>
    );
};
