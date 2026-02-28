import React from 'react';
import { Paginator } from '../../../shared/ui/pagination/Paginator';

export const UserPaginator = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="mt-6">
            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};
