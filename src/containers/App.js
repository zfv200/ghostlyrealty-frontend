import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';

import HomePage from './HomePage'

class App extends Component {

  render() {
    return (
      <Router>
        <Route>
          <HomePage />
        </Route>
      </Router>
    );
  }
}

export default App;
