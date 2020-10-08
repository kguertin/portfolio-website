import React, { Component } from 'react';

import './projects-section.styles.css';
import { Skills } from '../skills/skills.component';
import { Projects } from '../projects/projects.component' 

export class ProjectsSection extends Component{
     constructor(){
          super();

          this.state = {
               skills: ['Javascript', 'PHP', 'Ruby', "Node", 'React', 'SQL', 'MongoDB'],
               selectedSkills: ['Javascript', 'PHP', 'Ruby', "Node", 'React', 'SQL', 'MongoDB'],
               selectAll: true,
               projects: []
          }
     }

     componentDidMount() {
          fetch('http://localhost:5000/getProjects', {
               headers: {
                    "Content-Type": 'application/json'
               }
          })
          .then(response => response.json())
          .then(projects => {
               this.setState({projects: projects.projects})
               console.log(this.state)
          })
          .catch(err => console.log(err)) 
     }

     render() {
          return (
               <>
               <h1 className="header">My Projects</h1>
               <Skills skills={this.state.skills}/>
               <Projects />
               </>
          )
     }
}