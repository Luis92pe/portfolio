export let mockUsers = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Moderator', avatar: 'https://i.pravatar.cc/150?u=charlie' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=diana' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=ethan' },
    { id: 6, name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=fiona' },
    { id: 7, name: 'George Costanza', email: 'george@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=george' },
    { id: 8, name: 'Hannah Abbott', email: 'hannah@example.com', role: 'Moderator', avatar: 'https://i.pravatar.cc/150?u=hannah' },
    { id: 9, name: 'Ian Malcolm', email: 'ian@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=ian' },
    { id: 10, name: 'Julia Roberts', email: 'julia@example.com', role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=julia' },
    { id: 11, name: 'Kevin Hart', email: 'kevin@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=kevin' },
    { id: 12, name: 'Laura Croft', email: 'laura@example.com', role: 'User', avatar: 'https://i.pravatar.cc/150?u=laura' }
];

export const fetchUsers = (query = '', page = 1, limit = 5) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filtered = mockUsers;
            if (query) {
                const lowerQuery = query.toLowerCase();
                filtered = mockUsers.filter(u =>
                    u.name.toLowerCase().includes(lowerQuery) ||
                    u.email.toLowerCase().includes(lowerQuery)
                );
            }

            const total = filtered.length;
            const totalPages = Math.ceil(total / limit);
            const start = (page - 1) * limit;
            const paginated = filtered.slice(start, start + limit);

            resolve({
                users: paginated,
                total,
                totalPages,
                currentPage: page
            });
        }, 600); // Simulated network delay
    });
};

export const deleteUserMock = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockUsers = mockUsers.filter(u => u.id !== id);
            resolve({ success: true });
        }, 800);
    });
};
