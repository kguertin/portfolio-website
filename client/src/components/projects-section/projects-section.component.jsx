import React, { Component } from 'react';

import './projects-section.styles.css';
import { Skills } from '../skills/skills.component';
import { Project } from '../project/project.component'; 

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
          .then(projects => this.setState({projects: projects.projects}))
          .catch(err => console.log(err)) 
     }

     handleSelectAll = () => {
          this.state.selectAll === true ? this.setState({selectAll: false, selectedSkills: []}) : this.setState({selectAll: true, selectedSkills: this.state.skills});
          
     }

     render() {
          return (
               <>
                    <h1 className="header">My Projects</h1>
                    <Skills handleSelectAll={this.handleSelectAll} skills={this.state.skills}/>
                    <div className="project-container">
                         {this.state.projects.map(project => {
                              let display;
                              this.state.selectedSkills.forEach(skill => {
                                   if(project.tags.includes(skill)){
                                        return display = true;
                                   }
                              })   
                              if(display){
                                   return <Project project={project} />
                              }
                         })}
                    </div>
               </>
          )
     }
}