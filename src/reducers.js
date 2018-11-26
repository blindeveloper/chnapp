import { combineReducers } from 'redux'
import jokesListReducer from './modules/jokes/reducers/jokesList.reducer'
import favoriteJokesListReducer from './modules/jokes/reducers/favoriteJokesList.reducer'

export default combineReducers({
  jokesListReducer,
  favoriteJokesListReducer,
})