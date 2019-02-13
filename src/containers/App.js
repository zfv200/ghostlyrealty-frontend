import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar'
import UserHeader from './UserHeader'
import Footer from '../components/Footer'

import HomePage from '../HomePage/HomePage'
import AgentsPage from './AgentPage'
import SearchResults from './SearchResults'
import HouseSearchResults from './HouseSearchResults'


class App extends Component {



  render() {
    return (
      <Router>
        <div className="container">
          <UserHeader />
          <NavBar />
            <Route exact path="/" component={HomePage}/>
            <Route path="/agents" component={AgentsPage}/>
            <Route path="/results" component={SearchResults}/>
            <Route path="/houses" component={HouseSearchResults}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
