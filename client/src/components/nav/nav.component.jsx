import React from 'react';

import './nav.styles.css';

export const Nav = ({changeSection}) => {
    const serveResume = () => {
        fetch('http://localhost:5000/resume')
            .catch(err => console.log(err));
    }

    return (
        <ul className="nav">
            <li className="nav-item" onClick={e => changeSection('about')}>About</li>
            <li className="nav-item" onClick={e => changeSection('projects')}>Projects</li>
            <li className="nav-item" onClick={e => changeSection('contact')}>Contact</li>
            <li className="nav-item" onClick={() => serveResume()}>Download Resume</li>
        </ul>
    )
}