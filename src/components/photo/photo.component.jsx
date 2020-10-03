import React from 'react';

import image from './profilePhoto.png'

import './photo.styles.css';

export const Photo = () => {
    return (
        <div className="photo-container">
            <img className='profile-photo' src={image} alt="Kevin Guertin" />
        </div>
    )
}