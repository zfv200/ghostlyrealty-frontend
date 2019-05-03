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

  // static registerGhost(username, password, medium, image){
  static registerGhost(formData){
    return fetch(`${apiUrl}/register`, {
      method: 'post',
      headers: {
        // 'Content-Type':false,
        // 'Process-Data': false,
        Accept: 'application/json'
      },
      // body: JSON.stringify({ghost: {username: username, password: password, image: image}, medium: medium})
      // body: JSON.stringify(formData)
      body: formData
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

  static createHaunt(formData){
    return fetch(`${apiUrl}/houses`, {
      method: "POST",
      headers: {
        // "Content-Type":'application/json',
        "Accept":'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: formData
    }).then(r=>r.json())
  }
  // static createHaunt(houseInfo){
  //   return fetch(`${apiUrl}/houses`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type":'application/json',
  //       "Accept":'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('jwt')}`
  //     },
  //     body: JSON.stringify({
  //       house: houseInfo
  //     })
  //   }).then(r=>r.json())
  // }

  static featureHaunt(id, boolean){
    return fetch(`${apiUrl}/houses/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        "Accept":'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        featured: boolean
      })
    }).then(r=>r.json())
  }

  static createOrDestroyHaunt(ghostId, houseId, type){
    return fetch(`${apiUrl}/haunts`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "type":type
      },
      body: JSON.stringify({
        haunt: {
          ghost_id: ghostId,
          house_id: houseId
        }
      })
    }).then(r=>r.json())
  }

  static fetchHouse(id){
    return fetch(`${apiUrl}/houses/${id}`)
  }

  static fetchMedium(id){
    return fetch(`${apiUrl}/ghosts/${id}`)
  }

  static addCredits(credits, id){
    return fetch(`${apiUrl}/ghosts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({credits: credits})
    }).then(r=>r.json())
  }

  static featureMedium(id){
    return fetch(`${apiUrl}/feature_medium`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({id: id})
    }).then(r=>r.json())
  }

  static editHaunt(data){
    return fetch(`${apiUrl}/houses/${data.house.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data)
    }).then(r=>r.json())
  }

}

export default Adapter
