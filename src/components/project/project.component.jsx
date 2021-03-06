import React from 'react';

import './project.styles.css';

export const Project = ({project}) => {
    console.log(project)
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
            <div className="project-links">
                <a className="link" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                {project.liveUrl && 
                <a className="link" href={project.liveUrl} target="_blank" rel="noopener noreferrer"><p>Live</p></a>
                }
            </div>
        </div>
    )
}