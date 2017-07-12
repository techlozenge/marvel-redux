import { connect } from 'react-redux'
import { getCharacters } from '../actions/characters'
import CharacterList from '../components/characterlist/CharacterList'

// if your going to pass stuff around you need these two methods to map props

// this container is matching the current state to the props

// map properties
const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

// map functions
const mapDispatchToProps = dispatch => {
  return {
    renderCharacters: () => {
      dispatch(getCharacters())
    }
  }
}

// CharacterList uses properties from characters (connect this 'state' to CharacterState post-dispatch)
const Characters = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default Characters