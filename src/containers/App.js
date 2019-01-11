import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage'
import AgentsPage from './AgentPage'
import NavBar from '../components/NavBar'
import SearchResults from './SearchResults'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <NavBar/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/agents" component={AgentsPage}/>
          <Route path="/results" component={SearchResults}/>
        </div>
      </Router>
    );
  }
}

export default App;
