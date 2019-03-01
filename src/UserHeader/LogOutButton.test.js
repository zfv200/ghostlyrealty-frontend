import React from 'react'
import ReactDOM from 'react-dom'
import LogOutButton from './LogOutButton'

import { shallow } from 'enzyme'

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }
};

//need a mock store here as well

const localStorage = new LocalStorageMock;
localStorage.store.jtw = "fakeJWT"
global.localStorage = localStorage

const mockFn = jest.fn()

const component = shallow(<LogOutButton onClick={mockFn}/>)

it('renders without crashing', ()=>{

  expect(component).toMatchSnapshot()
})

it('clears localStorage when clicked', ()=>{
  console.log(component.find('#logOutButton'))
  expect(mockFn.mock.calls.length).toEqual(1)
})
