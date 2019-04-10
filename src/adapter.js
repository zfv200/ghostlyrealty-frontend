let apiUrl = "http://localhost:3000/api/v1"

class Adapter{
  static searchSite(searchTerm){
    return fetch(`${apiUrl}/search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    }).then(res=>res.json())
  }

  static logInGhost(username, password){
    return fetch(`${apiUrl}/login`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ghost: {
        username: username,
        password: password
      }})
    })
  }

  static registerGhost(username, password, medium, image){
    return fetch(`${apiUrl}/register`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ghost: {username: username, password: password, image: image}, medium: medium})
    })
  }

  static postRecentSearch(searchProps){
    return fetch(`${apiUrl}/recent_search`, {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(searchProps)
    }).then(r=>r.json())
  }

  static fetchAgents(){
    return fetch(`${apiUrl}/ghosts`, {
      headers: {
        type: "agents"
      }
    }).then(r=>r.json())
  }

  static fetchFeaturedHouses(){
    return fetch(`${apiUrl}/featured`)
    .then(res=>res.json())
  }

  static fetchCurrentGhost(){
    return fetch(`${apiUrl}/profile`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response=>response.json())
  }

  static fetchFeaturedAgent(){
    return fetch(`${apiUrl}/featuredagent`)
    .then(r=>r.json())
  }

  static searchProperties(searchObj){
    return fetch(`${apiUrl}/search_properties`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search: searchObj
      })
    }).then(res=>res.json())
  }

  static searchSite(searchTerm){
    return fetch(`${apiUrl}/search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    }).then(res=>res.json())
  }

  static createHaunt(houseInfo){
    return fetch(`${apiUrl}/houses`, {
      method: "POST",
      headers: {
        "Content-Type":'application/json',
        "Accept":'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        house: houseInfo
      })
    }).then(r=>r.json())
  }

}

export default Adapter
