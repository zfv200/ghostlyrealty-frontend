import React from 'react'
import { connect } from 'react-redux'
import { hauntHouse,leaveHouse } from '../UserActions/userActions'

import { Button } from 'semantic-ui-react'

class HauntHouseButton extends React.Component {
  state={
    haunting: false
  }

  componentDidMount(){
    if(!!this.props.currentUserHouses.filter(house=>house.id===this.props.id).length){
      this.setState({
        haunting: true
      })
    }
  }

  handleClick = (e) => {
    if(this.state.haunting){
      this.props.leaveHouse(this.props.currentUser.id, this.props.id)
    } else {
      this.props.hauntHouse(this.props.currentUser.id, this.props.id)
    }

    let newStatus = !this.state.haunting
    this.setState({
      haunting: newStatus
    })
  }

  render(){
    return (
      <Button basic color='black' onClick={this.handleClick}>
        {this.state.haunting ? "Leave This House!" : "Begin Haunting!"}
      </Button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    currentUserHouses: state.userReducer.currentUserHouses
  }
}

export default connect(mapStateToProps, { hauntHouse, leaveHouse })(HauntHouseButton)
