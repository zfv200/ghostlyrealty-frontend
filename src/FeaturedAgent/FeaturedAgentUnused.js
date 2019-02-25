// import React from 'react'
// import { connect } from 'react-redux'
//
// const FeaturedAgent = (props) =>{
//   if(props.agent){
//     return (
//       <div className="homepagerow featuredAgent">
//       <div className="featuredAgentChild">
//       <h1>{props.agent.name}</h1>
//       <img alt={`${props.agent.name}'s headshot'`} src={props.agent.image}/>
//       <h3>"{props.agent.motto}"</h3>
//       </div>
//       </div>
//     )
//   } else {
//     return null
//   }
// }
//
// const mapStateToProps = (state) =>{
//   return {
//     agent: state.agentReducer.featuredAgent
//   }
// }
//
// export default connect(mapStateToProps)(FeaturedAgent)
