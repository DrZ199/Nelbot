import React from 'react';
import './sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
    return (
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={closeSidebar}>
                ×
            </button>
            <ul>
                <li>What are common symptoms of pediatric fever?</li>
                <li>How to handle infant vaccination schedules?</li>
                <li>Signs of respiratory distress in children</li>
                <li>Common childhood allergies and treatments</li>
            </ul>
        </nav>
    );
};

export default Sidebar;
