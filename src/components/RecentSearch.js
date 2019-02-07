import React from 'react'

const RecentSearch = (props) => {
  return (
    <div onClick={()=>console.log(props)} className="recentSearch">
      <h3 className="recentSearchText">{props.description}</h3><br></br>
    </div>
  )
}

export default RecentSearch
