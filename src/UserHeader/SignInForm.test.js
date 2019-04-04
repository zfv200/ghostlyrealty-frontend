import React from 'react'
import { mount } from 'enzyme'
import SignInForm from './SignInForm'
import Root from '../Root'
import userReducer from '../Reducers/users'

let wrapped;


describe('SignInForm', ()=>{

  beforeEach(()=>{

    wrapped = mount(
      <Root initialState={initialState}>
        <SignInForm />
      </Root>
    )
  })

  afterEach(()=>{
    wrapped.unmount()
  })

  it('has a username field, password field, and submit button', ()=>{
    expect(wrapped.find('#username').length).toEqual(1)
    expect(wrapped.find('#password').length).toEqual(1)
    expect(wrapped.find('#sign-in-submit').length).toEqual(1)
  })

  it('has a username field users can type into', ()=>{
    wrapped.find('#username').simulate('change', {
      target: {value: 'casper2', id: "username"}
    })
    wrapped.update()
    expect(wrapped.find('#username').prop('value')).toEqual('casper2')
  })

  it('has a password field users can type into', ()=>{
    wrapped.find('#password').simulate('change', {
      target: {value: '123', id: 'password'}
    })
    wrapped.update()
    expect(wrapped.find('#password').prop('value')).toEqual('123')
  })

  it('sets a localStorage token upon successful login', () => {
    wrapped.find('#username').simulate('change', {
      target: {value: 'casper2', id: "username"}
    })
    wrapped.find('#password').simulate('change', {
      target: {value: '123', id: 'password'}
    })
    wrapped.find('form').simulate('submit')
    
  })
})
