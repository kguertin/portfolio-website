import React, { Component } from 'react';

import { Nav } from './components/nav/nav.component';
import { About } from './components/about-section/about-section.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      currentSection: 'about' 

    }

  }

  render(){
    return (
      <div>
        <Nav />
        { this.state.currentSection === 'about' && <About /> }
      </div>
    )
  }
}

export default App;
