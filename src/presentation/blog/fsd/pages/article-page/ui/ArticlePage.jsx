import React, { useEffect } from 'react';
import { Container } from '../../../shared/ui/layout/Container';
import { ArticleWidget } from '../../../widgets/article-view/ui/ArticleWidget';
import { UserListBoard } from '../../../widgets/user-list-board/ui/UserListBoard';
import Navbar from '../../../../../components/organisms/Navbar';

const ArticlePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <Navbar />
            <main className="pt-24 pb-16">
                <Container>
                    <ArticleWidget />

                    <div className="my-16 border-t border-slate-200 dark:border-slate-800"></div>

                    <UserListBoard />
                </Container>
            </main>
        </div>
    );
};

export default ArticlePage;
