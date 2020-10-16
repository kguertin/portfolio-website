import React from 'react';

import { Photo } from '../photo/photo.component';
import { Blurb } from '../blurb/blurb.component';

import './about-section.styles.css'

export const About = () => {
    return (
        <div className="about">
            <Photo />
            <Blurb />
        </div>
    )
}