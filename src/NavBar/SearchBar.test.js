import React from 'react'
import { shallow } from 'enzyme'
import { SearchBar } from './SearchBar'

let mockProps = {
  history: [],
  addBlankSearchError: jest.fn(),
  clearBlankSearchError: jest.fn(),
  searchSite: jest.fn()
}

describe('searchBar', ()=>{
  let searchBar = shallow(<SearchBar {...mockProps}/>)
  const fakeEvent = { preventDefault: () => console.log('preventDefault') };

  it('renders correctly without crashing', ()=>{

    expect(searchBar).toMatchSnapshot()
  })

  it('updates the input when query is typed', ()=>{
    let searchBar = shallow(<SearchBar />)

    searchBar.find('[id="nav-search-bar"]').simulate('change', { target: { value: 'Hello' } })
    expect(searchBar.state()).toEqual({
      searchTerm: 'Hello'
    })
  })

  it('calls the blank search error when submitted with empty input', ()=>{
    searchBar.find('[id="nav-search-bar-form"]').simulate('submit', fakeEvent);

    expect(mockProps.addBlankSearchError).toBeCalled()
  })

  it('pushes the correct path to the history object when submitted', ()=>{
    searchBar.find('[id="nav-search-bar"]').simulate('change', { target: { value: 'Hello' } })
    searchBar.find('[id="nav-search-bar-form"]').simulate('submit', fakeEvent);
    expect(mockProps.history).toEqual(['/results'])
  })

  it('executes siteSearch prop function when submitted', ()=>{
    searchBar.find('[id="nav-search-bar"]').simulate('change', { target: { value: 'Hello' } })
    searchBar.find('[id="nav-search-bar-form"]').simulate('submit', fakeEvent);
    expect(mockProps.searchSite).toBeCalled()
  })

  it('clears out the blank search error when query is provided after error', ()=>{
    //left off here
    searchBar.find('[id="nav-search-bar-form"]').simulate('submit', fakeEvent);
    expect(mockProps.addBlankSearchError).toBeCalled()
    searchBar.find('[id="nav-search-bar"]').simulate('change', { target: { value: 'Hello' } })
    expect(mockProps.clearBlankSearchError).toBeCalled()

  })

  it('clears out the search value/state when site is successfully searched', ()=>{
    searchBar.find('[id="nav-search-bar"]').simulate('change', { target: { value: 'Hello' } })
    searchBar.find('[id="nav-search-bar-form"]').simulate('submit', fakeEvent);
    expect(searchBar.state()).toEqual({
      searchTerm: ''
    })
  })

})
