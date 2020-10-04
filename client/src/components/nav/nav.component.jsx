import React from 'react';

import './nav.styles.css';

export const Nav = ({changeSection}) => {
    return (
        <ul className="nav">
            <li className="nav-item" onClick={e => changeSection('about')}>About</li>
            <li className="nav-item" onClick={e => changeSection('projects')}>Projects</li>
            <li className="nav-item" onClick={e => changeSection('contact')}>Contact</li>
            <li className="nav-item">Download Resume</li>
        </ul>
    )
}