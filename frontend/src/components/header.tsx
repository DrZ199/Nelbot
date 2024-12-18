import React from 'react';
import './header.css';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="header">
            <h1 className="app-title">NelsonBot</h1>
            <button className="menu-button" onClick={toggleSidebar}>
                ≡
            </button>
        </header>
    );
};

export default Header;
