import React, { Component } from 'react';

import './projects-section.styles.css';
import projectData from './projectData';

import { Skills } from '../skills/skills.component';
import { Project } from '../project/project.component'; 

export class ProjectsSection extends Component{
     constructor(){
          super();

          this.state = {
               skills: ['Javascript', 'PHP', 'Ruby', "Node", 'React', 'SQL', 'MongoDB'],
               selectedSkills: [],
               selectAll: true,
               projects: []
          }
     }

     componentDidMount() {
          console.log(projectData)
          this.setState({projects: projectData})
          // fetch('http://localhost:5000/getProjects', {
          //      headers: {
          //           "Content-Type": 'application/json'
          //      }
          // })
          // .then(response => response.json())
          // .then(projects => this.setState({projects: projectData}))
          // .catch(err => console.log(err)) 
          
          this.setState({selectedSkills: this.state.skills})
     }

     handleSelectAll = () => {
          this.setState({selectAll: true, selectedSkills: this.state.skills}); 
     }

     handleClearProjects = () => {
          this.setState({selectAll: false, selectedSkills: []})
     }

     handleSelectSkill = skill => {
          if(this.state.selectedSkills.includes(skill)) {
               const updatedSkills = this.state.selectedSkills.filter(i => i !== skill);
               this.setState({selectedSkills: updatedSkills})
          } else {
               const updatedSkills = [...this.state.selectedSkills, skill];
               this.setState({selectedSkills: updatedSkills});
          }
     }

     render() {
          return (
               <>
                    <h1 className="header">My Projects</h1>
                    <Skills 
                         handleSelectSkill={this.handleSelectSkill}
                         handleSelectAll={this.handleSelectAll} 
                         handleClearProjects={this.handleClearProjects}
                         skills={this.state.skills}
                         selectedSkills={this.state.selectedSkills}
                    />
                    {this.state.selectedSkills.length ?
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
                    </div> :
                    <h1 className="header">Please select a skill to see associated projects.</h1>
     }
               </>
          )
     }
}