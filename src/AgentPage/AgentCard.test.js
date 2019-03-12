import React from 'react'
import ReactDOM from 'react-dom'
import AgentCard from './AgentCard.tsx'

import { shallow } from 'enzyme'

const agent = {
  username: 'King Hamlet',
  age: 500,
  image: 'https://i.ytimg.com/vi/IBQucj2hea4/hqdefault.jpg',
  motto: "Lend thy serious hearing--for your next move!"
}

it('renders without crashing', ()=>{
  const component = shallow(<AgentCard {...agent}/>)

  expect(component).toMatchSnapshot()
})
