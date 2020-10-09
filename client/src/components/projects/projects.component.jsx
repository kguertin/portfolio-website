import React from 'react';

import './projects.styles.css';

export const Projects = ({projects}) => {
    return (
        <div className="project-container">
            {projects.map(project => {
                return (
                    <div className="project-card">
                        <img src="" alt="project preview" />
                        <h1>{project.title}</h1>
                    <p>{project.description}</p>
                        <div className="project-skills">
                            {project.tags.map(tag => {
                                return <p className="skill-tag">{tag}</p>
                            }) 
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}