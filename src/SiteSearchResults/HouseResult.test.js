import React from 'react'
import ReactDOM from 'react-dom'
import HouseResult from './HouseResult'

import { shallow } from 'enzyme'

const result = {
  address: null,
  burial_ground: false,
  featured: true,
  id: 1,
  image_url: "https://media.cntraveler.com/photos/580e6787e62940c66bd2be0d/master/w_820,c_limit/winchester-mystery-house-san-jose-GettyImages-110714519.jpg",
  name: "Winchester Mystery House",
  rooms: null,
  solo_haunt: false
}

it('renders without crashing', ()=>{
  const component = shallow(<HouseResult {...result}/>)

  expect(component).toMatchSnapshot()
})
