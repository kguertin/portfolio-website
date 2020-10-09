import React from 'react';

import './skills.style.css';

export const Skills = ({handleSelectSkill, handleSelectAll, skills}) => {
        return (
            <div className='skill-container'>
                {skills.map(skill => {
                    return (
                    <div onClick={() => handleSelectSkill(skill)} className='skill-active'>
                        <p>{skill}</p>
                    </div>
                    )
                })}
                <div onClick={handleSelectAll} className="skill-active"><p>Select All</p></div>
            </div>
        )
}