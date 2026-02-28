import React from 'react';

export const UserAvatar = ({ user }) => {
    return (
        <div className="flex items-center gap-4">
            <img
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                src={user.avatar}
                alt={`Avatar de ${user.name}`}
            />
            <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {user.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                    {user.role}
                </div>
            </div>
        </div>
    );
};
