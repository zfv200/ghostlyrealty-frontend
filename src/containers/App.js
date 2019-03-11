import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../NavBar/NavBar'
import UserHeader from '../UserHeader/UserHeader'
import Footer from '../Footer/Footer'

import HomePage from '../HomePage/HomePage'
import AgentsPage from '../AgentPage/AgentPage.tsx'
import SiteSearchResults from '../SiteSearchResults/SiteSearchResults'
import HouseSearchResults from '../SiteSearchResults/HouseSearchResults'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <UserHeader />
          <NavBar />
            <Route exact path="/" component={HomePage}/>
            <Route path="/agents" component={AgentsPage}/>
            <Route path="/results" component={SiteSearchResults}/>
            <Route path="/houses" component={HouseSearchResults}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
