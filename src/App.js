import React, { Component } from 'react';
import './App.css';

// the container fires off the component and executes 
import Character from './containers/Character'

import {Navigation} from './components/navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Character />
      </div>
    );
  }
}

export default App;
