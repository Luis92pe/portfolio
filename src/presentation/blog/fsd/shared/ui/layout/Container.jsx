import React from 'react';

export const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
            {children}
        </div>
    );
};
