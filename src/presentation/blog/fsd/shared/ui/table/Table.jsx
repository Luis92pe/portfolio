import React from 'react';

export const Table = ({ data = [], columns = [], loading = false }) => {
    if (loading) {
        return (
            <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (!data.length) {
        return (
            <div className="w-full py-12 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-500 dark:text-slate-400">
                No se encontraron datos.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 font-medium border-b border-slate-200 dark:border-slate-800">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-6 py-4">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {data.map((row, rowIndex) => (
                        <tr key={row.id || rowIndex} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {col.render ? col.render(row) : row[col.accessorKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
