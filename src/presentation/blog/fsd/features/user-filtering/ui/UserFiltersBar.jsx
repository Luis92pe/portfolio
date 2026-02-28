import React from 'react';
import { Input } from '../../../shared/ui/input/Input';
import { Search } from 'lucide-react';

export const UserFiltersBar = ({ searchQuery, onSearch }) => {
    return (
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 max-w-sm">
                <Input
                    type="text"
                    placeholder="Buscar por nombre o email..."
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    icon={<Search size={18} />}
                />
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Filtros de Usuarios
            </div>
        </div>
    );
};
