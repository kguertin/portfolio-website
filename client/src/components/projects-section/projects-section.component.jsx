import React, { Component } from 'react';

import './projects-section.styles.css';
import { Skills } from '../Skills/skills.component';

export class Projects extends Component{
     constructor(){
          super();

          this.state = {
               skills: [],
               activeSkills: []
          }
     }

     componentDidMount() {
          fetch('http://localhost:5000/skills')
               .then (res => console.log(res))
               .catch(err => console.log(err))
     }

     render() {
          return (
               <Skills />
          )
     }
}