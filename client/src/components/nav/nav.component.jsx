import React from 'react';

import './nav.styles.css';

export const Nav = ({currentSection, changeSection}) => {
    const getResume = () => {
        fetch('http://localhost:5000/resume', {
            responseType: 'blob',
            headers: {
                Accept: 'application/pdf',
            }
        })
        .then(response => {
            console.log(response)
            window.open(response.url)
        })
        .catch(err => console.log(err));
    }

    return (
        <ul className="nav">
            <li className={currentSection === 'about' ? "nav-item nav-active": "nav-item"} onClick={e => changeSection('about')}>About</li>
            <li className={currentSection === 'projects' ? "nav-item nav-active": "nav-item"} onClick={e => changeSection('projects')}>Projects</li>
            <li className={currentSection === 'contact' ? "nav-item nav-active": "nav-item"} onClick={e => changeSection('contact')}>Contact</li>
            <li className="nav-item" onClick={() => getResume()}>Download Resume</li>
        </ul>
    )
}