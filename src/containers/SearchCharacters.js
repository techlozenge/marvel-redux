import React from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../actions/characters'
import { Navbar, Button, FormGroup } from 'react-bootstrap';

// this is a 'live' connected component that doesn't have a container attached to it
let SearchCharacters = ({ dispatch }) => {

  let input

  // '<input ref=...> means input represents where we are at in the dom
  return (
    <Navbar.Form pullRight>
      <form onSubmit={e=>e.preventDefault()}>
        <FormGroup>
          <input ref={node => {input = node}} type="text" placeholder="Search" className="form-control" />
        </FormGroup>
        {' '}
        <Button onClick={ () => {
          if (!input.value.trim()) {
            dispatch(getCharacters())
          }else{
            dispatch(getCharacters(input.value))
          }
          }} type="submit">Submit</Button>
      </form>
    </Navbar.Form>
  )
}
// this says we're connecting to the file that we're in 
SearchCharacters = connect()(SearchCharacters)

export default SearchCharacters