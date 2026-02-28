import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';

export const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-0">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-lg transform overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-2xl transition-all border border-slate-200 dark:border-slate-800">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4">
                    <Typography variant="h3" as="h3" className="!m-0 text-lg">
                        {title}
                    </Typography>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-500 rounded-full"
                        aria-label="Cerrar modal"
                    >
                        <X size={20} />
                    </Button>
                </div>

                {/* Body */}
                <div className="px-6 py-6 text-slate-600 dark:text-slate-300">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};
