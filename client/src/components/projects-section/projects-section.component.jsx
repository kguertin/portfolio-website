import React, { Component } from 'react';

import './projects-section.styles.css';
import { Skills } from '../Skills/skills.component';

export class Projects extends Component{
     constructor(){
          super();

          this.state = {
               skills: ['Javascript', 'PHP', 'Ruby', "Node", 'React', 'SQL', 'MongoDB'],
               selectedSkills: [],
               selectAll: true
          }
     }

     render() {
          return (
               <>
               <h1 className="header">Some of My Work</h1>
               <Skills skills={this.state.skills}/>
               </>
          )
     }
}