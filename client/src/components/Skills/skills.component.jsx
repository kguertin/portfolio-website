import React from 'react';

import './skills.style.css';

export const Skills = (props) => {

        return (
            <div className='skill-container'>
                {props.skills.map(skill => {
                    return (
                    <div className='skill-active'>
                        <p>{skill}</p>
                    </div>
                    )
                })}
                <div className="skill-active"><p>Select All</p></div>
            </div>
        )
}