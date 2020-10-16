import React from 'react';

import './skills.style.css';

export const Skills = ({selectedSkills, handleSelectSkill, handleSelectAll, handleClearProjects, skills}) => {
        return (
            <div className='skill-container'>
                {skills.map(skill => {
                    return (
                    <div onClick={() => handleSelectSkill(skill)} className={selectedSkills.includes(skill) ? 'skill-active' : 'skill-not-active'}>
                        <p>{skill}</p>
                    </div>
                    )
                })}
                {selectedSkills.length === skills.length ?
                <div onClick={handleClearProjects} className="skill-not-active"><p>Clear Projects</p></div> :
                <div onClick={handleSelectAll} className="skill-active"><p>Select All</p></div> 

                }
            </div>
        )
}