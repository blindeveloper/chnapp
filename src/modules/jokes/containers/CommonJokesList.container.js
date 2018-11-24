import { connect } from 'react-redux'
import { addJokeToFavoriteListAction,
        removeJokeFromCommonListAction } from '../actions/jokes.actions'
import jokesList from '../components/commonJokesList.jsx'

const mapStateToProps = (state) => ({
  commonJokesList: state.jokesListReducer
})

const addFavoriteJokeToLocalStorage = (joke, cb) => {
  let localStorageFavoriteJokeList = JSON.parse(localStorage.getItem('favoriteJokes'))
  if (localStorageFavoriteJokeList) {
    localStorageFavoriteJokeList.push(joke)
    localStorage.setItem('favoriteJokes', JSON.stringify(localStorageFavoriteJokeList))
  } else {
    localStorage.setItem('favoriteJokes', JSON.stringify([joke]))
  }
  cb()
}

const mapDispatchToProps = (dispatch) => ({
  addJokeToFavoriteList: joke => {
    addFavoriteJokeToLocalStorage(joke, () => {
      dispatch(addJokeToFavoriteListAction(joke))
    })
  },
  removeJokeFromCommonList: jokeId => dispatch(removeJokeFromCommonListAction(jokeId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(jokesList)