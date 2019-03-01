import React from 'react'
import ReactDOM from 'react-dom'
import CarouselTile from './CarouselTile'

import { shallow } from 'enzyme'

const house = {
  name: "Winchester Mystery House",
  image_url: "https://media.cntraveler.com/photos/580e6787e62940c66bd2be0d/master/w_820,c_limit/winchester-mystery-house-san-jose-GettyImages-110714519.jpg",
}

it('renders without crashing', ()=>{
  const component = shallow(<CarouselTile {...house}/>)

  expect(component).toMatchSnapshot()
})
