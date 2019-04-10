import Adapter from '../adapter.js'

export const fetchMyHaunts = (medium) => {
  return Adapter.fetchMediumHaunts(medium)
}
