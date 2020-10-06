import React from 'react';

import './skills.style.css';

export const Skills = (props) => {

        return (
            <div className='skill-container'>
                {props.skills.map(skill => {
                    return (
                    <div className='skill'>
                        <p>{skill}</p>
                    </div>
                    )
                })}
            </div>
        )
}