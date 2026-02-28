import React from 'react';
import { Table } from '../../../shared/ui/table/Table';
import { Typography } from '../../../shared/ui/typography/Typography';
import { UserFiltersBar } from '../../../features/user-filtering/ui/UserFiltersBar';
import { UserPaginator } from '../../../features/user-pagination/ui/UserPaginator';
import { DeleteUserAction } from '../../../features/user-delete/ui/DeleteUserAction';
import { useUsers } from '../../../entities/user/model/useUsers';
import { UserAvatar } from '../../../entities/user/ui/UserAvatar';

export const UserListBoard = () => {
    const {
        users,
        isLoading,
        totalPages,
        currentPage,
        searchQuery,
        handleSearch,
        handlePageChange,
        handleDelete
    } = useUsers();

    const columns = [
        {
            header: 'Usuario',
            accessorKey: 'user',
            render: (user) => <UserAvatar user={user} />
        },
        {
            header: 'Correo Electrónico',
            accessorKey: 'email',
            render: (user) => (
                <span className="text-slate-600 dark:text-slate-400 font-medium tracking-wide">
                    {user.email}
                </span>
            )
        },
        {
            header: 'ID',
            accessorKey: 'id',
            render: (user) => (
                <span className="text-slate-400 dark:text-slate-500 font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    #{user.id}
                </span>
            )
        },
        {
            header: 'Acciones',
            accessorKey: 'actions',
            render: (user) => (
                <div className="flex justify-end pr-4">
                    <DeleteUserAction user={user} onDelete={handleDelete} />
                </div>
            )
        }
    ];

    return (
        <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg p-6 sm:p-8 mt-12 mb-12 relative overflow-hidden">
            {/* Decorative background element showing this is a "Demo" block */}
            <div className="absolute top-0 right-0 -m-4 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -m-4 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
                <Typography variant="h3" as="h2" className="mt-0 text-indigo-900 dark:text-indigo-400 flex items-center gap-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded font-bold tracking-wider uppercase">Demo</span>
                    Listado de Usuarios Interactivo
                </Typography>
                <Typography variant="body" className="mb-8">
                    Este bloque es un Widget completo ensamblado que utiliza los Features, la Entidad `User` y los componentes genéricos `Shared`. ¡Busca un nombre o navega entre las páginas!
                </Typography>

                <UserFiltersBar
                    searchQuery={searchQuery}
                    onSearch={handleSearch}
                />

                <Table
                    data={users}
                    columns={columns}
                    loading={isLoading}
                />

                <UserPaginator
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};
