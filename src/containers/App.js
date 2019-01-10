import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage'
import AgentsPage from './AgentPage'
import NavBar from '../components/NavBar'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <NavBar/>
        <Route exact path="/" component={HomePage}/>
          <Route path="/agents" component={AgentsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
