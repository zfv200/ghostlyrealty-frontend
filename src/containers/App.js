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
import MyHaunts from '../MyHaunts/MyHaunts'
import MyHouses from '../MyHouses/MyHouses'
import AgentDashboard from '../AgentDashboard/AgentDashboard'
import HouseShowPage from '../HouseShowPage/HouseShowPage'
import MediumShowPage from '../MediumShowPage/MediumShowPage'

import { Sidebar, Menu, Icon, Segment } from 'semantic-ui-react'

class App extends Component {
  state={
    visible: false
  }

  handleSidePush = () => {
    const { visible } = this.state;
    console.log(!!visible);
    if (visible){
      this.setState({visible: false})
    } else {
      this.setState({visible: true})
    }
  };

  render() {
    const { visible } = this.state
    return (
      <Router>
        <div>
          <div className="left-0 right-0 top-0 fixed z-999">
            <UserHeader handleSidePush={this.handleSidePush}/>
          </div>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              sticky
              direction="left"
              vertical
              width="wide"
              visible={visible}
            >
              <NavBar onClick={this.handleSidePush}/>
            </Sidebar>
            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
                <div className="pl5 pr5 pt5 ml5 mr5 mt5 flex flex-column">
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/mediums" component={AgentsPage}/>
                  <Route path="/results" component={SiteSearchResults}/>
                  <Route exact path="/houses/:id" component={HouseShowPage}/>
                  <Route path="/mediums/:id" component={MediumShowPage}/>
                  <Route path="/houses/:id/edit" component={NewHaunt}/>
                  <Route exact path="/houses" component={HouseSearchResults}/>
                  <Route path="/newHaunt" component={NewHaunt}/>
                  <Route path="/myhaunts" component={MyHaunts}/>
                  <Route path="/myhouses" component={MyHouses}/>
                  <Route path="/dashboard" component={AgentDashboard}/>
                  <Footer />
                </div>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

export default App
