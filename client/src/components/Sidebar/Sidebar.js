import React from 'react';
import './Sidebar.css';
import ToggleButton from'../ToggleButton/ToggleButton';

function Sidebar() {
    return (
        <nav className="wrapper">
            <div className="sidebar">
                <div>
                    <ToggleButton />
                </div>
                <ul>
                    <li><a href='/'><i className="fas fa-home"></i> Home</a></li>
                    <li><a href='/portfolio'><i className="fas fa-project-diagram"></i> Portfolio</a></li>
                    <li><a href='/about'><i className="fas fa-female"></i>About</a></li>
                    <li><a href='/contact'><i className="fas fa-address-card"></i> Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;

