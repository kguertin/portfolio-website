import React, { Component } from 'react';

import { Nav } from './components/nav/nav.component';
import { About } from './components/about-section/about-section.component';
import { ProjectsSection } from './components/projects-section/projects-section.component';
import { Contact } from './components/contact-section/contact-section.component';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      currentSection: 'about'
    }

  }

  changeSection = (section) => {
    this.setState({
      currentSection: section
    })
  }

  render(){
    return (
      <div>
        <Nav currentSection={this.state.currentSection} changeSection={this.changeSection} />
        { this.state.currentSection === 'about' && <About /> }
        { this.state.currentSection === 'projects' && <ProjectsSection /> }
        { this.state.currentSection === 'contact' && <Contact /> }
      </div>
    )
  }
}

export default App;
