import React from 'react';

export const Typography = ({
    variant = 'body',
    as: Component = 'p',
    className = '',
    children
}) => {
    const baseStyles = 'text-slate-800 dark:text-slate-200';

    const variants = {
        h1: 'text-4xl md:text-5xl font-extrabold tracking-tight mb-6',
        h2: 'text-3xl font-bold tracking-tight mb-4 mt-8',
        h3: 'text-2xl font-bold mb-3 mt-6',
        body: 'text-lg leading-relaxed mb-4 text-slate-600 dark:text-slate-400',
        lead: 'text-xl leading-relaxed mb-6 font-medium text-slate-700 dark:text-slate-300',
        small: 'text-sm text-slate-500',
    };

    const currentVariant = variants[variant] || variants.body;

    return (
        <Component className={`${baseStyles} ${currentVariant} ${className}`}>
            {children}
        </Component>
    );
};
