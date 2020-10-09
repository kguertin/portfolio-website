import React, { Component } from 'react';

import './projects-section.styles.css';
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
          fetch('http://localhost:5000/getProjects', {
               headers: {
                    "Content-Type": 'application/json'
               }
          })
          .then(response => response.json())
          .then(projects => this.setState({projects: projects.projects}))
          .catch(err => console.log(err)) 
          
          this.setState({selectedSkills: this.state.skills})
     }

     handleSelectAll = () => {
          this.state.selectAll === true ? this.setState({selectAll: false, selectedSkills: []}) : this.setState({selectAll: true, selectedSkills: this.state.skills}); 
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
                         skills={this.state.skills}
                    />
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