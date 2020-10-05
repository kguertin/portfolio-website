import React from 'react';

import { saveAs } from 'file-saver';

import './nav.styles.css';

export const Nav = ({changeSection}) => {
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
            <li className="nav-item" onClick={e => changeSection('about')}>About</li>
            <li className="nav-item" onClick={e => changeSection('projects')}>Projects</li>
            <li className="nav-item" onClick={e => changeSection('contact')}>Contact</li>
            <li className="nav-item" onClick={() => getResume()}>Download Resume</li>
        </ul>
    )
}