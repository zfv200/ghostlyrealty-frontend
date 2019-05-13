import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux'

import { toggleMenu } from './AppActions'

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
import EditAgent from '../AgentDashboard/EditAgent'

import { Sidebar, Menu, Icon, Segment } from 'semantic-ui-react'

class App extends Component {
  // state={
  //   visible: false
  // }
  //
  // handleSidePush = () => {
  //   const { visible } = this.state;
  //   if (visible){
  //     this.setState({visible: false})
  //   } else {
  //     // scrollToTop();
  //     this.setState({visible: true})
  //   }
  // };

  // handleAppClick = (e) => {
  //   if (this.state.visible && e.target.id !== "nav-search-bar") this.setState({visible: false})
  // }

  render() {
    return (
      <Router>
        <div onClick={(e)=>{this.props.toggleMenu(e, true)}}>
          <div className="left-0 right-0 top-0 fixed z-999">
            <UserHeader />
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
              visible={this.props.menuVisible}
            >
              <NavBar/>
            </Sidebar>
            <Sidebar.Pusher dimmed={this.props.menuVisible}>
              <Segment basic>
                <div className="pl5 pr5 pt5 ml5 mr5 mt5 flex flex-column">
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/mediums" component={AgentsPage}/>
                  <Route path="/results" component={SiteSearchResults}/>
                  <Route exact path="/houses/:id" component={HouseShowPage}/>
                  <Route exact path="/mediums/:id" component={MediumShowPage}/>
                  <Route path="/mediums/:id/edit" component={EditAgent}/>
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

const mapStateToProps = (state) => {
  return {
    menuVisible: state.userReducer.menuVisible
  }
}

export default connect(mapStateToProps, { toggleMenu })(App)
