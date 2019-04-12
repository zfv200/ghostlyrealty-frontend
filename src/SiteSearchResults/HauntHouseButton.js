import React from 'react'
import { connect } from 'react-redux'
import { hauntHouse,leaveHouse } from '../UserActions/userActions'

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

  handleClick = () => {
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
      <button className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer w5" onClick={this.handleClick}>
        {this.state.haunting ? "Leave This House!" : "Begin Haunting!"}
      </button>
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
