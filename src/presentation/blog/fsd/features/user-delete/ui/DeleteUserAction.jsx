import React, { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';
import { Button } from '../../../shared/ui/button/Button';
import { Modal } from '../../../shared/ui/modal/Modal';

export const DeleteUserAction = ({ user, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleConfirm = async () => {
        setIsDeleting(true);
        const success = await onDelete(user.id);
        if (success) {
            setIsOpen(false);
        }
        setIsDeleting(false);
    };

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                aria-label={`Eliminar a ${user.name}`}
            >
                <Trash2 size={18} />
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => !isDeleting && setIsOpen(false)}
                title={
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                        <AlertTriangle size={20} />
                        Confirmar Eliminación
                    </div>
                }
                footer={
                    <>
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            disabled={isDeleting}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="danger"
                            onClick={handleConfirm}
                            disabled={isDeleting}
                        >
                            {isDeleting ? 'Eliminando...' : 'Eliminar Usuario'}
                        </Button>
                    </>
                }
            >
                <div className="py-2">
                    <p className="mb-4">
                        ¿Estás seguro de que deseas eliminar permanentemente a este usuario? Esta acción no se puede deshacer.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <img
                            src={user.avatar}
                            alt=""
                            className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700"
                        />
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{user.name}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{user.email}</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
