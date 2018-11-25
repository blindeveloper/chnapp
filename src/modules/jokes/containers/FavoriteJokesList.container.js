import { connect } from 'react-redux'
import favoriteJokesList from '../components/favoriteJokesList.jsx'
import { removeSingleJokeFromFavoriteJokeListAction, 
        addSingleJokeToCommonJokeListAction,
        addListOfJokesToFavoriteJokeListAction } from '../actions/jokes.actions'

//TODO optimise it
const removeFavoriteJokeFromLocalStorage = jokeId => {
  let localFavorites = localStorage.getItem('favoriteJokes')
    if (localFavorites && localFavorites.length) {
      localFavorites = JSON.parse(localFavorites)
      localFavorites = localFavorites.filter(el => el.id !== jokeId)
      localStorage.setItem('favoriteJokes', JSON.stringify(localFavorites))
    }
}

const mapStateToProps = state => ({
  favoriteJokesList: state.favoriteJokesListReducer
})

const mapDispatchToProps = dispatch => ({
  removeJokeFromFavoriteList: jokeId => {
    removeFavoriteJokeFromLocalStorage(jokeId)
    dispatch(removeSingleJokeFromFavoriteJokeListAction(jokeId))
  },
  addSingleJokeToCommonJokeList: joke => dispatch(addSingleJokeToCommonJokeListAction(joke)),
  addListOfJokesToFavoriteJokeList: jokeList => dispatch(addListOfJokesToFavoriteJokeListAction(jokeList))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(favoriteJokesList)