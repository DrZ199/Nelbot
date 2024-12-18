import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatBox from './ChatBox';
import './layout.css';

const Layout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="layout">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <main className="main-content">
                <ChatBox />
            </main>
        </div>
    );
};

export default Layout;
