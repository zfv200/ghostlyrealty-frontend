import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../NavBar/NavBar'
import UserHeader from '../UserHeader/UserHeader'
import Footer from '../Footer/Footer'

import HomePage from '../HomePage/HomePage'
import AgentsPage from '../AgentPage/AgentPage.tsx'
import SiteSearchResults from '../SiteSearchResults/SiteSearchResults'
import HouseSearchResults from '../SiteSearchResults/HouseSearchResults'
import NewHaunt from '../NewHaunt/NewHaunt'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div className="left-0 right-0 top-0 fixed z-999">
            <UserHeader />
            <NavBar />
          </div>
          <div className="pl5 pr5 pt5 ml5 mr5 mt5 flex flex-column">
            <Route exact path="/" component={HomePage}/>
            <Route path="/agents" component={AgentsPage}/>
            <Route path="/results" component={SiteSearchResults}/>
            <Route path="/houses" component={HouseSearchResults}/>
            <Route path="/newHaunt" component={NewHaunt}/>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
