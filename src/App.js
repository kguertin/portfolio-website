import React, { Component } from 'react';

import { About } from './components/about-section/about-section.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {

    }

  }

  render(){
    return (
      <div>
        <About />
      </div>
    )
  }
}

export default App;
