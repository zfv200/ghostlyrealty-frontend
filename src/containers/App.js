import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';

import HomePage from './HomePage'
import AgentsPage from './AgentPage'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/agents" component={AgentsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
