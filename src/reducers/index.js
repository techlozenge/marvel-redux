import {combineReducers} from 'redux';
import characters from './characters';

// this is our root reducer
const marvelApp = combineReducers({
    characters
})

export default marvelApp