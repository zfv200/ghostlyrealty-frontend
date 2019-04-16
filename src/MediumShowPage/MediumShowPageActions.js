import Adapter from '../adapter.js'

export const fetchMedium = (id) => {
  return Adapter.fetchMedium(id)
  .then(r=>r.json())
}
