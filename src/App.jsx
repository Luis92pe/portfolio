import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './presentation/pages/Home/HomePage';
import ArticlePage from './presentation/blog/fsd/pages/article-page/ui/ArticlePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog/fsd" element={<ArticlePage />} />
            </Routes>
        </Router>
    );
}

export default App;
