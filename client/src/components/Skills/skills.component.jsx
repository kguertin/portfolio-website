import React, { Component } from 'react';

import './skills.style.css';

export class Skills extends Component {
    constructor(){
        super();

        this.state = {
            skills: [],
            activeSkills: []

        }
    }




    render(){
        return (
            <div>
                <h1>Skills</h1>
                <p>hello</p>
            </div>
        )
    }
}