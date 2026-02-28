import React from 'react';
import { ArticleBody } from '../../../entities/article/ui/ArticleBody';

export const ArticleWidget = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
            <ArticleBody />
        </div>
    );
};
