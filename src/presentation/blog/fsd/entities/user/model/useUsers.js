import { useState, useEffect, useCallback } from 'react';
import { fetchUsers, deleteUserMock } from '../../../shared/api/mockUsers';

export const useUsers = (initialQuery = '', initialPage = 1, limit = 5) => {
    const [query, setQuery] = useState(initialQuery);
    const [page, setPage] = useState(initialPage);
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const loadUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await fetchUsers(query, page, limit);
            setUsers(data.users);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
        }
    }, [query, page, limit]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    const handleSearch = (newQuery) => {
        setQuery(newQuery);
        setPage(1); // Reset page on new search
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUserMock(userId);
            // Refresh current page
            await loadUsers();
            return true;
        } catch (error) {
            console.error('Error deleting user:', error);
            return false;
        }
    };

    return {
        users,
        totalPages,
        currentPage: page,
        isLoading,
        searchQuery: query,
        handleSearch,
        handlePageChange,
        handleDelete
    };
};
