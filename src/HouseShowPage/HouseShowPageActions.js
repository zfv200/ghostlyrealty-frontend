import Adapter from '../adapter.js'

export const fetchHouse = (id) => {
  return Adapter.fetchHouse(id)
  .then(r=>r.json())
}
